<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
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
			/>
			<img
				src="/src/assets/images/active-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
			/>
		</div>
		<div
			class="flex flex-col justify-end font-effra transition-all duration-300 relative"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px] mr-[120px]']"
		>
			<div
				class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium font-effra transform transition-all duration-300 absolute top-14"
				:class="[sidebarOpen ? 'right-[60px]' : 'right-32']"
			>
				<img
					src="/src/assets/images/touch-purple.png"
					alt="Touch to select tab"
					class="w-[70px] h-[70px]"
				/>
				<span>Tap to expand</span>
			</div>
			<div class="relative flex items-center gap-x-4">
				<span class="text-[220px] text-primary-green">2.</span>
				<h1 class="font-bold text-[75px] text-primary-green leading-none translate-y-3">
					Two<br />
					weeks
				</h1>
				<div class="absolute bottom-12 pb-9 px-6 pt-6 right-[60px] max-w-[854px] bg-primary-green text-white text-[32px] font-bold rounded-t-[20px]">
					Xydalba™ delivers two weeks of fast-acting,<sup>7</sup> effective treatment in one single dose,<sup>1</sup> potentially allowing early
					discharge for your patients<sup>2,3</sup>
				</div>
				<div class="h-5 bg-primary-green absolute bottom-10 left-0 w-full"></div>
			</div>

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
							<p class="text-xl font-bold text-white">
								Xydalba™ gives you the choice of two dosing regimen that both<br />
								deliver plasma concentrations above the MIC<sub>90</sub> for over 15 days<sup>‡1</sup>
							</p>
							<div class="flex items-center gap-x-5">
								<div
									v-if="!isExpanded"
									class="flex items-center justify-center bg-white w-[170px] h-24 rounded-xl border border-primary-green"
								>
									<img
										src="/src/assets/images/step-two-small-chart.png"
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
							class="flex items-center bg-white px-14"
						>
							<img
								src="/src/assets/images/step-2-big-chart.png"
								alt="Big Chart"
								class="w-[836px]"
							/>
						</div>
						<div
							ref="details"
							class="flex gap-x-5 items-center bg-primary-green/15 px-14"
						>
							<img
								src="/src/assets/images/list-item-emblem-green.png"
								alt="List Item Emblem"
								class="w-[57px] h-[30px]"
							/>
							<p class="text-primary-green font-bold">
								Dalbavancin mean Plasma Concentrations versus time in a typical ABSSSI adult patient (simulation using<br />
								population pharmacokinetic model) for both the single and the two-dose regimens.
							</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px]">
					<img
						src="/src/assets/images/clock-purple.png"
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

		<footer class="pt-6">
			<the-footer
				class="transition-all duration-300"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px] pr-[120px]']"
			>
				*Vancomycin/linezolid in Discover studies.<sup>8 †</sup>Pooled analysis of dalbavancin-treated patients in phase 2/3 studies vs. those receiving
				comparator agents (vancomycin, linezolid, cefazolin, nafcillin, or oxacillin).<sup>9 ‡</sup>MIC90 = minimum inhibitory concentration at which
				90% of the isolates are inhibited. <sup>§</sup>Determined by EUCAST (European Committee on Antimicrobial Susceptibility Testing):
				<span class="italic">Staphylococcus</span> spp., Beta-haemolytic <span class="italic">Streptococci </span> of Groups A, B, C, G, Viridans group
				<span class="italic">Streptococci</span> (<span class="italic">Streptococcus anginosus</span> group only).<br />ABSSSI: Acute Bacterial Skin and
				Skin Structure Infections.
			</the-footer>
			<div class="flex justify-between items-center mt-2.5 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

import Background from '@/assets/images/step-2-background.png';

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

const chart = ref(null);
const details = ref(null);
const bottomTab = ref(null);

const isExpanded = ref(false);

onMounted(() => {
	gsap.set([chart.value, details.value], { autoAlpha: 0, height: 0 });
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
		gsap.to(details.value, {
			height: 88,
			autoAlpha: 1,
		});
	} else {
		gsap.to([chart.value, details.value], { autoAlpha: 0, height: 0, duration: 0.7 });
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
