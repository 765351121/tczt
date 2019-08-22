import Mock from 'mockjs'
import {
  builder
} from '../util'
import {
  handleWebStorage
} from '@/utils/utils'
import moment from 'moment'
const ws = handleWebStorage()

// let body = JSON.parse(options.body)

// getInvestOrderList
const investList = (options) => {
  let body = JSON.parse(options.body)
  let {
    page,
    productStatus
  } = body
  let userInfo = ws.getItem('account') || {}
  let {
    isOpenAccount
  } = userInfo
  let data = productStatus == 1 ? Mock.mock({
    "page": page,
    "size": 10,
    "total": 2766,
    "totalPage": 277,
    "totalAmount": 0,
    "rows|10": [{
      "orderId": "@integer(1,100)",
      "productName": "YDY--新产品@integer(1,200)",
      "productStatus": productStatus,
      "annualYield": "@float(5, 20, 0, 2)",
      "orderAmount": "@integer(100, 1000000)",
      "orderTime": "@date()",
      "exceptIncome": "0.43",
      "interestStartDate": null,
      "interestEndDate": null,
      "period": "@integer(5,10)",
      "periodType|1": ['天', '月'],
      "investOrderCode": "TZZ20190807100333190127555"
    }]
  }) : {
    page: 1,
    rows: [],
    size: 0,
    total: 0,
    totalAmount: 0,
    totalPage: 0,
  }
  if (!isOpenAccount) {
    data = {
      "page": page,
      "size": 10,
      "total": 0,
      "totalPage": 0,
      "totalAmount": 0,
      "rows": []
    }
  }
  return builder(data)
}

// getCashFlow
const getCashFlow = (options) => {
  let body = JSON.parse(options.body)
  let {
    page,
    orderType,
    createTimeStart,
    createTimeEnd,
  } = body
  let orderTypeEnum = ['recharge', 'withdraw', 'invest', 'repayClearing', 'failBids', 'coupon']
  let startTimestamp = moment(createTimeStart).valueOf()
  let endTimestamp = moment(createTimeEnd).valueOf()
  let userInfo = ws.getItem('account') || {}
  let {
    isOpenAccount
  } = userInfo
  let data = Mock.mock({
    "page": page,
    "size": 10,
    "total": 2766,
    "totalPage": 277,
    "totalAmount": 0,
    "rows|10": [{
      "orderStatus|1": [0, 1, 2],
      "orderAmount": "@integer(100000, 200000)",
      // "orderTime": "@datetime()",
      "orderTime": !!(createTimeStart && createTimeEnd) ? `@integer(${startTimestamp}, ${endTimestamp})` : "@datetime()",
      "orderCode": "CZZ****@integer(100000, 600000)",
      "failedReason": null,
      //"orderType|1": ['recharge', 'withdraw', 'invest', 'repayClearing', 'failBids', 'coupon'],
      "orderType|1": orderType == 'all' ? orderTypeEnum : [orderType],
      "superSurprise": "+"
    }]
  })
  if (!isOpenAccount) {
    data = {
      "page": page,
      "size": 10,
      "total": 0,
      "totalPage": 0,
      "totalAmount": 0,
      "rows": []
    }
  }
  return builder(data)
}


Mock.mock(/\/mock\/usercenter\/order\/cashFlow/, 'post', getCashFlow)
Mock.mock(/\/mock\/usercenter\/order\/investList/, 'post', investList)