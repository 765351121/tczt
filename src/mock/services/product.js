import Mock from 'mockjs'
import {
  builder
} from '../util'


// 产品列表
const scatterList = (opts) => {
  let body = JSON.parse(opts.body)
  console.log(body);
  let {
    page
  } = body
  let data = Mock.mock({
    "page": page,
    "size": 10,
    "total": 2766,
    "totalPage": 277,
    "totalAmount": 0,
    "rows|10": [{
      "id": '@integer(1,200)',
      "productCode": "20190724134101bdxx3338",
      "productName": "YDY--新产品@integer(1,200)",
      "loanTimeLimitType|1": ['day', 'month'],
      "loanTimeLimitTypeDesc|1": ['天', '月'],
      "loanTimeLimit": '@integer(1, 30)',
      "loanAmount": '@integer(100000, 200000)',
      "annualYield": '@integer(1, 20)',
      "minInvestmentAmount": 100.0000,
      "increaseAmount": 100.00,
      "productState|1": [10, 20, 30, 40, 50],
      "repaymentMode": "5",
      "maxSaleVolume": '@integer(50000, 100000)',
      "dataType": 0,
      "showType": 0,
      "useCoupon": false,
      "show": false,
      "hasDepository": false,
      "protectFlag": true
    }]
  })
  return builder(data)
}

// 获取出借记录信息
const getInvestOrder = (opts) => {
  let data = {
    "targetName": null,
    "targetCode": null,
    "status": null,
    "periodType": null,
    "period": null,
    "rate": null,
    "orderAmount": null,
    "exceptIncome": null,
    "loadDate": null,
    "orderDate": null,
    "interestDate": null,
    "protocol": null,
    "platformUserNo": null,
    "productId": null,
    "orderId": null,
    "rows": [{
      "userName": "丁琳",
      "phone": "188****8058",
      "orderAmount": 5000.00,
      "orderTime": "2019-04-02 09:57:28"
    }, {
      "userName": "宋晓刚",
      "phone": "133****7720",
      "orderAmount": 1000.00,
      "orderTime": "2019-04-01 20:17:19"
    }, {
      "userName": "宦勇琼",
      "phone": "137****7680",
      "orderAmount": 10000.00,
      "orderTime": "2019-04-01 16:35:15"
    }, {
      "userName": "张芬芬",
      "phone": "138****9623",
      "orderAmount": 10000.00,
      "orderTime": "2019-03-31 16:42:28"
    }, {
      "userName": "郝为",
      "phone": "135****1191",
      "orderAmount": 50000.00,
      "orderTime": "2019-03-31 12:57:32"
    }]
  }

  return builder(data)
}

// 订单页散标产品信息
const merchantUserInfo = (opts) => {
  let data = {
    "id": null,
    "mobile": null,
    "merchantCode": null,
    "merchantName": "天津****公司",
    "loginPassword": null,
    "loginSlat": null,
    "registerTime": null,
    "firstLoginTime": null,
    "status": null,
    "location": "天津市",
    "ratio": null,
    "description": null,
    "createTime": null,
    "updateTime": null,
    "industry": "科学研究和技术服务业",
    "incomeAndLiabilities": "无负债",
    "overdueSixMonths": "无逾期",
    "loansFromOtherP2pPlatforms": "无其他网络借贷平台借款",
    "borrowersFinance": null,
    "borrowersFunds": null,
    "loansFromOtherPlatforms": "无其他平台借款",
    "borrowersLoanAbility": null,
    "borrowersOverdue": null,
    "borrowersLawsuit": null,
    "borrowersPenalties": null,
    "remark": null,
    "merchantAbbreviation": null,
    "unitType": null,
    "registrationType": null,
    "merchantRegistrationType": null,
    "legalAscription": "李**",
    "horizontalText": null,
    "lowerChordCharacter": null,
    "signature": null,
    "auditStatus": null,
    "merchantLevel": null,
    "foundingTime": "2018-01-22",
    "regCapital": null,
    "realCapital": null,
    "registeredAddressProvince": null,
    "registeredAddressCity": null,
    "workAddressProvince": null,
    "workAddressCity": null,
    "workAddress": null,
    "companyTel": null,
    "email": null,
    "region": null,
    "enterpriceType": null,
    "overdueHistoryTimes": 0,
    "overdueHistoryAmount": 0,
    "repayHistoryTimes": 0,
    "contact": null,
    "contactPhone": null,
    "contactEmail": null,
    "unifiedCode": null,
    "creditAmount": null,
    "creditTotalAmount": null,
    "openAccountStatus": null
  }
  return builder(data)
}

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
Mock.mock(/\/mock\/userInfo\/merchantUserInfo/, 'post', merchantUserInfo)
Mock.mock(/\/mock\/usercenter\/order\/getInvestOrder/, 'post', getInvestOrder)
Mock.mock(/\/mock\/usercenter\/product\/scatterList/, 'post', scatterList)