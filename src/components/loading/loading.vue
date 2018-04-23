 <template>
	<div class="loading_container">
	    <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*1 + 'rem'}">
	    </div>
    <div class="load_ellipse">
		</div>
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
        	this.timer = setInterval(() => {
        		this.positionY ++;
        	}, 600)
        },
        beforeDestroy(){
        	clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
	@keyframes load{
		0%   {transform: translateY(0px);}
		50%  {transform: translateY(-50px);}
		100% {transform: translateY(0px);}
	}
	@keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
    .loading_container{
    	position: fixed;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    	@include wh(1rem, 1rem);
    }
    .load_img{
    	@include wh(100%, 100%);
    	background: url('../../assets/images/icon_loading.png') no-repeat 0 0;
    	background-size: 1rem auto;
    	transform: translateY(0px);
    	animation: load .6s infinite ease-in-out;
    	position: relative;
    	z-index: 11;
    }
	.load_ellipse{
		position: absolute;
		@include wh(.8rem, .3rem);
    border-radius: 50%;
    background-color: #ddd;
    top: 50%;
    left: 50%;
    margin-left: -0.4rem;
    margin-top: .5rem;
		z-index: 10;
		animation: ellipse .6s infinite ease-in-out;
	}
</style>
