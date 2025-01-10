<template>
	<div class="home">
		<h1>Welcome to the Home Page</h1>
		<RouterLink to="/about-us">About Us</RouterLink>
	</div>
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
		trackPageTime('home', timeSpent / 1000); // Example usage
	};

	window.addEventListener('blur', handleBlur);

	// Clean up the event listener on unmount
	onUnmounted(() => {
		window.removeEventListener('blur', handleBlur);
	});
});
</script>

<style scoped>
.home {
	text-align: center;
	margin-top: 50px;
}
</style>
