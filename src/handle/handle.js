// 全局方法
import Vue from 'vue';

export default {
	install(Vue, options) {
		Vue.prototype.$goDetail = (router, id) => {
			router.push({
				name: 'movieDetail',
				params: {
					id: id
				}
			})
		};
		Vue.prototype.$goback = (router) => {
			router.go(-1);
		};
	}
};