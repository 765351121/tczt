import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

export const routes = [
  {
    path: '/',
    component: BasicLayout,
    name: 'BasicLayout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
      },
    ],
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
