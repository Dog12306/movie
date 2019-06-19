<template>
	<div class="release">
		<img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
		<router-link to="/movie/release/performer">点我跳到演员详情</router-link>
		<br>
		<router-link to="/movie/release/score">点我跳到电影评分</router-link>
		<br>
		<router-link to="/movie/release/boxOffice">点我跳到票房</router-link>
	</div>
</template>

<script>
	export default{
		name:"release",
		
	}
</script>

<style lang="scss" scoped>
	a{
		color: red;
		font-size: 20px;
	}
</style>
