<template>
	<div class="animation-container">
		<!-- Canvas for the animation -->
		<canvas
			ref="canvas"
			class="animation-canvas"
		></canvas>

		<!-- Hidden SVG for reference -->
		<div style="display: none">
			<svg
				ref="svgRef"
				xmlns="http://www.w3.org/2000/svg"
				width="721"
				height="1080"
				viewBox="0 0 721 1080"
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

const canvas = ref(null);
const svgRef = ref(null);

onMounted(() => {
	// Set up canvas
	const ctx = canvas.value.getContext('2d');
	canvas.value.width = window.innerWidth;
	canvas.value.height = window.innerHeight;

	// Fill with initial background color
	ctx.fillStyle = '#333';
	ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

	// Convert SVG to image for canvas
	const svgString = new XMLSerializer().serializeToString(svgRef.value);
	const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
	const svgUrl = URL.createObjectURL(svgBlob);

	const svgImage = new Image();
	svgImage.onload = function () {
		// Start animation once SVG is loaded
		startAnimation(svgImage);

		// Cleanup
		URL.revokeObjectURL(svgUrl);
	};
	svgImage.src = svgUrl;

	function startAnimation(svgImg) {
		// Calculate scaled dimensions
		const scale = canvas.value.height / svgImg.height;
		const scaledWidth = svgImg.width * scale;
		const scaledHeight = canvas.value.height;

		// Animation position
		const startX = -scaledWidth;
		const endX = canvas.value.width;

		// Define the target object to animate
		const animationTarget = { x: startX };

		gsap.fromTo(
			animationTarget, // Target
			{ x: startX }, // From vars (starting state)
			{
				// To vars (ending state and config)
				x: endX,
				duration: 3,
				ease: 'power2.inOut',
				onUpdate: function () {
					const x = animationTarget.x; // Access x directly from the target
					// Clear canvas
					ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
					// Draw colored background
					ctx.fillStyle = '#333';
					ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
					// Create the wipe effect
					ctx.save();
					ctx.globalCompositeOperation = 'destination-out';
					ctx.drawImage(svgImg, x, 0, scaledWidth, scaledHeight);
					ctx.restore();
					// Draw SVG on top
					ctx.drawImage(svgImg, x, 0, scaledWidth, scaledHeight);
				},
			}
		);
	}
});
</script>

<style scoped>
.animation-container {
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

.animation-canvas {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
