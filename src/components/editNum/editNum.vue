 <template>
   <div class="editnum flex-box">
     <div class="move" @click="editnum(-1)"><i class="iconfont icon-move" :class="source<=1?'disabled':''" ></i></div>
     <input type="number" v-model="source">
     <div class="add" @click="editnum(1)"><i class="iconfont icon-add"></i></div>
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
      console.log(this.source)
    },
    props: ['source'],
    methods: {
      editnum(num){
        this.$emit('editnum',num)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

</style>
