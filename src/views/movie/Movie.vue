<template>
  <div class="movie-main">
    <!-- 头部 -->
    <div class="main-header">
      <div class="main-header-address">郑州</div>
      <div class="main-header-title">
        <span class="title1" @click="tabChange(Hot)" :class="{'active':Now}">正在热映</span>
        <span class="title2" @click="tabChange(Coming)" :class="{'active':!Now}">即将上映</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="mian-content" :is="currentView"></div>
  </div>
</template>

<script>
// 导入正在热映模块
import Hot from "./movielist/Hot";
// 导入即将上映模块
import Coming from "./movielist/Coming";
export default {
  name: "Movie",
  components: {
    Hot,
    Coming
  },
  data() {
    return {
      Now: true,
      Hot: "Hot",
      Coming: "Coming",
      currentView: "Hot" // 默认第一个组件
    };
  },
  methods: {
    tabChange(tabItem) {
      if(tabItem == "Hot"){
        this.Now = true
      }else{
        this.Now = false
      }
      this.currentView = tabItem;
    }
  }
};
</script>

<style lang='scss' scoped>
<<<<<<< HEAD
.main-header {
  position: relative;
  width: 375px;
  height: 44px;
  background: rgba(51, 54, 61, 1);
  .main-header-address {
    position: absolute;
    top: 15px;
    left: 20px;
    width: 28px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 14px;
  }
  .main-header-title {
    position: absolute;
    top: 10px;
    left: 103px;
    width: 164px;
    height: 25px;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid rgba(242, 91, 134, 1);
    .title1,
    .title2 {
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(245, 245, 245, 1);
      display: inline-block;
      width: 82px;
      height: 25px;
      line-height: 25px;
      border-radius: 5px 0px 0px 5px;
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    }
    .title1.active,.title2.active{
            background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
    }
    .title2 {
      border-radius: 0px 5px 5px 0px;
      background: rgba(51, 54, 61, 1);
    }
  }
=======
a{
	color: red;
	font-size: 20px;
>>>>>>> b612ea25cc2559bb6fb63e99512216d4a1d08a01
}
</style>
