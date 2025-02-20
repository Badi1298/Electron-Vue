<template>
	<div
		class="relative w-fit cursor-pointer"
		@click="emit('click', id)"
	>
		<img
			:src="imageSrc"
			:alt="imageAlt"
			class="w-[130px] h-[130px] z-10 relative"
		/>
		<img
			v-if="active"
			src="/src/assets/images/active-arrow.png"
			alt="Active Arrow"
			class="w-[70px] h-[70px] absolute top-1/2 -right-[52px] transform -translate-y-1/2 z-0"
		/>
		<img
			v-else
			src="/src/assets/images/touch.png"
			alt="Touch"
			class="w-[40px] h-[40px] absolute top-1/2 -right-5 transform -translate-y-1/2 z-20"
		/>
	</div>
</template>

<script setup>
defineProps({
	id: {
		type: Number,
		required: true,
	},
	imageSrc: {
		type: String,
		required: true,
	},
	imageAlt: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['click']);
</script>
