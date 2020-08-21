<template>
	<view>
		<block v-for="(item ,index) in bbNnewsList" :key="index">
			<template v-if="item.thumbnail_pic_s02 && item.thumbnail_pic_s03">
				<view class="d-flex flex-column p-2 border-bottom" @click="$emit('href')">
					<text class="font-xl line-h-md" style="text-align: left;">{{item.title}}</text>
					<view class="d-flex j-sb">
						<image :src="item.thumbnail_pic_s" style="width: 33%;" mode="widthFix"></image>
						<image :src="item.thumbnail_pic_s02" style="width: 33%;" mode="widthFix"></image>
						<image :src="item.thumbnail_pic_s03" style="width: 33%;" mode="widthFix"></image>
					</view>
					<view class="font-md text-muted mt-1" style="text-align: left;">
						<text>{{item.author_name}} {{randNum}}评论  10分钟前</text>
					</view>
				</view>
			</template>

			<template  v-else>
				<view class="d-flex px-2 flex-wrap py-1 border-bottom" @click="$emit('href')">
					<view class="d-flex flex-column j-sb text-left" style="width: 66%;">
						<text class="font-xl line-h-md textOVerThree">{{item.title}}</text>
						<view class="font-md a-end text-muted mt-1" style="text-align: left;">
							<text>{{item.author_name}} {{randNum}}评论 10分钟前</text>
						</view>
					</view>
					<image class="ml-auto" :src="item.thumbnail_pic_s" style="width: 33%;" mode="widthFix"></image>
				</view>
			</template>
			
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			bbNnewsList: {
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
		methods: {
			
		},
		computed:{
			randNum(){
				return parseInt(Math.random() * 100) + 125
			}
		}
	}
</script>

<style>
</style>
