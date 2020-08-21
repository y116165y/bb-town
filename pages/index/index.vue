<template>
	<view class="d-flex flex-column over-hide" style="padding-bottom: 50px;">
		<swiper-img></swiper-img>
		<index-nav @href="navBus"></index-nav>
		<through-line></through-line>
		<news-list @href="navBus"></news-list>
		<through-line></through-line>
		<item-title :titletext="'政务服务'"></item-title>
		<common-content @href="navBus" :itemcontent="itemcontent"></common-content>
		<item-title :titletext="'便民生活'"></item-title>
		<common-content @href="navBus" :itemcontent="serveLife"></common-content>
	</view>
</template>

<script>
	import SwiperImg from '../currency/SwiperImg.vue'
	import IndexNav from '../currency/IndexNav.vue'
	import NewsList from '../currency/NewsList.vue'
	import ThroughLine from '../currency/ThroughLine.vue'
	import ItemTitle from '../currency/ItemTitle.vue'
	import CommonContent from '../currency/CommonContent.vue'
	export default {
		components:{
			SwiperImg,
			IndexNav,
			NewsList,
			ThroughLine,
			ItemTitle,
			CommonContent,
		},
		data() {
			return {
				itemcontent: [
					{ src:"../../static/img/item/184.png",text:"社保",desc:"社保缴纳详情" },
					{ src:"../../static/img/item/444.png",text:"公共资源",desc:"公共资源交易" },
					{ src:"../../static/img/item/45.png",text:"不动产",desc:"不动产权信息查询" },
					{ src:"../../static/img/item/452.png",text:"公积金",desc:"在线预约办理" }
				],
				serveLife: [
					{ src:"../../static/img/item/193.png",text:"燃气费",desc:"燃气费查询" },
					{ src:"../../static/img/item/445.png",text:"电费",desc:"电费查询" },
					{ src:"../../static/img/item/43.png",text:"自来水费",desc:"自来水费查询" },
					{ src:"../../static/img/item/433.png",text:"话费",desc:"话费充值" }
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			navBus(){
				uni.navigateTo({
					url:'../bus/bus'
				})
			}
		},
		computed:{
			
		}
	}
</script>

<style>

</style>
