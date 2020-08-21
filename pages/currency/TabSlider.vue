<template>
	<view class="d-flex w-100 scroll-xy" style="height: 96upx;" @tap="changeTabindex">
		<text class="d-flex border-bottom j-center a-center" style="width: 230upx;font-size: 35upx;"
		:class="index === tabIndex ? 'border-red':''"
		v-for="(item, index) in newsData" :key="index" @tap="newsIndex(index)">{{item.name}}</text>
		<view v-if="isshowright" class="iconfont icon-fenlei font-big border-bottom text-muted" style="height: 95upx;width: 10%;"></view>
	</view>
</template>

<script>
	export default {
		props:{
			newsData: {
				type: Array,
				require: true,
				default: function(){
					return []
				}
			},
			isshowright: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				tabIndex: 0
			}
		},
		methods: {
			newsIndex(index){
				this.tabIndex = index
			},
			changeTabindex(index){
				this.$emit('changeindex',this.tabIndex)
			}
		}
	}
</script>

<style>
	.border-red{
		border-bottom: 6upx solid #FD6801;
	}
	.scroll-xy {
		overflow-x: scroll;
	}
</style>
