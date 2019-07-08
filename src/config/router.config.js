import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

export const routes = [
  {
    path: '/',
    component: BasicLayout,
    name: 'BasicLayout'
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    name: 'UserLayout',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login.vue')
      },
    ]
  },
]
