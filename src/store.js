import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
var Random = Mock.Random
const commentList = []
for(var i=0; i<10; i++){
  commentList.push({
    id:Random.guid(),
    photo:Random.image('50x50',Random.color(),Random.cfirst()),
    username:Random.word() + Random.integer(1001,9999),
    average:Random.float(4,9,1,1),
    text:Random.cparagraph(2,4),
    time:Random.datetime('MM-dd HH:mm'),
    praise:Random.integer(10,99),
    comment:Random.integer(10,49)
  })
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:commentList,
    list2:commentList
  },
  mutations: {
    time(state){
      state.list.map(item=>item.time2 = Date.parse(new Date(item.time)));
      function fn(a,b){
        return b.time2 - a.time2;
      }
      state.list.sort(fn);
      // console.log(state.list);
    },
    all(state){
      state.list = state.list2;
    },
    good(state){
     state.list = state.list.filter(item=>item.average>=6.0);
    },
    negative(state){
      state.list = state.list.filter(item=>item.average<6.0);
    }
  },
  actions: {

  }
})
