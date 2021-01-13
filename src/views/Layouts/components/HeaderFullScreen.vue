<template>
  <img
    width="15"
    class="fullScreen-icon"
    src="./full-screen-cancel.svg"
    alt=""
    v-if="isFullScreen"
    @click="handleFullScreenClick">
  <img
    width="15"
    class="fullScreen-icon"
    src="./full-screen.svg"
    alt=""
    v-else
    @click="handleFullScreenClick">
</template>
<script lang="ts">
import Screenfull from 'screenfull'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderFullScreen',
  data () {
    return {
      isFullScreen: false
    }
  },
  methods: {
    handleFullScreenClick () {
      if (Screenfull.isEnabled) {
        Screenfull.toggle()
      }
    },
    screenfullChange () {
      if (Screenfull.isEnabled) {
        this.isFullScreen = Screenfull.isFullscreen
      }
    },
    screenfullInit() {
      if (Screenfull.isEnabled) {
        Screenfull.on('change', this.screenfullChange)
      }
    },
    screenfullDestroy() {
      if (Screenfull.isEnabled) {
        Screenfull.off('change', this.screenfullChange)
      }
    }
  },
  created () {
    this.screenfullInit()
  },
  beforeUnmount() {
    this.screenfullDestroy()
  }
})
</script>
<style lang="scss" scoped>
.fullScreen-icon {
  cursor: pointer;
}
</style>