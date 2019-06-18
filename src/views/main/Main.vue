<template>
    <div class="main-main">
        <h1>这是main</h1>
        <router-link :to="{name:'order'}" class="cart">点击</router-link>
        <v-icon style="color:red;height:30px;" name="sync" spin></v-icon>    
        
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

</style>

