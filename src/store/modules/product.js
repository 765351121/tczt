import { getScatterProduct } from '@/services/product'

const product = {
  state: {
    scatProduct: {}
  },

  mutations: {
    getScatterProduct_success: (state, payload) => {
      state.scatProduct = payload
    },
  },

  actions: {
    // 散标产品信息
    getScatterProduct ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getScatterProduct().then(response => {
          commit('getScatterProduct_success', response.data)
          return resolve(response)
        })
      })
    },

  }
}

export default product
