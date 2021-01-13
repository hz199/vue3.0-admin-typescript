<template>
  <div class="home">
    <!-- <el-button type="primary" @click="setUserInfo">点击</el-button>
    <el-button type="primary" @click="fetchUserInfo">点击fetchUserInfo</el-button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { AuthMutationTypes, AuthActionTypes } from '@/store/modules/auth'

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup () {
    const store = useStore()

    const setUserInfo = () => {
      store.commit(AuthMutationTypes.SET_USER_INFO, { name: '佛挡杀佛' })
    }

    const fetchUserInfo = async () => {
      store.dispatch(AuthActionTypes.FETCH_USER_INFO)
    }

    return {
      setUserInfo,
      fetchUserInfo
    }
  },
  mounted () {
    // console.log(this.$store.state)
  }

})
</script>
