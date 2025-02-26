<template>
	<div id="app">
		<router-view v-slot="{ Component }">
			<!-- <transition name="fade"> -->
			<component :is="Component" />
			<!-- </transition> -->
		</router-view>
		<!-- <div
			v-if="showScreensaver"
			id="screensaver"
			@click="hideScreensaver"
			@mousemove="hideScreensaver"
			class="fixed top-0 left-0 w-full h-full z-50 bg-black/100 cursor-pointer flex justify-center items-center"
		>
			<div class="bg-lightblue-500 w-full h-full flex justify-center items-center">
				<h1 class="text-4xl font-bold text-white">Screensaver</h1>
			</div>
		</div> -->
		<button
			class="fixed top-1 right-1 bg-electric-blue text-white p-2.5 text-sm rounded-md"
			@click="exportToExcel"
		>
			Export to Excel
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

import { trackPageTime, exportToExcel } from './utils/analytics';

const router = useRouter();

const sessionId = ref(null);
let startTime = performance.now();

const startNewSession = () => {
	sessionId.value = null; // Invalidate the current session
};

const handleRouteChange = (to, from) => {
	if (from.name) {
		// Only track if there's a previous route (not on initial load)
		const timeSpent = performance.now() - startTime;
		const currentSessionId = sessionId.value || crypto.randomUUID(); // Use crypto.randomUUID()
		sessionId.value = currentSessionId;
		trackPageTime(from.name, timeSpent / 1000, currentSessionId);
	}
	startTime = performance.now(); // Reset the timer *after* tracking the previous page
};

router.beforeEach((to, from, next) => {
	// handleRouteChange(to, from);
	next();
});

const showScreensaver = ref(false);
let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	showScreensaver.value = false;
	inactivityTimer = setTimeout(() => {
		showScreensaver.value = true;
		// startNewSession();
	}, 30000);
};

const hideScreensaver = () => {
	showScreensaver.value = false;
	resetInactivityTimer();
	router.push('/');
};

onMounted(() => {
	resetInactivityTimer();

	window.addEventListener('mousemove', resetInactivityTimer);
	window.addEventListener('keydown', resetInactivityTimer);
	window.addEventListener('click', resetInactivityTimer);
});

onUnmounted(() => {
	clearTimeout(inactivityTimer);

	window.removeEventListener('mousemove', resetInactivityTimer);
	window.removeEventListener('keydown', resetInactivityTimer);
	window.removeEventListener('click', resetInactivityTimer);
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
