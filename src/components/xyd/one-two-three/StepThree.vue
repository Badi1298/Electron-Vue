<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			class="absolute left-[42%] top-0 cursor-pointer z-20"
			@click="emit('goToMiddleTab')"
			@touchstart.prevent="emit('goToMiddleTab')"
		>
			<img
				src="/src/assets/images/page-vertical-up-green.png"
				alt="Down Button"
				class="w-[140px] h-[50px]"
			/>
		</button>
		<VLazyImage
			:src="Background"
			alt="Step 2 Background"
			class="absolute -z-10 top-0 left-0 min-w-[1920px] min-h-[1080px]"
		/>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
				@touchstart.prevent="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToMiddleTab')"
				@touchstart.prevent="emit('goToMiddleTab')"
			/>
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div class="ml-[124px] flex flex-col justify-center font-gothic relative">
			<div class="relative flex items-center gap-x-4">
				<span class="text-[220px] text-primary-turqoise font-bold">3.</span>
				<h1 class="font-bold text-[75px] text-primary-turqoise leading-none translate-y-5">
					30<br />
					minutes
				</h1>
			</div>

			<section class="-mt-10">
				<p class="text-primary-turqoise text-2xl font-bold">
					In one 30-minute infusion Xydalba<sup>™</sup> provides<br />
					convenience for you and your patients<sup class="text-[60%] -top-[0.55em]">2,3</sup>
				</p>
				<p class="text-xl text-dark-grey mt-5 leading-tight">
					In the post hoc analysis of the single dose phase 3 study, the<br />
					majority of adult patients:<sup class="text-[60%] -top-[0.55em]">10</sup>
				</p>
				<ul class="flex flex-col gap-y-4 mt-4">
					<li class="flex items-start gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-turqoise.png"
							alt="List Item Emblem"
							class="w-[58px] translate-y-0.5"
						/>
						<p class="text-primary-turqoise text-2xl font-bold">
							Preferred a single, 30-minute infusion<br />
							over other treatment options*
						</p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-turqoise.png"
							alt="List Item Emblem"
							class="w-[58px] translate-y-0.5"
						/>
						<p class="text-primary-turqoise text-2xl font-bold">
							Achieved similar levels of clinical success<sup class="text-[70%] -top-[0.55em]">†</sup>
						</p>
					</li>
				</ul>
				<p class="text-xl text-dark-grey mt-5">
					Outpatients treated with one, 30-minute Xydalba<sup>™</sup> IV infusion<br />
					reported greater satisfaction than inpatients in terms of:<sup class="text-[60%] -top-[0.55em]">10</sup>
				</p>
				<ul class="flex flex-col gap-y-4 mt-4">
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-turqoise.png"
							alt="List Item Emblem"
							class="w-[58px] translate-y-0.5"
						/>
						<p class="text-primary-turqoise text-2xl font-bold">Effect of treatment on their infection</p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-turqoise.png"
							alt="List Item Emblem"
							class="w-[58px] translate-y-0.5"
						/>
						<p class="text-primary-turqoise text-2xl font-bold">The care they received</p>
					</li>
					<li class="flex items-center gap-x-5">
						<img
							src="/src/assets/images/list-item-emblem-turqoise.png"
							alt="List Item Emblem"
							class="w-[58px] translate-y-0.5"
						/>
						<p class="text-primary-turqoise text-2xl font-bold">Lack of interference with daily activities</p>
					</li>
				</ul>
				<div class="flex gap-x-7 mt-8 bg-primary-turqoise/10 rounded-r-[20px] w-[626px] px-6 py-3">
					<img
						src="/src/assets/images/efficacy-turqoise.png"
						alt="Efficacy"
						class="w-[46px]"
					/>
					<p class="font-bold text-primary-turqoise">
						Xydalba<sup>™</sup> is preferred by patients,<sup>10</sup> allowing them to focus on<br />
						getting better, while improving convenience for you<sup>2,3</sup>
					</p>
				</div>
			</section>
		</div>

		<footer>
			<the-footer class="ml-[124px] mb-4 font-gothic">
				*One 3-hr infusion, one 30-min infusion once a week for two weeks, two 1-hr infusions a day for a week, few days of two 1-hr infusions a day
				then one pill 3-4<br />
				times a day for rest of week.10 †Clinical success included ≥20% reduction of erythema at 48-72 hrs, resolution or improvement of clinical signs
				and symptoms,<br />
				≥80% reduction in lesion size on Day 14 and ≥90% on Day 28.10
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-[400px]">
				<ExploreAnother />
				<RouterLink :to="{ name: 'xyd-treatment', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-green font-gothic text-[24.5px]" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

import VLazyImage from 'v-lazy-image';

import Background from '@/assets/images/step-3-background.png';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
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

const emit = defineEmits(['goToTopTab', 'goToMiddleTab']);

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
