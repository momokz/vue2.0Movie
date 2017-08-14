import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
	searchData: {},
	loadFlag: true
};

const mutations = {
	SEARCHRESULT(state, searchData) {
		state.searchData = searchData;
	},
	LOADHANDLE(state, loadFlag) {
		state.loadFlag = loadFlag;
	}
};

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});