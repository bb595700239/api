<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/list'})" class="guide_item" :class="active('list') ?'active':''">
        	<i class="iconfont" :class="active('list') ? 'icon-homefill' : 'icon-home'"></i>
          <span>首页</span>
        </section>
        <section @click = "gotoAddress('/cart')" class="guide_item" :class="active('list')?'cart':''">
          <i class="iconfont" :class="active('cart') ? 'icon-cartfill' : 'icon-cart'"></i>
          <span>购物车</span>
        </section>
        <section @click = "gotoAddress('/user')" class="guide_item" :class="active('user')?'active':''">
            <i class="iconfont" :class="active('user') ? 'icon-myfill' : 'icon-my'"></i>
            <span>会员中心</span>
        </section>
    </section>
</template>

<script>
    import {mapState , mapMutations , mapActions} from 'vuex'
    export default {
    	data(){
            return{
            }
        },
        mounted(){

        },
        computed: {
            ...mapState([
                'cartList'

            ]),

        },
        methods: {
          ...mapActions([
            'getCartlist'
          ]),
        	gotoAddress(path){
        		this.$router.push(path)
        	},
          active(page){
        	  return this.$route.path.indexOf(page) !== -1
          }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../assets/css/mixin';

    #foot_guide{
        background-color: #fff;
        position: absolute;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 0.85rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
      position: relative;
      .iconfont{
        display: block;
        color: #707070;
        @include wh(1.5rem, .44rem);
        margin-top: .06rem;
        font-size: .43rem;
      }
      span{
        @include sc(.18rem, #464646);
        line-height: .32rem;
      }
      &.active{
        .iconfont{
          color: $green;
        }
        span{
          color: $green;
        }
      }
      .mytag{
        position: absolute;
        top:.03rem;
        left:.83rem;
        border: .03rem solid #fff;
        @include sc(.18rem,#fff);
        color: #fff !important;
        padding: .02rem .1rem;
        border-radius: .5rem;
        background-color: #fa6118;
      }
    }

</style>
