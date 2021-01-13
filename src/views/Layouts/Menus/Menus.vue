<template>
  <el-scrollbar class="scrollbar" :native="false" noresize>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-custom"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="rgba(255, 255, 255, 0.7)"
      background-color="rgb(81, 90, 110)"
      active-text-color="rgba(255, 255, 255, 1)"
    >
      <li class="logo">
        <img class="logo-img" src="@/assets/logo.png" width="46" alt="">
      </li>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>

      <el-menu-item :index="k+ 100+''" v-for="k in 5" :key="k">
        <i class="el-icon-setting"></i>
        <template #title>导航{{k + 100}}</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
// import { useStore } from '@/store'

export default defineComponent({
  setup () {
    // const store = useStore()

    return {
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse',
      'getIsPhoneStatus'
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
  width: 200px;
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
</style>