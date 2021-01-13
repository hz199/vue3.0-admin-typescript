import authStore from './auth'
import { AuthState } from './auth/state'
import settingStore from './setting'
import { SettingState } from './setting/state'

export type RootState = {
  auth: AuthState
  setting: SettingState
}

const modules = {
  auth: authStore,
  setting: settingStore
}

export default modules