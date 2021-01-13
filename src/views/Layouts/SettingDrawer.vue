<template>
  <a-drawer
    title="设置"
    placement="right"
    :closable="false"
    v-model:visible="drawerVisible"
  >
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SettingDrawer',
  data () {
    return {
      drawerVisible: false
    }
  },
  methods: {
    // afterVisibleChange(val: boolean) {
    //   console.log('visible', val)
    // },
    openDrawer () {
      this.drawerVisible = true
    }
  }
})
</script>