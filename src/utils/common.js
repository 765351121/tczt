import { handleWebStorage } from './utils';

const ws = handleWebStorage()

export const accountTemplate = {
  bankCode: null,
  bankName: null,
  cardNo: null,
  idNum: null,
  isLogin: false,
  isOpenAccount: false,
  isRiskAccess: false,
  platformUserNo: null,
  realName: null,
  riskLevel: null,
  score: null,
  sessionId: null,
  userAcc: null,
  canWithdrawAmount: 0,   // 可提现金额(账户余额)
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

