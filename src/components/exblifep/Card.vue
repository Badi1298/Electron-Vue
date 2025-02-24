<template>
	<div class="flex max-w-[424px] justify-between bg-white shadow-exblifep-card items-center rounded-[10px] px-8 pt-9 pb-6 font-effra">
		<div class="flex flex-col gap-y-2">
			<h3 class="font-medium text-xl">{{ title }}</h3>
			<p
				class="text-sm"
				v-html="subtitle"
			></p>

			<RouterLink
				:to="discoverMorePath"
				class=""
			>
				<button
					class="py-3 text-sm mt-2.5 w-[150px]"
					:class="buttonClass"
				>
					Discover More
				</button>
			</RouterLink>
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
	discoverMorePath: {
		type: String,
		default: '',
	},
});
</script>
