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
        <div id="echarts" style="width:500px;height:500px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NumberCard from './NumberCard/index.vue'
import homeMock from './homeMock'


import * as echarts from 'echarts/core'
import { ECBasicOption } from 'echarts/types/dist/shared'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([BarChart, GridComponent, CanvasRenderer, TooltipComponent])


export default defineComponent({
  name: 'Home',
  data () {
    return {
      homeMock
    }
  },
  components: {
    NumberCard
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('echarts') as HTMLDivElement)
    // 指定图表的配置项和数据
    const option: ECBasicOption = {
      baseOption: {
        title: {
          text: 'ECharts 入门示例'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      // title: {
      //     text: 'ECharts 入门示例'
      // },
      // tooltip: {},
      // legend: {
      //     data:['销量']
      // },
      // xAxis: {
      //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      // },
      // yAxis: {},
      // series: [{
      //     name: '销量',
      //     type: 'bar',
      //     data: [5, 20, 36, 10, 10, 20]
      // }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
})
</script>
