<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<img
			src="/src/assets/images/back-button-white.png"
			alt="Back Button"
			class="absolute top-1/2 -translate-y-1/2 h-[150px] cursor-pointer"
			@click="router.push({ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'back-button' } })"
			@touchstart.prevent="router.push({ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'back-button' } })"
		/>
		<div class="page-content flex flex-col justify-center font-effra">
			<div>
				<h1 class="text-[32px] font-bold leading-tight text-electric-blue max-w-[920px]">
					EXBLIFEP<sup>®</sup> demonstrated a favourable overall safety profile, comparable to piperacillin/tazobactam<sup>1,9</sup>
				</h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
			<div class="pt-10 grid grid-cols-[1fr_0.5fr] items-center">
				<div class="flex flex-col gap-y-5">
					<h2 class="text-2xl font-bold text-dark-blue max-w-[883px]">
						Drug-related treatment-emergent adverse events in patients treated<br />
						with EXBLIFEP<sup>®</sup> were comparable to piperacillin/tazobactam in the ALLIUM study<sup>1</sup>
					</h2>
					<div class="flex flex-col gap-y-4">
						<h3 class="text-xl font-medium max-w-[500px] text-cool-grey">
							The most common adverse reactions with EXBLIFEP<sup>®</sup> that occurred in the Phase III clinical trial were:<sup>5</sup>
						</h3>
						<ul class="list-disc pl-5 ml-3">
							<li class="text-xl text-cool-grey">ALT and AST increase (4.8% and 3.5%, respectively)</li>
							<li class="text-xl text-cool-grey">Diarrhoea (2.9%)</li>
							<li class="text-xl text-cool-grey">Infusion site phlebitis (1.9%)</li>
						</ul>
					</div>
					<p class="text-xl text-cool-grey">Serious drug reaction of Clostridioides difficile colititis (0.2%)<sup>5</sup></p>
					<p class="text-xl text-cool-grey max-w-[600px]">
						Drug-related treatment-emergent SAEs reported in EXBLIFEP<sup>®</sup> treated patients were
						<span class="font-bold text-dark-blue">0.2% vs 0.6%</span> with piperacillin/tazobactam<sup>1</sup>
					</p>
					<p class="text-xl text-cool-grey">
						Treatment-emergent adverse events occurred in 50.0% of EXBLIFEP®-treated patients vs 44.0% with piperacillin/tazobactam; most were
						mild-to-moderate in severity<sup>1</sup>
					</p>
				</div>
				<img
					src="/src/assets/images/shield.png"
					alt="Shield"
					class="w-[402px] h-[402px]"
				/>
			</div>
		</div>
		<footer>
			<the-footer class="footer font-effra"
				>For full list of adverse reactions and frequency please consult the Summary of Product Characteristics.<br />
				ALT, alanine transaminase; AST, aspartate aminotransferase; SAE, serious adverse event.</the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-dosing', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const router = useRouter();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
</script>
