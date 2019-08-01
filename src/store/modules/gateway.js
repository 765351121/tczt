import { getOpenAccountInfo } from '@/services/gateway'

const gateway = {
  state: {

  },

  mutations: {
 
  },

  actions: {
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
