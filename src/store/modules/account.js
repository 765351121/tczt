import { 
  getCashFlow,
} from '@/services/account'

const account = {
  state: {

  },

  mutations: {
 
  },

  actions: {

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
