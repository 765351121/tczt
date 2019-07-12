import Mock from 'mockjs'
import {
  builder
} from '../util'

const scatList = (opts) => {
  let data = [{
    "annualYield": 5.8000,
    "id": 157,
    "loanAmount": 3400.0000,
    "loanTimeLimit": 30,
    "loanTimeLimitType": "day",
    "loanTimeLimitTypeDesc": "日",
    "maxSaleVolume": 3400.0000,
    "minInvestmentAmount": 1000.0000,
    "productCode": "20190617162007bdxx4329",
    "productId": 157,
    "productName": "标的1001",
    "productState": 10,
    "repaymentMode": "5"
  }, {
    "annualYield": 5.5000,
    "id": 156,
    "loanAmount": 3300.0000,
    "loanTimeLimit": 30,
    "loanTimeLimitType": "day",
    "loanTimeLimitTypeDesc": "日",
    "maxSaleVolume": 1200.0000,
    "minInvestmentAmount": 1000.0000,
    "productCode": "20190617161932bdxx3927",
    "productId": 156,
    "productName": "标的1002",
    "productState": 10,
    "repaymentMode": "5"
  }, {
    "annualYield": 5.7000,
    "id": 148,
    "loanAmount": 3500.0000,
    "loanTimeLimit": 30,
    "loanTimeLimitType": "day",
    "loanTimeLimitTypeDesc": "日",
    "maxSaleVolume": 3500.0000,
    "minInvestmentAmount": 1000.0000,
    "productCode": "20190615182007bdxx0839",
    "productId": 148,
    "productName": "标的1003",
    "productState": 10,
    "repaymentMode": "5"
  }, {
    "annualYield": 1.5000,
    "id": 147,
    "loanAmount": 3300.0000,
    "loanTimeLimit": 30,
    "loanTimeLimitType": "day",
    "loanTimeLimitTypeDesc": "日",
    "maxSaleVolume": 3300.0000,
    "minInvestmentAmount": 1000.0000,
    "productCode": "20190615181915bdxx2737",
    "productId": 147,
    "productName": "标的1004",
    "productState": 10,
    "repaymentMode": "5"
  }]
  return builder(data)
}

Mock.mock(/\/mock\/getHomeScatList/, 'post', scatList)