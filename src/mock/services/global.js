import Mock from 'mockjs'
import {
  builder
} from '../util'
import {
  handleWebStorage
} from '@/utils/utils'
const ws = handleWebStorage()

// userInfo
const userInfo = (options) => {
  console.log('===============');
  let a = ws.getItem('user')
  console.log(a);
  let data = {}
  return builder(data)
}


Mock.mock(/\/mock\/usercenter\/client\/userInfo/, 'post', userInfo)

