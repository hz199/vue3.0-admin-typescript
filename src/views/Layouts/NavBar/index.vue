<template>
  <div class="v-nav-bar--wrapper">
    <div class="v-nav-bar">
      <div class="v-nav-bar__nav-wrap">
        <span class="v-nav-bar__nav-prev"><i class="el-icon-arrow-left" @click="scrollPrev"></i></span>
        <span class="v-nav-bar__nav-next"><i class="el-icon-arrow-right" @click="scrollNext"></i></span>
        <div class="v-nav-bar__nav-scroll" ref="navScroll">
          <div class="v-nav-bar__nav" :style="navStyle" ref="nav">
            <div
              class="v-nav-bar__nav-item"
              v-for="item in 100"
              :key="item"
              :class="{'is-active': item === 99}"
            >
              <Tag :text="`标签${item}`" closable/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="v-nav-bar--right">
      <el-dropdown size="small" trigger="click" @command="handleCommand">
        <el-button type="text" size="mini">操作选项</el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="all">关闭全部</el-dropdown-item>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Tag from './Tag.vue'

export default defineComponent({
  name: 'VNavBar',
  components: {
    Tag
  },
  setup () {
    const navOffset = ref(0)

    const navStyle = computed(() => ({
      transform: `translateX(-${navOffset.value}px)`
    }))
    return {
      navOffset,
      navStyle
    }
  },
  methods: {
    scrollPrev() {
      const navScrollDom = this.$refs.navScroll as HTMLDivElement

      const containerSize = navScrollDom.offsetWidth
      const currentOffset = this.navOffset

      if (!currentOffset) return
      const newOffset = currentOffset > containerSize
        ? currentOffset - containerSize
        : 0
      this.navOffset = newOffset
    },
    scrollNext() {
      const navScrollDom = this.$refs.navScroll as HTMLDivElement
      const navDom = this.$refs.nav as HTMLDivElement

      const navSize = navDom.offsetWidth
      const containerSize = navScrollDom.offsetWidth
      const currentOffset = this.navOffset
      if (navSize - currentOffset <= containerSize) return
      const newOffset = navSize - currentOffset > containerSize * 2
        ? currentOffset + containerSize
        : (navSize - containerSize)
      this.navOffset = newOffset
    },
    scrollToActiveTab() {
      const nav = this.$refs.nav as HTMLDivElement
      const activeTab = this.$el.querySelector('.is-active')
      if (!activeTab) return
      const navScroll = this.$refs.navScroll as HTMLDivElement
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const maxOffset = nav.offsetWidth - navScrollBounding.width
      const currentOffset = this.navOffset
      let newOffset = currentOffset

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
      }

      newOffset = Math.max(newOffset, 0)
      this.navOffset = Math.min(newOffset, maxOffset)
    },
    handleCommand (command: string) {
      console.log(command)
    }
  },
  mounted () {
    setTimeout(() => {
      this.scrollToActiveTab()
    }, 3000)
  }
})
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>