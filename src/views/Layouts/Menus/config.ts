export interface MenusConfig {
  icon: string
  title: string
  path?: string
  SubMenu?: Array<MenusConfig>
}

const menus: Array<MenusConfig> = [
  {
    icon: 'el-icon-s-home',
    title: '首页',
    path: '/'
  },
  {
    icon: 'el-icon-s-order',
    title: '表格',
    SubMenu: [
      {
        icon: 'el-icon-s-order',
        path: '/tables/table1',
        title: '导出Excel'
      },
      {
        icon: 'el-icon-s-order',
        path: '/tables/importTable',
        title: '导入Excel'
      }
    ]
  },
  {
    icon: 'el-icon-s-ticket',
    title: '组件',
    SubMenu: [
      {
        icon: 'el-icon-s-ticket',
        path: '/components/loadingBar',
        title: 'LoadingBar'
      },
      {
        icon: 'el-icon-s-ticket',
        path: '/components/dragAblePage',
        title: '简易拖拽'
      }
    ]
  }
]

export default menus