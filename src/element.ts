import {
  ElButton,
  ElScrollbar,
  ElContainer,
  ElHeader,
  ElFooter,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElAvatar,
  ElDrawer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { App } from 'vue'

const elements = [
  ElButton,
  ElScrollbar,
  ElContainer,
  ElHeader,
  ElFooter,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElAvatar,
  ElDrawer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
]

export default (app: App) => {
  locale.use(lang)
  
  elements.forEach(comp => {
    app.use(comp)
  })
}
