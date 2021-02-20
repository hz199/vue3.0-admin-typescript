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
        path: '/tables/table2',
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
        path: '/comps/comp1',
        title: '组件1'
      }
    ]
  },
  {
    icon: 'el-icon-s-home',
    title: '关于',
    path: '/about'
  },
]

export default menus