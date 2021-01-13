import { MutationTree } from 'vuex'
import { SettingState } from './state'

export enum SettingMutationTypes {
  SET_SLIDER_COLLAPSE = 'SETTING/SET_SLIDER_COLLAPSE',
  SET_IS_PHONE = 'SETTING/SET_IS_PHONE'
}

export type Mutations<S = SettingState> = {
  [SettingMutationTypes.SET_SLIDER_COLLAPSE](state: S): void
  [SettingMutationTypes.SET_IS_PHONE](state: S, payload: boolean): void
}

const mutations: MutationTree<SettingState> & Mutations = {
  // 侧边栏状态
  [SettingMutationTypes.SET_SLIDER_COLLAPSE](state: SettingState) {
    state.sliderCollapse = !state.sliderCollapse
  },
  // 是否是手机状态
  [SettingMutationTypes.SET_IS_PHONE](state: SettingState, payload: boolean) {
    state.isPhone = payload
  }
}

export default mutations
