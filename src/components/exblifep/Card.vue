<template>
	<div class="flex gap-x-8 bg-white shadow-exblifep-card items-center rounded-[10px] px-8 pt-9 pb-6">
		<div class="flex flex-col gap-y-2">
			<h3 class="font-medium text-xl">{{ title }}</h3>
			<p
				class="text-sm"
				v-html="subtitle"
			></p>

			<button
				class="px-8 py-3 text-sm mt-2.5"
				:class="buttonClass"
			>
				Discover More
			</button>
		</div>
		<slot></slot>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	},
	subtitle: {
		type: String,
		default: '',
	},
	buttonClass: {
		type: String,
		default: '',
	},
});
</script>
