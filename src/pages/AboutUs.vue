<template>
	<div class="about-us">
		<h1>About Us</h1>
		<p>Welcome to our company. We are dedicated to providing the best service possible.</p>
		<RouterLink to="/">Home</RouterLink>
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
		trackPageTime('about', timeSpent / 1000); // Example usage
	};

	window.addEventListener('blur', handleBlur);

	// Clean up the event listener on unmount
	onUnmounted(() => {
		window.removeEventListener('blur', handleBlur);
	});
});
</script>

<style scoped>
.about-us {
	text-align: center;
	margin: 20px;
}

.about-us h1 {
	font-size: 2em;
	margin-bottom: 10px;
}

.about-us p {
	font-size: 1.2em;
}
</style>
