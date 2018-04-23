<template>
  <header class="top-searchbar flex-box">
    <div class="back"  v-if="goBack" @click="$router.go(-1)">
      <i class="iconfont icon-back_android"></i>
    </div>
    <div style="flex: 1" v-if="headTitle">
    <section class="title-head ellipsis">
      {{headTitle}}
    </section>
    </div>
    <slot name="search"></slot>
    <slot name="cartEdit"></slot>
  </header>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import * as getData from '../../service/getData'
  import loading from '../loading/loading'
  import alertTip from '../alertTip/alertTip'
  export default {
    data () {
      return {

      }
    },

    props: ['searchKey', 'headTitle', 'goBack'],
    computed: {
      ...mapState([
        'userInfo',
        'activeCityOnce',
        'showLoading',
        'showAlert',
        'alertMessage'
      ])
    },

    methods:{
      ...mapActions([
        'getUserInfo'
      ]),
      ...mapMutations([
        'SAVE_ACTIVECITY'
      ]),
      /*getUserInfo () {
        this.$store.commit('getUserInfo')
      }*/
    },
    components: {
      loading,
      alertTip
    },
  }
</script>
<style scoped lang="scss">
  @import '../../assets/css/mixin';
  .top-searchbar{
    position: relative;
    z-index: 100;
    height: .86rem;
    background-color: #f6f6f6;
    border-bottom:1px solid #ddd;
    .back{
      padding: 0.1rem 0.2rem;
      i{
        @include sc(.48rem,#707070)
      }
    }
    .searchbar-con{
      flex: 1;
      margin:0 .1rem;
    }
    .title-head{
      @include center;
      width: 50%;
      text-align: center;
      @include sc(0.26rem, #464646);
      text-align: center;
    }
  }
</style>
