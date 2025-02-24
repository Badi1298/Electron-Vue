<template>
	<div
		v-show="popupOpen"
		class="fixed top-0 left-0 h-screen w-screen bg-black/40 z-50 backdrop-blur-sm"
		@click="emit('update:popupOpen', false)"
	>
		<div
			@click.stop
			class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-16 w-4/5 h-5/6 font-effra"
		>
			<button
				class="absolute top-10 right-10"
				@click="emit('update:popupOpen', false)"
			>
				<img
					src="/src/assets/images/close-button.png"
					alt="Close Button"
					class="w-[60px] h-[60px]"
				/>
			</button>
			<the-title>{{ title }}</the-title>
			<img
				src="/src/assets/images/lime-green-border.png"
				alt="Lime Green Border"
				class="h-1.5 w-auto my-5"
			/>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import TheTitle from './TheTitle.vue';

defineProps({
	popupOpen: {
		type: Boolean,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['update:popupOpen']);
</script>
