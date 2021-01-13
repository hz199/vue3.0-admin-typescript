import authStore, { AuthState } from './auth'
import settingStore, { SettingState } from './setting'

export type RootState = {
  auth: AuthState
  setting: SettingState
}

const modules = {
  auth: authStore,
  setting: settingStore
}

export default modules