import Vue from 'vue'
import Vuex from 'vuex'

import tick from './modules/tick';






import mess from './modules/mess'
import order from './modules/order'
import location from './modules/location'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
        mess,
		order,
        location,
        tick
	}
})

export default store;
