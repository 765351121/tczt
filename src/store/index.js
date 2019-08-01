import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import product from './modules/product'
import user from './modules/user'
import global from './modules/global'
import gateway from './modules/gateway'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,   // key is state's namespace of store
    product,
    user,
    global,
    gateway,
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
})
