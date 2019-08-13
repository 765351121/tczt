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
      "orderTime": !!(createTimeStart && createTimeEnd)? `@integer(${startTimestamp}, ${endTimestamp})` : "@datetime()",
      "orderCode": "CZZ****@integer(100000, 600000)",
      "failedReason": null,
      //"orderType|1": ['recharge', 'withdraw', 'invest', 'repayClearing', 'failBids', 'coupon'],
      "orderType|1": orderType == 'all' ? orderTypeEnum : [orderType],
      "superSurprise": "+"
    }]
  })
  return builder(data)
}




Mock.mock(/\/mock\/usercenter\/order\/cashFlow/, 'post', getCashFlow)