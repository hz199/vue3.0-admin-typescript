
<template>
  <el-breadcrumb class="breadcrumb-wrapper">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        class="breadcrumb"
        v-for="(item, index) in getBreadcrumbs"
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
import { mapGetters } from 'vuex'

export default defineComponent({
  data () {
    return {
      getBreadcrumb: []
    }
  },
  computed: {
    ...mapGetters([
      'getBreadcrumbs'
    ])
  }
})
</script>
<style lang="scss" scoped>
.breadcrumb-wrapper {
  margin-left: 20px;
}

.breadcrumb-enter-active {
  transition: all 0.8s;
}

// .breadcrumb-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
