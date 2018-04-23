 <template>
  <div class="alet_container flex-box" @click="closeTip">
    <section class="tip_text_container">
      <slot name="info"></slot>
      <div class="btns-box flex-box">
        <div class="btns-close btns" @click="closeTip" v-if="isconfirm">取消</div>
        <div class="btns-sure btns" @click="sureTip">确认</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        positionY: 0,
        timer: null,
      }
    },
    mounted(){

    },
    props: ['isconfirm'],
    methods: {
      closeTip(){
        this.$emit('closeTip')
      },
      sureTip(){
      this.$emit('sureTip')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
    .alet_container{
    	position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
    }
    .tip_text_container{
      margin-left: .7rem;
      width: 5rem;
      background-color: #fff;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
      .con{
        text-align: center;
        i.icon-warn{
          @include sc(1rem,$yellow);
          display: block;
          margin-bottom: .1rem;
        }
        padding:.4rem .2rem;
        .tit{
          @include sc(.26rem,#444)
        }
      }

      .btns-box{
        width: 100%;
        border-top: 1px solid #eee;
        .btns{
          flex: 1;
          text-align: center;
          height: .8rem;
          line-height: .8rem;
          border-right: 1px solid #eee;
          &.btns-sure{
            color: $red;
          }
          @include sc(.26rem,#646464)
          &:last-child{
            border:none;
          }
        }
      }
    }

</style>
