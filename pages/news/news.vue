<template>
	<view class="d-flex flex-column over-hide" style="padding-bottom: 50px;">
		<tab-slider ref="mychild" :newsData="newsData" @changeindex="changeindex"></tab-slider>
		
		<swiper @change="swiperChange4" duration="150" :current="tabindex" :style="'height:'+ scrollHeight +'px;'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+ scrollHeight +'px;'">
					<bb-news :bbNnewsList="topNews"></bb-news>
				</scroll-view>
			</swiper-item>
			
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+ scrollHeight +'px;'">
					<bb-news :bbNnewsList="guoneiNews"></bb-news>
				</scroll-view>
			</swiper-item>
			
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+ scrollHeight +'px;'">
					<bb-news :bbNnewsList="kejiNews"></bb-news>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import TabSlider from '../currency/TabSlider.vue'
	import ItemTitle from '../currency/ItemTitle.vue'
	import BbNews from '../currency/BbNews.vue'
	import bb from '../../static/bb.json'
	export default {
		components: {
			TabSlider,
			ItemTitle,
			BbNews
		},
		data() {
			return {
				newsData: [
					{name: '珠城发布'},
					{name: '珠城服务台'},
					{name: '政府文件'}
				],
				tabindex: 0,
				TabCur4: 0,
				scrollHeight: 500,
				topNews: [],
				guoneiNews: [],
				kejiNews: []
			}
		},
		methods: {
			//点击tab选项卡切换swiper内容
			changeindex(index){
				this.tabindex = index
			},
			swiperChange4(e) {
				let current = e.target.current;
				this.$refs.mychild.newsIndex(current)
			}
		},
		created(){
			// uni.request({
			//     url: 'http://yapi.shzhanmeng.com/mock/383/news', //仅为示例，并非真实接口地址。
			// 	header: {
			// 		'Access-Control-Allow-Origin': '*',
			// 		'Content-Type': 'application/x-www-form-urlencoded'
			// 	},
			//     success: (res)=> {
			// 		this.topNews = res.data.result.top
			// 		this.guoneiNews = res.data.result.guonei
			// 		this.kejiNews = res.data.result.keji
			//     }
			// });
			let data = bb.result
			this.topNews = data.top
			this.guoneiNews = data.guonei
			this.kejiNews = data.keji
		},
		onLoad(){
			uni.getSystemInfo({
				success:res=> {
					this.scrollHeight = res.windowHeight - res.statusBarHeight - 96 / 750 * res.windowWidth //rpx转px
				}
			})
		}
	}
</script>

<style scoped>
div,
scroll-view,
swiper {
    box-sizing: border-box;
}
div {
  font-size: 28upx;
  background-color: #f1f1f1;
}
.swiper {
    height: 100vh;
}

.cu-bar {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 100upx;
    justify-content: space-between;
}

.cu-bar .action {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    max-width: 100%;
  background-color: #ffffff;
}

.cu-bar .action:first-child {
    margin-left: 30upx;
    font-size: 30upx;
}

.solid,
.solid-bottom {
    position: relative;
}

.solid::after,
.solid-bottom::after{
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
}

.solid::after {
    border: 1upx solid rgba(0, 0, 0, 0.1);
}

.solid-bottom::after {
    border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
}

.text-orange{
  color:#f37b1d
}
.text-black{
  color:#333333;
}
.bg-white{
    background-color: #ffffff;
}

.padding {
    padding: 2upx;
}

.margin-top {
    margin-top: 33upx;
}
.text-center {
    text-align: center;
}
</style>
