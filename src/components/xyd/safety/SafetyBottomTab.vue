<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			@click="emit('goToTopTab')"
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
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div class="page-content flex flex-col justify-end font-effra pb-6 relative max-w-[1446px]">
			<h1 class="text-[40px] font-bold text-primary-purple">
				The safety profile of Xydalba™ in paediatric patients<br />
				is consistent with adults<sup>5</sup>
			</h1>

			<section class="relative grid grid-cols-[1fr_0.3fr] gap-x-8 pr-[60px] mt-24">
				<div class="flex flex-col gap-y-10">
					<div class="flex gap-[30px] items-center">
						<img
							src="/src/assets/images/safety-health-purple.png"
							alt="Treatment Pie"
							class="w-[166px] h-auto"
						/>
						<p class="text-2xl text-primary-purple">
							TEAEs occurred in 7.2%, 9.0% and 3.3% of patients in Xydalba™ single dose, Xydalba™ 2-dose and comparator arms<sup>5</sup>
						</p>
					</div>
					<div class="flex gap-[30px] items-center">
						<img
							src="/src/assets/images/safety-shield-purple.png"
							alt="Treatment Pie"
							class="w-[166px] h-auto"
						/>
						<p class="text-2xl text-primary-purple">Safety was comparable across the five age cohorts<sup>5</sup></p>
					</div>

					<div class="h-[112px] mt-3.5"></div>
					<div class="absolute bottom-0 left-0 w-[1041px] overflow-hidden">
						<div
							class="relative min-h-[112px] flex gap-x-5 items-center justify-between mt-[60px] bg-primary-green rounded-t-[20px] py-2 px-11 cursor-pointer"
							@click="animateExpandable"
						>
							<p class="text-xl font-bold text-white">Summary of treatment-emergent adverse events, safety population*</p>
							<div class="flex items-center gap-x-5">
								<div
									v-if="!isExpanded"
									class="flex items-center justify-center bg-white w-[170px] h-24 rounded-xl border border-primary-green"
								>
									<img
										src="/src/assets/images/safety-table.png"
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
							class="flex flex-col justify-center bg-white px-14 shadow-treatment overflow-hidden"
						>
							<img
								src="/src/assets/images/safety-table.png"
								alt="Big Chart"
								class="w-[900px]"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px] min-h-[580px]">
					<img
						src="/src/assets/images/dosing-bottle-purple.png"
						alt="Clock"
						class="w-[90px] h-[90px] mx-auto"
					/>
					<p class="text-[22px] text-primary-purple font-bold text-center">
						Clinical responses were similar across Xydalba™ single dose and 2-dose regimens and similar to comparator<sup>‡</sup> treatments
					</p>
				</div>
			</section>
		</div>

		<footer>
			<the-footer class="footer mb-4 pr-[60px]">
				*Sponsor assessment. †mITT: randomised patients who received ≥1 dose of study drug and had a diagnosis of ABSSSI (or, in cohort 5,
				suspected/confirmed sepsis) not known to be caused exclusively by a Gram-negative organism. <sup>†</sup>Vancomycin IV, oxacillin IV; or
				flucloxacillin IV ABSSSI: Acute Bacterial Skin and Skin Structure Infections; EOT: End of treatment; mITT: Modified intent-to-treat; TOC: Test
				of cure; IV: Intravenous.
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'xyd-summary', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-green" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

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

const emit = defineEmits(['goToTopTab']);

const bottomTab = ref(null);

const chart = ref(null);

const isExpanded = ref(false);

onMounted(() => {
	gsap.set(chart.value, { height: 0 });
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
			height: 620,
			duration: 0.6,
		});
	} else {
		gsap.to(chart.value, { height: 0, duration: 0.6 });
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
