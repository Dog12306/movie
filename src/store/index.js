import Vue from 'vue'
import Vuex from 'vuex'

import mess from './modules/mess'
import order from './modules/order'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
        mess,
		order
	}
})

export default store;