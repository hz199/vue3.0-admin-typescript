import authStore from './auth'
import { AuthState } from './auth/state'
import navsTagStore from './navsTag'
import { NavsTagState } from './navsTag/type'
import settingStore from './setting'
import { SettingState } from './setting/state'

export type RootState = {
  auth: AuthState
  setting: SettingState
  navsTag: NavsTagState
}

const modules = {
  auth: authStore,
  setting: settingStore,
  navsTag: navsTagStore
}

export default modules