<template>
	<h1>💖 Hello World!</h1>
	<p>Welcome to your Electron application.</p>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

function trackPageTime(page, timeSpent) {
	window.electronAPI
		.trackTime(page, timeSpent)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

let startTime;

onMounted(() => {
	startTime = performance.now();

	const handleBlur = () => {
		const timeSpent = performance.now() - startTime;
		trackPageTime('pageName', timeSpent / 1000); // Example usage
	};

	window.addEventListener('blur', handleBlur);

	// Clean up the event listener on unmount
	onUnmounted(() => {
		window.removeEventListener('blur', handleBlur);
	});
});
</script>
