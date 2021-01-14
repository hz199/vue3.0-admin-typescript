import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '../'
import { NavsTagState, TagItems } from "./type"

// 主要是用于顶部导航的操作
const localStorage = window.localStorage
const TAG_ITEMS = 'TAG_ITEMS'
const TAG_PATHS = 'TAG_PATHS'
const CURRENT_ROUTER_PATH = 'CURRENT_ROUTER_PATH'

const state: NavsTagState = {
  // 菜单导航
  tagItems: [
    {
      path: '/',
      title: '首页',
      flag: true // 是否有删除号，首页默认是没有的
    }
  ],
  tagPaths: ['/'],
  currentRoute: ''
}

// 获取变量值
const getters: GetterTree<NavsTagState, RootState> = {
  gettagItems: state => state.tagItems, // 所有的导航对象
  gettagPaths: state => state.tagPaths, // 导航的路径
  currentRoute: state => state.currentRoute // 当前的导航
}

// 改变变量
const mutations: MutationTree<NavsTagState> = {
  // 删除一个
  deleteOneTag (state, payload) {
    if (payload.ref === 'currentTagPage') {
      state.tagItems[payload.index - 1].ref = 'currentTagPage'
      state.tagItems[payload.index - 1].type = 'primary'
    }

    state.tagItems.splice(payload.index, 1)
    state.tagPaths.splice(payload.index, 1)
    localStorage.setItem(TAG_ITEMS, JSON.stringify(state.tagItems))
    localStorage.setItem(TAG_PATHS, JSON.stringify(state.tagPaths))
  },

  // 删除全部
  deleteAllTag (state) {
    state.tagItems.splice(1)
    state.tagItems[0].ref = 'currentTagPage'
    state.tagItems[0].type = 'primary'
    state.tagPaths.splice(1)
    localStorage.setItem(TAG_ITEMS, JSON.stringify(state.tagItems))
    localStorage.setItem(TAG_PATHS, JSON.stringify(state.tagPaths))
  },

  // 删除其他
  deleteOthersTag (state) {
    // 过滤掉当前的导航对象，生成新的对象
    state.tagItems = state.tagItems.filter(item => {
      return item.ref === 'currentTagPage' || item.path === '/'
    })

    // 过滤掉当前路径，并形成新的导航 路径数组
    state.tagItems.forEach(oItem => {
      if (oItem.ref === 'currentTagPage') {
        state.tagPaths = state.tagPaths.filter(item => {
          return item === oItem.path || item === '/'
        })
      }
    })

    localStorage.setItem(TAG_ITEMS, JSON.stringify(state.tagItems))
    localStorage.setItem(TAG_PATHS, JSON.stringify(state.tagPaths))
  },

  /**
   * 设置导航 缓存里面
   * @param {*} state
   * @param {*} payload
   */
  // 左边导航点击触发 右边的导航路径更新
  setTagPage (state, payload) {
    // 当前路由
    const currentRoute = {
      path: payload.path,
      title: payload.meta.title
    }
    const tagItems = JSON.parse(localStorage.getItem(TAG_ITEMS)!)
    const tagPaths = JSON.parse(localStorage.getItem(TAG_PATHS)!)

    let initTagPage: TagItems[] = tagItems || [{ path: '/', title: '首页', flag: true }]
    const inittagPaths = tagPaths || ['/']

    if (inittagPaths.indexOf(payload.path) < 0) {
      initTagPage.push(currentRoute)
      inittagPaths.push(payload.path)
    }

    initTagPage = initTagPage.map(item => {
      if (item.path === payload.path) {
        item.type = 'primary'
        item.ref = 'currentTagPage'
        return item
      } else {
        item.ref = ''
        item.type = ''
        return item
      }
    })

    localStorage.setItem(CURRENT_ROUTER_PATH, payload.path)
    localStorage.setItem(TAG_ITEMS, JSON.stringify(initTagPage))
    localStorage.setItem(TAG_PATHS, JSON.stringify(inittagPaths))
    // end
  },

  setNewTagData (state, { currentRoute, tagItems, tagPaths }) {
    state.currentRoute = currentRoute || null
    state.tagItems = tagItems
    state.tagPaths = tagPaths
  }
}

const actions: ActionTree<NavsTagState, RootState> = {
  setStoreTagpage (state) {
    const tagItems = JSON.parse(localStorage.getItem(TAG_ITEMS)!) // 顶部导航
    const tagPaths = JSON.parse(localStorage.getItem(TAG_PATHS)!)
    const currentRoute = localStorage.getItem(CURRENT_ROUTER_PATH)

    state.commit('setNewTagData', {tagItems, tagPaths, currentRoute})
  }
}

const navsTagStore: Module<NavsTagState, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default navsTagStore
