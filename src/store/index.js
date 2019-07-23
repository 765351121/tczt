import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import product from './modules/product'
import user from './modules/user'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,   // key is state's namespace of store
    product,
    user,
    global,
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
})
