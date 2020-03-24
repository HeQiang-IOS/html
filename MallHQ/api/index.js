const baseUrl = "";

	
export const getInTheater = params => (
	new Promise((resolve, reject)=>{
		uni.request({
			url:`${baseUrl}/v2`,
			data:params,
			header:{
				'custom-header':'hello'
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
)

export const getInTheater2 = params => (
		uni.request({
			url:`${baseUrl}/v2`,
			data:params,
			header:{
				'custom-header':'hello'
			}
	})
)