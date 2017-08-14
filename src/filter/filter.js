// 全局过滤器
import Vue from 'vue';

export default {
	install(Vue, options) {
		Vue.filter('ellipsis', value => {
			if (value.length > 5) {
				return value.slice(0, 5) + '...';
			} else {
				return value;
			}
		})
	}
};