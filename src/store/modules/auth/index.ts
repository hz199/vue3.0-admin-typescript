import {
  Module
} from 'vuex'
import { RootState } from '@/store/modules'
import { authState, AuthState } from './state'
import getters from './getters'
import actions, { AuthActionTypes } from './actions'
import mutations, { AuthMutationTypes } from './mutations'

export { AuthActionTypes, AuthMutationTypes }

export { AuthState }

const authStore: Module<AuthState, RootState> = {
  state: authState,
  getters,
  mutations,
  actions
  // namespaced: true // 默认命名空间添加特有的路径
}

export default authStore
