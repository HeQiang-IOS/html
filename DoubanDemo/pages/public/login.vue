<template>
	<view>
		<!-- <ges></ges> -->
	</view>
</template>

<script>
	// const ges = uni.requireNativePlugin('DC-GesUnlock')
	// // 查询是否存在手势密码
	// ges.checkGesPwd({
	//     key: 'login'
	// }, res => {
	//     //todo
	// });
	
	// // 创建手势密码
	// ges.addGesPwd({
	//     key: 'login'
	// }, res => {
	//     //todo
	// });
	
	// // 验证手势密码
	// ges.verifyGesPwd({
	//     key: 'login'
	// }, res => {
	//     //todo
	// });
	
	// // 删除手势密码
	// ges.delGesPwd('login',res => {
	//     //todo
	// });
	
	const PPGT = uni.requireNativePlugin('PP-Gesture');
	      // let headpath = 'xxxx.png'; //认证时用户头像（绝对路径，可不传）
	
	      //认证  headpath 头像  hasback是否支持返回（默认支持）
		   // headpath: abpath,hasback:false
	      PPGT.auth({}, result => {
	         //返回状态 {code:200,msg:''}
	      });
	
	      //重置 headpath 头像 
		    // headpath: abpath
	      PPGT.reset({}, result => {
	         //返回状态 {code:200,msg:''}
	      });
	
	      //注册
	      PPGT.reg({}, result => {
	         //返回状态 {code:200,msg:''}
	      });
</script>

<style>
</style>
