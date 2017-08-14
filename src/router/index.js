import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import movieList from '@/view/movie-list';
import moreList from '@/view/more-list';
import movieDetail from '@/view/movie-detail';
import movieSearch from '@/view/movie-search';

export default new Router({
	base: '/',
	routes: [{
		path: '/',
		name: 'movieList',
		component: movieList
	}, {
		path: '/morelist',
		name: 'moreList',
		component: moreList
	}, {
		path: '/movieDetail/:id',
		name: 'movieDetail',
		component: movieDetail
	}, {
		path: '/movieSearch',
		name: 'movieSearch',
		component: movieSearch
	}, {
		path: '*',
		redirect: '/'
	}]
});