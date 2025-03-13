<template>
	<div class="home-container">
		<!-- Background screen (will be revealed) -->
		<div class="background-screen">
			<h1>Welcome to the Main Content</h1>
			<p>This is the content that will be revealed after the animation.</p>
			<!-- Your main content goes here -->
		</div>

		<!-- Overlay screen with Get Started button -->
		<div
			ref="overlayScreen"
			class="overlay-screen"
		>
			<div class="content">
				<h1>Welcome to Our App</h1>
				<p>Click the button below to get started</p>
				<button
					@click="startEraserAnimation"
					class="get-started-btn"
				>
					Get Started
				</button>
			</div>

			<!-- Eraser element using an image -->
			<div
				ref="eraserContainer"
				class="eraser-container"
			>
				<img
					ref="eraser"
					class="eraser-image"
					:src="Eraser"
					alt="Eraser"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

import Eraser from '@/assets/images/A.png';

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
		zIndex: 10,
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

<style scoped>
.home-container {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.background-screen {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #f5f5f5;
	padding: 2rem;
}

.overlay-screen {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #3498db;
	color: white;
	z-index: 5;
}

.content {
	text-align: center;
	max-width: 600px;
	padding: 2rem;
}

.get-started-btn {
	margin-top: 2rem;
	padding: 0.75rem 1.5rem;
	font-size: 1.1rem;
	background-color: white;
	color: #3498db;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.get-started-btn:hover {
	background-color: #f0f0f0;
}

.eraser-container {
	position: absolute;
	top: 0;
	left: 0;
	width: auto; /* Will be determined by the image */
	height: 100%;
	pointer-events: none; /* Ensure the image doesn't block interaction */
}

.eraser-image {
	height: 100%;
	object-fit: contain; /* Preserve image aspect ratio */
}
</style>
