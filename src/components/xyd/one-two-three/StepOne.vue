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
				<div class="flex items-center gap-x-4">
					<span class="text-[220px] text-primary-purple">1.</span>
					<h1 class="font-bold text-[75px] text-primary-purple leading-none translate-y-3">
						One<br />
						dose
					</h1>
				</div>
			</div>

			<seciton class="-mt-8">
				<div class="flex flex-col gap-y-5">
					<p class="text-[24px] text-primary-purple font-bold max-w-[600px]">
						A single dose of Xydalba™ provides a simple and full treatment course, freeing your patients from the discomfort of daily infusions and
						potentially reduction of length of stay<sup>2,3</sup>
					</p>
					<p class="text-xl text-[#414042]">
						Over a third of patients hospitalised for ABSSSIs had no reason<br />
						to stay in hospital other than for IV antibiotics<sup>6</sup>
					</p>
					<p class="text-xl text-[#414042]">A single dose of Xydalba™ simplifies administration,<sup>1</sup> offering:</p>
				</div>
				<ul class="flex flex-col gap-y-7 mt-10">
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-purple.png"
							alt="List Item Emblem"
							class="w-[58px]"
						/>
						<p class="text-primary-purple text-2xl font-bold">Ease of use<sup>1</sup></p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-purple.png"
							alt="List Item Emblem"
							class="w-[58px]"
						/>
						<p class="text-primary-purple text-2xl font-bold">More time and resources for you<sup>2,3</sup></p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-purple.png"
							alt="List Item Emblem"
							class="w-[58px]"
						/>
						<p class="text-primary-purple text-2xl font-bold">Less risk of nosocomial infections<sup>2</sup></p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-purple.png"
							alt="List Item Emblem"
							class="w-[58px]"
						/>
						<p class="text-primary-purple text-2xl font-bold">Less time in hospital for your patients<sup>2,3</sup></p>
					</li>
				</ul>
			</seciton>
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
