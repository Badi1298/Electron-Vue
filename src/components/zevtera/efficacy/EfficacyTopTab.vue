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
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			/>
		</div>
		<div class="page-content flex flex-col font-effra">
			<div class="relative flex justify-end mr-12 mt-16 min-h-[80px]">
				<img
					src="/src/assets/images/bullet-long.png"
					alt="Bullet Long"
					class="absolute top-1/2 -translate-y-1/2 -left-20 w-[1400px] h-[162px]"
				/>
				<div class="select-tab absolute top-1/2 -translate-y-1/2 flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium">
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span>Touch a step to continue</span>
				</div>
			</div>

			<section class="relative grid grid-cols-3 flex-1 content-center">
				<div
					ref="content"
					class="flex flex-col gap-y-16"
				>
					<the-title>More for your difficult-to-treat patients*</the-title>
					<div class="relative bg-primary-green px-6 h-[284px] flex flex-col justify-center rounded-[20px] overflow-hidden">
						<h3 class="text-[32px] leading-normal font-bold text-white">
							Demonstrated<br />
							efficacy<sup>5,6</sup>
						</h3>
						<img
							src="/src/assets/images/chart-dark-green.png"
							alt="Chart Dark Green"
							class="absolute bottom-0 right-0 h-[255px] w-auto"
						/>
					</div>
				</div>
				<div
					ref="bacterialActivity"
					class="relative bg-primary-green ml-10 rounded-[20px] max-w-[420px] cursor-pointer z-50"
					@click="animateBacterialActivity"
					@touchstart.prevent="animateBacterialActivity"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="absolute w-[85px] h-[85px] top-[18px] right-6"
					/>
					<img
						src="/src/assets/images/swap-purple.png"
						alt="Swap"
						class="absolute w-[85px] h-[85px] top-[18px] right-6 bacterial-swap-card"
					/>
					<img
						src="/src/assets/images/arrow-down-dark-green.png"
						alt="Arrow Down"
						class="h-[175px] w-auto mt-5"
					/>
					<h2 class="text-5xl text-white font-bold mt-7 pl-7">
						Fast<br />
						bactericidal activity
					</h2>
					<p class="text-2xl text-white leading-normal mt-4 font-uni-grotesk pl-7">
						ZEVTERA® exhibits rapid in vitro bactericidal activity in Gram-positive and Gram-negative pathogens<sup>5</sup>
					</p>
				</div>
				<div
					ref="clinicalEfficacy"
					class="relative bg-primary-green rounded-[20px] overflow-hidden max-w-[420px] cursor-pointer z-50"
					@click="animateClinicalEfficacy"
					@touchstart.prevent="animateClinicalEfficacy"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="absolute w-[85px] h-[85px] top-[18px] right-6"
					/>
					<img
						src="/src/assets/images/swap-purple.png"
						alt="Swap"
						class="absolute w-[85px] h-[85px] top-[18px] right-6 clinical-swap-card"
					/>
					<img
						src="/src/assets/images/up-arrows-dark-green.png"
						alt="Arrow Down"
						class="h-[225px] w-auto mt-[22px] ml-7"
					/>
					<h2 class="text-5xl text-white font-bold mt-7 pl-7">Clinical efficacy from Days 3-4</h2>
					<p class="text-2xl text-white leading-normal mt-4 font-uni-grotesk pl-7 pr-4">
						Early improvement at Day 3 in patients with CAP by risk factors (CE)<sup>6</sup>
					</p>
				</div>
				<div
					ref="bacterialActivityDetails"
					class="flex flex-col gap-y-5 pl-[260px] pt-14 pb-8 absolute top-1/2 -translate-y-1/2 left-[190px] right-[60px] bg-white z-10 rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card"
				>
					<h2 class="text-[32px] font-bold pr-3">
						ZEVTERA® exhibits rapid in vitro bactericidal activity in Gram-positive and Gram-negative pathogens<sup>5</sup>
					</h2>
					<div class="flex gap-x-28">
						<div>
							<h3 class="text-2xl font-uni-grotesk italic mb-2.5 text-center">Staphylococcus aureus*</h3>
							<img
								src="/src/assets/images/bacterial-activity-sa.png"
								alt="Bacterial Activity"
								class="h-[420px] w-auto"
							/>
						</div>
						<div class="flex flex-col">
							<h3 class="text-2xl font-uni-grotesk italic mb-2.5 text-center">Escherichia coli*</h3>
							<img
								src="/src/assets/images/bacterial-activity-ec.png"
								alt="Bacterial Activity"
								class="max-h-[400px] w-auto flex-1 mt-auto"
							/>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-4 mr-12 font-uni-grotesk">
						Adapted from Hebeisen P et al. 2001<sup>5</sup><br /><br />*Overnight cultures of <span class="italic">E. coli</span> and MSSA/MRSA test
						strain were grown in 30 mL of Mueller-Hinton broth and diluted into fresh medium to yield an inoculum of 10<sup>6</sup> CFU/mL or
						higher. Drug was added either with<br />
						the inoculumor at intervals of 1.5 hours (early log phase) and 3 hours (log phase) after its addition. Drug concentrations of 2 times
						the MIC were used. Ten-microlitre aliquots of appropriate dilutions were plated on Mueller-Hinton agar (MHA), and colonies were counted
						after 24 hours of incubation. To check if resistant clones had been selected, the MICs were determined for those cultures that showed
						growth after 24 hours. Bactericidal activity wasdefined by a ≥ 3-log<sub>10</sub> decrease in the number of CFU/mL within 24 hours.<sup
							>5</sup
						><br />
						CFU, colony-forming unit; MIC, minimum inhibitory concentration; MRSA, Methicillin-resistant <span class="italic">S. aureus</span>;
						MSSA, Methicillin-susceptible <span class="italic">S. aureus</span>.
					</footer>
				</div>
				<div
					ref="clinicalEfficacyDetails"
					class="flex flex-col min-h-[750px] pl-[276px] pt-[74px] absolute top-1/2 -translate-y-1/2 left-[190px] right-[60px] bg-white z-10 rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card"
				>
					<div class="flex flex-col w-[863px]">
						<div class="grid grid-cols-[1fr_1fr] gap-x-2">
							<button
								class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-500 font-uni-grotesk"
								:class="[activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_3 ? 'bg-primary-purple text-white' : 'bg-[#E4E4E4]']"
								@click="activateDay3"
								@touchstart.prevent="activateDay3"
							>
								Day 3
							</button>
							<button
								class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-500 font-uni-grotesk"
								:class="[activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_4 ? 'bg-primary-purple text-white' : 'bg-[#E4E4E4]']"
								@click="activateDay4"
								@touchstart.prevent="activateDay4"
							>
								Day 4
							</button>
						</div>
						<div
							v-if="activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_3"
							class="w-[863px] h-[464px]"
						>
							<VLazyImage
								:src="ChartA"
								alt="Chart A"
								class="w-full h-full"
							/>
						</div>
						<div
							v-if="activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_4"
							class="w-[863px] h-[464px]"
						>
							<VLazyImage
								:src="ChartB"
								alt="Chart B"
								class="w-full h-full"
							/>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-4 mr-12 font-uni-grotesk">
						<span class="font-bold">STUDY DESIGN</span>: Post hoc analysis of data from two Phase III studies to evaluate early improvement outcomes
						in subgroups of high-risk patients treated with ceftobiprole, compared with the respective active-control therapies(ceftriaxone ±
						linezolid in CAP and ceftazidime plus linezolid in HAP). The HAP study was a multicentre, international, double-blind, non-inferiority
						study of adult patients with HAP undertaken at 157 centres between April 2005 and May 2007. Key inclusion criteria comprised: a clinical
						diagnosis of pneumonia after ≥72 h stay in hospital or a chronic care facility; clinical signs and symptoms of pneumonia; fever or
						leucocytosis / leukopenia; new orpersistent radiographic infiltrates; and an Acute Physiology and Chronic Health Evaluation II (APACHE
						II) score between 8 and 25.<sup>6</sup><br /><br />
						CAP, Community-acquired pneumonia; CE, clinically evaluable; CI, confidence interval; COPD, chronic obstructive pulmonary disease; HAP,
						hospital-acquired pneumonia; CE, clinically evaluable;<br />
						TOC, test ofcure.
					</footer>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<ExploreAnother />
			<button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			>
				<img
					src="/src/assets/images/page-vertical-down-purple.png"
					alt="Down Button"
					class="w-[140px] h-[50px] cursor-pointer"
				/>
			</button>
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, toRef, computed, inject, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

