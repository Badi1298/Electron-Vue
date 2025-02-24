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
		<div
			class="flex flex-col justify-center font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="flex justify-between mr-12">
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
				<div
					class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium transform transition-all duration-300"
					:class="[sidebarOpen ? 'translate-x-0' : '-translate-x-full']"
				>
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
				pathogens1
			</p>

			<section class="flex pt-5 gap-x-[22px] z-10 relative">
				<div class="flex flex-col w-[1034px]">
					<div class="grid grid-cols-[1fr_2fr] gap-x-2">
						<button
							class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-300"
							:class="[activeTab === Tabs.OVERALL_SUCCESS ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
							@click="activeTab = Tabs.OVERALL_SUCCESS"
						>
							Overall success*: Day 14
						</button>
						<button
							class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-300"
							:class="[activeTab === Tabs.CLINICAL_CURE ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
							@click="activeTab = Tabs.CLINICAL_CURE"
						>
							Clinical cure & Microbiological eradication: Day 14
						</button>
					</div>
					<div
						v-if="activeTab === Tabs.OVERALL_SUCCESS"
						class="w-[1034px] h-[583px]"
					>
						<img
							src="/src/assets/images/chart-a.svg"
							alt="Chart A"
							class="w-full h-full"
						/>
					</div>
					<div
						v-if="activeTab === Tabs.CLINICAL_CURE"
						class="w-[1034px] h-[583px]"
					>
						<img
							src="/src/assets/images/chart-b.png"
							alt="Chart B"
							class="w-full h-full"
						/>
					</div>
				</div>
				<div class="bg-[#00EAFF] px-[22px] border-[6px] border-white">
					<img
						src="/src/assets/images/chart-up.png"
						alt="Chart Up"
						class="w-[130px] h-[130px]"
					/>
					<h3 class="text-[32px] max-w-[280px] mt-14 font-bold leading-normal">EXBLIFEP<sup>®</sup> demonstrated superiority</h3>
					<p class="max-w-[280px] mt-3.5 text-xl leading-normal">
						to piperacillin/tazobactam, representing a new appropriate option to treat cUTIs<sup>1</sup>
					</p>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>CFU, colony-forming unit; CI, confidence interval; cUTI, complicated urinary tract infection; MIC, minimum inhibitory concentration; PAS,
				primary analysis set. *Primary outcome was the proportion of patients in the primary analysis set (PAS) who achieved a composite outcome of
				complete resolution of the baseline signs and symptoms present at screening (clinical cure) and reduction of qualifying baseline pathogen to
				less than 103 CFU/mL in urine (microbiological eradication) at Day 14. The PAS included all patients who received at least 1 dose of study drug
				and had a gram-negative baseline pathogen in urine at 105 CFU/mL or more or the same pathogen present in both blood and urine cultures that was
				not resistant to either cefepime/enmetazobactam (MIC ≤8 μg/mL) or piperacillin/tazobactam (MIC ≤64 μg/mL).1†Treatment difference is the
				difference in the overall success rate between the two treatment arms (95% CIs, 2-sided, stratified Newcombe method).1</the-footer
			>
			<ExploreAnother />
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

import TheTitle from './TheTitle.vue';
import TheFooter from '../exblifep/TheFooter.vue';
import ExploreAnother from './ExploreAnother.vue';

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
</script>
