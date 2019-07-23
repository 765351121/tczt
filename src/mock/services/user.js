import Mock from 'mockjs'
import {
  builder
} from '../util'

// 加密随机串
const getEncryInfo = (options) => {
  let data = {
    "encryInfo": "31c77821b5761bd5",
    "randomId": "4f0da5b13d904dea895c9288743e6fa3"
  }
  return builder(data)
}

Mock.mock(/\/mock\/usercenter\/client\/common\/getEncryInfo/, 'post', getEncryInfo)