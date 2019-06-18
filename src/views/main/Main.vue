<template>
    <div class="main-main">
        <h1>这是main</h1>
        <v-icon style="color:red;height:30px;" name="sync" spin></v-icon>  
        <router-link tag="div" class="login" to="/login">登录</router-link>  
        <router-link tag="div" class="comment" to="/comment">影评</router-link>  
        <router-link tag="div" class="location" to="/location">定位</router-link>  
    </div>
</template>
<script>

export default {
    name: 'Main',
    components:{
    }


}
</script>
<style scoped>
    .login,.comment,.location{
        font-size: 18px;
        line-height: 30px;
        color: rgba(255, 255, 255, .6);
    }
</style>

