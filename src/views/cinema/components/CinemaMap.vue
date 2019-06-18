<template>
  <div class="CinemaMap-main">
    <div class="header">
      <img src="@/assets/imgs/icons/arr-left.png" alt class="back-arr">
      <span class="header-title">影院地图</span>
      <img src="@/assets/imgs/icons/search.png" alt class="search">
    </div>
    <div id="container"></div>
    <div class="mySwiper-box">
      <template>
        <swiper
          class="mySwiper"
          :options="mySwiperOption"
          ref="mySwiper"
          @someSwiperEvent="callback"
        >
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look">查找</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look">查找</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="cinema-list">
              <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
              <div class="cinema-list-down">
                <div class="cinema-explain">
                  <p class="cinema-name">耀莱成龙影城（建业店）</p>
                  <div class="widget-time">
                    <div class="widget">
                      <img src="@assets/imgs/icons/share.png" alt class="share">
                      <img src="@assets/imgs/icons/phone.png" alt class="phone">
                    </div>
                    <span class="time">45min</span>
                  </div>
                </div>
                <span class="look">查找</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
    <div class="footer">
      <!-- <ul class="cinema-item">
        <li class="cinema-list">
          <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
          <div class="cinema-list-down">
            <div class="cinema-explain">
              <p class="cinema-name">耀莱成龙影城（建业店）</p>
              <div class="widget-time">
                <div class="widget">
                  <img src="@assets/imgs/icons/share.png" alt class="share">
                  <img src="@assets/imgs/icons/phone.png" alt class="phone">
                </div>
                <span class="time">45min</span>
              </div>
            </div>
            <span class="look">查找</span>
          </div>
        </li>
        <li class="cinema-list">
          <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
          <div class="cinema-list-down">
            <div class="cinema-explain">
              <p class="cinema-name">耀莱成龙影城（建业店）</p>
              <div class="widget-time">
                <div class="widget">
                  <img src="@assets/imgs/icons/share.png" alt class="share">
                  <img src="@assets/imgs/icons/phone.png" alt class="phone">
                </div>
                <span class="time">45min</span>
              </div>
            </div>
            <span class="look">查找</span>
          </div>
        </li>
        <li class="cinema-list">
          <img src="@assets/imgs/cinema/cinema.png" alt class="cinemaImg">
          <div class="cinema-list-down">
            <div class="cinema-explain">
              <p class="cinema-name">耀莱成龙影城（建业店）</p>
              <div class="widget-time">
                <div class="widget">
                  <img src="@assets/imgs/icons/share.png" alt class="share">
                  <img src="@assets/imgs/icons/phone.png" alt class="phone">
                </div>
                <span class="time">45min</span>
              </div>
            </div>
            <span class="look">查找</span>
          </div>
        </li>
        <li class="cinemaMap-list"></li>
        <li class="cinemaMap-list"></li>
      </ul>-->
      <div class="footer-line"></div>
    </div>
  </div>
</template>


<script>
import createMap from "@assets/map";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "CinemaMap",

  data() {
    return {
      mySwiperOption: {
        slidesPerView: 1.5
        // loop: true
      }
    };
  },

  methods: {
    callback() {}
  },

  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {
    createMap.createMap();
  }
};
</script>

<style lang='scss' scoped>
.header {
  height: 60px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: rgba(51, 54, 61, 1);
  .back-arr {
    height: 17px;
    width: 17px;
  }
  .header-title {
    width: 80px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
  }
  .search {
    height: 17px;
    width: 17px;
  }
}
#container {
  height: 584px;
  width: 100%;
  background: rgba(34, 38, 45, 1);
  border-radius: 22px;
}
.mySwiper-box {
  width: 100%;
  position: absolute;
  top: 540px;
  .cinema-list {
    .cinemaImg {
      width: 202px;
      height: 131px;
    }
    .cinema-list-down {
      box-sizing: border-box;
      padding: 5px 0 0 8px;
      width: 202px;
      margin: 0 auto;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.19);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cinema-explain {
        .cinema-name {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 17px;
          margin-bottom: 7px;
        }
        .widget-time {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .widget {
            .share {
              margin-left: 2px;
              margin-right: 14px;
            }
            img {
              width: 17px;
              height: 17px;
            }
          }
        }
      }
      .look {
        width: 45px;
        height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        font-size: 12px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
    }
  }
}
.footer {
  height: 135px;
  width: 100%;
  background: rgba(51, 54, 61, 1);
  position: relative;
  .footer-line {
    width: 134px;
    height: 5px;
    background: rgba(255, 255, 255, 1);
    border-radius: 100px;
    position: absolute;
    bottom: 21px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.router-view {
  margin: 0;
}
</style>
