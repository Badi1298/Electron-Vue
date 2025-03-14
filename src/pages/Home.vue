<template>
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background screen (will be revealed) -->
		<div class="flex flex-col items-center justify-center w-full h-full bg-white p-8">
			<!-- Your original div with the clipping -->

			<div class="relative flex items-center justify-center">
				<!-- Carousel -->
				<div class="relative justify-center flex w-[1200px] h-[702px]">
					<!-- Carousel Items -->
					<div
						ref="carouselItem1"
						class="absolute w-[566px] h-[702px] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer"
						@click="router.push('/exblifep')"
					>
						<div class="relative w-full h-full bg-textured overflow-hidden clip">
							<img
								src="/src/assets/images/exblifep-logo.svg"
								alt="Exblifep Life"
								class="absolute bottom-[25.5rem] left-1/2 -translate-x-1/2 w-[170px]"
							/>
							<img
								src="/src/assets/images/lime-green-border.png"
								alt="Lime Green"
								class="absolute bottom-[24rem] left-40 w-full h-1"
							/>
							<img
								src="/src/assets/images/hallway-bed.png"
								alt="Hallway Bed"
								class="absolute -bottom-12 -left-36 z-10 min-w-[670px] opacity-20"
							/>
							<img
								src="/src/assets/images/resistance-and-recurrence.png"
								alt="Resistance and Recurrence"
								class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[370px] z-20"
							/>
						</div>
					</div>
					<div
						ref="carouselItem2"
						class="absolute w-[566px] h-[702px] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer"
						@click="router.push('/zevtera')"
					>
						<div class="relative w-full h-full bg-gradient-to-b from-white via-white via-70% to-primary-light-orange overflow-hidden clip">
							<img
								src="/src/assets/images/home-zevtera-doctor-bg.png"
								alt="Xyd Background"
								class="h-[702px] w-auto"
							/>
							<img
								src="/src/assets/images/home-mabelio-bullet.png"
								alt="Bullet"
								class="absolute bottom-56 left-14 z-10 w-[434px]"
							/>
							<img
								src="/src/assets/images/strike-fast.png"
								alt="Strike Fast"
								class="absolute bottom-36 left-1/2 -translate-x-1/2 w-[288px]"
							/>
							<img
								src="/src/assets/images/zevtera-mabelio-logo.png"
								alt="Zevtera Mabelio Logo"
								class="absolute bottom-14 left-1/2 -translate-x-1/2 w-[288px]"
							/>
							<img
								src="/src/assets/images/home-zevtera-bullet-trail.png"
								alt="Bullet Trail"
								class="absolute bottom-0 left-0 w-full"
							/>
						</div>
					</div>
					<div
						ref="carouselItem3"
						class="absolute w-[566px] h-[702px] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer"
						@click="router.push('/xyd')"
					>
						<div class="relative w-full h-full bg-textured overflow-hidden clip">
							<img
								src="/src/assets/images/home-xyd-background.png"
								alt="Xyd Background"
								class="h-[702px] w-auto"
							/>
							<p class="absolute bottom-28 left-1/2 -translate-x-1/2 text-white text-[48px] leading-[54px] font-bold w-[466px] text-center">
								One dose does it.
							</p>
							<img
								src="/src/assets/images/xyd-logo-white.png"
								alt="Xyd Logo"
								class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[250px]"
							/>
						</div>
					</div>
				</div>

				<button
					@click="moveLeft"
					class="text-xl p-2 rounded-full transition absolute -bottom-16 left-24"
				>
					<img
						src="/src/assets/images/home-arrow-left-green.png"
						alt="Arrow Left"
						class="w-[85px]"
					/>
				</button>
				<button
					@click="moveRight"
					class="text-xl p-2 rounded-full hover:bg-gray-400 transition absolute -bottom-16 right-24"
				>
					<img
						src="/src/assets/images/home-arrow-right-green.png"
						alt="Arrow Right"
						class="w-[85px]"
					/>
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
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

const router = useRouter();

// Refs for animation targets
const eraser = ref(null);
const overlayScreen = ref(null);
const eraserContainer = ref(null);

const carouselItem1 = ref(null);
const carouselItem2 = ref(null);
const carouselItem3 = ref(null);

const activeCarouselItem = ref(1);

// Function to animate the carousel based on the indices
// Define position configurations for each state
const positionConfigs = {
	1: [
		{ item: carouselItem1, position: 'right' },
		{ item: carouselItem2, position: 'left' },
		{ item: carouselItem3, position: 'center' },
	],
	2: [
		{ item: carouselItem1, position: 'center' },
		{ item: carouselItem2, position: 'right' },
		{ item: carouselItem3, position: 'left' },
	],
	3: [
		{ item: carouselItem1, position: 'left' },
		{ item: carouselItem2, position: 'center' },
		{ item: carouselItem3, position: 'right' },
	],
};

// Map current active value to the next active value
const nextActive = {
	1: 3,
	2: 1,
	3: 2,
};

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

	gsap.set(carouselItem1.value, {
		scale: 1.3,
		translateX: 0,
		zIndex: 20,
	});
	gsap.set(carouselItem2.value, {
		scale: 1,
		translateX: '50%',
		pointerEvents: 'none',
	});
	gsap.set(carouselItem3.value, {
		scale: 1,
		translateX: '-50%',
		pointerEvents: 'none',
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

// Function to animate an item to a specific position
const animateToPosition = (item, position) => {
	const config = {
		left: { translateX: '-50%', scale: 1, zIndex: 0, ease: 'power4.inOut', pointerEvents: 'none', duration: 0.2 },
		center: { translateX: '0%', scale: 1.3, zIndex: 20, ease: 'power4.inOut', pointerEvents: 'auto', duration: 0.2 },
		right: { translateX: '50%', scale: 1, zIndex: 0, ease: 'power4.inOut', pointerEvents: 'none', duration: 0.2 },
	}[position];
	gsap.to(item, config);
};

// Rewritten animateCarousel function
const animateCarousel = () => {
	const currentActive = activeCarouselItem.value;
	const config = positionConfigs[currentActive];
	config.forEach(({ item, position }) => animateToPosition(item.value, position));
	activeCarouselItem.value = nextActive[currentActive];
};

const moveRight = () => {
	animateCarousel();
};
</script>

<style scoped>
.clip {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
