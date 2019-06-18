<template>
    <div class="main-main">
        <h1>这是main</h1>
        <v-icon style="color:red;height:30px;" name="sync" spin></v-icon>    
        <router-link tag='a' :to="{name:'coupon'}" >跳转优惠券</router-link>|
         <router-link tag='a' :to="{name:'card'}" >跳转影城卡</router-link>
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
    button{
        width: 100px;
        height: 100px;
    }
</style>

