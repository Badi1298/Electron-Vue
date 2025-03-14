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
			<div
				v-for="(item, index) in items"
				:key="index"
				:ref="
					(el) => {
						if (el) itemRefs[index] = el;
					}
				"
				class="carousel-item absolute top-1/2 left-1/2 w-64 h-48 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': index === activeIndex }"
			>
				<div
					class="w-full h-full flex items-center justify-center text-xl font-bold"
					:class="getItemClass(index)"
				>
					{{ item.title }}
				</div>
			</div>
		</div>

		<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
			<button
				v-for="(item, index) in items"
				:key="`dot-${index}`"
				@click="goToSlide(index)"
				class="w-3 h-3 rounded-full"
				:class="index === activeIndex ? 'bg-primary-purple' : 'bg-gray-400'"
			></button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import gsap from 'gsap';

// Carousel items
const items = [
	{ title: 'Slide 1', color: 'primary-purple' },
	{ title: 'Slide 2', color: 'primary-green' },
	{ title: 'Slide 3', color: 'primary-purple' },
];

// State variables
const carouselRef = ref(null);
const itemRefs = ref([]);
const activeIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);
const rotationAmount = ref(0);
const rotationStep = 120; // Degrees between each item (360 / 3 = 120)

// Get class based on item index
const getItemClass = (index) => {
	const color = items[index].color;
	return {
		[`bg-${color}`]: true,
		'text-white': color === 'primary-purple' || color === 'black',
		'text-black': color === 'primary-green',
	};
};

// Position and scale items in 3D space
const positionItems = () => {
	items.forEach((_, index) => {
		const angle = ((index - activeIndex.value) * rotationStep + rotationAmount.value) % 360;
		const radian = (angle * Math.PI) / 180;

		// Calculate position (circular arrangement)
		const radius = 200; // Radius of the circle
		const x = Math.sin(radian) * radius;
		const z = Math.cos(radian) * radius;

		// Calculate scale based on z position (front is larger)
		const scale = mapRange(z, -radius, radius, 0.8, 1.2);

		// Calculate z-index (items in front have higher z-index)
		const zIndex = Math.round(mapRange(z, -radius, radius, 1, 10));

		if (itemRefs.value[index]) {
			gsap.to(itemRefs.value[index], {
				x,
				z,
				scale,
				rotationY: 0, // Always face front
				duration: isDragging.value ? 0.1 : 0.5,
				ease: 'power2.out',
				zIndex,
			});
		}
	});
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
	const newIndex = (activeIndex.value - Math.round((snapAngle - normalizedRotation) / rotationStep)) % items.length;
	activeIndex.value = (newIndex + items.length) % items.length; // Ensure positive index

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
