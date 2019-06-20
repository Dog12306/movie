<template>
  <section class="position">
    <div class="heard">
      <p @click="cancel" class="close-btn">关闭</p>
      <p class="heard-title">选择城市</p>
    </div>
    <div class="search">
      <input class="search-ipt" type="text" placeholder="输入城市">
      <p class="cancel-btn">取消</p>
    </div>
    <div class="content">
      <div class="left" ref="left">
        <ul>
          <li
            class="left-item left-item-hook"
            v-for="item in myCityList"
            :class="{'other':otherArr.indexOf(item.title)!=-1}"
            :key="item.name"
          >
            <h2 class="city-title">{{item.title}}</h2>
            <ul>
              <li
                v-for="num in item.content"
                :key="num.name"
                @click="actFlag=num"
                :class="{'active':actFlag==num}"
              >
                <div @click="cancel(num)" class="city-cen">{{num}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li
            v-for="(item, index) in listRight"
            :key="item"
            :class="{current: currentIndex == index,other:otherArr.indexOf(item)!=-1}"
            @click="selectItem(index, $event)"
          >
            <span class="right-item">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import cityList from "@/api/cityData";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      cityList,
      otherArr: ["定位", "热门", "历史"],
      myCityList: [],

      listLeft: [],
      listRight: [],

      listHeight: [],
      scrollY: 0, //实时获取当前y轴的高度
      clickEvent: false,
      actFlag: "world"
    };
  },
  methods: {
    addCityList() {
      for (var key in this.cityList) {
        var temp = {};
        temp.title = key;
        temp.content = [];
        for (let i = 0; i < this.cityList[key].length; i++) {
          temp.content.push(this.cityList[key][i].name);
        }
        this.myCityList.push(temp);
      }
      var temptt = this.myCityList.splice(this.myCityList.length - 1);
      temptt[0].title = "热门";
      this.myCityList.unshift(temptt[0]);
      this.myCityList.unshift({
        title: "历史",
        content: ["北京", "上海", "广州"]
      });
      this.myCityList.unshift({
        title: "定位",
        content: ["郑州"]
      });
    },
    getListRight() {
      var temp = [];
      for (let i = 0; i < this.myCityList.length; i++) {
        this.listRight.push(this.myCityList[i].title);
      }
    },
    getListLeft() {},
    _initScroll() {
      //better-scroll的实现原理是监听了touchStart,touchend事件，所以阻止了默认的事件（preventDefault）
      //所以在这里做点击的话，需要在初始化的时候传递属性click,派发一个点击事件
      //在pc网页浏览模式下，点击事件是不会阻止的，所以可能会出现2次事件，所以为了避免2次，可以在绑定事件的时候把$event传递过去
      this.rights = new BScroll(this.$refs.right, {
        click: true
      });
      this.lefts = new BScroll(this.$refs.left, {
        click: true,
        probeType: 3 //探针的效果，实时获取滚动高度
      });
      //lefts这个对象监听事件，实时获取位置pos.y
      this.lefts.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _getHeight() {
      let leftItems = this.$refs.left.getElementsByClassName("left-item-hook");
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < leftItems.length; i++) {
        let item = leftItems[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectItem(index, event) {
      this.clickEvent = true;
      //在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed
      //浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性的时候return掉
      if (!event._constructed) {
        return;
      } else {
        let leftItems = this.$refs.left.getElementsByClassName(
          "left-item-hook"
        );
        let el = leftItems[index];
        this.lefts.scrollToElement(el, 300);
      }
    },
    cancel(city){
      if(!city) {
        city = '郑州'
      }
      this.$router.go(-1);
      this.$store.commit('city/changeCity',city)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._getHeight();
    });
  },
  created() {
    this.addCityList();
    this.getListRight();
    this.getListLeft();
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        //当height2不存在的时候，或者落在height和height2之间的时候，直接返回当前索引
        //>=height，是因为一开始this.scrollY=0,height=0
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          return i;
        }
        if (
          this.listHeight[this.listHeight.length - 1] -
            this.$refs.left.clientHeight <=
          this.scrollY
        ) {
          if (this.clickTrue) {
            return this.currentNum;
          } else {
            return this.listHeight.length - 1;
          }
        }
      }
      //如果this.listHeight没有的话，就返回0
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.position {
  margin: 0 20px;
  color: #f7f7f7;
}
.heard {
  position: relative;
  height: 48px;
  .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    line-height: 48px;
    font-weight: 400;
    color: #f7f7f7;
  }
  .heard-title {
    font-size: 18px;
    line-height: 48px;
    color: #f5f5f5;
  }
}
.search {
  .search-ipt {
    float: left;
    width: 298px;
    height: 36px;
    background: rgba(51, 54, 61, 1) url("../../assets/imgs/icons/搜索.png")
      no-repeat 20px;
    border-radius: 18px;
    outline: none;
    border: none;
    color: #f7f7f7;
    text-indent: 50px;
    padding: 0;
    font-size: 14px;
  }
  .cancel-btn {
    line-height: 36px;
    font-size: 16px;
  }
}
.content {
  display: flex;
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 335px;
  overflow: hidden;
  .left {
    float: right;
    text-align: left;
    .left-item {
      li {
        width: 100%;
        height: 40px;
        line-height: 40px;
      }
      &.other {
        overflow: hidden;
        color: #f7f7f7;
        font-size: 12px;
        .city-title {
          opacity: 0.6;
        }
        li {
          float: left;
          width: 90px;
          height: 30px;
          box-sizing: border-box;
          margin-right: 18px;
          margin-bottom: 13px;
          background: #33363d;
          border: 2px solid transparent;
          &.active {
            background: #000;
            border: 2px solid #f9c34a;
            box-sizing: border-box;
          }
          .city-cen {
            line-height: 30px;
            text-align: center;
          }
        }
      }
    }
    .city-title {
      margin: 10px 0;
    }
  }
  .right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 28px;
    color: #828282;
    li {
      width: 100%;
      height: 100%;
      // box-sizing: border-box;
      &.other {
        margin: 2px 0;
        color: #f1a363;
      }
      &.current {
        color: black;
        background-color: #f9c34a;
      }
      .right-item {
        display: block;
        width: 100%;
        height: 15px;
        line-height: 15px;
        text-align: center;
      }
    }
  }
}
</style>