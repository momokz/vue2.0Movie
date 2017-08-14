export const searchResult = ({
	commit
}, searchData) => {
	commit('SEARCHRESULT', searchData);
};

export const loadHandle = ({
	commit
}, flag) => {
	commit('LOADHANDLE', flag);
};