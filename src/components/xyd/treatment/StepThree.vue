<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			@click="emit('goToMiddleTab')"
			class="absolute left-1/2 -translate-x-1/2 top-0 cursor-pointer z-20"
		>
			<img
				src="/src/assets/images/page-vertical-up-green.png"
				alt="Down Button"
				class="w-[140px] h-[50px]"
			/>
		</button>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToMiddleTab')"
			/>
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div
			class="flex flex-col justify-end font-effra pb-6 transition-all duration-300 relative"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px] mr-[120px]']"
		>
			<h1 class="text-[40px] font-bold text-primary-purple">Xydalba™ provided effective treatment in a paediatric population<sup>5</sup></h1>

			<section class="relative grid grid-cols-[1fr_0.3fr] gap-x-8 pr-[60px]">
				<div>
					<p class="text-2xl text-primary-green">
						<span class="font-bold">Two weeks</span> of treatment in <span class="font-bold">one dose</span> of Xydalba™ provides:
					</p>
					<div class="flex gap-x-16 mt-28">
						<div class="relative bg-white w-[260px] pt-[90px] pb-8 text-dark-grey text-center rounded-[15px] border border-primary-green">
							<p class="text-xl font-bold">
								Less catheter<br />
								related risks<sup>2,4</sup>
							</p>
							<img
								src="/src/assets/images/iv-bag-green.png"
								alt="IV Bag"
								class="absolute -top-1/2 translate-y-6 left-1/2 -translate-x-1/2 w-[130px] h-[130px]"
							/>
						</div>
						<div class="relative bg-white w-[260px] pt-[90px] pb-8 text-dark-grey text-center rounded-[15px] border border-primary-green">
							<p class="text-xl font-bold">Less concern about compliance<sup>4,7</sup></p>
							<img
								src="/src/assets/images/chart-down-green.png"
								alt="IV Bag"
								class="absolute -top-1/2 translate-y-6 left-1/2 -translate-x-1/2 w-[130px] h-[130px]"
							/>
						</div>
						<div class="relative bg-white w-[260px] px-3 pt-[90px] pb-8 text-dark-grey text-center rounded-[15px] border border-primary-green">
							<p class="text-xl font-bold">Fewer adverse events than comparators<sup>*†8,9</sup></p>
							<img
								src="/src/assets/images/caution-green.png"
								alt="IV Bag"
								class="absolute -top-1/2 translate-y-6 left-1/2 -translate-x-1/2 w-[130px] h-[130px]"
							/>
						</div>
					</div>
					<div class="h-[112px] mt-[60px]"></div>
					<div class="absolute bottom-0 left-0 w-[1041px]">
						<div
							class="relative min-h-[112px] flex gap-x-5 items-center justify-between mt-[60px] bg-primary-green rounded-t-[20px] py-2 px-11 cursor-pointer"
							@click="animateExpandable"
						>
							<p class="text-xl font-bold text-white">Clinical response* in paediatric patients, all cohorts, mITT<sup>†</sup> population</p>
							<div class="flex items-center gap-x-5">
								<div
									v-if="!isExpanded"
									class="flex items-center justify-center bg-white w-[170px] h-24 rounded-xl border border-primary-green"
								>
									<img
										src="/src/assets/images/xyd-treatment-chart-3.png"
										alt="Small Chart"
										class="w-[120px] h-auto"
									/>
								</div>
								<img
									src="/src/assets/images/touch-purple.png"
									alt="Touch Icon"
									class="w-[70px] h-[70px]"
								/>
							</div>
						</div>
						<div
							ref="chart"
							class="flex flex-col justify-center bg-white px-14 shadow-treatment"
						>
							<img
								src="/src/assets/images/xyd-treatment-chart-3.png"
								alt="Big Chart"
								class="w-[836px]"
							/>
							<p>Adapted from Giorgobiani M et al. 2022.5</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px]">
					<img
						src="/src/assets/images/dosing-bottle-turqoise.png"
						alt="Clock"
						class="w-[90px] h-[90px] mx-auto"
					/>
					<p class="text-[22px] text-primary-purple font-bold text-center">
						The rapid and long-lasting action of Xydalba™ means you can be confident that your patients are getting the course of treatment they
						need<sup>1</sup>
					</p>
				</div>
			</section>
		</div>

		<footer>
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
			>
				*One 3-hr infusion, one 30-min infusion once a week for two weeks, two 1-hr infusions a day for a week, few days of two 1-hr infusions a day
				then one pill 3-4<br />
				times a day for rest of week.10 †Clinical success included ≥20% reduction of erythema at 48-72 hrs, resolution or improvement of clinical signs
				and symptoms,<br />
				≥80% reduction in lesion size on Day 14 and ≥90% on Day 28.10
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

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

const chart = ref(null);

const isExpanded = ref(false);

onMounted(() => {
	gsap.set(chart.value, { autoAlpha: 0, height: 0 });
});

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

const animateExpandable = () => {
	if (!isExpanded.value) {
		gsap.to(chart.value, {
			height: 600,
			autoAlpha: 1,
		});
	} else {
		gsap.to(chart.value, { autoAlpha: 0, height: 0, duration: 0.7 });
	}

	isExpanded.value = !isExpanded.value;
};
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
