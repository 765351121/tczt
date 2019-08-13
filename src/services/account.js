import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';


// getCashFlow
export async function getCashFlow (params) {
  return axios({
    url: `${mockPath}/usercenter/order/cashFlow`,
    method: 'post',
    data: params
  })
}





