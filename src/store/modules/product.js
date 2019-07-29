import { getScatterProduct, getMerchantUserInfo, getInvestOrder,
  getScatterList,
} from '@/services/product'

const product = {
  state: {
    scatProduct: {},
    merchantUserInfo: {},
    investOrder: {},
  },

  mutations: {
    getScatterProduct_success: (state, payload) => {
      state.scatProduct = payload
    },
    getMerchantUserInfo_success: (state, payload) => {
      state.merchantUserInfo = payload
    },
    getInvestOrder_success: (state, payload) => {
      state.investOrder = payload
    },
    

    
  },

  actions: {
    // 产品列表
    getScatterList ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getScatterList(payload).then(response => {
          //commit('getScatterList_success', response.data)
          return resolve(response)
        })
      })
    },
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
    // 获取出借记录信息
    getInvestOrder ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getInvestOrder().then(response => {
          commit('getInvestOrder_success', response.data)
          return resolve(response)
        })
      })
    },

    
    

  }
}

export default product
