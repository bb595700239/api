  <template>
  <div class="warp">
    <header-guide :goBack="true" headTitle="商品详情" style="position: absolute;left: -64rem">
    </header-guide>
    <div>
    <div class="top-bar clear">
      <div class="back" @click="$router.go(-1)"><i class="iconfont icon-back"></i></div>
      <div @click="$router.push('/cart/')" class="cart" ref="cartContainer"><i class="iconfont icon-cart"></i></div>
    </div>
    <div class="main-box main-box2 scroll" >
      <scroller ref="my_scroller">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container2">
          <swiper-slide class="flex-box">
            <img :src="detials.pic">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="detail-con flex-box">
          <div class="con-l">
            <div class="tit ellipsis2">{{detials.name}}</div>
            <div class="count flex-box">
              <div class="current">￥{{detials.price}}</div>
            </div>
          </div>
        </div>

        <ul class="detail-tory flex-box">
          <li>库存：{{detials.stock}}<span>件</span></li>
        </ul>
        <div class="detail-info">
          <div class="tit"><div class="info"><i class="iconfont icon-pic"></i>商品详情</div></div>
          <div class="con">
            {{detials.name}}
          </div>
        </div>
      </scroller>
    </div>
    <div class="buy-bar flex-box">
      <div class="home item" @click="$router.push('/list')"><i class="iconfont icon-shop"></i>店铺首页</div>
      <div class="add">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
    </div>

  </div>
