<template>
	<view>
		<web-view src="/hybrid/html/demo.html" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		methods: {
			getMessage(e) {
				uni.showModal({
					content: JSON.stringify(e.detail),
					showCancel: false
				})
			}
		}
	}
</script>

<style>
</style>
