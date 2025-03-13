<template>
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background screen (will be revealed) -->
		<div class="flex flex-col items-center justify-center w-full h-full bg-cool-grey p-8">
			<h1 class="text-3xl font-bold mb-4">Welcome to the Main Content</h1>
			<p class="text-lg">This is the content that will be revealed after the animation.</p>
			<!-- Your main content goes here -->
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

			<!-- Eraser element using an image -->
			<div
				ref="eraserContainer"
				class="absolute top-0 left-0 h-full pointer-events-none"
			>
				<img
					ref="eraser"
					class="h-full object-contain block"
					src="/src/assets/images/A.png"
					alt="Eraser"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import gsap from 'gsap';

// Ref for your eraser image URL
// Replace this with your actual image path

// Refs for animation targets
const overlayScreen = ref(null);
const eraserContainer = ref(null);
const eraser = ref(null);

// Function to trigger the animation
const startEraserAnimation = () => {
	// Set initial state of eraser container
	gsap.set(eraserContainer.value, {
		left: 0, // Start off-screen (adjust based on image width)
		height: '100%',
		position: 'absolute',
		zIndex: 20,
	});

	// Set initial state of eraser image
	gsap.set(eraser.value, {
		height: '100%', // Make image full height of container
		display: 'block',
	});

	// Create a timeline for the animation sequence
	const tl = gsap.timeline({
		onComplete: () => {
			// Hide the overlay completely when animation finishes
			gsap.set(overlayScreen.value, { display: 'none' });
		},
	});

	// 1. Animate the eraser to sweep across the screen
	tl.to(eraserContainer.value, {
		left: '100%', // Move to the right edge
		duration: 1.2,
		ease: 'power2.inOut',
	});

	// 2. Use a clip-path on the overlay to create the eraser effect
	// This happens simultaneously with the eraser animation
	tl.to(
		overlayScreen.value,
		{
			clipPath: 'inset(0 0 0 100%)', // Clip from left to right
			duration: 1.2,
			ease: 'power2.inOut',
		},
		0
	); // Start at the same time as the first animation (position 0)
};

onMounted(() => {
	// Initialize the overlay screen
	gsap.set(overlayScreen.value, {
		clipPath: 'inset(0 0 0 0)', // Initially visible
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	});
});
</script>
