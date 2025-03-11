<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div
			class="flex flex-col font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="relative flex justify-end mr-12 mt-14">
				<img
					src="/src/assets/images/bullet-long.png"
					alt="Bullet Long"
					class="absolute top-1/2 -translate-y-1/2 -left-20"
				/>
				<div
					class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium transform transition-all duration-300"
					:class="[sidebarOpen ? 'translate-x-0' : '-translate-x-52']"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span>Touch a step to continue</span>
				</div>
			</div>

			<div class="grid grid-cols-2 mr-[60px] items-center mt-3">
				<the-title
					>Less burden to<br />
					treat your patients</the-title
				>
				<div
					class="flex items-center gap-x-5 bg-primary-light-orange px-6 py-5 rounded-[20px] shadow-zevtera-efficacy-pathogens-card mt-8 min-w-[582px] justify-self-end"
				>
					<img
						src="/src/assets/images/tick-icon-black.png"
						alt="Tick"
						class="w-[82px] h-auto"
					/>
					<h4 class="text-[32px] font-bold text-black">Less number of agents*<sup>2</sup></h4>
				</div>
			</div>
			<section class="relative grid grid-cols-3 flex-1 mt-8 mr-[60px] gap-x-16 pb-10">
				<div
					ref="wellTolarated"
					class="relative flex flex-col justify-between bg-primary-light-orange rounded-[20px] cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
					@click="animateWellTolarated"
				>
					<div>
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
							src="/src/assets/images/tick-icon-black.png"
							alt="Arrow Down"
							class="w-[234px] mt-5 ml-6"
						/>
					</div>
					<div class="pb-28 text-charcoal">
						<h2 class="text-5xl font-bold mt-7 pl-7">Well-tolerated</h2>
						<p class="text-2xl leading-normal mt-4 font-uni-grotesk pl-7">
							ZEVTERA®/MABELIO® is<br />
							generally well tolerated<sup>9</sup>
						</p>
					</div>
				</div>
				<div
					ref="clinicalEfficacy"
					class="relative bg-primary-green rounded-[20px] overflow-hidden cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
					@click="animateClinicalEfficacy"
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
					ref="wellTolaratedDetails"
					class="flex flex-col gap-y-5 pl-[260px] pt-14 pb-8 min-w-[1200px] min-h-[790px] absolute top-1/2 -translate-y-[59%] left-[190px] right-[60px] bg-white rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card z-10"
				>
					<h2 class="text-[32px] font-bold pr-3">ZEVTERA®/MABELIO® is generally well tolerated<sup>9</sup></h2>
					<p class="text-2xl font-medium font-uni-grotesk">
						Most common adverse (incidence ≥5%, regardless of causality)<br />
						in patients with HAP<sup>9</sup>
					</p>

					<div class="flex justify-between pr-14 gap-x-16">
						<img
							src="/src/assets/images/adverse-events.png"
							alt="Adverse Events"
							class="w-[425px]"
						/>
						<div class="bg-[#F5F5F5] rounded-[20px] py-10 px-2.5">
							<div class="flex flex-col items-center gap-y-6">
								<img
									src="/src/assets/images/caution-orange-border.png"
									alt="Caution"
									class="w-[80px] h-[80px]"
								/>
								<p class="text-xl font-uni-grotesk text-charcoal text-center">
									ZEVTERA® - The incidence of treatment related adverse events was similar to that<br />
									with other cephalosporins<sup>1</sup>
								</p>
							</div>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-4 mr-12 font-uni-grotesk">Adapted from Syed YY et al. 2014.9</footer>
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
								@click="activeClinicalEfficayTab = clinicalEfficacyTabs.DAY_3"
							>
								Day 3
							</button>
							<button
								class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-500 font-uni-grotesk"
								:class="[activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_4 ? 'bg-primary-purple text-white' : 'bg-[#E4E4E4]']"
								@click="activeClinicalEfficayTab = clinicalEfficacyTabs.DAY_4"
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
				<div
					ref="easeOfUse"
					class="relative bg-primary-green rounded-[20px] cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
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
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>*Among patients who had requirements for de-escalation therapy from linezolid, piperacillin/tazobactam or meropenem combinations<sup>2</sup
				><br /><sup>†</sup>I.e., ceftazidime, cefotoxitin, ceftroaxone or retapenem<sup>10</sup><br /><sup>‡</sup>No dose adjustment except for renally
				impaired patients<sup>4</sup></the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'zevtera-dosing', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-purple" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

import ChartA from '@/assets/images/clinical-efficacy-chart-1.png';
import ChartB from '@/assets/images/clinical-efficacy-chart-2.png';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
import TheTitle from '@/components/zevtera/TheTitle.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['goToBottomTab']);

const topTab = ref(null);
const content = ref(null);

const easeOfUse = ref(null);

const wellTolarated = ref(null);
const wellTolaratedDetails = ref(null);
const wellTolaratedActive = ref(false);

const clinicalEfficacy = ref(null);
const clinicalEfficacyDetails = ref(null);
const clinicalEfficacyActive = ref(false);

const clinicalEfficacyTabs = Object.freeze({
	DAY_3: 1,
	DAY_4: 2,
});
const activeClinicalEfficayTab = ref(clinicalEfficacyTabs.DAY_3);

onMounted(() => {
	gsap.set(wellTolaratedDetails.value, { opacity: 0, display: 'none' });
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
		display: isActive ? 'none' : 'flex',
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

const animateWellTolarated = () => {
	return animateSection({
		activeRef: wellTolaratedActive,
		detailsRef: wellTolaratedDetails,
		mainRef: wellTolarated,
		swapCardSelector: '.bacterial-swap-card',
		fadeElements: [clinicalEfficacy.value, easeOfUse.value, content.value],
		slideDivisor: 0,
	});
};

const animateClinicalEfficacy = () => {
	return animateSection({
		activeRef: clinicalEfficacyActive,
		detailsRef: clinicalEfficacyDetails,
		mainRef: clinicalEfficacy,
		swapCardSelector: '.clinical-swap-card',
		fadeElements: [wellTolarated.value, easeOfUse.value, content.value],
		slideDivisor: 1.97,
	});
};
</script>
