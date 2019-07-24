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
  let account = ws.getItem('account')
  let data = { ...account }
  return builder(data)
}


Mock.mock(/\/mock\/usercenter\/client\/userInfo/, 'post', userInfo)

