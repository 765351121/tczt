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

// 登出
export async function logout (params) {
  return axios({
    url: `${mockPath}/usercenter/client/logout`,
    method: 'post',
    data: params
  })
}

// 发送短信验证码
export async function sendsms (params) {
  return axios({
    url: `${mockPath}/usercenter/client/sms/pc`,
    method: 'post',
    data: params
  })
}

// 注册
export async function regist (params) {
  return axios({
    url: `${mockPath}/usercenter/client/regist`,
    method: 'post',
    data: params
  })
}


