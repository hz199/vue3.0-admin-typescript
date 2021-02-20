import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import routes from './config'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

import $store from '../store'
import { SettingMutationTypes } from '@/store/modules/setting'


const handleBreadcrumb = (to: RouteLocationNormalized) => {
  const homeData = {
    icon: 'el-icon-s-home',
    title: '首页',
    url: '/'
  }
  let breadcrumbs = []
  if (to.path === '/') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { url, ...rest } = homeData
    breadcrumbs = [rest]
  } else {
    const surplusMatched = to.matched.filter(item => !item.meta.isHideBreadcrumb)
    const matchedList = surplusMatched.map(item => {
      return {
        icon: item.meta.icon,
        title: item.meta.title,
        url: item.redirect || item.path
      }
    })

    breadcrumbs = [homeData, ...matchedList]
  }

  return breadcrumbs
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length === 0) {
    NProgress.done()
    console.log(to)
    next('/404')
    return
  } else {
    NProgress.done()
    const breadcrumb = handleBreadcrumb(to)

    $store.commit(SettingMutationTypes.SET_BREADCRUMB, breadcrumb)

    next()
  }
})

router.afterEach(to => {
  document.title = to.meta.title || 'admin'

  if (to.meta.isNavActive) {
    $store.commit('navsTag/setTagPage', to)

    setTimeout(() => {
      $store.dispatch('navsTag/setStoreTagpage')
    }, 0)
  }
})

export default router
