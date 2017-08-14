// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './vuex/store';
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);

// 全局过滤器
import filter from './filter/filter';
Vue.use(filter);

// 全局方法
import handle from './handle/handle';
Vue.use(handle);

Vue.prototype.$http = axios;

// css
import './assets/css/style.css';

// scale
import calcScale from './assets/scripts/scale';
calcScale(640);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})