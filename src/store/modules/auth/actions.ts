import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '../'
import { AuthMutationTypes } from './mutations'
import { AuthState } from './state'

export enum AuthActionTypes {
  FETCH_USER_INFO = 'AUTH/FETCH_USER_INFO',
}

export interface Actions {
  [AuthActionTypes.FETCH_USER_INFO]({ commit }: ActionContext<AuthState, RootState>): Promise<boolean>
}

const actions: ActionTree<AuthState, RootState> & Actions = {
  /**
   * 接口请求获取用户信息
   */
  async [AuthActionTypes.FETCH_USER_INFO]({ commit }) {
    return new Promise(() => {
      setTimeout(() => {
        // console.log('FETCH_USER_INFO', id, 111)
        const data = {
          name: '范德萨范德萨范德萨发',
        }
        commit(AuthMutationTypes.SET_USER_INFO, data)
        return true
      }, 500)
    })
  }
}

export default actions
