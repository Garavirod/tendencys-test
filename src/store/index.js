import Vue from 'vue'
import Vuex from 'vuex'
import Home from '@/modules/home/store'
import Shared from '@/modules/shared/store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Home,
    Shared,
  }
})
