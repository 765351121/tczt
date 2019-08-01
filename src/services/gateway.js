import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

// 用户信息
export async function getOpenAccountInfo (params) {
  return axios({
    url: `${mockPath}/usercenter/client/openAccount`,
    method: 'post',
    data: params
  })
}




