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
      }, {
        path: '/account/funds-detail',
        name: '/account/funds-detail',
        desc: '资金明细',
        component: () => import('@/views/account/user/FundsDetail.vue')
      }, {
        path: '/account/bank-card',
        name: '/account/bank-card',
        desc: '银行卡',
        component: () => import('@/views/account/user/BankCard.vue')
      }, {
        path: '/account/lend-record',
        name: '/account/lend-record',
        desc: '出借记录',
        component: () => import('@/views/account/user/LendRecord.vue')
      }, {
        path: '/account/safety',
        name: '/account/safety',
        desc: '安全中心',
        component: () => import('@/views/account/user/Safety.vue')
      }, {
        path: '/account/feedback',
        name: '/account/feedback',
        desc: '出借记录',
        component: () => import('@/views/account/user/Feedback.vue')
      }, {
        path: '/account/recharge',
        name: '/account/recharge',
        desc: '充值',
        component: () => import('@/views/account/user/Recharge.vue')
      },{
        path: '/account/withdraw',
        name: '/account/withdraw',
        desc: '充值',
        component: () => import('@/views/account/user/Withdraw.vue')
      },]
    },
    // support center related...
    {
      path: '/support',
      name: '/support',
      component: AccountLayout,
      redirect: '/support/platform-cost',
      children: [{
          path: '/support/platform-cost',
          name: '/support/platform-cost',
          desc: '平台费用',
          component: () => import('@/views/support/PlatformCost.vue')
        },
        {
          path: '/support/lend-explain',
          name: '/support/lend-explain',
          desc: '出借说明',
          component: () => import('@/views/support/LendExplain.vue')
        },
        {
          path: '/support/recharge',
          name: '/support/recharge',
          desc: '充值',
          component: () => import('@/views/support/Recharge.vue')
        },
        {
          path: '/support/withdraw',
          name: '/support/withdraw',
          desc: '提现',
          component: () => import('@/views/support/Withdraw.vue')
        },
        {
          path: '/support/login-regist',
          name: '/support/login-regist',
          desc: '注册登录',
          component: () => import('@/views/support/LoginRegist.vue')
        },
        {
          path: '/support/account-password',
          name: '/support/account-password',
          desc: '账户密码',
          component: () => import('@/views/support/AccountPassword.vue')
        },
        {
          path: '/support/bind-card',
          name: '/support/bind-card',
          desc: '开户绑卡',
          component: () => import('@/views/support/BindCard.vue')
        },
        {
          path: '/support/deposite',
          name: '/support/deposite',
          desc: '银行存管',
          component: () => import('@/views/support/Deposite.vue')
        },
      ]
    },
    {
      path: '/information/disclosure',
      name: '/information/disclosure',
      desc: '信息披露',
      redirect: '/information/disclosure/company-profile',
      component: () => import('@/views/disclosure/Information.vue'),
      children: [{
          path: '/information/disclosure/company-profile',
          name: '/information/disclosure/company-profile',
          desc: '公司简介',
          component: () => import('@/views/disclosure/companyProfile/CompanyProfile.vue')
        }, {
          path: '/information/disclosure/commitment',
          name: '/information/disclosure/commitment',
          desc: '承诺函',
          component: () => import('@/views/disclosure/commitment/Commitment.vue')
        }, {
          path: '/information/disclosure/business',
          name: '/information/disclosure/business',
          desc: '工商信息',
          component: () => import('@/views/disclosure/organize/Business.vue')
        }, {
          path: '/information/disclosure/shareholder',
          name: '/information/disclosure/shareholder',
          desc: '股东信息',
          component: () => import('@/views/disclosure/organize/Shareholder.vue')
        }, {
          path: '/information/disclosure/structure',
          name: '/information/disclosure/structure',
          desc: '组织架构',
          component: () => import('@/views/disclosure/organize/Structure.vue')
        }, {
          path: '/information/disclosure/official-channel',
          name: '/information/disclosure/official-channel',
          desc: '官方渠道',
          component: () => import('@/views/disclosure/organize/OfficialChannel.vue')
        }, {
          path: '/information/disclosure/op-data',
          name: '/information/disclosure/op-data',
          desc: '运营数据',
          component: () => import('@/views/disclosure/op/OpData.vue')
        }, {
          path: '/information/disclosure/op-report',
          name: '/information/disclosure/op-report',
          desc: '运营报告',
          component: () => import('@/views/disclosure/op/OpReport.vue')
        }, {
          path: '/information/disclosure/audit',
          name: '/information/disclosure/audit',
          desc: '审计信息',
          component: () => import('@/views/disclosure/audit/Audit.vue')
        }, {
          path: '/information/disclosure/compliance-report',
          name: '/information/disclosure/compliance-report',
          desc: '合规报告',
          component: () => import('@/views/disclosure/complianceReport/ComplianceReport.vue')
        }, {
          path: '/information/disclosure/archival',
          name: '/information/disclosure/archival',
          desc: '备案信息',
          component: () => import('@/views/disclosure/archival/Archival.vue')
        },
        {
          path: '/information/disclosure/risk-control',
          name: '/information/disclosure/risk-control',
          desc: '风险控制',
          component: () => import('@/views/disclosure/riskControl/RiskControl.vue')
        },
        {
          path: '/information/disclosure/deposit',
          name: '/information/disclosure/deposit',
          desc: '资金存管',
          component: () => import('@/views/disclosure/deposit/Deposit.vue')
        },
        {
          path: '/information/disclosure/legislation',
          name: '/information/disclosure/legislation',
          desc: '法律法规',
          component: () => import('@/views/disclosure/legislation/Legislation.vue')
        },
        {
          path: '/information/disclosure/issues',
          name: '/information/disclosure/issues',
          desc: '重大事项',
          component: () => import('@/views/disclosure/issues/Issues.vue')
        },
        {
          path: '/information/disclosure/rates',
          name: '/information/disclosure/rates',
          desc: '收费标准',
          component: () => import('@/views/disclosure/rates/Rates.vue')
        },
        {
          path: '/information/disclosure/contact',
          name: '/information/disclosure/contact',
          desc: '联系我们',
          component: () => import('@/views/disclosure/contact/Contact.vue')
        },
        {
          path: '/information/disclosure/legal-notice',
          name: '/information/disclosure/legal-notice',
          desc: '法律声明',
          component: () => import('@/views/disclosure/legalNotice/LegalNotice.vue')
        },
        {
          path: '/information/disclosure/partner',
          name: '/information/disclosure/partner',
          desc: '合作伙伴',
          component: () => import('@/views/disclosure/partner/Partner.vue')
        },
        {
          path: '/information/disclosure/risk-tips',
          name: '/information/disclosure/risk-tips',
          desc: '风险提示',
          component: () => import('@/views/disclosure/lending/RiskTips.vue')
        },
        {
          path: '/information/disclosure/knowledge',
          name: '/information/disclosure/knowledge',
          desc: '互金知识',
          component: () => import('@/views/disclosure/lending/Knowledge.vue')
        },
      ]
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
      }, {
        path: '/user/register',
        name: '/user/register',
        component: () => import('@/views/user/components/Register.vue')
      }]
    }
  ]
}, {
  path: '/mock/gateway',
  component: MockGatewayLayout,
  name: 'MockGatewayLayout',
  redirect: '/mock/gateway/register',
  children: [{
    path: '/mock/gateway/register',
    name: '/mock/gateway/register',
    component: () => import('@/views/account/mockGateway/Register.vue'),
  }, {
    path: '/mock/gateway/invest',
    name: '/mock/gateway/invest',
    component: () => import('@/views/account/mockGateway/Invest.vue'),
  }, {
    path: '/mock/gateway/recharge',
    name: '/mock/gateway/recharge',
    component: () => import('@/views/account/mockGateway/Recharge.vue'),
  }, {
    path: '/mock/gateway/withdraw',
    name: '/mock/gateway/withdraw',
    component: () => import('@/views/account/mockGateway/Withdraw.vue'),
  }, ]
}, {
  path: '/result/gateway',
  component: ResultGatewayLayout,
  name: 'ResultGatewayLayout',
  redirect: '/result/gateway/loading',
  children: [{
    path: '/result/gateway/loading',
    name: '/result/gateway/loading',
    component: () => import('@/views/result/gateway/Loading.vue'),
  }, ]
}]