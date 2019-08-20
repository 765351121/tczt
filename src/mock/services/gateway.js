import Mock from 'mockjs'
import {
  builder
} from '../util'
import {
  handleWebStorage
} from '@/utils/utils'
const ws = handleWebStorage()


// recharge
const recharge = (options) => {
  let body = JSON.parse(options.body)
  const {
    realName,
    idNum
  } = body
  let redirectUrl = window.location.origin + '/result/gateway/loading' // 回调地址

  let data = {
    "requestNo": "CZZ20190820175045254164704",
    "requestParam": "{\"keySerial\":\"1\",\"platformNo\":\"6000004334\",\"reqData\":\"{\\\"amount\\\":1000,\\\"bankcode\\\":\\\"BKCH\\\",\\\"callbackMode\\\":\\\"DIRECT_CALLBACK\\\",\\\"expectPayCompany\\\":\\\"YEEPAY\\\",\\\"expired\\\":\\\"20190820182045\\\",\\\"platformUserNo\\\":\\\"PN1907311036378301409794003\\\",\\\"rechargeWay\\\":\\\"SWIFT\\\",\\\"redirectUrl\\\":\\\"http://192.168.2.42/pudge/result/loading?type=recharge&requestNo=CZZ20190820175045254164704\\\",\\\"requestNo\\\":\\\"RC1908201750452631158704111\\\",\\\"riskitem\\\":\\\"{\\\\\\\"merEquipmentIp\\\\\\\":\\\\\\\"47.94.115.242\\\\\\\"}\\\",\\\"timestamp\\\":\\\"20190820175045\\\"}\",\"requestUrl\":\"https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway\",\"serviceName\":\"RECHARGE\",\"sign\":\"HDtxKEFo0qGuH2kpFqeDewJtx/bsMngIV++2HutPJBBOxjx65n2/qgC+M7pe+5qRwzBl38Q6CZkyi1EsMuGh5arcDC78DUIEaHgnM1RCzsYiwtoTXva/hfa7TzWMLB4p+3xUXTPfbVCJxpScVwg9xfUP00b/4vd8zsI4bMPRdrLZ2wtsJCHxyY0S3Rg8/S9qDp5m7nx4VwzgiOsEvb7RDYzyZMqaWIu1FwxDI1glgaB5rID3LfEA/CW1xvPqjSIUV9IvVH3DJggIr7mBVh/k8qasfeYrAnGfA3BfJAjyG8w5K+TlV7K8MdN+rX9eogJ1LSHMU3f5RiwduLr7IrHcsQ==\"}",
    //"requestUrl": "https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway",
    "requestUrl": `${window.location.origin}/mock/gateway/register`
  }
  return builder(data)
}


// isOrderDone
const isOrderDone = (options) => {
  /**
   * @orderStatus
   *  1: 成功  2：失败  0：等待中
   */
  let data = {
    "orderStatus": 1,
    "failReason": null
  }
  return builder(data)
}

// register
const register = (options) => {
  let data = null
  return builder(data)
}

// openAccount
const openAccount = (options) => {
  let body = JSON.parse(options.body)
  const {
    realName,
    idNum
  } = body
  let failTime = '20210731' // 授权期限
  let redirectUrl = window.location.origin + '/result/gateway/loading' // 回调地址
  let amount = '400000.00' // 授权金额

  let data = {
    "requestNo": "6ce1416b2dcf4ab19eb8d81a15763488",
    "requestParam": `{\"keySerial\":\"1\",\"platformNo\":\"6000004334\",\"reqData\":\"{\\\"amount\\\":${amount},\\\"authList\\\":\\\"TENDER\\\",\\\"bankList\\\":\\\"ABOC,FJIB,MSBC,BKCH\\\",\\\"checkType\\\":\\\"LIMIT\\\",\\\"failTime\\\":\\\"${failTime}\\\",\\\"idCardNo\\\":\\\"${idNum}\\\",\\\"idCardType\\\":\\\"PRC_ID\\\",\\\"platformUserNo\\\":\\\"PN1907311551035722529333174\\\",\\\"realName\\\":\\\"${realName}\\\",\\\"redirectUrl\\\":\\\"${redirectUrl}\\\",\\\"requestNo\\\":\\\"PR1908011437095159161531586\\\",\\\"timestamp\\\":\\\"20190801143709\\\",\\\"userRole\\\":\\\"INVESTOR\\\"}\",\"requestUrl\":\"https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway\",\"serviceName\":\"PERSONAL_REGISTER_EXPAND\",\"sign\":\"UpwMBcebWUvorJH/GoPQ08WzUvKD7xpvmuAI3f8Td+Nq1B3YNCTsh8HVMxlx+bGb7/3V0E1CWhHo+mM56QO+Ueobbr9AAhbFUPAoND+FDdf5ZPG5bjWF3lX8aaksz4whchDoBf4d+dj90AUHJYU7ZdtvPGeprP5YCPDFy6siuFe536haOLXtSxyxJqBtu/53rP8Xm+4aXilRXivBsx60I5rZ7S3vPrf1TSpZKkvtLRMMl7+YJiK2w2WXroem82QHS88kCSxOOb6kWbbGtccHls+Whxxs/WH+YQWRHDcQSoN+hmck7JHKx/NrhwbuDeFLN/B+YQWsyvsmM00gUxzOPg==\"}`,
    //"requestUrl": "https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway"
    "requestUrl": `${window.location.origin}/mock/gateway/register`
  }
  return builder(data)
}


Mock.mock(/\/mock\/usercenter\/client\/openAccount/, 'post', openAccount)
Mock.mock(/\/mock\/gateway\/client\/register/, 'post', register)
Mock.mock(/\/mock\/usercenter\/account\/isOrderDone/, 'post', isOrderDone)
Mock.mock(/\/mock\/usercenter\/account\/recharge/, 'post', recharge)