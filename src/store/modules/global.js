import { getUserInfo } from '@/services/global'

const global = {
  state: {
 
  },

  mutations: {
    
  },

  actions: {
    // 用户信息
    getUserInfo ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          return resolve(response)
        })
      })
    },
    



  }
}

export default global
