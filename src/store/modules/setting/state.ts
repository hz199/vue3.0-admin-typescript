
export interface SettingState {
  sliderCollapse: boolean
  isPhone: boolean
  keepAliveNames: string[]
  breadcrumbs: Breadcrumb[]
}

export interface Breadcrumb {
  title: string
  icon?: string
  url: string
}

export const settingState: SettingState = {
  sliderCollapse: false,
  isPhone: false,
  keepAliveNames: [],
  breadcrumbs: []
}
