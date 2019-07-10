import Mock from 'mockjs'
import { builder } from '../util'

const a = (options) => {
  let res = {
   
  }
  return builder(res)
}

Mock.mock(/\/mock\/getHomeScatLista/, 'post', a)
