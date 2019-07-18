import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

export async function getScatterProduct (params) {
  return axios({
    url: `${mockPath}/usercenter/product/scatterProduct`,
    method: 'post',
    data: params
  })
}



