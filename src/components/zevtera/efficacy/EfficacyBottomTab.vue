<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div
			class="flex flex-col justify-center font-effra transition-all duration-300 relative"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<img
				src="/src/assets/images/bullet-long.png"
				alt="Bullet Long"
				class="-translate-x-20"
			/>
			<div class="grid grid-cols-2 gap-x-28 pr-[60px] items-center">
				<div>
					<the-title>More pathogens covered</the-title>
					<div class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-8">
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold text-white">Documented use<sup>3</sup></h4>
					</div>
					<div class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-[18px]">
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold text-white">Empiric use<sup>2,7,8</sup></h4>
					</div>
					<div class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-[18px]">
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold text-white">Adapted to your local stewardship program<sup>4,8</sup></h4>
					</div>
				</div>
				<div class="relative z-50 flex flex-col bg-white p-12 rounded-[20px] border-primary-green border-[5px]">
					<h3 class="font-bold text-2xl leading-normal text-center">
						Early improvement at Day 4 in patients with HAP (excluding VAP) by pathogen type(CE)<sup>6</sup>
					</h3>
					<VLazyImage
						:src="PathogensChart"
						alt="Pathogens Chart"
						class="w-[503px] self-end mr-8"
					/>
					<p class="text-[10px] text-[#555] text-center mt-8">Adapted from Scheeren T et al. 2019.6</p>
					<img
						src="/src/assets/images/expand-icon-purple.png"
						alt="Expand Icon"
						class="absolute bottom-5 right-7 w-[60px] h-[60px] cursor-pointer"
					/>
				</div>
			</div>
		</div>

		<footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-purple" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

import VLazyImage from 'v-lazy-image';

import { gsap } from 'gsap';

import PathogensChart from '@/assets/images/pathogens-chart.png';

import NextSection from '@/components/NextSection.vue';
import TheTitle from '@/components/zevtera/TheTitle.vue';
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

const emit = defineEmits(['goToTopTab']);

const bottomTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
