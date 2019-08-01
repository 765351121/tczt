import { 
  getOpenAccountInfo, register,
} from '@/services/gateway'

const gateway = {
  state: {

  },

  mutations: {
 
  },

  actions: {
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
