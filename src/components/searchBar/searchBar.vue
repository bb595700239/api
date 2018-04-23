<template>
  <form class="index-searchbox flex-box" action>
    <input type="search" class="searchinput" placeholder="请输入关键词搜索您想要的商品..." v-model="searchVal" @keydown.enter.prevent="searchTarget">
    <i class="iconfont icon-close" @click.prevent="searchRemove" v-if="searchVal.length"></i>
    <i class="iconfont icon-search" @click.prevent="searchTarget" v-else></i>
  </form>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        searchVal: ''
      }
    },
    mounted(){
    },
    computed: {
    },
    methods: {
      ...mapMutations([
        'SAVE_SEARCHKEY'
      ]),
      searchRemove () {
        this.searchVal = ''
      },
      searchTarget () {
        document.querySelector('.searchinput').blur()
        this.$emit('goSearch',this.searchVal)
      },
    }
  }

</script>
<style scoped lang="scss">
  @import '../../assets/css/mixin';
  .index-searchbox{
    border: 1px solid #e2e3e3; background-color: #fff; padding: .1rem .2rem; border-radius: .3rem;
    display: flex;
    input{  background: none;font-size: .23rem;flex: 1;}
    i{
      @include wh(.5rem,auto);
      text-align: right;
      display: block;
      @include sc(.35rem,$green)
    }
  }

</style>
