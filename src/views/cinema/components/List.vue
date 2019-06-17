<template>
  <div class="list">
    <div class="lit" v-for="list in data">
      <div class="lit-left">
        <p>{{list.time}}</p>
        <p>{{list.time1}}散场</p>
      </div>
      <div class="lit-cent">
        <p>{{list.title}}</p>
        <p>{{list.hall}}</p>
      </div>
      <div class="moth">{{list.moth}}元</div>
      <div class="btn">购票</div>
    </div>
  </div>
</template>

<script>
import listApi from "@/api/list.js";

export default {
  name: "list",
  data() {
    return {
      data: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      listApi.getLists().then(res => {
        this.data = res;
        console.log(res);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.lit {
  width: 335px;
  height: 91px;
  background: rgba(51, 54, 61, 1);
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  .lit-left {
    p:nth-child(1) {
      width: 45px;
      height: 25px;
      font-size: 18px;
      line-height: 25px;
      color: white;
    }
  }
}
</style>
