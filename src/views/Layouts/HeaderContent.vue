<template>
  <div class="pull-left header-left">
    <div class="left-icon">
      <i class="el-icon-s-unfold" @click="handleSliderCollapse" v-if="getSliderCollapse"></i>
      <i class="el-icon-s-fold" @click="handleSliderCollapse" v-else></i>
    </div>
  </div>
  <div class="pull-right header-right">
    <HeaderFullScreen></HeaderFullScreen>

    <el-avatar style="margin-left:20px;">
      55
    </el-avatar>
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

</style>