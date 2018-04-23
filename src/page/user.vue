<template>
  <div class="warp page1">
    <header-guide :goBack="true" headTitle="首页" style="position: absolute;left: -64rem">
    </header-guide>
    <div class="main-box main-box2 scroll">
      <scroller ref="my_scroller" >
        <div style="padding-bottom: .2rem">
        <div class="usrtopbox">
          <div class="flex-box">
            <div class="userinfo flex-box">
              <div class="img"><img src="../assets/images/user.png"></div>
              <div class="info">
                <div class="p1">徐老师</div>
                <div class="p2">课程老师</div>
              </div>
            </div>
          </div>
        </div>

        <div class="g-items">
          <router-link class="g-item flex-box tit" :to="{path:'/order',query:{state:0}}" tag="div">
            <div class="con">我的订单</div><div class="rightcon">查看更多订单</div><i class="iconfont icon-right"></i>
          </router-link>
        </div>
          <div class="g-items">
            <div @click="call('400-606-7588')" class="g-item contact">
              联系客服
            </div>
          </div>
        </div>
      </scroller>
    </div>

    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import footGuide from '../components/footer/footGuide'
  import headerGuide from '../components/header/header'
  import loading from '../components/loading/loading'
  import {mapState, mapMutations,mapActions} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    mounted () {

    },
    components: {
      footGuide,
      headerGuide,
      loading
    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .g-item-s {
    padding: .15rem .4rem;
    .con{
      @include sc(.20rem,#999999)

    }
  }
  .orderstate{
    .li{
      flex: 1;
      text-align: center;
      @include sc(.20rem,#686868)
      position: relative;
      i{
        display: block;
        color: #fa7218;
        font-size: .53rem;
        margin-bottom: .05rem;
      }
      .tag{
        position: absolute;
        top:-.07rem;
        left:50%;
        margin-left: .1rem;
        border: .03rem solid $red;
        @include sc(.18rem,$red !important);
        padding: .02rem .1rem;
        border-radius: .5rem;
        background-color:#fff;
      }
    }
  }
  .usrtopbox{
    background-color: $green;
    height: 2rem;
    .userinfo{
      padding:.4rem 0;
      flex: 1;
      .img{
        @include wh(1.12rem,1.12rem);
        border: 3px solid rgba(255,255,255,.5);
        border-radius: 50%;
        margin-left: .4rem;
        overflow: hidden;
       img{
         width: 100%;
       }
      }
      .info{
        margin-left: .15rem;
        .p1{
          @include sc(.32rem,#fff);
        }
        .p2{
          margin-top: .05rem;
          @include sc(.24rem,#fff);
        }
      }

    }
    .level{
      box-shadow: -.3rem 0rem 0.5rem rgba(0, 0, 0, 0.05);
      background-color: #75dc16;
      @include sc(.20rem,#fffc07);
      @include wh(1.83rem,.55rem);
      padding:0 .05rem 0 .2rem;
      border-radius: .3rem 0 0 .3rem;
      svg{
        width: .4rem;
        margin-right: .1rem;
      }

    }
    .itembox{
      height: 1.08rem;
      padding:.2rem 0;
      background-color: #7ad357;
      border-top: 1px solid rgba(255,255,255,.2);
      box-shadow: 0rem -.07rem 0.5rem rgba(0, 0, 0, 0.05);
      li{
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(255,255,255,.3);
        .p1{
          @include sc(.36rem,#fff);
          line-height: 88%;
        }
        .p2{
          @include sc(.20rem,#fff);
          margin-top: .07rem;
        }
      }
    }
  }
  .contact{
    display: block;
    text-align: center;
    @include sc(.27rem,$green)
  }


</style>
