import Mock from 'mockjs'
import {
  builder
} from '../util'
import {
  handleWebStorage
} from '@/utils/utils'
const ws = handleWebStorage()


// withdrawal
const withdrawal = (options) => {
  let body = JSON.parse(options.body)
  let userInfo = ws.getItem('account')
  let { orderAmount } = body
  let redirectUrl = window.location.origin + '/result/gateway/loading' // 回调地址

  let data = {
    "requestNo": "CZZ20190820175045254164704",
    "requestParam": `{\"keySerial\":\"1\",\"platformNo\":\"6000004334\",\"reqData\":\"{\\\"amount\\\":${orderAmount},\\\"bankcode\\\":\\\"BKCH\\\",\\\"callbackMode\\\":\\\"DIRECT_CALLBACK\\\",\\\"expectPayCompany\\\":\\\"YEEPAY\\\",\\\"expired\\\":\\\"20190821110223\\\",\\\"platformUserNo\\\":\\\"PN1907311036378301409794003\\\",\\\"rechargeWay\\\":\\\"SWIFT\\\",\\\"redirectUrl\\\":\\\"${redirectUrl}\\\",\\\"requestNo\\\":\\\"RC1908211032231459096293703\\\",\\\"riskitem\\\":\\\"{\\\\\\\"merEquipmentIp\\\\\\\":\\\\\\\"47.94.115.242\\\\\\\"}\\\",\\\"timestamp\\\":\\\"20190821103223\\\"}\",\"requestUrl\":\"https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway\",\"serviceName\":\"RECHARGE\",\"sign\":\"eOTOcf27GUvNt6WsKkMelJEnvctv6I7O1RowmBR7tSUxZ5CGvlmWoD3ZEdIfAx+gUAX5LxTeNkVsxd8q77C1v7dZok5psYkQ8woaIbEp27kEZjJAZnjfASMT4pW8ltTFnT4D6UlSME4NL3nvT2UVZgZk8SFtYf5fSaK+fcCseS+org19wsdCUhUxweddXw1VKsQMML2Ks728defmyFKKSgCNfTLW7YN8lGIjh15jbTv3TzPKEpwGQqVGtkwJ7r0kY7jfE9jM861A0g44GGFPyOZPX4sHi8mcqJIDfnlrOgpR3bhD8kkqKth+uIeRPrbnOHsZ/UyF15pdBsBo2LU75g==\"}`,
    //"requestUrl": "https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway",
    "requestUrl": `${window.location.origin}/mock/gateway/withdraw`
  }
  return builder(data)
}

// recharge
const recharge = (options) => {
  let body = JSON.parse(options.body)
  let userInfo = ws.getItem('account')
  let { orderAmount } = body
  let redirectUrl = window.location.origin + '/result/gateway/loading' // 回调地址

  let data = {
    "requestNo": "CZZ20190820175045254164704",
    "requestParam": `{\"keySerial\":\"1\",\"platformNo\":\"6000004334\",\"reqData\":\"{\\\"amount\\\":${orderAmount},\\\"bankcode\\\":\\\"BKCH\\\",\\\"callbackMode\\\":\\\"DIRECT_CALLBACK\\\",\\\"expectPayCompany\\\":\\\"YEEPAY\\\",\\\"expired\\\":\\\"20190821110223\\\",\\\"platformUserNo\\\":\\\"PN1907311036378301409794003\\\",\\\"rechargeWay\\\":\\\"SWIFT\\\",\\\"redirectUrl\\\":\\\"${redirectUrl}\\\",\\\"requestNo\\\":\\\"RC1908211032231459096293703\\\",\\\"riskitem\\\":\\\"{\\\\\\\"merEquipmentIp\\\\\\\":\\\\\\\"47.94.115.242\\\\\\\"}\\\",\\\"timestamp\\\":\\\"20190821103223\\\"}\",\"requestUrl\":\"https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway\",\"serviceName\":\"RECHARGE\",\"sign\":\"eOTOcf27GUvNt6WsKkMelJEnvctv6I7O1RowmBR7tSUxZ5CGvlmWoD3ZEdIfAx+gUAX5LxTeNkVsxd8q77C1v7dZok5psYkQ8woaIbEp27kEZjJAZnjfASMT4pW8ltTFnT4D6UlSME4NL3nvT2UVZgZk8SFtYf5fSaK+fcCseS+org19wsdCUhUxweddXw1VKsQMML2Ks728defmyFKKSgCNfTLW7YN8lGIjh15jbTv3TzPKEpwGQqVGtkwJ7r0kY7jfE9jM861A0g44GGFPyOZPX4sHi8mcqJIDfnlrOgpR3bhD8kkqKth+uIeRPrbnOHsZ/UyF15pdBsBo2LU75g==\"}`,
    //"requestUrl": "https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway",
    "requestUrl": `${window.location.origin}/mock/gateway/recharge`
  }
  return builder(data)
}


// isOrderDone
const isOrderDone = (options) => {
  /**
   * @orderStatus
   *  1: 成功  2：失败  0：等待中
   */
  let body = JSON.parse(options.body)
  let { type } = body
  let data = {
    "orderStatus": 1,
    "failReason": null
  }
  if (type =='withdraw') {
    data.orderStatus = 0
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
Mock.mock(/\/mock\/usercenter\/account\/withdrawal/, 'post', withdrawal)

