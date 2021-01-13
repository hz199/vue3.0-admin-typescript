import type { UserInfo } from '@/@types'

export interface AuthState {
  userInfo: UserInfo
}

export const authState: AuthState = {
  userInfo: {}
}