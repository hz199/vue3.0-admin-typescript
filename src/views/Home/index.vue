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
    <el-row style="margin-top: 10px;">
      <el-col :xs="24" :lg="16">
        <HHistogram class="chart-wrapper" :dataSource="dataSource" ariaShow></HHistogram>
      </el-col>
      <el-col :xs="24" :lg="8">
        <div class="chart-right">
          3
        </div>
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
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.chart-wrapper {
  @include white-bg-border;
  
}
.chart-right {
  height: 400px;
  @include white-bg-border;
  margin-left: 10px;
  padding: 5px;
}
</style>

