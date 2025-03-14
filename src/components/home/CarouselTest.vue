<template>
	<div class="relative w-[1070px] h-[702px] flex justify-center">
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
				class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 0 }"
			>
				<div class="relative w-full h-full bg-textured overflow-hidden bg-white pointer-events-none">
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
				ref="item1Ref"
				class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 1 }"
			>
				<div class="relative w-full h-full bg-gradient-to-b from-white via-white via-70% to-primary-light-orange overflow-hidden pointer-events-none">
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
				ref="item2Ref"
				class="carousel-item absolute top-1/2 left-1/2 w-[566px] h-[702px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300"
				:class="{ 'shadow-xl': activeIndex === 2 }"
			>
				<div class="relative w-full h-full bg-textured overflow-hidden pointer-events-none">
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

		<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
			<button
				@click="goToSlide(0)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 0 ? 'bg-primary-purple' : 'bg-cool-grey'"
			></button>
			<button
				@click="goToSlide(1)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 1 ? 'bg-primary-purple' : 'bg-cool-grey'"
			></button>
			<button
				@click="goToSlide(2)"
				class="w-3 h-3 rounded-full"
				:class="activeIndex === 2 ? 'bg-primary-purple' : 'bg-cool-grey'"
			></button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

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
		const z = Math.cos(radian) * radius * 0.4;

		// Calculate scale based on z position (front is larger)
		const scale = mapRange(z, -radius * 0.6, radius * 0.6, 0.85, 0.9);

		// Calculate opacity - slightly reduce opacity for back items
		const opacity = mapRange(z, -radius * 0.6, radius * 0.6, 0.8, 1);

		// Calculate offset to create overlapping effect
		const offsetX = Math.sin(radian) * 60;

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
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
