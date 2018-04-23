<template>
  <div class="warp">
    <header-guide :goBack="true" headTitle="我的购物车">
      <div class="cart-edit" slot="cartEdit" @click="changeEdit">
        <div v-if="!edit"><i class="iconfont icon-write"></i>编辑</div>
        <div v-else>完成</div>
      </div>
    </header-guide>
    <div class="main-box main-box3 scroll" style="height:calc(100vh - 1.71rem);">
      <scroller class="cart-list" ref="my_scroller">

        <ul class="paddingtb">
          <li v-for="(item,index) in list" :key="index" ref="child" class="swipeli">
            <div class="flex-box swipecon">
            <div class="item" @click="checkitem(item.id)">
              <i class="iconfont" :class="checkList.indexOf(item.id)>-1?'icon-roundcheckfill':'icon-round'"></i>
            </div>
            <div class="img flex-box">
              <img :src="item.pic" alt="">
            </div>
            <div class="con">
              <div class="tit ellipsis2" >{{item.name}}</div>
              <div class="inventory">库存：{{item.stock}}</div>
              <div class="inventory">单价：{{item.price}}</div>
              <div class="count">￥{{item.price * item.bookNum}}</div>
              <div class="num"><i class="iconfont icon-close"></i>{{item.bookNum}}</div>
            </div>
            </div>
          </li>
        </ul>

        <div class="nodata" v-if="list.length==0">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nonedata"></use>
          </svg>
        </div>
      </scroller>
    </div>

    <div class="cart-bar flex-box">
      <div class="comput" :class="{'comput1':!edit}" v-if="!edit" @click="goComput">
        结算
      </div>
      <div class="comput" v-else @click="goDelete">
        删除
      </div>
    </div>

  </div>


</template>
<script>
  import * as mobile from '../config/mUtils'
  import {checkAll} from '../config/mixin'
  import * as getData from '../service/getData'
  import footGuide from '../components/footer/footGuide'
  import headerGuide from '../components/header/header'
  import alertTip from '../components/alertTip/alertTip'
  export default {
    data () {
      return {
        edit: false,
        checkList:[],
        list: [
          {
            id: 1,
            name: '泰戈尔诗集',
            price: 18.00,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,

          },{
            id: 2,
            name: '痕记',
            price: 22.80,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_02.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 3,
            name: '天堂之旅',
            price: 25.80,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_03.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 4,
            name: '钱钟书集（全10册）',
            price: 332.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_04.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 5,
            name: '赵俪生高昭—夫妻回忆录',
            price: 35.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_05.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 6,
            name: '无聊斋（张绍刚首部随笔杂文作品）',
            price: 36.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_06.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 7,
            name: '一颗热土豆是一张温馨的床',
            price: 37.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_07.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 8,
            name: '李戡戡乱记',
            price: 38.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_08.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 9,
            name: '生生世世未了缘',
            price: 39.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_09.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          },{
            id: 10,
            name: '一生有多少爱',
            price: 310.50,
            stock: 999,
            pic: 'http://p7f6eba64.bkt.clouddn.com/book_10.gif',
            bookNum:12,
            checked:false,
            checkedEdit:false,
          }
        ],


      }
    },

    mounted () {
    },
    components: {
      footGuide,
      headerGuide,
      alertTip,
    },

    computed: {

    },
    methods: {
      changeEdit () {//切换编辑状态
        this.edit = !this.edit
      },
      checkitem (id) {
        if(this.checkList.indexOf(id)>-1){
          this.checkList.remove(id)
        }else {
          this.checkList.push(id)
        }
      },
      goComput(ids){
      	alert(`去结算 ids:${this.checkList}`)
      },
      goDelete(ids){
        alert(`去删除 ids:${this.checkList}`)
      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .cart-edit{
    padding: .07rem 0;
    border-left: 1px solid #e2e2e2;
    width: 1.38rem;
    @include sc(.22rem,#696969);
    text-align: center;
    i{
      position: relative;
      left: -.05rem;
      top:.02rem;
    }
  }
  .cart-bar{
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
    position: relative;
    background-color: #fff;
    height: 0.85rem;

    .con{
      @include sc(.22rem,#666666);
      flex: 1;
      padding:0 .2rem;
      .all{
        flex: 1;
        padding-left: .5rem;
        position: relative;
        i{
          @include sc(.4rem,#aaaaaa);
          @include ct();
          left: 0;
          &.icon-roundcheckfill{
            color: $green;
          }
        }
      }
      .total{
        color: #464646;
        span{
          @include sc(.28rem,$red)
        }
      }
    }
    .comput{
      width: 100%;
      background-color: #fa6118;
      height: 100%;
      line-height: .85rem;
      text-align: center;

      @include sc(.26rem,#fff);
      span{
        @include sc(.26rem,#fff)
      }
      &.comput1{
        background-color: $green;
      }
    }
  }
  .cart-list{
    li{
      background-color: #fff;
      border-top: 1px solid #e7e7e7;
      border-bottom: 1px solid #e7e7e7;
      margin-bottom: .1rem;
      &:last-child{
        margin-bottom: 0;
      }
      .item{
        i{
          &.icon-disabeld{
            color: #ddd;
          }
          @include sc(.4rem,#aaaaaa);
          &.icon-roundcheckfill{
            color: $green;

          }
        }
      }
      .img{
        height: 1.3rem;
        width: 1.8rem;
        overflow: hidden;
        margin:0 .2rem;
        img{
          width: 100%;
        }
      }
      .con{
        position: relative;
        flex: 1;
        width: 1.99rem;
        .editspec{

          text-align: right;
          padding-right: 0.4rem;
          position: relative;
          i{
            position: absolute;
            right: 0;
          }

        }
        .isdisabeld{
          @include sc(.24rem,$red);
          margin-top: -.2rem;
          margin-bottom: .1rem;
          text-align: right;
        }
        .tit{
          @include sc(.23rem,#464646);
          margin-bottom: .05rem;
        }
        .inventory{
          margin-bottom: .05rem;
          color: #999;
        }
        .count{
          @include sc(.28rem,$red);
          margin-top: .25rem;
        }
        .num{
          position: absolute;
          right: 0;
          bottom: 0;
          color: #666;
          font-size: .28rem;
          i{
            color: #999;
            font-size: .2rem;
            margin-right: .05rem;

          }
        }
      }

    }
    .editnum{
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .buybox{
    width: 100%;
    position: absolute;
    bottom:0;
    left: 0;

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
  .showlist-enter-active, .showlist-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }
  .showlist-enter, .showlist-leave-active {
    opacity: 0;
    transform: translateY(100%);
  }

</style>
