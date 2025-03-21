<template>
	<div class="flex h-[186px] justify-between items-center bg-white pb-6 shadow-exblifep-card rounded-[10px] px-8">
		<div class="flex flex-col h-full justify-between">
			<div>
				<h3 class="font-bold text-[20px] text-black">{{ title }}</h3>
				<p
					class="text-sm"
					v-html="subtitle"
				></p>
			</div>

			<RouterLink :to="{ path: discoverMorePath, query: { navigatedAwayBy: 'discover-more-button' } }">
				<button
					class="flex items-center justify-center py-3 text-sm w-[150px] mt-1.5"
					:class="buttonClass"
				>
					<span :class="buttonTextClass">Discover more</span>
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
	buttonTextClass: {
		type: String,
		default: '',
	},
	discoverMorePath: {
		type: String,
		default: '',
	},
});
</script>
