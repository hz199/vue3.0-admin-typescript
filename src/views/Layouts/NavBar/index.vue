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
              v-for="item in vuexTagItems"
              :key="item.path"
              :class="{'is-active': item.type === 'primary'}"
            >
              <Tag :text="`${item.title}`" :type="item.type" :closable="!item.flag"/>
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
import { mapGetters, mapMutations } from 'vuex'
import Tag from './Tag.vue'
import { HOME_PATH } from '@/utils/const'

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
  computed: {
    ...mapGetters({
      vuexTagItems: 'navsTag/getTagItems',
      vuexCurrentRoute: 'navsTag/currentRoute'
    })
  },
  methods: {
    ...mapMutations('navsTag', [
      'deleteOthersTag',
      'deleteAllTag'
    ]),
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
      switch (command) {
        case 'all':
          if (this.vuexCurrentRoute !== HOME_PATH) {
            this.$router.push({path: HOME_PATH})
          }
          
          this.deleteAllTag()
          break
        case 'other':
          this.deleteOthersTag()
          break
      }
    }
  },
  watch: {
    vuexTagItems: {
      deep: true,
      handler () {
        this.scrollToActiveTab()
      }
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.scrollToActiveTab()
  //   }, 3000)
  // }
})
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>