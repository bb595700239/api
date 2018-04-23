 <template>
   <div class="cart" @click.stop.prevent="addCart(item.commodityId,item.specificationId,item.commodityIsSpecification)"><i class="iconfont icon-goods"></i></div>
</template>

<script>
  import * as getData from '../../service/getData'
  import * as mobile from '../../config/mUtils'
  import {mapState, mapMutations,mapActions} from 'vuex'
  export default {
    data(){
      return{
      }
    },
    mounted(){

    },
    props: ['item'],
    methods: {
      ...mapMutations([
        'SAVE_CARTLIST'
      ]),
      addCart(id,spec,isSpec){
        getData.addShoppingCart(id,1,spec||-1,isSpec).then(res =>{
          if(res.rCode =='fail'){
            mobile.toast('库存不足！')
            return
          }
          if(res.rCode=='noLogin'){
            mobile.toast('您还没有登录！')
          }else if(res.rCode =='noResAuthentic'){
            mobile.toast('您还没有认证！')
          }else {
            mobile.toast('加入购物车成功！')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
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
