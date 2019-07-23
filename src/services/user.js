import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

// 加密随机串
export async function getEncryInfo (params) {
  return axios({
    url: `${mockPath}/usercenter/client/common/getEncryInfo`,
    method: 'post',
    data: params
  })
}

// 登录
export async function login (params) {
  return axios({
    url: `${mockPath}/usercenter/client/login`,
    method: 'post',
    data: params
  })
}




