<template>
	<div id="app">
		<vHeader></vHeader>
		<search></search>
		<keep-alive>
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>
		</keep-alive>
	</div>
</template>
<script>
import vHeader from '@/components/header';
import search from '@/components/search';
export default {
	name: 'app',
	components: {
		vHeader,
		search
	},
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
	transition: all 1s;
}
.slide-enter, .slide-leave-active {
	opacity: 0;
}
.slide-enter {
	transform: translateX(0.5rem);
}
.slide-leave-active {
	transform: translateX(-0.5rem);
}
</style>
