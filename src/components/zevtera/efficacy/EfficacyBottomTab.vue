<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			class="absolute left-1/2 top-0 z-50"
			@click="emit('goToTopTab')"
			@touchstart.prevent="emit('goToTopTab')"
		>
			<img
				src="/src/assets/images/page-vertical-up-purple.png"
				alt="Down Button"
				class="w-[140px] h-[50px] cursor-pointer"
			/>
		</button>
		<div class="flex flex-col gap-y-6 absolute top-1/2 -translate-y-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
				@touchstart.prevent="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div class="page-content flex flex-col font-effra relative">
			<img
				src="/src/assets/images/bullet-long.png"
				alt="Bullet Long"
				class="-translate-x-20"
			/>
			<div class="relative gap-x-28 items-center flex-1 content-center">
				<div>
					<the-title
						>More<br />
						pathogens covered</the-title
					>
					<div class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-8 max-w-[582px]">
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold font-stag-sans text-white">Documented use<sup class="text-[50%] -top-[0.7em]">3</sup></h4>
					</div>
					<div
						class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-[18px] max-w-[582px]"
					>
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold font-stag-sans text-white">Empiric use<sup class="text-[50%] -top-[0.7em]">2,7,8</sup></h4>
					</div>
					<div
						class="flex items-center gap-x-5 bg-primary-green px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-[18px] max-w-[582px]"
					>
						<img
							src="/src/assets/images/tick-icon-dark-green.png"
							alt="Tick"
							class="w-[82px] h-auto"
						/>
						<h4 class="text-[32px] font-bold font-stag-sans text-white">
							Adapted to your local stewardship program<sup class="text-[50%] -top-[0.7em]">4,8</sup>
						</h4>
					</div>
				</div>
				<div
					ref="details"
					class="absolute right-[60px] top-1/2 -translate-y-1/2 z-50 flex flex-col bg-white p-12 rounded-[20px] border-primary-green border-[5px] shadow-zevtera-efficacy-more-pathogens-card"
				>
					<h3
						ref="detailsTitle"
						class="font-bold text-2xl text-center font-stag-sans"
					>
						Early improvement at Day 4 in patients with HAP<br />
						(excluding VAP) by pathogen type(CE)<sup>6</sup>
					</h3>
					<img
						ref="pathogensChart"
						:src="PathogensChart"
						alt="Pathogens Chart"
						class="self-end"
					/>
					<p class="text-[10px] text-[#555] text-center mt-4">Adapted from Scheeren T et al. 2019.6</p>
					<img
						ref="expandIcon"
						src="/src/assets/images/expand-icon-purple.png"
						alt="Expand Icon"
						class="absolute right-7 w-[60px] h-[60px] cursor-pointer"
						@click="expandDetails"
						@touchstart.prevent="expandDetails"
					/>
					<img
						ref="closeIcon"
						src="/src/assets/images/close-icon-purple.png"
						alt="Expand Icon"
						class="absolute right-7 w-[60px] h-[60px] cursor-pointer"
						@click="expandDetails"
						@touchstart.prevent="expandDetails"
					/>
					<p
						ref="detailsFooter"
						class="text-[10px] text-[#555] mt-7 pr-28"
					>
						<span class="font-bold">STUDY DESIGN:</span> Post hoc analysis of data from two Phase III studies to evaluate early improvement outcomes
						in subgroups of high-risk patients treated with ceftobiprole, compared with the respective active-control therapies(ceftriaxone ±
						linezolid in CAP and ceftazidime plus linezolid in HAP). The HAP study was a multicentre, international, double-blind, non-inferiority
						study of adult patients with HAP undertaken at 157 centres between April 2005 and May 2007. Key inclusion criteria comprised: a clinical
						diagnosis of pneumonia after ≥72 h stay in hospital or a chronic care facility; clinical signs and symptoms of pneumonia; fever or
						leucocytosis / leukopenia; new orpersistent radiographic infiltrates; and an Acute Physiology and Chronic Health Evaluation II (APACHE
						II) score between 8 and 25.<sup>6</sup><br /><br />
						CI, confidence interval; HAP, hospital-acquired pneumonia; CE, clinically evaluable.
					</p>
				</div>
			</div>
		</div>

		<footer>
			<the-footer class="footer mb-8">*Patients' groups who are severely ill or at high risk of poor outcomes</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'zevtera-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-purple" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

import { gsap } from 'gsap';

import PathogensChart from '@/assets/images/pathogens-chart.png';

import TheFooter from '@/components/TheFooter.vue';
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

const details = ref(null);
const detailsTitle = ref(null);
const detailsFooter = ref(null);
const pathogensChart = ref(null);

const closeIcon = ref(null);
const expandIcon = ref(null);

const detailsExpanded = ref(false);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

onMounted(() => {
	gsap.set(details.value, {
		width: 675,
		height: 560,
	});
	gsap.set(pathogensChart.value, {
		width: 503,
		marginRight: 32,
	});
	gsap.set(detailsFooter.value, {
		opacity: 0,
		display: 'none',
	});
	gsap.set(closeIcon.value, {
		opacity: 0,
		display: 'none',
	});
	gsap.set(expandIcon.value, {
		opacity: 1,
		display: 'block',
		bottom: 20,
	});
});

const expandDetails = () => {
	const tl = gsap.timeline({
		onComplete: () => {
			detailsExpanded.value = !detailsExpanded.value;
		},
	});

	if (detailsExpanded.value) {
		// Collapsing animations
		tl.set([expandIcon.value, closeIcon.value], { pointerEvents: 'none' })
			.to(detailsFooter.value, { opacity: 0, display: 'none', duration: 0.2 })
			.to(details.value, { width: 675, height: 560, translateY: 0 }, '<')
			.to(pathogensChart.value, { width: 503, marginRight: 32 }, '<')
			.to(detailsTitle.value, { scale: 1 }, '<')
			.to(expandIcon.value, { bottom: 20, opacity: 1 }, '<')
			.to(closeIcon.value, { opacity: 0, display: 'none', bottom: 20 }, '<')
			.set([expandIcon.value, closeIcon.value], { pointerEvents: 'auto' });
	} else {
		// Expanding animations
		tl.set([expandIcon.value, closeIcon.value], { pointerEvents: 'none' })
			.to(details.value, { width: 1205, height: 860, translateY: -30, paddingTop: 30 })
			.to(pathogensChart.value, { width: 800, marginRight: 200 }, '<')
			.to(detailsTitle.value, { scale: 1.3 }, '<')
			.to(expandIcon.value, { bottom: 130, opacity: 0 }, '<')
			.to(closeIcon.value, { opacity: 1, display: 'block', bottom: 130 }, '<')
			.to(detailsFooter.value, { opacity: 1, display: 'block' }, 0.5)
			.set([expandIcon.value, closeIcon.value], { pointerEvents: 'auto' });
	}
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
