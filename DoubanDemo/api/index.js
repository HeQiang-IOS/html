//判断登陆设备

let device_type = '';

//#ifdef H5
device_type = 'web'
//#endif

//#ifdef APP-PLUS
device_type = 'mobile'
//#endif

//#ifdef MP
device_type = 'wxapp'
//#endif

const baseUrl = 'https://douban.fm/j/v2/';

function getToken() {
	let tokentmp = '';
	try {
		tokentmp = uni.getStorageSync('token')
	} catch (e) {
		// Do something when catch error
	} finally {
		return tokentmp;
	}
}

export const urlPath = {
	index: 'artist/guess?limit=10&is_new_user=true',
	singerDetail: 'artist/',

}

export const networkAPI = params => {
	console.log(params.method);
	console.log(params.url);
	uni.request({
		// url: baseUrl + params.path,
		url: "https://bs.xiaobaideng.com:81/rank/base/rank/hotList",
		data: params.data,
		method: (params.method == undefined || params.method == 'GET') ? 'GET' : 'POST',
		// header:{
		// 	// 'Content-Type': 'application/x-www-form-urlencoded',
		// 	// 'XX-Token': getToken(),
		// 	// 'XX-Device-Type': device_type,
		// 	'Access-Control-Allow-Origin':'*'
		// }

		success: (res) => {
			console.log(res);
			params.success(res)
		},
		fail: (err) => {
			params.fail(err);
		},
	});
}

export const networkAPIM = params => {
	console.log(params.method);
	console.log(params.url);
	return new Promise((resolve, reject) => {
		uni.request({
			// url: baseUrl + params.path,
			url: "https://bs.xiaobaideng.com:81/rank/base/rank/hotList",
			data: params.data,
			method: (params.method == undefined || params.method == 'GET') ? 'GET' : 'POST',
			// header:{
			// 	// 'Content-Type': 'application/x-www-form-urlencoded',
			// 	// 'XX-Token': getToken(),
			// 	// 'XX-Device-Type': device_type,
			// 	'Access-Control-Allow-Origin':'*'
			// }

			success: (res) => {
				console.log(res);
				resolve(res)
			},
			fail: (err) => {
				reject(err);
			},
		});
		console.log(222)
	});
}

