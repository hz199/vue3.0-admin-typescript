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
    </el-row>
    <el-row>
      <el-col :xs="24" :lg="18">
        <HHistogram :dataSource="dataSource" ariaShow></HHistogram>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from './NumberCard/index.vue'
import homeMock from './homeMock'
import { baseLineMock } from '@/mocks/line'
import { HHistogram } from '@yyr1994/h-charts'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      homeMock,
      dataSource: baseLineMock(),
    }
  },
  components: {
    NumberCard,
    HHistogram
  },
  mounted () {
  }
})
</script>
