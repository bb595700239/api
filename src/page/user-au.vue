<template>
  <div class="warp">
    <header-guide :goBack="true" headTitle="用户登录">
    </header-guide>
    <div class="main-box scroll" style="height:calc(100vh - .86rem);">
      <scroller ref="my_scroller">
        <div class="paddingt">
          <div class="g-items aligntop" style="margin-bottom: .2rem">
            <div class="g-item flex-box">
              <div class="label">手机号</div><div class="con"><input v-model="phone" type="text" placeholder="请输入手机号"></div>
            </div>
            <div class="g-item flex-box">
              <div class="label">密码</div><div class="con"><input v-model="password" type="password" placeholder="请输入密码"></div>
            </div>
          </div>
          <div class="surebtn marginlr">
            <div class="btn" @click="go">下一步</div>
          </div>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import headerGuide from '../components/header/header'
  import {imgCode} from '../config/env'
  export default {
    data () {
      return {
        phone: '',
        password: '',
      }
    },
    mounted () {
    },
    components: {
      headerGuide
    },
    methods: {
      go(){
        this.$router.replace('/list')
      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .imgcode{
    width: 2rem;
    height: .4rem;
    position: relative;
    top:-.185rem;
    img{
      width:100%;
    }
  }

</style>
