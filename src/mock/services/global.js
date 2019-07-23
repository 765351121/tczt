import Mock from 'mockjs'
import {
  builder
} from '../util'


// userInfo
const userInfo = (options) => {
  console.log('===============');
  let data = {}
  return builder(data)
}


Mock.mock(/\/mock\/usercenter\/client\/userInfo/, 'post', userInfo)

