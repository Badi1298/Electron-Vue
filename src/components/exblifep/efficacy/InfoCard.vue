<template>
	<div class="relative bg-white border border-electric-blue max-w-[474px] rounded-[20px] px-10 py-14 overflow-hidden">
		<h4
			class="text-2xl font-medium text-cool-grey"
			v-html="text"
		></h4>
		<img
			src="/src/assets/images/lime-green-border.png"
			alt="Lime Green Border"
			class="h-1.5 w-auto mt-5"
		/>
		<img
			src="/src/assets/images/background-green-circle.png"
			alt="Green Circle"
			class="absolute bottom-0 -right-[130px] z-0"
		/>
		<img
			:src="imageSrc"
			class="w-28 h-28 absolute bottom-3 right-6 z-10"
		/>
	</div>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		required: true,
	},
	imageSrc: {
		type: String,
		required: true,
	},
});
</script>
