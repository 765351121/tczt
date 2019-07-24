import { getUserInfo } from '@/services/global'

const global = {
  state: {
    userInfo: {},
  },

  mutations: {
    getUserInfo_success: (state, payload) => {
      state.userInfo = payload
    },
  },

  actions: {
    // 用户信息
    getUserInfo ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          commit('getUserInfo_success', response.data)
          return resolve(response)
        })
      })
    },
    



  }
}

export default global
