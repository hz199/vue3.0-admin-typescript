<template>
  <div class="pull-left header-left">
    <div class="left-icon">
      <i class="el-icon-s-unfold" @click="handleSliderCollapse" v-if="getSliderCollapse"></i>
      <i class="el-icon-s-fold" @click="handleSliderCollapse" v-else></i>
    </div>
  </div>
  <div class="pull-right header-right">
    <HeaderFullScreen></HeaderFullScreen>

    
    <el-dropdown size="small" trigger="click" class="dropdown-height-right">
      <span class="avatar">
        <img class="avatar-img" src="../../assets/avatar.gif" alt="">
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="all">个人信息</el-dropdown-item>
          <el-dropdown-item command="other">登 出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import HeaderFullScreen from './components/HeaderFullScreen'
import { mapGetters } from 'vuex'
import { SettingMutationTypes } from '@/store/modules/setting'

export default defineComponent({
  name: 'Header',
  components: {
    HeaderFullScreen
  },
  setup () {
    const store = useStore()

    const handleStore = {
      handleSliderCollapse () {
        store.commit(SettingMutationTypes.SET_SLIDER_COLLAPSE)
      }
    }

    return {
      ...handleStore,
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse'
    ])
  },
  data () {
    return {
      isFullScreen: false
    }
  }
})
</script>
<style lang="scss" scoped>
.header-right, .header-left {
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.left-icon {
  font-size: 24px;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-left: 25px;
  display: inline-block;
  border: 1px solid #ebeef5;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  .avatar-img {
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
<style lang="scss">
.header-right .dropdown-height-right {
  height: 60px;
  display: flex;
  align-items: center;
}
</style>