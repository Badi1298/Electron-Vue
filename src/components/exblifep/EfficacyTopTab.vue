<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
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
		</div>
		<div class="page-content flex flex-col ml-[124px] justify-center font-effra">
			<div class="relative flex justify-between mr-12">
				<div>
					<the-title class="max-w-[920px]">
						EXBLIFEP® achieved superiority in overall treatment success* in patients with cUTIs vs piperacillin/tazobactam<sup>1</sup>
					</the-title>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-auto my-5"
					/>
				</div>
				<div class="select-tab absolute top-5 flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium">
					<img
						src="/src/assets/images/touch.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span>Select a tab</span>
				</div>
			</div>

			<p class="max-w-[1300px] text-xl leading-normal">
				In ALLIUM, EXBLIFEP® demonstrated both non-inferiority and statistical superiority in overall treatment success (a composite endpoint of
				clinical cure and microbiological eradication) at Day 14 vs piperacillin/tazobactam in patients in the PAS with cUTIs caused by gram-negative
				pathogens<sup>1</sup>
			</p>

			<section class="flex pt-5 gap-x-[22px] z-10 relative">
				<div class="flex flex-col w-[1280px]">
					<div class="grid grid-cols-[1fr_2fr] gap-x-2">
						<button
							class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-500"
							:class="[activeTab === Tabs.OVERALL_SUCCESS ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
							@click="activeTab = Tabs.OVERALL_SUCCESS"
						>
							Overall success*: Day 14 in PAS
						</button>
						<button
							class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-500"
							:class="[activeTab === Tabs.CLINICAL_CURE ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
							@click="activeTab = Tabs.CLINICAL_CURE"
						>
							Clinical cure & Microbiological eradication: Day 14 in PAS
						</button>
					</div>
					<div
						v-if="activeTab === Tabs.OVERALL_SUCCESS"
						class="w-[1280px] h-[583px]"
					>
						<VLazyImage
							:src="ChartA"
							alt="Chart A"
							class="w-full h-full"
						/>
					</div>
					<div
						v-if="activeTab === Tabs.CLINICAL_CURE"
						class="relative w-[1280px] h-[583px]"
					>
						<VLazyImage
							:src="ChartB"
							alt="Chart B"
							class="w-full h-full"
						/>
						<div
							class="absolute bottom-6 left-1/2 -translate-x-1/2 min-w-[1212px] bg-[#00EAFF] shadow-dark py-4 flex items-center mt-9 z-10 border-[5px] border-white"
						>
							<div class="pl-9 pr-7 py-3 border-r-[3px] border-[#002470]">
								<img
									src="/src/assets/images/chevron-right-bleu.png"
									alt="Chevron Right Bleu"
									class="w-[62px] h-[64px] mr-7"
								/>
							</div>
							<h2 class="pl-10 text-2xl font-bold text-[#002470] max-w-[1200px]">
								EXBLIFEP® demonstrated statistical superiority in microbiological eradication, and no significant difference in the other
								secondary outcome of clinical cure<sup>1</sup>
							</h2>
						</div>
					</div>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footer class="footer mb-4">
				>CFU, colony-forming unit; CI, confidence interval; cUTI, complicated urinary tract infection; MIC, minimum inhibitory concentration; PAS,
				primary analysis set.<br />
				*Primary outcome was the proportion of patients in the primary analysis set (PAS) who achieved a composite outcome of complete resolution of the
				baseline signs and symptoms present at screening (clinical cure) and reduction of qualifying baseline pathogen to less than 10<sup>3</sup>
				CFU/mL in urine (microbiological eradication) at<br />
				Day 14. The PAS included all patients who received at least 1 dose of study drug and had a gram-negative baseline pathogen in urine at 105
				CFU/mL or more or the same pathogen present in both blood and urine cultures that was not resistant to either cefepime/enmetazobactam (MIC ≤8
				μg/mL) or piperacillin/tazobactam<br />
				(MIC ≤64 μg/mL).<sup>1†</sup>Treatment difference is the difference in the overall success rate between the two treatment arms (95% CIs,
				2-sided, stratified Newcombe method).<sup>1</sup></the-footer
			>
			<div class="flex items-start">
				<explore-another />
			</div>
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

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

import ChartA from '@/assets/images/chart-a.png';
import ChartB from '@/assets/images/chart-b.png';

import TheTitle from './TheTitle.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import { onMounted } from 'vue';

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

watch(
	() => props.sidebarOpen,
	(value) => {
		if (value) {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: '0px',
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		} else {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: '250px',
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		}
	}
);

onMounted(() => {
	if (props.sidebarOpen) {
		gsap.set('.select-tab', { right: '0' });
	} else {
		gsap.set('.select-tab', { right: '250px' });
	}
});
</script>
