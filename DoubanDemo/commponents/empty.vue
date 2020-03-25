<template>
	<view class="empty-content">
		<image class="empty-content-image" :src="setStr" mode="aspectFit"></image>
		<button @click="sonClick">button</button>
		
	</view>
</template>

<script>
	export default {
		// 父传子值
		props:{
			setStr: {
				type:String,
				default:'empty'
			}
		},
		methods:{
			childMethod(){
				console.log('childMethod do...')
			},
			
			sonClick(){
				this.$emit('sonToFather', 'hello')
			}
		}
		
	
	}
</script>

<style>
</style>
