<template>
  <div class="details">
    <!-- 头部 -->
    <div class="bg">
      <div class="head">
        <img src="@assets/imgs/details/Left.png" alt class="left" @click="$router.go(-1)">
        <p class="cent">耀莱成龙影城（建业店）</p>
        <img src="@assets/imgs/details/icon1.png" alt class="right">
      </div>
      <div class="add">
        <img class="add-icon" src="@assets/imgs/details/map.png" alt>
        <p class="add-cent">耀莱成龙影城（建业店）</p>
        <img class="add-icon" src="@assets/imgs/details/right.png" alt>
      </div>
      <p class="add-top">金水区中州大道建业置地</p>

      <!-- 轮播 -->
      <swiper
        class="banner"
        :options="swiperOption"
        ref="mySwiper"
        v-if="data.length>0"
        @someSwiperEvent="callback"
      >
        <swiper-slide v-for="img in data" :key="img.id">
          <img :src="'https://images.weserv.nl/?url='+img.images.small">
        </swiper-slide>
      </swiper>
    </div>
    <List></List>
  </div>
</template>

<script>
//引入swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import List from "@/views/cinema/components/List.vue";

export default {
  name: "details",
  components: {
    swiper,
    swiperSlide,
    List
  },
  data() {
    return {
      url: "http://59.110.138.169/api/douban/movie/coming_soon?limit=5",
      data: [],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 3,
        slideToClickedSlide: true,

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 6,
          slideShadows: false
        }
      }
    };
  },
  created() {
    axios.get(this.url).then(res => {
      this.data = res.data.data;
      console.log(this.data);
    });
  },
  updated() {
    console.log("App.vue finish re-render");
  },
  methods: {
    callback() {}
  },

  computed: {}
};
</script>

<style lang='scss' scoped>
.bg {
  width: 375px;
  height: 353px;
  overflow: hidden;
  background: url("../../../assets/imgs/details/bg1.png") no-repeat;
  background-size: 375px;
  .head {
    margin-top: 54px;
    width: 375px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    .left {
      margin-top: 5px;
      width: 13px;
      height: 13px;
    }
    .cent {
      width: 176px;
      height: 22px;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
    }
    .right {
      margin-top: 2px;
      width: 18px;
      height: 18px;
    }
  }
  .add {
    width: 350px;
    height: 22px;
    margin: 0 auto;
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
    .add-icon {
      width: 18px;
      height: 22px;
    }
    .add-cent {
      width: 176px;
      height: 22px;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
    }
  }
  .add-top {
    text-align: left;
    margin-left: 97px;
  }
  .banner {
    width: 297px;
    margin-top: 70px;
    img {
      width: 108px;
      height: 154px;
    }
    .swiper-slide:not(.swiper-slide-active) {
      transform: scale(0.8);
    }
  }
}
</style>
