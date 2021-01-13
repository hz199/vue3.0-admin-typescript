
<template>
  <el-breadcrumb class="breadcrumb-wrapper">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        class="breadcrumb"
        v-for="(item, index) in getBreadcrumb"
        :key="item.url + index || '/'"
      >
        <i :class="item.icon"></i>
        {{item.title}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      getBreadcrumb: []
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
