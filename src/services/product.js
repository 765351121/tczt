import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

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




