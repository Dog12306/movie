import Vue from 'vue'
import Vuex from 'vuex'

import tick from './modules/tick';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tick
    }
})

export default store;
