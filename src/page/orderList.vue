<template>
  <div class="warp page1">
    <header-guide :goBack="true" headTitle="我的订单">
    </header-guide>
    <div class="main-box main-box4 scroll" style="height: calc(100vh - 1.53rem);">
      <scroller ref="my_scroller">
      <ul class="order-list">
        <li class="orderli">
          <div class="ordertit flex-box">
            <div class="ordernum">订单号：20171018101513262058</div>
          </div>
          <ul class="shoplist">
            <li class="flex-box subli">
              <div class="img flex-box">
                <img :src="list[0].pic" alt="">
              </div>
              <div class="info">
                <p class="p1 ellipsis2">{{list[0].name}}</p>
                <p class="count">￥{{list[0].price}}</p>
                <p class="num">
                  <i class="iconfont icon-close"></i>1</p>
              </div>
            </li>
          </ul>
          <div class="con flex-box">
            <div class="d3">合计:<span><small>￥</small>18</span></div>
          </div>
        </li>
      </ul>
      </scroller>
    </div>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import headerGuide from '../components/header/header'
  import alertTip from '../components/alertTip/alertTip'
  export default {
    data () {
      return {
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
      headerGuide
    },

    computed: {

    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .g-list{
    line-height: .4rem;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;

    position: relative;
    z-index: 200;
    li{
      padding: .13rem 0;
      flex: 1;
      text-align: center;
      @include sc(.22rem,#696969);
      &.active{
        color: $green;
        position: relative;
      }
      &.active:after{
        content: '';

        position: absolute;
        bottom: -1px;
        width: 100%;
        height: 2px;
        background-color: $green;
        left:0;
      }
    }
  }

</style>
