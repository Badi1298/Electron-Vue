<template>
	<div class="home">
		<h1>Welcome to the Home Page</h1>
		<RouterLink to="/about-us">About Us</RouterLink>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function trackPageTime(page, timeSpent) {
	window.electronAPI
		.trackTime(page, timeSpent)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

let startTime;
</script>

<style scoped>
.home {
	text-align: center;
	margin-top: 50px;
}
</style>
