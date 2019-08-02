import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';


// isOrderDone
export async function isOrderDone (params) {
  return axios({
    url: `${mockPath}/usercenter/account/isOrderDone`,
    method: 'post',
    data: params
  })
}

// 开户注册
export async function register (params) {
  return axios({
    url: `${mockPath}/gateway/client/register`,
    method: 'post',
    data: params
  })
}

// 用户信息
export async function getOpenAccountInfo (params) {
  return axios({
    url: `${mockPath}/usercenter/client/openAccount`,
    method: 'post',
    data: params
  })
}




