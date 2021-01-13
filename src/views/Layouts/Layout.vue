
<template>
  <el-container class="layout">
    <el-aside style="width:auto;" class="aside">
      <!-- <Menus></Menus> -->
      <el-drawer
        v-if="getIsPhoneStatus"
        custom-class="layout-drawer"
        size="200"
        v-model="drawerStatus"
        @close="handleDeawerClose"
        direction="ltr"
        :with-header="false">
        <Menus/>
      </el-drawer>

      <Menus v-else></Menus>
    </el-aside>

    <el-container class="right-container">
      <el-header class="header clearfix">
        <HeaderContent></HeaderContent>
      </el-header>
      <!-- <div>11</div> -->
      <NavBar></NavBar>

      <el-main style="padding:0;">
        <!-- <el-scrollbar class="scrollbar" :native="false" :noresize="true"> -->
          <router-view v-slot="{ Component }">
            <transition name="fadeTran" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        <!-- </el-scrollbar> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { useStore } from '@/store'
import { SettingMutationTypes } from '@/store/modules/setting'

import Menus from './Menus/Menus.vue'
import HeaderContent from './HeaderContent.vue'
import NavBar from './NavBar/index.vue'

export default defineComponent({
  components: {
    Menus,
    HeaderContent,
    NavBar
  },
  setup () {
    const store = useStore()
    
    const setSliderCollapse = () => {
      store.commit(SettingMutationTypes.SET_SLIDER_COLLAPSE)
    }

    return {
      setSliderCollapse
    }
  },
  data() {
    return {
      drawerStatus: false
    }
  },
  computed: {
    ...mapGetters([
      'getSliderCollapse',
      'getIsPhoneStatus'
    ])
  },
  methods: {
    handleDeawerClose () {
      this.setSliderCollapse()
    }
  },
  watch: {
    getSliderCollapse (value) {
      if (!this.getIsPhoneStatus) {
        this.drawerStatus = false
      } else {
        this.drawerStatus = value
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.layout {
  .aside {
    height: 100vh;
    overflow-y: auto;
    background: rgb(81, 90, 110);
  }
  .right-container {
    max-height: 100vh;
    min-height: 100vh;
  }
  .header {
    line-height: 60px;
    border-bottom: 1px solid #ebeef5;
  }
}
.fadeTran-enter-active {
  animation: bounce-in 0.3s ease-in-out both;
}

@keyframes bounce-in {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>