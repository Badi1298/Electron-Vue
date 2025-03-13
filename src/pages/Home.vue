<template>
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background Screen -->
		<div
			ref="backgroundScreen"
			class="absolute inset-0 flex items-center justify-center bg-blue-500"
		>
			<h1 class="text-primary-green text-4xl">Welcome to the App!</h1>
		</div>

		<!-- Overlay Screen -->
		<div
			ref="overlayScreen"
			class="absolute inset-0 flex items-center justify-center bg-[#195C68] z-10"
		>
			<img
				src="/src/assets/images/home-background.png"
				alt="Home BG"
				class="absolute top-0 left-0 -z-10"
			/>
			<div>
				<img
					src="/src/assets/images/A.png"
					alt="Advanz Logo"
					class="absolute left-0 top-0"
				/>
				<button
					@click="handleGetStarted"
					class="px-4 py-2 bg-primary-green text-white rounded-md"
				>
					Get Started
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const overlayScreen = ref(null);
const backgroundScreen = ref(null);

const handleGetStarted = () => {
	gsap.to(overlayScreen.value, {
		x: '100%',
		duration: 1,
		ease: 'power2.inOut',
	});
};

onMounted(() => {
	gsap.set(overlayScreen.value, { x: 0 });
});
</script>

<style scoped>
body,
html {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
