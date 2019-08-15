import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';


// getInvestOrderList
export async function getInvestOrderList (params) {
  return axios({
    url: `${mockPath}/usercenter/order/investList`,
    method: 'post',
    data: params
  })
}

// getCashFlow
export async function getCashFlow (params) {
  return axios({
    url: `${mockPath}/usercenter/order/cashFlow`,
    method: 'post',
    data: params
  })
}





