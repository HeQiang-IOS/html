<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<e-empty ref="refempty" setStr="/static/logo.png" @sonToFather="dd"></e-empty>
		<button @click="login">button</button>
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
	</view>
</template>

<script>
	// import {networkAPI, urlPath} from '../../api'
	import empty from '../../components/empty.vue'
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
			this.loadDataM();
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
		loadDataM(){
			let thend = this.$networkAPIM({
				url: this.$urlPath.index,
			});
			console.log(thend);
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

<style lang="scss">
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
	
	$primary-color: #333;
	
	body{
		color: $primary-color;
	}
	
	nav{
		ul{
			margin: 0;
			padding: 0;
			list-style: none;
		}
		ls {
			display: inline-block;
		}
		a {
			display: block;
		}
	}
	
	
</style>
