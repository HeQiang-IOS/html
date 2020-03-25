<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<e-empty ref="refempty" setStr="/static/logo.png" @sonToFather="dd"></e-empty>
		<button @click="login">button</button>
	</view>
</template>

<script>
	// import {networkAPI, urlPath} from '../../api'
	import empty from '../../commponents/empty.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			// empty
			'e-empty':empty
		},
		onLoad() {
			// this.loadData();
		},
		methods: {
		loadData(){
			this.$apiNet({
					url: this.$urlPath.index,
					success:data => {
						console.log(data)
					},
					fail: data => {
						console.log(data)
					}
			})
			},
		
		
		login(){
			this.$refs.refempty.childMethod()
			console.log(1)
		},
			
		dd(e){
			console.log(e)
		}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
