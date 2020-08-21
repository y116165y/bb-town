<template>
	<view class="d-flex px-5 a-center j-center flex-wrap" @click="$emit('href')">
		<view class="d-flex rounded a-center py-1" style="width: 50%;"
		v-for="(item, index) in itemcontent" :key="index">
			<view class="d-flex j-center a-center flex-column" style="width: 170upx;">
				<text class="font-md">{{item.text}}</text>
				<text class="font text-light-muted text-type">{{item.desc}}</text>
			</view>
			<image class="ml-2" :src="item.src" style="width: 120upx;height: 120upx;" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			itemcontent: {
				type: Array,
				require: true,
				default: function(){
					return []
				}
			}
		},
		data() {
			return {

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
