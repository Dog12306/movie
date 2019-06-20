import Vue from 'vue'
import Vuex from 'vuex'
import signIn from './modules/signIn'
import tick from './modules/tick';
import cinemas from './modules/cinemas'
import mess from './modules/mess'
import order from './modules/order'
import location from './modules/location'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mess,
    order,
    location,
    tick,
    signIn,
		cinemas
  }
})

export default store;
