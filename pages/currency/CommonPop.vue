<template>
	<view class="_popup" :class="popClass">
		<view class="_mask" @tap.stop="$emit('hide')"></view>
		<view class="_body">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			popClass: {
				type: String,
				default: 'none'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	._popup ,._mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
	}
	._popup{
		z-index: 992;
		display: none;
	}
	._mask{
		z-index: 994;
		background-color: rgba(0,0,0,0.5);
	}
	._popup ._body {
		position: fixed;
		height: 1035upx;
		width: 92%;
		bottom: -1035upx;
		background-color: #FFFFFF;
		padding: 0 4%;
		border-radius: 20upx 20upx 0 0;
		z-index: 996;
		display: flex;
		flex-direction: column;
	}
	
	/* 动画效果蒙版和body内容区 */
	.show ._mask{
		animation: showPopmask 0.2s linear both;
	}
	.hide ._mask{
		animation: hidePopmask 0.2s linear both;
	}
	.show ._body{
		animation: showPopbody 0.2s linear both;
	}
	.hide ._body{
		animation: hidePopbody 0.2s linear both;
	}
	@keyframes showPopmask{
		0%{ opacity: 0;}
		100%{ opacity: 1;}
	}
	@keyframes hidePopmask{
		0%{ opacity: 1;}
		100%{ opacity: 0;}
	}
	@keyframes showPopbody{
		0%{ transform: translateY(0);}
		100%{ transform: translateY(-100%);}
	}
	@keyframes hidePopbody{
		0%{ transform: translateY(-100%);}
		100%{ transform: translateY(0);}
	}
	
	._popup.show {
		display: block;
	}
	._popup.hide {
		display: block;
	}
	._popup.none {
		display: none;
	}
</style>
