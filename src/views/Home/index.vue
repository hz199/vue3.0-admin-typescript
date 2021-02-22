<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col v-for="item in homeMock.tops" :key="item.title" :xs="24" :lg="6">
        <NumberCard
          :icon="item.icon"
          :title="item.title"
          :count="item.count"
          :color="item.color"
        ></NumberCard>
      </el-col>
      <!-- <el-col :xs="24" :lg="6">
        <NumberCard></NumberCard>
      </el-col>
      <el-col :xs="24" :lg="6">
        <NumberCard></NumberCard>
      </el-col>
      <el-col :xs="24" :lg="6">
        <NumberCard></NumberCard>
      </el-col> -->
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from './NumberCard/index.vue'
import homeMock from './homeMock'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      homeMock
    }
  },
  components: {
    NumberCard
  }
})
</script>
