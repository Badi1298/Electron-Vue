<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			class="absolute left-1/2 -translate-x-1/2 top-0 cursor-pointer z-20"
			@click="emit('goToMiddleTab')"
			@touchstart.prevent="emit('goToMiddleTab')"
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
		<div class="page-content flex flex-col justify-end font-effra pb-6 relative max-w-[1446px]">
			<h1 class="text-[40px] font-bold text-primary-purple">Xydalba™ provided effective treatment in a paediatric population<sup>5</sup></h1>

			<section class="relative grid grid-cols-[1fr_0.3fr] gap-x-8 pr-[60px] mt-12">
				<div class="flex flex-col gap-y-6">
					<div class="flex gap-[30px] items-center">
						<img
							src="/src/assets/images/treatment-pie-1.png"
							alt="Treatment Pie"
							class="w-[166px] h-auto"
						/>
						<p class="text-2xl text-primary-purple">
							<span class="font-bold">Favourable clinical response</span> at 48-72 hours was documented in<br />
							<span class="font-bold text-primary-green">97.4%</span> and
							<span class="font-bold">98.6% in the single and 2-dose study arms,</span> respectively<sup>5</sup>
						</p>
					</div>
					<div class="flex gap-[30px] items-center">
						<img
							src="/src/assets/images/treatment-pie-2.png"
							alt="Treatment Pie"
							class="w-[166px] h-auto"
						/>
						<p class="text-2xl text-primary-purple">
							<span class="font-bold">Clinical cure was achieved in >96%</span> of patients treated with<br />
							Xydalba™ by the TOC visit<sup>5</sup>
						</p>
					</div>
					<div class="flex gap-[30px] items-center">
						<img
							src="/src/assets/images/treatment-pie-3.png"
							alt="Treatment Pie"
							class="w-[166px] h-auto"
						/>
						<p class="text-2xl text-primary-purple">Efficacy was comparable across the five age cohorts<sup>5</sup></p>
					</div>
					<div class="h-[112px] mt-1.5"></div>
					<div class="absolute bottom-0 left-0 w-[1041px]">
						<div
							class="relative min-h-[112px] flex gap-x-5 items-center justify-between mt-[60px] bg-primary-green rounded-t-[20px] py-2 px-11 cursor-pointer"
							@click="animateExpandable"
							@touchstart.prevent="animateExpandable"
						>
							<p class="text-xl font-bold text-white">Clinical response* in paediatric patients, all cohorts, mITT<sup>†</sup> population</p>
							<div class="flex items-center gap-x-5">
								<div
									v-if="!isExpanded"
									class="flex items-center justify-center bg-white w-[170px] h-24 rounded-xl border border-primary-green"
								>
									<img
										src="/src/assets/images/xyd-treatment-chart-3.svg"
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
								src="/src/assets/images/xyd-treatment-chart-3.svg"
								alt="Big Chart"
								class="w-full h-auto"
							/>
							<p class="text-xs text-dark-grey pt-7">Adapted from Giorgobiani M et al. 2022.5</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px]">
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
			<the-footer class="footer mb-4 pr-[60px] max-w-[1446px]">
				*Sponsor assessment. †mITT: randomised patients who received ≥1 dose of study drug and had a diagnosis of ABSSSI (or, in cohort 5,
				suspected/confirmed sepsis) not known to be caused exclusively by a Gram-negative organism. <sup>†</sup>Vancomycin IV, oxacillin IV; or
				flucloxacillin IV ABSSSI: Acute Bacterial Skin and Skin Structure Infections; EOT: End of treatment; mITT: Modified intent-to-treat; TOC: Test
				of cure; IV: Intravenous.
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'xyd-safety', query: { navigatedAwayBy: 'next-section-button' } }">
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

const emit = defineEmits(['goToTopTab', 'goToMiddleTab']);

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
			height: 600,
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
