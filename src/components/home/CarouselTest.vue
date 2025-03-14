<template>
	<div class="relative w-full h-96 flex items-center justify-center bg-black overflow-hidden">
		<div
			ref="carouselRef"
			class="carousel relative w-full h-full"
			@mousedown="startDrag"
			@touchstart="startDrag"
			@mouseup="endDrag"
			@touchend="endDrag"
			@mouseleave="endDrag"
			@mousemove="onDrag"
			@touchmove="onDrag"
		>
			<!-- Explicit declaration of each carousel item -->
			<div
				ref="item0Ref"
				class="carousel-item absolute top-1/2 left-1/2 w-64 h-48 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 0 }"
			>
				<div class="w-full h-full flex items-center justify-center text-xl font-bold bg-primary-purple text-white">Slide 1</div>
			</div>

			<div
				ref="item1Ref"
				class="carousel-item absolute top-1/2 left-1/2 w-64 h-48 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 1 }"
			>
				<div class="w-full h-full flex items-center justify-center text-xl font-bold bg-primary-green text-black">Slide 2</div>
			</div>

			<div
				ref="item2Ref"
				class="carousel-item absolute top-1/2 left-1/2 w-64 h-48 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 2 }"
			>
				<div class="w-full h-full flex items-center justify-center text-xl font-bold bg-primary-purple text-white">Slide 3</div>
			</div>
		</div>

		<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
			<button
				@click="goToSlide(0)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 0 ? 'bg-primary-purple' : 'bg-gray-400'"
			></button>
			<button
				@click="goToSlide(1)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 1 ? 'bg-primary-purple' : 'bg-gray-400'"
			></button>
			<button
				@click="goToSlide(2)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 2 ? 'bg-primary-purple' : 'bg-gray-400'"
			></button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

// Individual item refs
const item0Ref = ref(null);
const item1Ref = ref(null);
const item2Ref = ref(null);

// State variables
const carouselRef = ref(null);
const activeIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);
const rotationAmount = ref(0);
const rotationStep = 120; // Degrees between each item (360 / 3 = 120)

// Position and scale items in 3D space
const positionItems = () => {
	const itemRefs = [item0Ref.value, item1Ref.value, item2Ref.value];
	const totalItems = 3;

	for (let index = 0; index < totalItems; index++) {
		const angle = ((index - activeIndex.value) * rotationStep + rotationAmount.value) % 360;
		const radian = (angle * Math.PI) / 180;

		// Calculate position (circular arrangement but with less radius to keep items closer)
		const radius = 150;
		const x = Math.sin(radian) * radius;

		// Adjust z position to keep items partially visible
		const z = Math.cos(radian) * radius * 0.6;

		// Calculate scale based on z position (front is larger)
		const scale = mapRange(z, -radius * 0.6, radius * 0.6, 0.85, 1.15);

		// Calculate opacity - slightly reduce opacity for back items
		const opacity = mapRange(z, -radius * 0.6, radius * 0.6, 0.8, 1);

		// Calculate offset to create overlapping effect
		const offsetX = Math.sin(radian) * 40;

		// Calculate z-index (items in front have higher z-index)
		const zIndex = Math.round(mapRange(z, -radius * 0.6, radius * 0.6, 1, 10));

		if (itemRefs[index]) {
			gsap.to(itemRefs[index], {
				x: x + offsetX,
				z,
				scale,
				rotationY: 0, // Always face front
				opacity,
				duration: isDragging.value ? 0.1 : 0.5,
				ease: 'power2.out',
				zIndex,
			});
		}
	}
};

// Map a value from one range to another
const mapRange = (value, inMin, inMax, outMin, outMax) => {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Drag handlers
const startDrag = (e) => {
	isDragging.value = true;
	startX.value = e.clientX || e.touches[0].clientX;
	currentX.value = startX.value;
};

const onDrag = (e) => {
	if (!isDragging.value) return;

	e.preventDefault();
	const clientX = e.clientX || e.touches?.[0]?.clientX || currentX.value;
	const deltaX = clientX - currentX.value;
	currentX.value = clientX;

	// Update rotation amount based on drag distance
	rotationAmount.value += deltaX * 0.5;

	// Position items based on the new rotation
	positionItems();
};

const endDrag = () => {
	if (!isDragging.value) return;

	isDragging.value = false;

	// Calculate the closest item to the front
	const normalizedRotation = rotationAmount.value % 360;
	const snapAngle = Math.round(normalizedRotation / rotationStep) * rotationStep;

	// Calculate new active index
	const newIndex = (activeIndex.value - Math.round((snapAngle - normalizedRotation) / rotationStep)) % 3;
	activeIndex.value = (newIndex + 3) % 3; // Ensure positive index

	// Snap to the nearest item position
	rotationAmount.value = snapAngle;

	// Update positions
	positionItems();
};

// Go to a specific slide
const goToSlide = (index) => {
	activeIndex.value = index;
	rotationAmount.value = 0;
	positionItems();
};

// Initialize carousel on mount
onMounted(() => {
	// Set initial 3D transform origin
	gsap.set(carouselRef.value, { transformPerspective: 1000 });

	// Initialize items with their positions
	positionItems();

	// Add resize handler
	window.addEventListener('resize', positionItems);
});

// Clean up on unmount
onBeforeUnmount(() => {
	window.removeEventListener('resize', positionItems);
});
</script>

<style scoped>
.carousel {
	perspective: 1000px;
	transform-style: preserve-3d;
}
.carousel-item {
	transform-style: preserve-3d;
	backface-visibility: hidden;
	transform: translate(-50%, -50%);
}
</style>
