import Mock from 'mockjs'
import {
  builder
} from '../util'

// 订单页散标产品信息
const scatProduct = (opts) => {
  let data = {
    "id": 130,
    "productId": "130",
    "productCode": "20190329185836bdxx9354",
    "productName": "安享12M126号",
    "loanTimeLimitType": "day",
    "loanTimeLimitTypeDesc": "天",
    "loanTimeLimit": 365,
    "loanAmount": 200000.0000,
    "annualYield": 10.2000,
    "minInvestmentAmount": 1000.0000,
    "increaseAmount": 1000.00,
    "beginAccrualDate": "放款当日计息",
    "productState": 10,
    "repaymentMode": "一次性还本付息",
    "maxSaleVolume": 124000.0000,
    "productDetails": [{
      "id": null,
      "title": "<h3>项目简介</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;本项目为企业借款产品，借款方经平台审核向平台的出借人申请借款，存管银行提供全程存管，出借人直接通过存管银行向借款人出借。<br>&nbsp;&nbsp;</p>",
      "sequence": 1
    }, {
      "id": null,
      "title": "<h3>还款方式</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;一次性还本付息</p>\n",
      "sequence": null
    }, {
      "id": null,
      "title": "<h3>安全等级</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;低风险☆☆☆☆☆（内部评级，仅供投资参考）<br>&nbsp;&nbsp;</p>",
      "sequence": 2
    }, {
      "id": null,
      "title": "<h3>预计起息日</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;放款成功之日计息<br>&nbsp;&nbsp;</p>",
      "sequence": 3
    }, {
      "id": null,
      "title": "<h3>预计还款日</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;借款到期日<br>&nbsp;&nbsp;</p>",
      "sequence": 4
    }, {
      "id": null,
      "title": "<h3>其他费用说明</h3>",
      "content": "<p>&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;</p>",
      "sequence": 5
    }],
    "contractDetails": [{
      "title": "《借款合同》",
      "url": "/p2pprotocol/%E5%80%9F%E6%AC%BE%E5%90%88%E5%90%8C.html",
      "imgUrl": null
    }, {
      "title": "《网络借贷风险和禁止性行为提示及资金来源合法承诺》",
      "url": "/p2pprotocol/%E9%A3%8E%E9%99%A9%E6%8F%90%E7%A4%BA.html",
      "imgUrl": null
    }],
    "platformUserNo": "PN1901311428427961381116319",
    "dataType": 0,
    "showType": 0,
    "useCoupon": true,
    "show": true,
    "hasDepository": false,
    "protectFlag": true
  }
  return builder(data)
}

Mock.mock(/\/mock\/usercenter\/product\/scatterProduct/, 'post', scatProduct)