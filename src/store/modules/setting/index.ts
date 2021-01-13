import {
  Module
} from 'vuex'
import { RootState } from '@/store/modules'
import { settingState, SettingState } from './state'
import getters from './getters'
import actions, { SettingActionTypes } from './actions'
import mutations, { SettingMutationTypes } from './mutations'

export { SettingActionTypes, SettingMutationTypes }

export { SettingState }

const authStore: Module<SettingState, RootState> = {
  state: settingState,
  getters,
  mutations,
  actions
  // namespaced: true // 默认命名空间添加特有的路径
}

export default authStore
