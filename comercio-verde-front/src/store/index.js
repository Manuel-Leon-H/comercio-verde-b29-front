import Vue from 'vue'
import Vuex from 'vuex'

import artesania from './modules/artesania'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    artesania
  }
})
