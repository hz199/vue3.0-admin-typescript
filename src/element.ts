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
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard,
  ElRow,
  ElCol
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
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard,
  // ElRow, // 这两个报错
  // ElCol
]

export default {
  install: (app: App) => {
    locale.use(lang)
    app.component(ElRow.name, ElRow)
    app.component(ElCol.name, ElCol)
    
    elements.forEach(comp => {
      app.use(comp)
    })
  }
}
