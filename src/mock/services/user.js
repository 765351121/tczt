import Mock from 'mockjs'
import { builder } from '../util'

const a = (options) => {
  let res = {
    error: 0,
    message: '123aaa'
  }
  return builder(res)
}

Mock.mock(/\/mock\/getHomeScatList/, 'post', a)
