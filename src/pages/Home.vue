<template>
	<div class="relative w-full h-screen overflow-hidden">
		<div class="relative flex flex-col justify-center w-full h-full px-28 py-8">
			<our-portfolio />
			<div ref="exblifepBackground">
				<img
					src="/src/assets/images/textured-background.png"
					alt="Textured Background"
					class="absolute top-0 left-0 w-full h-full -z-10"
				/>
				<img
					src="/src/assets/images/exblifep-logo.svg"
					alt="Exblifep Logo"
					class="absolute top-[150px] left-[100px] h-[179px] -z-10 opacity-5"
				/>
				<img
					src="/src/assets/images/hallway-bed.png"
					alt="Hallway Bed"
					class="absolute -right-36 bottom-0 h-[874px] -z-10 opacity-10"
				/>
			</div>
			<div ref="zevteraBackground">
				<img
					src="/src/assets/images/home-zevtera-bg.png"
					alt="Zevtera Background"
					class="absolute top-0 left-0 w-full h-full -z-10"
				/>
			</div>
			<div ref="xydBackground">
				<img
					src="/src/assets/images/home-xyd-large-bg.png"
					alt="Xyd Background"
					class="absolute top-0 left-0 w-full h-full -z-10"
				/>
			</div>
			<div class="relative flex flex-1 items-center w-fit">
				<!-- Carousel -->
				<div class="relative justify-center flex w-[1070px] h-[702px]">
					<!-- Carousel Items -->
					<div
						ref="carouselItem1"
						class="absolute w-[566px] h-[702px] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer"
						@click="router.push('/exblifep')"
					>
						<div class="relative w-full h-full bg-textured overflow-hidden bg-white clip">
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
					<button
						@click="moveLeft"
						class="text-xl p-2 rounded-full transition absolute -bottom-16 left-10 z-0"
					>
						<img
							src="/src/assets/images/home-arrow-left-green.png"
							alt="Arrow Left"
							class="w-[85px]"
						/>
					</button>
					<button
						@click="moveRight"
						class="text-xl p-2 rounded-full hover:bg-gray-400 transition absolute -bottom-16 right-10 z-0"
					>
						<img
							src="/src/assets/images/home-arrow-right-green.png"
							alt="Arrow Right"
							class="w-[85px]"
						/>
					</button>
				</div>
				<div
					ref="exblifepContent"
					class="pl-36 pt-36 font-effra"
				>
					<img
						src="/src/assets/images/exblifep-logo.svg"
						alt="Exblifep Logo"
						class="w-[307px]"
					/>
					<p class="mt-6 text-2xl text-cool-grey">
						EXBLIFEP<sup>®</sup> is where microbiological<br />
						eradication* meets efficacy<sup>1</sup>
					</p>
					<button
						class="relative flex items-center justify-end min-w-[264px] gap-x-7 py-2.5 px-[22px] mt-24 bg-electric-blue text-white text-2xl"
						@click="router.push('/exblifep')"
					>
						<span>Get started</span>
						<img
							src="/src/assets/images/chevron-right-white.png"
							alt="Chevron Right"
							class="w-[50px]"
						/>
					</button>
				</div>
			</div>
			<div class="flex flex-col gap-y-2.5 absolute bottom-0 right-0 items-end">
				<div
					class="flex gap-x-6 items-center bg-white rounded-l-[20px] border-2 border-[#195C68] border-r-0 px-2.5 py-[3px] cursor-pointer"
					@click="router.push({ name: 'zevtera-prescribing-information', query: { from: 'home-prescribing-information-button' } })"
				>
					<img
						src="/src/assets/images/prescribing-information-turqoise.png"
						alt="Prescribing Information"
						class="w-10 h-10"
					/>
					<span class="text-xl leading-tight text-[#195C68]"
						>Prescribing<br />
						information</span
					>
					<img
						src="/src/assets/images/chevron-right-turqoise-bg.png"
						alt="Prescribing Information"
						class="w-10 h-10 mr-10 ml-1"
					/>
				</div>
				<img
					src="/src/assets/images/home-advanz-logo.png"
					alt="Home Advanz Logo"
					class="w-[392px]"
				/>
			</div>
			<footer
				ref="exblifepFooter"
				class="grid grid-cols-[1fr_0.4fr] items-end gap-x-4 max-w-[1470px]"
			>
				<div>
					<the-footer
						>*In the ALLIUM study, microbiological eradication is defined as reduction of the qualifying baseline pathogen to less than 103 CFU/mL
						in urine.<sup>1</sup><br />
						EXBLIFEP<sup>®</sup> is indicated for the treatment of the following infections in adults: Complicated urinary tract infections (cUTI),
						including pyelonephritis; Hospital-acquired pneumonia (HAP), including ventilator associated pneumonia (VAP);<br />
						Treatment of patients with bacteraemia that occurs in association with, or is suspected to be associated with, any of the infections
						listed above. Consideration should be given to official guidance on the appropriate use of antibacterial agents.<sup>5</sup></the-footer
					>
					<the-footer class="mt-1"
						>1. Kaye KS <span class="italic">et al. JAMA</span>2022;328(13):1304-1314. 2. Kiem S, Schentag JJ. Infect Chemother 2013;45(3):283-291.
						3. Kadry N <span class="italic">et al. Clin Infect Dis</span>2023;76(10):1768-1775. 4. Albin OR
						<span class="italic">et al. Clin Infect Dis</span>2020;71(12):3033-3041.<br />
						5. EXBLIFEP<sup>®</sup> Summary of Product Characteristics (March 2024). Available at:
						<span class="underline"
							>https://www.ema.europa.eu/en/documents/product-information/exblifep-epar-product-information_en.pdf.</span
						></the-footer
					>
				</div>
				<div class="flex items-center justify-center px-3 py-2 border border-black font-effra text-[10px] text-cool-grey max-w-fit">
					▼ This medicinal product is subject to additional monitoring. This will allow<br />
					quick identification of new safety information. Healthcare professionals<br />
					are asked to report any suspected adverse reactions.
				</div>
			</footer>
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
			class="absolute top-0 left-0 h-screen pointer-events-none z-50"
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

