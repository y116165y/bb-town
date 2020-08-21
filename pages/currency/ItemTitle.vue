<template>
	<view class="d-flex p-2 a-center" style="height: 50upx;">
		<view class="rounded" style="width: 10upx;height: 100%; background-color: #588DCF;"></view>
		<text class="font-xd font-weight ml-2">{{titletext}}</text>
		<text class="font ml-auto text-light-muted">更多
			<text class="iconfont icon-you"></text>
		</text>
	</view>
</template>

<script>
	export default {
		props:{
			titletext: {
				type: String,
				require: true
			}
		},
		onLoad() {
			
		},
		methods: {
	
		},
		computed:{
			
		}
	}
</script>

<style>
</style>
