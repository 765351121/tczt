import { getHomeScatList } from '@/services/home'

const home = {
  state: {
    scatList: []
  },

  mutations: {
    getHomeScatList_success: (state, payload) => {
      state.scatList = payload
    },
  },

  actions: {
    // 首页散标列表
    getHomeScatList ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getHomeScatList().then(response => {
          commit('getHomeScatList_success', response.data)
          return resolve(response)
        })
      })
    },

  }
}

export default home
