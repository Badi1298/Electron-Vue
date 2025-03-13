<template>
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background screen (will be revealed) -->
		<div class="flex flex-col items-center justify-center w-full h-full bg-white p-8">
			<!-- Your original div with the clipping -->
			<!-- <div class="relative w-[730px] h-[896px] bg-textured overflow-hidden clip">
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
			</div> -->

			<div class="flex items-center justify-center">
				<!-- Left Arrow -->
				<button
					@click="moveLeft"
					class="text-xl bg-cool-grey p-2 rounded-full transition"
				>
					←
				</button>

				<!-- Carousel -->
				<div class="relative flex w-80 h-80">
					<!-- Carousel Items -->
					<div
						v-for="(item, index) in items"
						:key="index"
						:class="[
							'absolute w-32 h-32 bg-primary-turqoise rounded-lg flex items-center justify-center transition-all duration-500',
							itemClasses(index),
						]"
						ref="carouselItems"
					>
						<span>{{ item }}</span>
					</div>
				</div>

				<!-- Right Arrow -->
				<button
					@click="moveRight"
					class="text-xl bg-cool-grey p-2 rounded-full hover:bg-gray-400 transition"
				>
					→
				</button>
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

const items = ['Item 1', 'Item 2', 'Item 3'];
const currentIndex = ref(0);

// Function to handle the movement of items
const moveLeft = () => {
	const lastIndex = currentIndex.value;
	currentIndex.value = (currentIndex.value + 1 + items.length) % items.length;
	animateCarousel(lastIndex, currentIndex.value);
};

const moveRight = () => {
	const lastIndex = currentIndex.value;
	currentIndex.value = (currentIndex.value - 1) % items.length;
	animateCarousel(lastIndex, currentIndex.value);
};

// Function to animate the carousel based on the indices
const animateCarousel = (lastIndex, newIndex) => {
	const itemsArray = document.querySelectorAll('[data-carousel-item]');

	const currentItem = itemsArray[lastIndex];
	const nextItem = itemsArray[newIndex];

	gsap.to(currentItem, {
		x: lastIndex < newIndex ? '100%' : '-100%',
		duration: 0.5,
		scale: 1,
		ease: 'power2.inOut',
	});
	gsap.to(nextItem, {
		x: '0%',
		duration: 0.5,
		ease: 'power2.inOut',
	});
};

// Dynamically compute the classes for positioning carousel items in a circle
const itemClasses = (index) => {
	const totalItems = items.length;
	const offset = (index - currentIndex.value + totalItems) % totalItems;
	const position = offset === 0 ? '-translate-x-1/2 left-1/2 scale-110' : offset === 1 ? 'right-0' : 'left-0';
	return position;
};

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
