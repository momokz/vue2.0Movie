<template>
	<div class="search">
		<input type="text" placeholder="请输入要搜索的内容" v-model="search" @keyup.enter="getSearch">
		<div class="search-sign"><img src="../assets/images/search-1.png" alt=""></div>
	</div>
</template>
<script>
export default {
	name: 'search',
	data() {
		return {
			search: '',
			searchData: {},
		}
	},
	methods: {
		getSearch() {
			this.$http.get('/api//movie/search?q=' + this.search)
				.then(response => {
					if (response.data && response.data.subjects.length > 0) {
						this.searchData = response.data;
						this.$store.dispatch('searchResult', this.searchData);
						this.$router.push({
							name: 'movieSearch'
						})
					} else {
						this.$router.push({
							name: 'movieList'
						})
					}
					this.search = '';
					this.$store.dispatch('loadHandle', false);
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
}
</script>
<style>
.search {
	position: relative;
	height: 0.5rem;
	padding-left: 0.2rem;
	background: #f5f5f5;
}
.search input {
	display: block;
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}
.search input::placeholder {
	font-size: 0.18rem;
}
.search-sign {
	position: absolute;
	right: 10px;
	top: 50%;
	width: 0.26rem;
	height: 0.26rem;
	margin-top: -.13rem;
}
</style>
