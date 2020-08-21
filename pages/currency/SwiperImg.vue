<template>
	<view>
	<!-- 轮播图组件 -->
		<swiper indicator-dots autoplay circular :interval="3000" :duration="1000" style="height: 375upx;">
			<block v-for="(item, index) in swipers" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<image lazy-load :src="item.icon" mode="widthFix" style="height: 375upx;"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swipers: [
				{
					"id":"1",
					"icon":"http://imooc.res.lgdsunday.club/swiper-1.jpg"
				},
				{
					"id":"2",
					"icon":"http://imooc.res.lgdsunday.club/swiper-2.jpg"
				},
				{
					"id":"3",
					"icon":"http://imooc.res.lgdsunday.club/swiper-7.jpg"
				}
			]
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
