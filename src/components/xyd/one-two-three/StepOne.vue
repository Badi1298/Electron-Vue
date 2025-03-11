<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<img
			src="/src/assets/images/step-1-background.png"
			alt="Step 1 Background"
			class="absolute -z-10 top-0 left-0 min-w-[1920px] min-h-[1080px]"
		/>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/active-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToBottomTab')"
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
			<div class="flex justify-between mr-12">
				<div>
					<span>1.</span>
					<h1>One Dose</h1>
				</div>
			</div>

			<seciton></seciton>
		</div>

		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>ABSSSI: Acute Bacterial Skin and Skin Structure Infections.</the-footer
			>
			<ExploreAnother />
			<button
				@click="emit('goToBottomTab')"
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
			>
				<img
					src="/src/assets/images/down-button-blue.png"
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

import ChartA from '@/assets/images/chart-a.svg';
import ChartB from '@/assets/images/chart-b.png';

import TheTitle from '@/components/zevtera/TheTitle.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const Tabs = Object.freeze({
	OVERALL_SUCCESS: 1,
	CLINICAL_CURE: 2,
});

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

const emit = defineEmits(['goToBottomTab']);

const topTab = ref(null);
const activeTab = ref(Tabs.OVERALL_SUCCESS);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>