import { trackAction } from '@/utils/analytics.js';
import { useAnimateSelectTab } from '@/composables/useAnimateSelectTab.js';

import ChartA from '@/assets/images/clinical-efficacy-chart-1.png';
import ChartB from '@/assets/images/clinical-efficacy-chart-2.png';

import TheTitle from '@/components/zevtera/TheTitle.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const clinicalEfficacyTabs = Object.freeze({
	DAY_3: 1,
	DAY_4: 2,
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

const route = useRoute();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
useAnimateSelectTab(sidebarOpenRef);

const sessionId = inject('sessionId');

const topTab = ref(null);
const content = ref(null);

const bacterialActivity = ref(null);
const bacterialActivityDetails = ref(null);
const bacterialActivityActive = ref(false);

const clinicalEfficacy = ref(null);
const clinicalEfficacyDetails = ref(null);
const clinicalEfficacyActive = ref(false);

const activeClinicalEfficayTab = ref(clinicalEfficacyTabs.DAY_3);

const brand = computed(() => route.meta.brand);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

onMounted(() => {
	gsap.set(bacterialActivityDetails.value, { opacity: 0 });
	gsap.set(clinicalEfficacyDetails.value, { opacity: 0 });
	gsap.set('.bacterial-swap-card', { opacity: 0 });
	gsap.set('.clinical-swap-card', { opacity: 0 });
});

