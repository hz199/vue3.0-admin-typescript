<template>
  <el-scrollbar class="scrollbar" :native="false" noresize>
    <el-menu
      :default-active="currentRoute"
      class="el-menu-vertical-custom"
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <li class="logo">
        <img class="logo-img" src="@/assets/logo.png" width="46" alt="">
      </li>

      <template v-for="(aItem) in menuList" :key="aItem.title">
        <el-submenu :index="aItem.title" v-if="aItem.SubMenu && aItem.SubMenu.length > 0">
          <template #title>
            <i :class="aItem.icon"></i>
            <span>{{aItem.title}}</span>
          </template>
          <!-- 子组件循环 -->
          <template v-for="cItem in aItem.SubMenu" :key="cItem.path">
            <el-menu-item :index="cItem.path">
              <i :class="cItem.icon"></i>
              <template #title>{{cItem.title}}</template>
            </el-menu-item>
          </template>
          
        </el-submenu>
        <!-- 无子菜单 -->
        <el-menu-item v-else :index="aItem.path">
          <i :class="aItem.icon"></i>
          <template #title>{{aItem.title}}</template>
        </el-menu-item>
      </template>

    </el-menu>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import menuList from './config'

export default defineComponent({
  setup () {
    return {
    }
  },
  methods: {
    handleSelect(key) {
      // console.log(key, keyPath)

      this.$router.push({
        path: key
      })
    }
  },
  data () {
    return {
      isCollapse: false,
      menuList
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse',
      'getIsPhoneStatus'
    ]),
    ...mapGetters('navsTag', [
      'currentRoute'
    ])
  },
  watch: {
    getSliderCollapse (val) {
      if (this.getIsPhoneStatus) {
        this.isCollapse = false
      } else {
        this.isCollapse = val
      }
    }
  }
})
</script>
<style lang="scss">
.el-menu-vertical-custom:not(.el-menu--collapse) {
  width: 230px;
  border: none;
  /* min-height: 400px; */
}
.logo {
  height: 56px;
  line-height: 56px;
  text-align: center;
  .logo-img {
    margin: 5px 0;
    display: inline-block;
  }
}


$menu-hover-color: #40a0ff7e;
$menu-font-color: rgb(224, 221, 221);

.el-popper.is-dark {
	background-color: rgba(0, 0, 0, 0.8);
	color: #fff;
	padding: 8px 16px;
	border-radius: 4px;
}

// 菜单
.el-menu-vertical-custom .el-menu-item {
  position: relative;
}
.el-menu-vertical-custom .el-menu-item.is-active {
  // background-color: rosybrown;
  border-right: 4px solid $menu-hover-color;
  border-radius: 0 3px 3px 0;
}
</style>