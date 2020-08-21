<template>
	<view class="row m-2 bg-white">
		<view class="span-5 py-1 d-flex flex-column a-center j-center" @click="$emit('href')"
		v-for="(item, index) in indexNavs" :key="index">
			<image :src="item.src" style="width: 110upx;height: 110upx;" mode="widthFix"></image>
			<text class="font">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		components:{

		},
		data() {
			return {
				indexNavs: [
					{ src:"../../static/img/indexnav/1.png",text:"实时路况" },
					{ src:"../../static/img/indexnav/2.png",text:"公交扫码" },
					{ src:"../../static/img/indexnav/3.png",text:"掌上公交" },
					{ src:"../../static/img/indexnav/4.png",text:"社保" },
					{ src:"../../static/img/indexnav/5.png",text:"不动产" },
					{ src:"../../static/img/indexnav/6.png",text:"公积金" },
					{ src:"../../static/img/indexnav/7.png",text:"旅游年卡" },
					{ src:"../../static/img/indexnav/8.png",text:"更多" }
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
