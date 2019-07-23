import { getEncryInfo, login, } from '@/services/user'

const user = {
  state: {
 
  },

  mutations: {
    
  },

  actions: {
    // 加密随机串
    getEncryInfo ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getEncryInfo().then(response => {
          return resolve(response)
        })
      })
    },
    // 登录
    login ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        login().then(response => {
          return resolve(response)
        })
      })
    },



  }
}

export default user
