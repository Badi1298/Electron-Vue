<template>
	<div id="app">
		<router-view v-slot="{ Component }">
			<!-- <transition name="fade"> -->
			<component :is="Component" />
			<!-- </transition> -->
		</router-view>
		<div
			v-if="showScreensaver"
			id="screensaver"
			@click="hideScreensaver"
			@mousemove="hideScreensaver"
			class="fixed top-0 left-0 w-full h-full z-50 bg-black/100 cursor-pointer flex justify-center items-center"
		>
			<div class="bg-lightblue-500 w-full h-full flex justify-center items-center">
				<h1 class="text-4xl font-bold text-white">Screensaver</h1>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showScreensaver = ref(false);
let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	showScreensaver.value = false;
	inactivityTimer = setTimeout(() => {
		showScreensaver.value = true;
	}, 20000);
};

const hideScreensaver = () => {
	showScreensaver.value = false;
	resetInactivityTimer();
	router.push('/');
};

onMounted(() => {
	resetInactivityTimer();
});

onUnmounted(() => {
	clearTimeout(inactivityTimer);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
