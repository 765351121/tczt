import { axios } from '@/utils/request'

const rootPath = '/finance';
const mockPath = '/mock';

export async function getHomeScatList (params) {
  return axios({
    url: `${mockPath}/getHomeScatList`,
    method: 'post',
    data: params
  })
}



