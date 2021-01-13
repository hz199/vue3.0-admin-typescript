import { UserInfo } from '@/@types'
import { MutationTree } from 'vuex'
import { AuthState } from './state'

export enum AuthMutationTypes {
  SET_USER_INFO = 'AUTH/SET_USER_INFO'
}

export type Mutations<S = AuthState> = {
  [AuthMutationTypes.SET_USER_INFO](state: S, payload: UserInfo): void
}

const mutations: MutationTree<AuthState> & Mutations = {
  [AuthMutationTypes.SET_USER_INFO](state: AuthState, payload: UserInfo) {
    state.userInfo = payload
  }
}

export default mutations
