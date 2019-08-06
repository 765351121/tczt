import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';


// investOrder
export async function investOrder (params) {
  return axios({
    url: `${mockPath}/usercenter/order/investOrder`,
    method: 'post',
    data: params
  })
}

// getToken
export async function getToken (params) {
  return axios({
    url: `${mockPath}/usercenter/order/getToken`,
    method: 'post',
    data: params
  })
}

// 产品列表
export async function getScatterList (params) {
  return axios({
    url: `${mockPath}/usercenter/product/scatterList`,
    method: 'post',
    data: params
  })
}

// 散标产品信息
export async function getScatterProduct (params) {
  return axios({
    url: `${mockPath}/usercenter/product/scatterProduct`,
    method: 'post',
    data: params
  })
}
// 借款方信息 - 用户信息
export async function getMerchantUserInfo (params) {
  return axios({
    url: `${mockPath}/userInfo/merchantUserInfo`,
    method: 'post',
    data: params
  })
}
// 获取出借记录信息
export async function getInvestOrder (params) {
  return axios({
    url: `${mockPath}/usercenter/order/getInvestOrder`,
    method: 'post',
    data: params
  })
}



