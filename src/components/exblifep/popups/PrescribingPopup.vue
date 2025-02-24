<template>
	<Popup
		v-bind:popup-open="popupOpen"
		v-on:update:popupOpen="emit('update:popupOpen', $event)"
		title="References"
	>
		<div class="w-[97%]">
			<img
				src="/src/assets/images/prescribing-information.png"
				alt="Prescribing Information"
				class="w-full"
			/>
		</div>
	</Popup>
</template>

<script setup>
import Popup from '../Popup.vue';

defineProps({
	popupOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:popupOpen']);
</script>
