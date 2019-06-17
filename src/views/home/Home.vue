<template>
    <div class="home-main">
        <TopBackBar>
            电影列表
            <template v-slot:img-right>
                  <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
                  如需隐藏 设置空  span -->
            </template>
        </TopBackBar>
           
    </div>
    
</template>
<script>
import 'swiper/dist/css/swiper.css'
import TopBackBar from '@/components/TopBackBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Home',
    components:{
        swiper,
        swiperSlide,
        TopBackBar
    },
    data() {
      return {
         
      }
    },
    methods:{
        callback(){
        }
    }


}
</script>
<style lang="scss" scoped>
    
    .swiper-section{
        margin-top: 40px;
        width: 100%;
        height: 390px;
        overflow: hidden;
        .swiper-title{
            width: 100%;
            font-size: 15px;
            .swiper-title-link{
                color: #010E0D;
                text-decoration: none;
                padding: 0 16px;
                border-right: 1px solid #f5f5f5;
                &:last-child{
                    border-right: none;
                }
            }
            margin: 20px auto;
        }
        .swiper{
            width: 100%;
            height: 100%;
        }
    }
    .monday-goods{
        width: 100%;
        height: 500px;
        margin-top: 200px;
        background-color: pink;
    }
</style>


