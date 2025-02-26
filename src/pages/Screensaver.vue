<template>
	<div
		id="screensaver"
		@click="hideScreensaver"
		@mousemove="hideScreensaver"
		class="fixed top-0 left-0 w-full h-full z-50 bg-black/100 cursor-pointer flex justify-center items-center"
	>
		<div class="bg-lightblue-500 w-full h-full flex justify-center items-center">
			<h1 class="text-4xl font-bold text-white">Screensaver</h1>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const hideScreensaver = () => {
	router.push('/');
};
</script>