const animateSection = ({ activeRef, detailsRef, mainRef, swapCardSelector, fadeElements, slideDivisor }) => {
	const tl = gsap.timeline();
	const isActive = activeRef.value;

	// Common animation properties
	const opacityConfig = {
		opacity: isActive ? 1 : 0,
		pointerEvents: 'none',
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const detailsOpacityConfig = {
		opacity: isActive ? 0 : 1,
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const slideConfig = {
		x: isActive ? 0 : -window.innerWidth / slideDivisor,
		duration: 0.9,
		ease: 'power2.inOut',
		onComplete: () => {
			activeRef.value = !isActive;
		},
	};

	if (isActive) {
		// Animate slide first, then opacity
		tl.to(detailsRef.value, detailsOpacityConfig)
			.to(mainRef.value, slideConfig, '-=0.5')
			.to(swapCardSelector, { opacity: 0, duration: 0.7, ease: 'power2.inOut' }, '-=0.5')
			.to(fadeElements, opacityConfig, '-=0.5')
			.to(fadeElements, { pointerEvents: 'auto' });
	} else {
		// Animate opacity first, then slide
		tl.to(fadeElements, opacityConfig)
			.to(mainRef.value, slideConfig, '-=0.5')
			.to(detailsRef.value, detailsOpacityConfig, '-=0.5')
			.to(swapCardSelector, { opacity: 1, duration: 0.7, ease: 'power2.inOut' }, '-=0.5');
	}

	return tl;
};

// Now you can create the specific animations by passing the right parameters:

const animateBacterialActivity = () => {
	if (!bacterialActivityActive.value) {
		trackAction('efficacy-bactericidal-activity', sessionId.value, brand.value);
	}

	return animateSection({
		activeRef: bacterialActivityActive,
		detailsRef: bacterialActivityDetails,
		mainRef: bacterialActivity,
		swapCardSelector: '.bacterial-swap-card',
		fadeElements: [clinicalEfficacy.value, content.value],
		slideDivisor: props.sidebarOpen ? 3.6 : 2.9,
	});
};

const animateClinicalEfficacy = () => {
	if (!clinicalEfficacyActive.value) {
		trackAction('efficacy-clinical-efficacy', sessionId.value, brand.value);
	}

	return animateSection({
		activeRef: clinicalEfficacyActive,
		detailsRef: clinicalEfficacyDetails,
		mainRef: clinicalEfficacy,
		swapCardSelector: '.clinical-swap-card',
		fadeElements: [bacterialActivity.value, content.value],
		slideDivisor: props.sidebarOpen ? 1.97 : 1.67,
	});
};

const activateDay3 = () => {
	activeClinicalEfficayTab.value = clinicalEfficacyTabs.DAY_3;
	trackAction('efficacy-clinical-efficacy-day-3', sessionId.value, brand.value);
};

const activateDay4 = () => {
	activeClinicalEfficayTab.value = clinicalEfficacyTabs.DAY_4;
	trackAction('efficacy-clinical-efficacy-day-4', sessionId.value, brand.value);
};
</script>
