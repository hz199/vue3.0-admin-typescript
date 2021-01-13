<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { SettingMutationTypes } from '@/store/modules/setting'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()

    const setPhoneStatus = () => {
      const minScreenWidth = 765
      const windowSceenWidth = window.screen.width
      const status = windowSceenWidth <= minScreenWidth
      store.commit(SettingMutationTypes.SET_IS_PHONE, status)
    }

    return {
      setPhoneStatus
    }
  },
  created () {
    this.setPhoneStatus()
  },
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
