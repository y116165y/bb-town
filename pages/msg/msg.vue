<template>
	<view>
		<view class="position-fixed w-100 p-2 border bg-white d-flex" style="height: 180upx;z-index: 9999;">
			<view class="d-flex font-lg flex-column">
				<view class="d-flex mt-1">
					<input class="border-bottom mt-2 font-md" style="width: 600upx;" type="text" placeholder="请输入出发点" />
					<view class="a-center j-center px-2 py-1 ml-2 font-md" style="color: #FD6801;border: 1upx solid #FD6801;">公交</view>
				</view>
				<view class="d-flex mt-2">
					<input class="border-bottom mt-2 font-md" style="width: 600upx;" type="text" placeholder="请输入目的地" />
					<view class="border a-center j-center px-2 py-1 ml-2 font-md" style="background-color: #FD6801;color: #EEEEEE;">搜索</view>
				</view>
			</view>
		</view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 1375upx;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 32.919,
				longitude: 117.35606,
				covers: [{
					latitude: 32.919,
					longitude: 117.35606,
					iconPath: '../../static/img/Locatoin-2.png'
				}, {
					latitude: 32.919,
					longitude: 117.35506,
					iconPath: '../../static/img/Locatoin-2.png'
				}]
			}
		},
		methods: {

		},
		onLoad(){

		}
	}
</script>

<style scoped>

</style>
