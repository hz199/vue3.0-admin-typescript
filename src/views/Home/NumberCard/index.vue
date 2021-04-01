<template>
  <div class="numberCard">
    <i class="iconWarp" :class="icon || 'el-icon-money'" :style="`color:${color};`"></i>
    <div class="content">
      <p class="title">{{title || '暂无标题'}}</p>
      <p class="number">
        <HCountup :value='count'></HCountup>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberCard',
  props: {
    icon: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => ''
    },
    count: {
      type: Number,
      default: () => 0
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.numberCard {
  @include white-bg-border;

  cursor: pointer;
  height: 80px;
  display: flex;
  padding: 16px 28px;
  margin-bottom: 5px;
  .iconWarp {
    font-size: 50px;
    vertical-align: middle;
    margin-right: 0.5em;
    line-height: 80px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-weight: bold;
      font-size: 16px;
      color: #222b45;
    }

    .number {
      font-size: 24px;
      margin-top: 16px;
    }
  }
}

</style>
