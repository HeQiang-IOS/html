<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<e-empty ref="refempty" setStr="/static/logo.png" @sonToFather="dd"></e-empty>
		<button @click="login">button</button>
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success" @click="loadDataM"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
		<button @click="appleLogin" v-show="showAppleLogin">Apple Login</button>
		<button @click="weixinLogin">Weixin Login</button>
		<button @click="alipay">alipay</button>
		<button @click="wxpay">wxpay</button>
	</view>
</template>

<script>
// import {networkAPI, urlPath} from '../../api'
import empty from '../../components/empty.vue';

import py from '../../common/py.js'
export default {
	data() {
		return {
			title: 'Hello',
			showAppleLogin: false
		};
	},
	components: {
		// empty
		'e-empty': empty
	},
	onLoad() {
		// this.loadData();
		// this.loadDataM();
		this.isShowAppleLogin();
		console.log(py.getFullChars("张三"));
		console.log(py.getFullChars("撒贝宁"));
	},
	methods: {
		loadData() {
			this.$apiNet({
				url: this.$urlPath.index,
				success: data => {
					console.log(data);
				},
				fail: data => {
					console.log(data);
				}
			});
		},
		isShowAppleLogin() {
			var that = this;
			uni.getSystemInfo({
				complete: function(data) {
					console.log(data);
					console.log(data.platform.indexOf('ios') != -1);
					console.log(Number(data.system) >= 13.0);
					if (data.platform.indexOf('ios') != -1 && Number(data.system) >= 13.0) {
						that.showAppleLogin = true;
					}
				}
			});
		},

		loadDataM() {
			let thend = this.$networkAPIM({
				url: this.$urlPath.index
			});
			console.log(thend);
		},

		login() {
			this.$refs.refempty.childMethod();
			console.log(1);
		},

		appleLogin() {
			uni.login({
				provider: 'apple',
				success: function(loginRes) {
					console.log(loginRes);
					// uni.showModal({
					// 	title:'提示',
					// 	content:loginRes,
					// });
					uni.getUserInfo({
						provider: 'apple',
						success(data) {
							console.log(data);
							// uni.showToast({
							// 	title:"先给我不犯法",
							// 	duration:2000
							// })
						}
					});
				},
				fail: function(err) {
					console.log(err);
					uni.showToast({
						title: err.toString(),
						duration: 2000
					});
				}
			});
		},

		weixinLogin() {
			uni.login({
				provider: 'weixin',
				success: function(data) {
					console.log(data);
					uni.getUserInfo({
						provider: 'weixin',
						success(data) {
							console.log(data);
							// uni.showToast({
							// 	title:"先给我不犯法",
							// 	duration:2000
							// })
						}
					});
				},
				fail: function(err) {
					console.log(err);
				}
			});
		},
		alipay() {
			uni.requestPayment({
				provider: 'alipay',
				orderInfo: 'orderInfo',
				success: function(res) {
					console.log(JSON.stringify(res));
				},
				fail: function(err) {
					console.log(JSON.stringify(err));
				}
			});
		},
		wxpay() {
			uni.requestPayment({
				provider: 'wxpay',
				timeStamp: String(Date.now()),
				nonceStr: 'A1B2C3D4E5',
				package: 'prepay_id=wx20180101abcdefg',
				signType: 'MD5',
				paySign: '',
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		dd(e) {
			console.log(e);
		}
	}
};
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

body {
	color: $primary-color;
}

nav {
	ul {
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
