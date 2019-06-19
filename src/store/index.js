import Vue from 'vue'
import Vuex from 'vuex'
import signIn from './signIn'

Vue.use(Vuex)

export default new Vuex.Store({
  // 保存共享的数据
  modules:{
    signIn
  }
})