import { createRouter, createWebHistory } from 'vue-router'
import routes from './config'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

import $store from '../store'

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
