import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,   // key is state's namespace of store
    product,
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
})
