<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToMiddleTab')"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToBottomTab')"
			/>
		</div>
		<div
			class="flex flex-col justify-center font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<h1 class="text-[40px] font-bold text-primary-purple">Xydalba™ demonstrated clinical success at Day 14-15<sup>8</sup></h1>

			<section></section>
		</div>

		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>ABSSSI: Acute Bacterial Skin and Skin Structure Infections.</the-footer
			>
			<ExploreAnother />
			<button
				@click="emit('goToMiddleTab')"
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
			>
				<img
					src="/src/assets/images/page-vertical-down-green.png"
					alt="Down Button"
					class="w-[140px] h-[50px] cursor-pointer"
				/>
			</button>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

import VLazyImage from 'v-lazy-image';

import Background from '@/assets/images/step-1-background.png';

import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
	scrollIntoView: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['goToMiddleTab', 'goToBottomTab']);

const topTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>
