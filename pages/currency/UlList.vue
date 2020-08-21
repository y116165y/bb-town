<template>
	<view>
		<ul class="mt-2 px-4">
			<block v-for="(item, index) in listdata" :key="index">
				<li class="border-bottom d-flex a-center p-2">
					<text class="iconfont mr-1 font-weight font-lg" :class="item.src"></text>
					<text class="font-xl">{{item.name}}</text>
					<text class="iconfont icon-you ml-auto text-light-muted"></text>
				</li>
			</block>
		</ul>
	</view>
</template>

<script>
	export default {
		props: {
			listdata: {
				type: Array,
				require: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
</style>
