<template>
	<view class="d-flex p-2" style="height: 106upx;z-index: 999;" @click="$emit('href')">
		<image src="../../static/img/153.png" style="width: 98upx;height: 113upx;" mode="widthFix"></image>
		<view class="ml-1 px-2 line-h-sm over-hide scroll-content" :style="top">
			<view class="d-flex a-center" v-for="(item, index) in newsList" :key="index">
				<text class="font-weight font-md"
				:class="item.ishot ? 'iconfont icon-VIP blue' : 'iconfont icon-chaojihuati-chaojihuati pink'"></text>
				<text class="text-type font-md ml-1" style="width: 80%;">{{item.title}}</text>
				<text class="font text-light-muted ml-auto">昨天</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		components:{

		},
		data() {
			return {
				newsList: [
					{title:'蚌埠：建设交通枢纽助推城区高质量发展',ishot:true,datatime:1596415891},
					{title:'钟南山成为共和国勋章建议人选',ishot:false,datatime:1596415880},
					{title:'市委理论中心小组举行学习会',ishot:true,datatime:1596415812},
					{title:'官方通报干部疑出轨在妻死后失联',ishot:false,datatime:1596415791},
					{title:'八佰否认下发发行通知',ishot:true,datatime:1596415754},
					{title:'20岁女兵征服40吨远火车',ishot:false,datatime:1596415630}
				],
				activeIndex: 0
			}
		},
		created() {
			this.ScrollUp()
		},
		methods: {
			ScrollUp() {
				setInterval(_ => {
					if (this.activeIndex < this.newsList.length) {
						this.activeIndex += 1;
					} else {
						this.activeIndex = 0;
					}
				}, 1000);
			},
		},
		computed:{
			top() {
			    return -this.activeIndex * 50 + 'upx';
			}
		}
	}
</script>

<style scoped>
	.blue {
		color: #588DCF;
	}
	.pink {
		color: #F58291;
	}
	.scroll-content {
		position: relative;
		transition: top 0.5s;
	}
</style>
