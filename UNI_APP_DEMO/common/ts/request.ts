interface RequestOptions {
	url: string;
	method?: string;
	data?: object | [] | ArrayBuffer,
	header?: object,
	timeout?: number,
	dataType?: string;
	responseType?: string;
	withCredentials?: boolean;
	enableHttp2?: boolean;
}
export const request = async <T>(param: RequestOptions): Promise<T> => {
	if (!param.url) {
		throw new Error("url can not be null");
	}
	if (!param.header) {
		param.header = {};
	}
	param.header['access-key'] = "ax1234";
	try {
		const response: any = await uni.request(param as any);
		if (response.statusCode !== 200) {
			uni.showToast({
				title:"请求响应：" + response.statusCode + " 请稍后重试",
				icon: "none"
			});
		}
		if (response.data.errCode !== 0) {
			uni.showToast({
				title:response.data.errMsg,
				icon: "none"
			})
		}
		return response.data;
	}catch(e) {
		uni.showToast({
			title: "请求异常，请稍候重试",
			icon:"none"
		});
	}
};