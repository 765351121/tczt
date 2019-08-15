import { 
  getCashFlow,
  getInvestOrderList,
} from '@/services/account'

const account = {
  state: {

  },

  mutations: {
 
  },

  actions: {

    // getInvestOrderList
    ['account/getInvestOrderList'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getInvestOrderList(payload).then(response => {
          return resolve(response)
        })
      })
    },

    // getCashFlow
    ['account/getCashFlow'] ({ state, commit }, { payload }) {
      return new Promise((resolve, reject) => {
        getCashFlow(payload).then(response => {
          return resolve(response)
        })
      })
    },

    
  }
}

export default account
