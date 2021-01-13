import { GetterTree } from 'vuex'
import { UserInfo } from '@/@types'
import { AuthState } from './state'
import { RootState } from '../'

export type Getters = {
  getUserInfo(state: AuthState): UserInfo | null
}

const getters: GetterTree<AuthState, RootState> & Getters = {
  getUserInfo: (state) => state.userInfo,
}

export default getters
