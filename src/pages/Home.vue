<template>
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background screen (will be revealed) -->
		<div class="flex flex-col items-center justify-center w-full h-full bg-white p-8">
			<!-- Your original div with the clipping -->
			<div class="relative w-[730px] h-[896px] bg-textured overflow-hidden clip">
				<img
					src="/src/assets/images/hallway-bed.png"
					alt="Hallway Bed"
					class="absolute -bottom-14 -left-48 z-10 min-w-[866px] opacity-20"
				/>
				<img
					src="/src/assets/images/resistance-and-recurrence.png"
					alt="Resistance and Recurrence"
					class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[480px] z-20"
				/>
			</div>
		</div>

		<!-- Overlay screen with Get Started button -->
		<div
			ref="overlayScreen"
			class="absolute top-0 left-0 w-full h-full bg-primary-turqoise text-white z-10 flex flex-col items-center justify-center"
		>
			<div class="text-center max-w-xl p-8">
				<h1 class="text-3xl font-bold mb-4">Welcome to Our App</h1>
				<p class="text-lg mb-6">Click the button below to get started</p>
				<button
					@click="startEraserAnimation"
					class="mt-8 px-6 py-3 text-lg bg-white text-primary-turqoise rounded hover:bg-cool-grey transition-colors"
				>
					Get Started
				</button>
			</div>
		</div>

		<!-- Eraser element using an image - moved outside overlay to prevent scaling issues -->
		<div
			ref="eraserContainer"
			class="absolute top-0 left-0 h-screen pointer-events-none z-30"
		>
			<img
				ref="eraser"
				class="h-full object-contain block"
				src="/src/assets/images/A.png"
				alt="Eraser"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import gsap from 'gsap';

// Refs for animation targets
const eraser = ref(null);
const overlayScreen = ref(null);
const eraserContainer = ref(null);

onMounted(() => {
	// Initialize the overlay screen
	gsap.set(overlayScreen.value, {
		clipPath: 'inset(0 0 0 100%)', // Initially visible
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	});

	// Pre-initialize the eraser container to ensure consistent height
	gsap.set(eraserContainer.value, {
		height: '100vh', // Use viewport height explicitly
		position: 'absolute',
		top: 0,
		left: '100%', // Off-screen initially
	});
});

// Function to trigger the animation
const startEraserAnimation = () => {
	// Set initial state of eraser container
	gsap.set(eraserContainer.value, {
		left: 0,
		height: '100vh',
		position: 'absolute',
		zIndex: 30,
	});

	// Ensure eraser image maintains full height
	gsap.set(eraser.value, {
		height: '100vh',
		objectFit: 'cover',
		display: 'block',
		scale: 1,
	});

	// Create a timeline for the animation sequence
	const tl = gsap.timeline({
		onComplete: () => {
			// Slight delay before hiding the overlay for smoothness
			gsap.set(overlayScreen.value, { display: 'none' }, '+=0.1');
		},
	});

	// 1. Animate the eraser to sweep across the screen
	tl.to(eraserContainer.value, {
		left: '100%',
		duration: 1.4, // Slightly longer for a smooth feel
		ease: 'power4.inOut',
	});

	// 2. Apply blur effect during transition (optional)
	tl.to(
		overlayScreen.value,
		{
			clipPath: 'inset(0 0 0 100%)',
			duration: 1.4,
			ease: 'power4.inOut',
			filter: 'blur(2px)', // Adds a subtle blur effect
		},
		0
	);
};
</script>

<style scoped>
.clip {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