</template>
<script>
  import * as mobile from '../config/mUtils'
  import * as getData from '../service/getData'
  import footGuide from '../components/footer/footGuide'
  import alertTip from '../components/alertTip/alertTip'
  import headerGuide from '../components/header/header'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          paginationClickable: true
        },
        detials:{
          id: 1,
          name: '泰戈尔诗集',
          price: 18.00,
          stock: 999,
          pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif',
          bookNum:12,
          checked:false,
          checkedEdit:false,
        }

      }
    },
    components: {
      footGuide,
      alertTip,
      headerGuide
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  @keyframes mymove{
    0%   { transform: scale(1) }
    25%  { transform: scale(.8) }
    50%  { transform: scale(1.1) }
    75%  { transform: scale(.9) }
    100% { transform: scale(1) }
  }
  @-moz-keyframes mymove{
    0%   { transform: scale(1) }
    25%  { transform: scale(.8) }
    50%  { transform: scale(1.1) }
    75%  { transform: scale(.9) }
    100% { transform: scale(1) }
  }
  @-webkit-keyframes mymove{
    0%   { transform: scale(1) }
    25%  { transform: scale(.8) }
    50%  { transform: scale(1.1) }
    75%  { transform: scale(.9) }
    100% { transform: scale(1) }
  }
  @-o-keyframes mymove{
    0%   { transform: scale(1) }
    25%  { transform: scale(.8) }
    50%  { transform: scale(1.1) }
    75%  { transform: scale(.9) }
    100% { transform: scale(1) }
  }
  .sharebox{
    position: fixed;
    z-index:9999;
    top:0;
    left:0;
    background-color: rgba(0,0,0,.5);
    @include wh(100%,100%)
    img{
      width: 100%;
    }
  }
  .move_in_cart{
    animation: mymove .5s ease-in-out;
  }
  .swiper-container2{
    @include wh(100%, 6.4rem);
    overflow: hidden;
    img{
      @include wh(100%, auto)
    }

  }
  .move_dot{
    position: fixed;
    top: 20px;
    right: 20px;

    svg{
      @include wh(.6rem, .6rem);
      fill: $red;
    }
  }
  .top-bar{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: .2rem;
    .back,.cart{
      @include wh(.66rem,.66rem);
      background-color: rgba(0,0,0,.66);
      border-radius: 100%;
      position: relative;
      float: left;
      i{
        @include sc(.35rem,#fff)
        @include center;
      }
    }
    .cart{
      float: right;
      .mytag{
        position: absolute;
        top:-.1rem;
        right:-.1rem;
        border: .02rem solid #fff;
        @include sc(.18rem,#fff);
        padding: 0rem .08rem;
        border-radius: .5rem;
        background-color: #fa6118;
      }
    }
  }
  .detail-con{
    background-color: #fff;
    padding: .2rem;
    .con-l{
      flex: 1;
      border-right: 1px solid #dddddd;
      padding-right: .2rem;
      .tit{
        @include sc(.26rem,#464646);
      }
      .count{
        align-items: baseline;
        .current{
          font-size: .42rem;
          color: $red;
          margin-top: .05rem;
        }
        .price{
          margin-left: .15rem;
          font-size: .24rem;
          text-decoration: line-through;
        }
        i{
          flex: 1;
          text-align: right;
          font-size: .26rem;
        }
      }
    }
    .con-r{
      width: 1.1rem;
      padding-left: .2rem;
      text-align: center;
      @include sc(.22rem,#666);
      i{
        @include sc(.55rem,#696969);
        margin-bottom: .08rem;
        display: block;
      }
    }
  }
  .detail-tory{
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    background-color: #f9f9f9;
    padding: 0 .2rem;
    margin-bottom: .1rem;
    li{
      flex: 1;
      height: .7rem;
      line-height:.7rem;
    }
  }
  .detail-type{
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    background-color: #f9f9f9;
    li{
      display: inline-block;
      height: .76rem;
      line-height: .76rem;
      margin: 0 .2rem;
      @include sc(.20rem,#797979);
      position: relative;
      padding-left: .4rem;
      i{
        @include sc(.35rem,$green);
        margin-right: .05rem;
        position: absolute;
        top:0.01rem;
        left:0rem;
      }
    }
  }
  .detail-info{
    background-color: #fff;

    .tit{
      text-align: center;
      .info{
        margin: 0 auto;
        display: inline-block;
        height: .7rem;
        line-height: .6rem;
        position: relative;
        @include sc(.2rem,#aeaeae)
        i{
          @include sc(.4rem,#cdcdcd)
          margin-right: .1rem;
          position: relative;
          top:.08rem;
        }
        &:after,&:before{
          content: '';
          @include wh(1.2rem,1px)
          position: absolute;

          background-color: #e0e0e0;
        }
        &:after{
          left:-1.4rem;
          top:50%;
        }
        &:before{
          right:-1.4rem;
          top:50%;
        }
      }
    }
    .con{
      padding: .1rem .2rem;
      padding-bottom: .35rem;
      p{

        img{width: 100%;}
      }
    }
    img{
      width: 100%;
    }
  }
  .buy-bar{
    height: 0.85rem;
    background-color: #fff;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
    .item{
      @include wh(1.19rem,0.85rem);
      padding: .07rem .09rem;
      text-align: center;
      @include sc(.18rem,#696969);
      border-left: 1px solid #e5e5e5;
      &:first-child{
        border-left:none;
      }
      i{
        &.icon-likefill{
          color: $green;
        }
        display: block;
        margin-bottom: .03rem;
        @include sc(.35rem,#a8a8a8)
      }
    }
    .add,.buy{
      flex:1;
      text-align: center;
      @include sc(.24rem,#fff)
      height:.85rem;
      line-height:.85rem;
    }
    .add{
      background-color: #ff9b0c;
    }
    .buy{
      background-color: #ff410e;
    }

  }
  .showlist-enter-active, .showlist-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }
  .showlist-enter, .showlist-leave-active {
    opacity: 0;
    transform: translateY(100%);
  }
  .buybox{
    width: 100%;
    position: absolute;
    bottom:0;
    left: 0;
    box-sizing: border-box;
    border-top: 0.025rem solid $bc;
    background-color: #fff;
    z-index: 110;
    padding:.2rem;
    padding-bottom: 1.15rem;
    .box-h{
      display: flex;
      height: 1.6rem;
      .img{
        background-color: #fff;
        border-radius: .1rem;
        padding: .1rem;
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        border: 1px solid #ddd;
        position: relative;
        top: -.7rem;
        margin-right: .2rem;
        img{

          width: 100%;
        }
      }
      .tit{
        .p1{
          @include sc(.28rem,$red)
        }
        .p2{
          @include sc(.24rem,#696969)
          margin-top: .1rem;
        }
        .p3{
          margin-top: .05rem;
        }
      }

    }
    .spec-box{
      margin-bottom: .2rem;
      max-height: 2rem;
      overflow: hidden;
      .item{
        background-color: #eeeeee;
        padding: .08rem .15rem;
        display: inline-block;
        margin:.1rem;
        border-radius: .05rem;
        &.active{
          color: #fff;
          background-color: #f95218;
        }
      }
    }
    .btnbox{
      height: .85rem;
      width: 100%;
      position: absolute;
      bottom: -.01rem;
      left: 0;
      .btns{
        flex: 1;
        background-color: $red;
        text-align: center;
        line-height: .85rem;
        @include sc(.28rem,#fff)
      }
      .btns2{
        background-color: $yellow;
      }
    }

    .close{
      position: absolute;
      top: .2rem;
      right: .2rem;
      i{
        @include sc(.5rem,#5f646e)
      }
    }
  }

</style>
