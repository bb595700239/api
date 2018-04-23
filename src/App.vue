<template>
  <div id="app" :class="$store.state.platform">
    <keep-alive v-if="!$route.meta.nokeepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>


  </div>
</template>

<script>
import * as mobile from './config/mUtils'
import * as getData from './service/getData'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
  }
}

</script>

<style lang="scss">
  @import 'assets/css/base';
  @import 'assets/font/iconfont.css';
  @import 'assets/css/swiper-3.4.2.min.css';
</style>

