<template>
	<div class="more-detail">
		<div class="more-list-wrap" v-show="!loadFlag">
			<!-- 正在上映 -->
			<div class="more-list-title"><span @click="$goback($router)" class="link">返回>></span>{{title}}</div>
			<div class="more-list-main" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
				<transition-group name="list" tag="ul" class="clearfix">
					<li v-for="(item, index) in list" :key="index" @click="$goDetail($router, item.id)">
						<img :src="item.images.large" alt="">
						<p>{{item.title | ellipsis}}</p>
					</li>
				</transition-group>
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
			list: [],
			title: '',
			busy: false,
			loadFlag: true
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.loadMore()
		})
	},
	methods: {
		loadMore() {
			if (this.busy) {
                return;
            }
            this.busy = true;
			const start = this.list.length;
			const type = this.$route.query.type;
			this.$http.get('/api/movie/' + type + '?&count=20&start=' + start)
				.then(response => {
					this.title = response.data.title;
					response.data.subjects.forEach(item => {
						this.list.push(item);
					});
					this.busy = false;
					this.loadFlag = false;
				})
		}
	}
}
</script>
<style scoped>
.more-list-wrap {
	padding: 0 0.3rem;
}
.more-list-title {
	padding: 0 0.2rem;
	height: 0.4rem;
	margin: 0.2rem 0;
	line-height: 0.4rem;
}
.link {
	float: right;
	font-size: 0.2rem;
	cursor: pointer;
}
.more-list-main {
	background: #fff;
	border-radius: 0.2rem;
	padding: 0.2rem;
}
.more-list-main li {
	float: left;
	width: 1.5rem;
	margin: 0 0.15rem 0.15rem;
	flex-grow: 1;
	cursor: pointer;
}
.more-list-main li img {
	width: 1.5rem;
	height: 2.25rem;
}
.more-list-main li p {
	height: 0.3rem;
	line-height: 0.3rem;
	text-align: center;
	font-size: 0.2rem;
}
.load {
	width: 1.2rem;
	height: 1.2rem;
	margin: 0.8rem auto;
}
.list-enter-active, .list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-active {
	opacity: 0;
}
.list-enter {
	transform: translateX(0.5rem);
}
.list-leave-active {
	transform: translateX(0.5rem);
}
</style>
