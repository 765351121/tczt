import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

// 用户信息
export async function getUserInfo (params) {
  return axios({
    url: `${mockPath}/usercenter/client/userInfo`,
    method: 'post',
    data: params
  })
}




