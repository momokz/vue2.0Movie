<template>
	<div class="movie-detail">
		<div class="movie-detail-wrap" v-show="!loadFlag">
			<div class="movie-detail-title"><span @click="$goback($router)">返回>></span>{{detail.title}}</div>
			<div class="movie-detail-img"><img :src="detail.images ? detail.images.large : ''" alt=""></div>
			<div class="movie-detail-describe">
				{{getMeta}}
				<p>{{getCasts}}</p>
			</div>
			<div class="movie-detail-summary">
				<div class="summary-title">{{detail.title}}--剧情介绍</div>
				{{detail.summary}}
			</div>
		</div>
		<!-- load -->
		<div class="load" v-show="loadFlag">
			<svg class="lds-spin" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;">
				<g transform="translate(80,50)">
					<g transform="rotate(0)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="1" transform="scale(1.09917 1.09917)">
							<animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(71.21320343559643,71.21320343559643)">
					<g transform="rotate(45)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.875" transform="scale(1.01167 1.01167)">
							<animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(50,80)">
					<g transform="rotate(90)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.75" transform="scale(1.02417 1.02417)">
							<animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(28.786796564403577,71.21320343559643)">
					<g transform="rotate(135)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.625" transform="scale(1.03667 1.03667)">
							<animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(20,50.00000000000001)">
					<g transform="rotate(180)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.5" transform="scale(1.04917 1.04917)">
							<animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(28.78679656440357,28.786796564403577)">
					<g transform="rotate(225)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.375" transform="scale(1.06167 1.06167)">
							<animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(49.99999999999999,20)">
					<g transform="rotate(270)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.25" transform="scale(1.07417 1.07417)">
							<animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(71.21320343559643,28.78679656440357)">
					<g transform="rotate(315)">
						<circle cx="0" cy="0" r="10" fill="#0055a5" fill-opacity="0.125" transform="scale(1.08667 1.08667)">
							<animateTransform attributeName="transform" type="scale" begin="0s" values="1.1 1.1;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
							<animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
						</circle>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>
<script>
export default {
	name: 'movieDetail',
	data() {
		return {
			id: this.$route.params.id,
			detail: {},
			loadFlag: true
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.loadMore();
		})
	},
	methods: {
		loadMore() {
			this.$http.get('/api/movie/subject/' + this.id)
				.then(response => {
					this.detail = response.data;
					this.loadFlag = false;
				})
				.catch(error => {
					console.log(error);
				})
		}
	},
	computed: {
		getMeta() {
			const countries = this.detail.countries ? this.detail.countries[0] : '';
			const genres = this.detail.genres ? this.detail.genres[0] : ''
			const name = this.detail.name ? this.detail.name[0] : '';
			return countries + ' / ' + genres + ' / ' + name + '（导演）';
		},
		getCasts() {
			let html = '主演：';
			if (this.detail.casts) {
				const length = this.detail.casts.length;
				this.detail.casts.forEach((item, index) => {
					if (index == length - 1) {
						html += item.name;
					} else {
						html += item.name + ' / ';
					}
				});
				return html;
			} else {
				return html;
			}
		}
	}
}
</script>
<style scoped>
.movie-detail {
	background: #fff;
	border-radius: .15rem;
	padding: 0.15rem;
}
.movie-detail-title {
	height: .4rem;
	line-height: .4rem;
	text-align: center;
	margin: .15rem 0;
}
.movie-detail-title span {
	float: right;
	font-size: 0.2rem;
}
.movie-detail-summary {
	margin-top: 0.3rem;
	font-size: 0.22rem;
	line-height: 0.36rem;
}
.summary-title {
	font-weight: bold;
	font-size: 0.24rem;
	margin-bottom: 0.2rem;
}
.movie-detail-describe {
	line-height: 0.5rem;
	margin-top: 0.2rem;
	border-bottom: 0.01rem solid #ccc;
}
.load {
	width: 1.2rem;
	height: 1.2rem;
	margin: 0.8rem auto;
}
</style>
