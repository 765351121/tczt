import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'
import MockGatewayLayout from '@/layouts/MockGatewayLayout'
import ResultGatewayLayout from '@/layouts/ResultGatewayLayout'
import AccountLayout from '@/layouts/AccountLayout'




export const routes = [{
  path: '/',
  component: BasicLayout,
  name: 'BasicLayout',
  redirect: '/home',
  children: [{
      path: '/home',
      name: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/product/list',
      name: '/product/list',
      component: () => import('@/views/product/List.vue')
    },
    {
      path: '/product/order',
      name: '/product/order',
      component: () => import('@/views/product/Order.vue')
    },
    {
      path: '/account/gateway/register',
      name: '/account/gateway/register',
      component: () => import('@/views/account/gateway/Register.vue')
    },
    // result page
    {
      path: '/result/success/:type/:data',
      name: '/result/success',
      component: () => import('@/views/result/gateway/Success.vue'),
    },
    {
      path: '/result/fail/:type/:data',
      name: '/result/fail',
      component: () => import('@/views/result/gateway/Fail.vue'),
    }, {
      path: '/result/confirm/:type/:data',
      name: '/result/confirm',
      component: () => import('@/views/result/gateway/Confirm.vue'),
    },
    {
      path: '/evaluate/risk',
      name: '/evaluate/risk',
      component: () => import('@/views/evaluate/Risk.vue'),
    },
    {
      path: '/evaluate/result/:data',
      name: '/evaluate/result',
      component: () => import('@/views/evaluate/Result.vue'),
    },
    // account related...
    {
      path: '/account',
      name: '/account',
      component: AccountLayout,
      redirect: '/account/overview',
      children: [{
        path: '/account/overview',
        name: '/account/overview',
        desc: '账户总览',
        component: () => import('@/views/account/user/Overview.vue')
      },{
        path: '/account/funds-detail',
        name: '/account/funds-detail',
        desc: '资金明细',
        component: () => import('@/views/account/user/FundsDetail.vue')
      },{
        path: '/account/bank-card',
        name: '/account/bank-card',
        desc: '银行卡',
        component: () => import('@/views/account/user/BankCard.vue')
      },{
        path: '/account/lend-record',
        name: '/account/lend-record',
        desc: '出借记录',
        component: () => import('@/views/account/user/LendRecord.vue')
      },{
        path: '/account/safety',
        name: '/account/safety',
        desc: '安全中心',
        component: () => import('@/views/account/user/Safety.vue')
      },{
        path: '/account/feedback',
        name: '/account/feedback',
        desc: '出借记录',
        component: () => import('@/views/account/user/Feedback.vue')
      },{
        path: '/account/recharge',
        name: '/account/recharge',
        desc: '充值',
        component: () => import('@/views/account/user/Recharge.vue')
      }]
    },
    // user related...
    {
      path: '/user',
      name: '/user',
      component: () => import('@/views/user/Index.vue'),
      children: [{
        path: '/user/login',
        name: '/user/login',
        component: () => import('@/views/user/components/Login.vue')
      },{
        path: '/user/register',
        name: '/user/register',
        component: () => import('@/views/user/components/Register.vue')
      }]
    }
  ]
},{
  path: '/mock/gateway',
  component: MockGatewayLayout,
  name: 'MockGatewayLayout',
  redirect: '/mock/gateway/register',
  children: [{
    path: '/mock/gateway/register',
    name: '/mock/gateway/register',
    component: () => import('@/views/account/mockGateway/Register.vue'),
  },{
    path: '/mock/gateway/invest',
    name: '/mock/gateway/invest',
    component: () => import('@/views/account/mockGateway/Invest.vue'),
  },]
},{
  path: '/result/gateway',
  component: ResultGatewayLayout,
  name: 'ResultGatewayLayout',
  redirect: '/result/gateway/loading',
  children: [{
    path: '/result/gateway/loading',
    name: '/result/gateway/loading',
    component: () => import('@/views/result/gateway/Loading.vue'),
  },]
}]