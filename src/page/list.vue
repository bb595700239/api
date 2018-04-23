<template>
  <div class="warp">
    <header-guide :goBack="false">
      <div class="searchbar-con" slot="search">
        <search-bar @goSearch="goSearch"></search-bar>
      </div>
    </header-guide>
    <div class="main-box scroll" style="height:calc(100vh - 1.7rem);padding-top: .2rem">
      <scroller>
      <div class="mainlist marginlr" style="padding-top: .2rem">
        <ul class="clear">
          <li class="li" v-for="(item,index) in list" :key="index" @click="$router.push('/detail')">
            <div class="img flex-box"><img :src="item.pic" alt=""></div>
            <div class="pro-info">
              <div class="protit">
                {{item.name}}
              </div>
              <div class="count">￥{{item.price}}</div>
              <div class="flex-box countbox">
                <div class="d3"></div>
                <div class="cart"><i class="iconfont icon-goods"></i></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </scroller>
    </div>
    <aside class="return_top" @click="backTop" v-if="showBackStatus">
      <svg class="back_top_svg">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
      </svg>
    </aside>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import * as mobile from '../config/mUtils'
  import * as getData from '../service/getData'
  import footGuide from '../components/footer/footGuide'
  import headerGuide from '../components/header/header'
  import searchBar from '../components/searchBar/searchBar'
  export default {
    data () {
      return {
        shops: [],
        pageIndex: 1,
        totalPage: 1,
        showBackStatus:false,
        list:[
          {
            id: 1,
            name: '泰戈尔诗集',
            price: 18.00,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif'
          },{
            id: 2,
            name: '痕记',
            price: 22.80,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_02.gif'
          },{
            id: 3,
            name: '天堂之旅',
            price: 25.80,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_03.gif'
          },{
            id: 4,
            name: '钱钟书集（全10册）',
            price: 332.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_04.gif'
          },{
            id: 5,
            name: '赵俪生高昭—夫妻回忆录',
            price: 35.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_05.gif'
          },{
            id: 6,
            name: '无聊斋（张绍刚首部随笔杂文作品）',
            price: 36.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_06.gif'
          },{
            id: 7,
            name: '一颗热土豆是一张温馨的床',
            price: 37.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_07.gif'
          },{
            id: 8,
            name: '李戡戡乱记',
            price: 38.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_08.gif'
          },{
            id: 9,
            name: '生生世世未了缘',
            price: 39.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_09.gif'
          },{
            id: 10,
            name: '一生有多少爱',
            price: 310.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_10.gif'
          }
        ],
      }
    },
    mounted () {
    },
    components: {
      footGuide,
      headerGuide,
      searchBar
    },

    computed: {

    },
    methods: {
      goSearch(val){
      	alert(`查找关于${val}的产品`)
      }
    },
    watch:{

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .top-searchbar{
    background-color: #f6f6f6;
    .categorybtn {
      padding: 0.1rem 0.2rem;
      i {
        @include sc(0.48rem,#707070)
      }
    }
  }
  .g-list{
    line-height: .4rem;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;

    position: relative;
    z-index: 200;
    li{
      &.price{
        svg{
          position: relative;
          top: .04rem;
          margin-left: .05rem;
          width: .28rem;
        }
        position: relative;

        i{
          position: absolute;
          font-size: .2rem;
          &.icon-triangledownfill{
            top: .16rem;
          }
        }
      }
      padding: .13rem 0;
      flex: 1;
      text-align: center;
      position: relative;
      @include sc(.22rem,#696969);
      &:last-child{
        border:none;
        &:after{
          display: none;
        }
      }
      &.active{
        color: $green;
      }
      i{
        position: relative;
        top:.02rem;
        margin-left: .05rem;
      }
      &:after{
        content: '';
        @include wh(1px,.3rem);
        background-color: #e0e0e0;
        position: absolute;
        right: 0;
        top: .2rem;
      }
    }

  }
  .showlist-enter-active, .showlist-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }
  .showlist-enter, .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }
  .sort_detail_type{
    height: 3rem;
    width: 100%;
    position: absolute;
    display:flex;
    top: 1.5rem;
    left: 0;
    border-top: 0.025rem solid $bc;
    background-color: #fff;
    z-index: 110;
    overflow: hidden;
    .listbox{
      @include wh(2rem !important,3rem !important);
      ul.list{
        li{
          line-height: 1.2;
          text-align: center;
          font-size: 0.22rem;
          color: #666666;
          padding: .2rem 0;
          border-bottom: 1px solid #f2f2f2;
          &.active{
            background-color: #f7f7f7;
          }
          &:last-child{
            border-bottom: 0;
          }
        }
      }
    }
    .sublistbox{
      left: 2rem;
      @include wh(4.4rem !important,3rem !important);
      background-color: #f5f5f5;
      padding: 0 .2rem;
      ul.sublist{
        li{
          @include wh(1.8rem,0.55rem);
          padding:0 .05rem ;
          line-height: .55rem;
          float: left;
          border:1px solid #c4c4c4;
          border-radius: .05rem;
          text-align: center;
          margin: .1rem;
          @include sc(.2rem,#666666);
          &.active{
            border-color: $green;
            color: $green;
          }
        }
      }
    }

  }

  .iOS#app{
    .main-box{
      height: calc(100vh - 2.75rem) !important;
    }
    .sort_detail_type{
      top:1.8rem;
    }
  }
  .cart{
    padding-top: .03rem;
    @include wh(.67rem,.4rem);
    border: 1px solid $red;
    background-color: #fdf0ec;
    text-align: center;
    border-radius: .19rem;
    position: relative;
    i{
      @include center;
      margin-top: .01rem;
      @include sc(.25rem,$red)
    }
  }
</style>
