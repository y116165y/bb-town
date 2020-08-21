<template>
	<view>
		<view class="d-flex j-center a-center" style="height: 360upx; background-color: rgba(253,104,1,0.7);">
			<image class="rounded-circle ml-2" src="../../static/img/head2.jpg" mode="widthFix"
			style="width: 135upx;height: 135upx;" lazy-load></image>
			<view class="ml-2">
				<text class="font-lg text-white">Mike Havener</text>
				<view class="">
					<text class="d-inline-block px-1"
					style="color:#53372B;background: #FFF1A0;border-top-left-radius: 20upx;border-bottom-left-radius: 20upx;">初级认证</text>
					<text class="d-inline-block px-1"
					style="color:#FFF1A0;background: #53372B;border-top-right-radius: 20upx;border-bottom-right-radius: 20upx;">已实名</text>
				</view>
			</view>
			<view class="ml-auto p-2 font-xd" @tap="show"
			style="color: #E3A826; background: #FFF1A0;border-top-left-radius: 50upx;border-bottom-left-radius: 50upx;">每日签到</view>
		</view>
		
		<ul-list :listdata="newsdata"></ul-list>
		<through-line></through-line>
		<ul-list :listdata="listdata"></ul-list>
		
		<common-pop :popClass="popClass" @hide="hide">
			<view class="uni-form-item uni-column">
				<view class="title">可自动聚焦的input</view>
				<input class="uni-input" focus placeholder="自动获得焦点" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">键盘右下角按钮显示为搜索</view>
				<input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制最大输入长度的input</view>
				<input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
			</view>
		</common-pop>
	</view>
</template>

<script>
	import ThroughLine from '../currency/ThroughLine.vue'
	import UlList from '../currency/UlList.vue'
	import CommonPop from '../currency/CommonPop.vue'
	export default {
		components:{
			ThroughLine,
			UlList,
			CommonPop
		},
		data() {
			return {
				popClass: 'none',
				newsdata: [
					{name:'消息中心',src:'icon-pinglun1'},
					{name:'我的收藏',src:'icon-xihuan'}
				],
				listdata: [
					{name:'账户管理',src:'icon-wode'},
					{name:'认证管理',src:'icon-huangguan'},
					{name:'积分管理',src:'icon-icon_cunchu'},
					{name:'我的分享',src:'icon-share'},
					{name:'设置',src:'icon-icon_set_up'}
					
				]
			}
		},
		methods: {
			show(){
				this.popClass = 'show'
			},
			hide(){
				this.popClass = 'hide'
				setTimeout(()=>{
					this.popClass = 'none'
				},200);
			}
		}
	}
</script>

<style>

</style>
