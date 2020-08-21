export default {
	common: {
		baseUrl: 'http://v.juhe.cn',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencode'
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	
	request(options = {}){
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		
		// 开始请求
		return new Promise((res,rej) =>{
			uni.request({
				...options,
				success: (result)=> {
					if(result.statusCode !== 200){
						uni.showToast({
							title: result.data.msg || '服务端失败',
							icon: 'none'
						});
						return rej()
					}
					let data = result.data.data
					res(data)
				},
				fail: (error)=> {
					return uni.showToast({
						title: error.errMsg,
						icon: 'none'
					});
					return rej()
				}
			})
		})
	}
}
