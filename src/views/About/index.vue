<template>
  <div class="about">
    2
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getBrandColors } from '@/theme/variable'

export default defineComponent({
  name: 'About',
  mounted () {
    console.log(getBrandColors('#2d8cf0'))
  }
})
</script>
