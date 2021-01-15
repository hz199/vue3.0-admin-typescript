import Layout from '@/views/Layouts/Layout.vue'
import { RouteRecordRaw } from 'vue-router'

/**
 * name: 路由的名字，必填，请确保唯一性
 * title: 菜单名
 * meta 一些自定义字段说明
  meta: {
    title: 'title'              将作为 document.title 使用或者面包屑导航使用
    keepAlive: true             是否缓存本页面，针对 children 一般列表需要缓存，或者编辑页面禁止缓存 暂未实现
    isNavActive: true           是否在中部导航展示和处理

    isHideBreadcrumb: true      面包屑不显示当前导航
  }
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/ErrorPage/404.vue'),
    meta: {
      title: '404',
      isHide: true
    }
  },
  {
    path: '/403',
    name: 'Page403',
    component: () => import('@/views/ErrorPage/403.vue'),
    meta: {
      title: '403',
      isHide: true
    }
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          isNavActive: true,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    meta: {
      title: 'about',
    },
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('@/views/About/index.vue'),
        meta: {
          title: 'About',
          isNavActive: true,
          keepAlive: true
        }
      }
    ]
  }
]

export default routes
