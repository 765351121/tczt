import { getScatterProduct, getMerchantUserInfo } from '@/services/product'

const product = {
  state: {
    scatProduct: {},
    merchantUserInfo: {},
  },

  mutations: {
    getScatterProduct_success: (state, payload) => {
      state.scatProduct = payload
    },
    getMerchantUserInfo_success: (state, payload) => {
      state.merchantUserInfo = payload
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
    // 借款方信息 - 用户信息
    getMerchantUserInfo ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getMerchantUserInfo().then(response => {
          commit('getMerchantUserInfo_success', response.data)
          return resolve(response)
        })
      })
    },


    

  }
}

export default product
