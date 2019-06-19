<template>
  <div class="movie-main">
      这是movie-main页面
			<img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
			<router-link to="/movie/release">点我跳到电影详情</router-link>
			
  </div>
</template>

<script>
export default {
  name: 'Movie',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
a{
	color: red;
	font-size: 20px;
}
</style>
