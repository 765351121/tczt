import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

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
}]