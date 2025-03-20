<template>
	<div class="relative w-full h-screen bg-textured overflow-hidden">
		<!-- Overlay screen with Get Started button -->
		<div
			ref="overlayScreen"
			class="absolute top-0 left-0 w-full h-full bg-home bg-[#195C68] text-white z-10 flex flex-col items-center justify-center"
		>
			<div class="text-white font-futura">
				<section class="absolute top-[18%] left-[26.4%] flex flex-col gap-y-[100px]">
					<div
						ref="text1"
						class="opacity-0"
					>
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							We offer a complimentary range of treatments extending<br />
							across the antimicrobial landscape<sup>1-3</sup>
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">including resistant pathogens outlined in WHO's Bacterial Priority Pathogen list <sup>4</sup></p>
					</div>
					<div
						ref="text2"
						class="ml-[100px] opacity-0"
					>
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							Putting humanity first - we strive to remove treatment<br />
							barriers and reduce the burden of care
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">forging a smoother path to recovery for patients today, and safeguarding the future</p>
					</div>
					<div
						ref="text3"
						class="ml-[200px] opacity-0"
					>
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							Forging a different path by providing effective<br />
							treatments with predictable outcomes<sup>5-7</sup>
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">even in difficult-to-treat patients who currently have limited treatment options <sup>8-10</sup></p>
					</div>
					<button
						ref="button"
						class="flex items-center justify-end w-[264px] gap-x-7 py-2.5 px-[22px] bg-primary-green text-white text-2xl ml-72 opacity-0"
						@click="startEraserAnimation"
						@touchstart.prevent="startEraserAnimation"
					>
						<span>Get started</span>
						<img
							src="/src/assets/images/chevron-right-white.png"
							alt="Chevron Right"
							class="w-[50px]"
						/>
					</button>
				</section>

				<footer class="absolute bottom-4 left-[41.5%] text-[10px] leading-tight">
					<p>
						1. EXBLIFEP® Summary of Product Characteristics 2024. 2. XYDALBA® Summary of Product Characteristics 2024. 3. ZEVTERA® Summary of<br />
						Product Characteristics 2024. 4. World Health Organization. WHO Bacterial Priority Pathogens List 2024. Available at:
						<span class="underline">https://www.who.int/<br />publications/i/item/9789240093461.</span> Accessed March 2025. 5. Kaye KS
						<span class="italic">et al. JAMA </span>2022;328:1304-1314. 6. McCarthy MW <span class="italic">et al. Infect Dis Ther</span><br />
						2020;9:53-67. 7. Giacobbe D <span class="italic">et al. ERATCK </span>2019;17(9):689-698. 8. Boyd SE
						<span class="italic">et al. Antimicrob Agents Chemother </span>2022;66:e0021622. 9. Belley A
						<span class="italic"
							>et<br />
							al. J Glob Antimicrob Resist </span
						>2021;25:93-101. 10. D'Angelo RG <span class="italic">et al. Expert Opin Pharmacother </span>2016;17:953-967.
					</p>
					<p class="mt-1.5">GL/CEFE/PM/0051 | March 2025</p>
				</footer>
				<img
					src="/src/assets/images/advanz-logo-bg-white.png"
					alt="Advanz Logo"
					class="absolute bottom-0 right-0 w-[392px]"
				/>
			</div>
		</div>

		<!-- Eraser element using an image - moved outside overlay to prevent scaling issues -->
		<div
			ref="eraserContainer"
			class="absolute top-0 left-0 h-screen pointer-events-none z-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="721"
				height="1080"
				viewBox="0 0 721 1080"
				fill="none"
			>
				<path
					d="M305.2 1079.6L216.1 872.55H394.3L260.65 547.193L-170 1612V1109.17L275.5 0L721 1079.6H305.2Z"
					fill="#94C11F"
				/>
			</svg>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

const router = useRouter();

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const button = ref(null);

// Refs for animation targets
const eraser = ref(null);
const overlayScreen = ref(null);
const eraserContainer = ref(null);

onMounted(() => {
	// Initialize the overlay screen
	gsap.set(overlayScreen.value, {
		clipPath: 'inset(0 0 0 0)', // Initially visible (0% instead of 100% to see the overlay)
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
		// display: 'none', // Remove this to see the eraser
	});

	gsap.fromTo([text1.value, text2.value, text3.value, button.value], { opacity: 0 }, { opacity: 1, stagger: 0.5 });
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
		onComplete: () => {
			// Redirect to the next page after animation
			router.push({ name: 'home' });
		},
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
.carousel {
	perspective: 1000px;
	transform-style: preserve-3d;
	margin-top: -24px;
}

.carousel-item {
	transform-style: preserve-3d;
	backface-visibility: hidden;
	transform: translate(-50%, -50%);
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
