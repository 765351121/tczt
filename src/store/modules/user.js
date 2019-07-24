import { getEncryInfo, login, logout, } from '@/services/user'

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
    // 登出
    logout ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          return resolve(response)
        })
      })
    },
    



  }
}

export default user
