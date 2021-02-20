import { GetterTree } from 'vuex'
import { SettingState } from './state'
import { RootState } from '../'

// export type Getters = {
//   getSliderCollapse(state: SettingState): boolean
//   getIsPhoneStatus(): boolean
// }

const getters: GetterTree<SettingState, RootState> = {
  getSliderCollapse: state => state.sliderCollapse,
  getIsPhoneStatus: state => state.isPhone,
  getBreadcrumbs: state => state.breadcrumbs
}

export default getters
