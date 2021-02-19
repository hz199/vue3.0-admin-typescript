<template>
  <div class="home">
    <!-- <el-button type="primary" @click="setUserInfo">点击</el-button>
    <el-button type="primary" @click="fetchUserInfo">点击fetchUserInfo</el-button> -->

    发的发生大多数范德萨
    <p v-for="i in 100" :key="i">{{i}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>
