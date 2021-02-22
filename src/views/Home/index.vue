<template>
  <el-card shadow="never">
    <template #header>
      <span>卡片名称</span>
    </template>
    <!-- <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div> -->
    <HCountup :value='11111'></HCountup>

  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>
