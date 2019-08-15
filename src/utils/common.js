import { handleWebStorage } from './utils';

const ws = handleWebStorage()

export const accountTemplate = {
  bankCode: null,
  bankName: null,
  bankCardNo: null,
  idNum: null,
  isLogin: false,
  isOpenAccount: false,
  isRiskAccess: false,
  platformUserNo: null,
  realName: null,
  riskLevel: "未测评",
  score: null,
  sessionId: null,
  userAcc: null,
  canWithdrawAmount: 0,   // 可提现金额(账户余额)
  tradPwd: null, // 交易密码
  lendingAmount: 0,  // 出借余额(投资余额)
  totalIncome: 0, // 累计回报金额
  totalLendingQuantity: 0,  //出借笔数
}

/**
 * {
    "bankCode": "CMBC",
    "bankName": "招商银行",
    "cardNo": "******89751",
    "idNum": "110***********117",
    "isLogin": true,
    "isOpenAccount": true,
    "isRiskAccess": true,
    "platformUserNo": null,
    "realName": "哈**",
    "riskLevel": "稳健型",
    "score": 33,
    "sessionId": "7839fef7-a1cb-42e4-b0c8-f5ad7ddcef2f",
    "userAcc": "141****0010",
    "canWithdrawAmount": 0,   // 可提现金额(账户余额)
  },
 */

 // 更改Mock账户状态：account
export const resetAccountStatus = content => {
  ws.setItem({ account: { ...accountTemplate }})
}

// 更改Mock账户状态：account
export const updateAccountStatus = content => {
  ws.setItem({ account: { ...Object.assign({ ...(ws.getItem('account') || {}) }, { ...content }) } })
}

// delete ws
export const deleteWs = cache => {
  ws.clearItem(cache)
}

import icon_1 from '@/assets/images/account/user/nav/nav_1.png';
import icon_2 from '@/assets/images/account/user/nav/nav_2.png';
export const accountMenu = [
  {
    name: '我的账户',
    icon: icon_1,
    children: [{
      name: '资产总览',
      path: '/account/overview',
    },{
      name: '资金明细',
      path: '/account/funds-detail',
    },{
      name: '银行卡',
      path: '/account/bank-card',
    },{
      name: '出借记录',
      path: '/account/lend-record',
    },]
  },
  {
    name: '个人中心',
    icon: icon_2,
    children: [{
      name: '安全中心',
      path: '/account/safety',
    },{
      name: '意见反馈',
      path: '/account/feedback',
    }]
  }
]

