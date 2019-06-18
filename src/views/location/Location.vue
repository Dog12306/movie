<template>
<div class="location">
  <header>
    <div class="top">
      <span class="close">关闭</span>选择城市
    </div>
    <div class="search-form">
      <label for="search">
        <img class="search-pic" src="@/assets/location/images/search.png" alt>
      </label>
      <input type="text" name="search" placeholder="输入城市">
      <span class="cancel">取消</span>
    </div>
    <div class="citys">
      <p class="title">定位城市</p>
      <span class="city active">郑州</span>
    </div>
  <div class="citys history">
    <p class="title">历史访问城市</p>
    <span class="city active">郑州</span>
    <span class="city">上海</span>
  </div>
   </header>
  <div class="citys hot">
    <p class="title">热门城市</p>
    <ul class="hot-city">
      <li class="city" v-for="c in hotCity" :key="c.id">{{c.name}}</li>
    </ul>
  </div>
  <div class="citys other">
    <ul class="all-city" v-for="m in allCitys" :key="m.id">
      <li class="every-city" v-for="c in m" :key="c.id">{{c.name}}</li>
    </ul>
  </div>
  <div class="side-nav">
    <p class="text">定位</p>
    <p class="text">历史</p>
    <p class="text">热门</p>
    <ul class="ename">
      <li class="ename-item">A</li>
      <li class="ename-item">B</li>
      <li class="ename-item">C</li>
      <li class="ename-item">D</li>
      <li class="ename-item">E</li>
      <li class="ename-item">F</li>
      <li class="ename-item">G</li>
      <li class="ename-item">H</li>
      <li class="ename-item">J</li>
      <li class="ename-item">K</li>
      <li class="ename-item">L</li>
      <li class="ename-item">M</li>
      <li class="ename-item">N</li>
      <li class="ename-item">P</li>
      <li class="ename-item">Q</li>
      <li class="ename-item">S</li>
      <li class="ename-item">T</li>
      <li class="ename-item">W</li>
      <li class="ename-item">X</li>
      <li class="ename-item">Y</li>
      <li class="ename-item">Z</li>
    </ul>
  </div>
</div>
</template>
<script>
import allCity from "../../../cityData.json";
import Scroll from "./components/Scroll";
export default {
  name: "location",
  components: {
    Scroll
  },
  data() {
    return {
      allCitys: []
    };
  },
  computed: {
    hotCity() {
      return this.$store.state.hotCity;
    }
  },
  created() {
    this.allCitys = allCity;
    delete this.allCitys.hot;
    console.log(this.allCitys);
  }
};
</script>
<style lang='scss' scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #22262D;
}
.location {
  width: 100%;
  height: 100%;
  padding-top: 280px;
  .top {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    .close {
      position: absolute;
      top: 5px;
      left: 20px;
      font-size: 16px;
    }
  }
  .search-form {
    position: relative;
    width: 298px;
    height: 36px;
    margin-left: 20px;
    border-radius: 18px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    .search-pic {
      position: absolute;
      left: 21px;
      top: 9px;
      width: 17px;
      height: 17px;
    }
    .cancel {
      position: absolute;
      right: -40px;
      font-size: 16px;
      line-height: 36px;
    }
    input {
      width: 248px;
      height: 36px;
      color: #fff;
      margin-left: 50px;
      outline: none;
      border: 0;
      border-radius: 18px;
      background: rgba(51, 54, 61, 1);
    }
  }
  .citys {
    width: 100%;
    height: 80px;
    text-align: left;
    margin-top: 30px;
    padding-left: 20px;
    box-sizing: border-box;
    .title {
      font-size: 12px;
      text-align: left;
      color: rgba($color: #fff, $alpha: 0.6);
    }
    .city {
      display: inline-block;
      width: 90px;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      margin: 20px 0 0 20px;
      text-align: center;
      background-color: #33363d;
      &.active {
        background-color: #000;
        margin-left: 0;
        border: 2px solid #f9c34a;
      }
      &:nth-child(3n + 1) {
        margin-left: 0;
      }
    }
  }
  .history,
  .hot {
    margin-top: 10px;
  }
  .other {
    margin-top: 150px;
  }
  .all-city {
    //   margin-top: 20px;
    .every-city {
      font-size: 14px;
      line-height: 40px;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
  .side-nav {
    position: fixed;
    right: 19px;
    top: 210px;
    width: 24px;
    .text {
      font-size: 12px;
      line-height: 18px;
      color: #f1a363;
    }
    .ename-item {
      font-size: 12px;
      line-height: 17px;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>