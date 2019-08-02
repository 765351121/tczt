import Mock from 'mockjs'
import {
  builder
} from '../util'
import {
  handleWebStorage
} from '@/utils/utils'
const ws = handleWebStorage()


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
  let redirectUrl = 'http://www.baidu.com' // 回调地址
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

