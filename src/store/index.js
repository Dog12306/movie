import Vue from 'vue'
import Vuex from 'vuex'

import mess from './modules/mess'
import order from './modules/order'
import location from './modules/location'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
        mess,
		order,
		location
	}
})

export default store;