import { axios } from '@/utils/request'

//接口前缀全局变量
const rootPath = '/p2p';
const p2ptobPath = '/p2ptob';
const assetPath = '/asset';
const mockPath = '/mock';


export async function getHomeScatList (params) {
  return axios({
    url: `${mockPath}/getHomeScatList`,
    method: 'post',
    data: params
  })
}


// export async function getHomeScatList (params) {
//   return request(`${mockPath}/getHomeScatList`, {
//     method: 'POST',
// 	})
// }



