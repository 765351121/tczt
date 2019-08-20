import { 
  getOpenAccountInfo, register, isOrderDone, getRechargeInfo,
} from '@/services/gateway'

const gateway = {
  state: {

  },

  mutations: {
 
  },

  actions: {
    
    // 充值
    ['gateway/getRechargeInfo'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getRechargeInfo(payload).then(response => {
          return resolve(response)
        })
      })
    },
    
    // result-loading-isOrderDone
    ['gateway/isOrderDone'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        isOrderDone(payload).then(response => {
          return resolve(response)
        })
      })
    },

    // 开户注册
    ['gateway/register'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        register(payload).then(response => {
          return resolve(response)
        })
      })
    },
    // 开户信息
    ['gateway/getOpenAccountInfo'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getOpenAccountInfo(payload).then(response => {
          return resolve(response)
        })
      })
    },
  }
}

export default gateway
