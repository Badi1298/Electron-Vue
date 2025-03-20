<template>
	<div id="app">
		<router-view v-slot="{ Component }">
			<transition
				name="fade"
				mode="out-in"
			>
				<component :is="Component" />
			</transition>
		</router-view>
		<!-- <button
			class="fixed top-1 right-1 bg-electric-blue text-white p-2.5 text-sm rounded-md"
			@click="exportToExcel"
		>
			Export to Excel
		</button> -->
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, provide, onMounted, onUnmounted } from 'vue';

import { trackPageTime, exportToExcel } from './utils/analytics';

const route = useRoute();
const router = useRouter();

const sessionId = ref(crypto.randomUUID());
provide('sessionId', sessionId);

let startTime = performance.now();

const startNewSession = () => {
	sessionId.value = crypto.randomUUID(); // Invalidate the current session
	startTime = performance.now();
};

const handleRouteChange = (to, from) => {
	const navigatedAwayBy = to?.query?.navigatedAwayBy || '';

	if (from.name === 'screensaver') {
		resetInactivityTimer();
		startNewSession();
	}

	if (from.name) {
		const timeSpent = performance.now() - startTime;
		trackPageTime(from.name, timeSpent / 1000, sessionId.value, route.meta.brand, navigatedAwayBy);
	}

	startTime = performance.now();
};

router.beforeEach((to, from, next) => {
	handleRouteChange(to, from);
	next();
});

let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	inactivityTimer = setTimeout(() => {
		router.push('/screensaver');
	}, 300000);
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

<style>
body {
	overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
