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
		<button
			class="fixed top-0 left-0 bg-electric-blue text-white p-4 rounded-md"
			@click="exportToExcel"
		>
			Export to Excel
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import * as excel from 'exceljs';
import { trackPageTime } from './utils/analytics';

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
	handleRouteChange(to, from);
	next();
});

const showScreensaver = ref(false);
let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	showScreensaver.value = false;
	inactivityTimer = setTimeout(() => {
		showScreensaver.value = true;
		startNewSession();
	}, 30000);
};

const hideScreensaver = () => {
	showScreensaver.value = false;
	resetInactivityTimer();
	router.push('/');
};

const exportToExcel = async () => {
	try {
		const data = await window.electronAPI.getTimeTrackingData();

		if (!data || !data.sessions || Object.keys(data.sessions).length === 0) {
			alert('No time tracking data available.'); // Or a better user notification
			return;
		}

		const workbook = new excel.Workbook();
		const worksheet = workbook.addWorksheet('Time Tracking');

		// Create header row
		const header = ['Session ID', 'Page', 'Time Spent (seconds)'];
		worksheet.addRow(header);

		// Add data rows
		for (const sessionId in data.sessions) {
			for (const page in data.sessions[sessionId]) {
				const timeSpent = data.sessions[sessionId][page];
				worksheet.addRow([sessionId, page, timeSpent]);
			}
		}

		const buffer = await workbook.xlsx.writeBuffer();

		const result = await window.electronAPI.saveExcelFile(buffer);

		if (result === 'success') {
			console.log('Excel file saved successfully!');
		} else if (result === 'cancelled') {
			console.log('Save operation cancelled.');
		} else {
			console.error('Error saving Excel file:', result);
		}
	} catch (error) {
		console.error('Error exporting to Excel:', error);
	}
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
