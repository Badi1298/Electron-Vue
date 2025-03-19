<template>
	<div class="animation-container">
		<!-- Masked area (original colored background) -->
		<div
			class="masked-background"
			ref="maskedBg"
		></div>

		<!-- SVG that defines the mask -->
		<svg
			class="mask-svg"
			width="0"
			height="0"
		>
			<defs>
				<mask
					id="svgMask"
					maskUnits="userSpaceOnUse"
				>
					<!-- Initially everything is visible (white) -->
					<rect
						width="100%"
						height="100%"
						fill="white"
					/>

					<!-- The moving shape will cut out from the mask (black) -->
					<g ref="maskPathGroup">
						<path
							d="M305.2 1079.6L216.1 872.55H394.3L260.65 547.193L-170 1612V1109.17L275.5 0L721 1079.6H305.2Z"
							fill="black"
						/>
					</g>
				</mask>
			</defs>
		</svg>

		<!-- Moving SVG shape -->
		<div
			class="svg-container"
			ref="svgContainer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 721 1080"
				fill="none"
				preserveAspectRatio="none"
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
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const svgContainer = ref(null);
const maskedBg = ref(null);
const maskPathGroup = ref(null);

onMounted(() => {
	// Apply the mask to the background
	maskedBg.value.style.mask = 'url(#svgMask)';
	maskedBg.value.style.webkitMask = 'url(#svgMask)';

	// Calculate the SVG width based on its viewBox
	const svgWidth = 721;

	// Set initial positions
	gsap.set([svgContainer.value, maskPathGroup.value], {
		x: -svgWidth,
	});

	// Create animation timeline
	const tl = gsap.timeline();

	// Animate both the visible SVG and the mask SVG together
	tl.to([svgContainer.value, maskPathGroup.value], {
		x: window.innerWidth,
		duration: 3,
		ease: 'power2.inOut',
	});
});
</script>

<style scoped>
.animation-container {
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: white; /* White background underneath the mask*/
}

.masked-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #333; /* Original background color */
	z-index: 10;
}

.mask-svg {
	position: absolute;
	pointer-events: none;
}

.svg-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 721px; /* Match SVG viewBox width */
	height: 100vh;
	z-index: 2;
}
</style>