import TheFooter from '@/components/TheFooter.vue';
import OurPortfolio from '@/components/home/OurPortfolio.vue';

const router = useRouter();

// Refs for animation targets
const eraser = ref(null);
const overlayScreen = ref(null);
const eraserContainer = ref(null);

const carouselItem1 = ref(null);
const carouselItem2 = ref(null);
const carouselItem3 = ref(null);

const exblifepFooter = ref(null);
const exblifepContent = ref(null);
const exblifepBackground = ref(null);

const xydBackground = ref(null);
const zevteraBackground = ref(null);

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

const backgroundConfigs = {
	1: {
		exblifepBackground: 1,
		exblifepContent: 1,
		exblifepFooter: 1,
		zevteraBackground: 0,
		xydBackground: 0,
	},
	2: {
		exblifepBackground: 0,
		exblifepContent: 0,
		exblifepFooter: 0,
		zevteraBackground: 1,
		xydBackground: 0,
	},
	3: {
		exblifepBackground: 0,
		exblifepContent: 0,
		exblifepFooter: 0,
		zevteraBackground: 0,
		xydBackground: 1,
	},
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
		clipPath: 'inset(0 0 0 100%)', // Initially visible (0% instead of 100% to see the overlay)
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 40,
		width: '100%',
		height: '100%',
	});

	gsap.set(eraserContainer.value, {
		height: '100vh',
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'none', // Remove this to see the eraser
	});

	gsap.set(carouselItem1.value, {
		scale: 1.2,
		translateX: 0,
		zIndex: 20,
	});
	gsap.set(carouselItem2.value, {
		scale: 0.9,
		translateX: '50%',
		translateY: 40,
		pointerEvents: 'none',
		zIndex: 10,
	});
	gsap.set(carouselItem3.value, {
		scale: 0.9,
		translateX: '-50%',
		translateY: 40,
		pointerEvents: 'none',
		zIndex: 10,
	});

	gsap.set([zevteraBackground.value, xydBackground.value], {
		opacity: 0,
	});
});

// Function to trigger the animation
const startEraserAnimation = () => {
	// Set initial state of eraser container
	gsap.set(eraserContainer.value, {
		left: 0,
		height: '100vh',
		position: 'absolute',
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
		left: {
			translateX: '-50%',
			translateY: 40,
			scale: 0.9,
			zIndex: 10,
			ease: 'power4.inOut',
			pointerEvents: 'none',
			duration: 0.2,
		},
		center: {
			translateX: '0%',
			translateY: 0,
			scale: 1.2,
			zIndex: 20,
			ease: 'power4.inOut',
			pointerEvents: 'auto',
			duration: 0.2,
		},
		right: {
			translateX: '50%',
			translateY: 40,
			scale: 0.9,
			zIndex: 10,
			ease: 'power4.inOut',
			pointerEvents: 'none',
			duration: 0.2,
		},
	}[position];
	gsap.to(item, config);
};

// Rewritten animateCarousel function
const animateCarousel = () => {
	const currentActive = activeCarouselItem.value;
	const config = positionConfigs[currentActive];
	config.forEach(({ item, position }) => animateToPosition(item.value, position));
	activeCarouselItem.value = nextActive[currentActive];
	const backgroundConfig = backgroundConfigs[activeCarouselItem.value];
	animateBackground(backgroundConfig);
};

const animateBackground = (config) => {
	Object.entries(config).forEach(([key, opacity]) => {
		const element = {
			exblifepBackground,
			exblifepContent,
			exblifepFooter,
			zevteraBackground,
			xydBackground,
		}[key];

		gsap.to(element.value, {
			opacity,
		});
	});
};

const moveRight = () => {
	animateCarousel();
};
</script>

<style scoped>
.clip {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
