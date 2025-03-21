<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 relative z-10 h-full">
		<div class="page-content flex flex-col justify-center font-effra">
			<div>
				<h1 class="text-[32px] font-bold text-electric-blue max-w-[920px]">
					EXBLIFEP® is where microbiological eradication* meets efficacy<sup class="font-extrabold">1</sup>
				</h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
			<section class="grid grid-cols-2 bg-white py-6 px-8 text-xl text-cool-grey gap-y-10 gap-x-12 max-w-[1380px]">
				<div class="flex gap-x-7 items-center col-span-2">
					<img
						src="/src/assets/images/summary-icon-1.png"
						alt="Summary Icon 1"
						class="w-[130px] h-[130px]"
					/>
					<div class="min-w-[3px] h-[66px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® is indicated for the
						<span class="text-dark-blue font-bold"
							>treatment of adult patients with cUTI including pyelonephritis, HAP/VAP and bacteraemia associated with these infections,</span
						>
						caused by gram-negative bacteria<sup class="text-[60%]">5</sup>
					</p>
				</div>
				<div class="flex gap-x-7 items-center">
					<img
						src="/src/assets/images/summary-icon-2.png"
						alt="Summary Icon 2"
						class="w-[130px] h-[130px]"
					/>
					<div class="min-w-[3px] h-[66px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated
						<span class="text-dark-blue font-bold">non-inferiority and superiority vs piperacillin/tazobactam</span> in the composite endpoint of
						clinical cure and microbiological eradication in adults with cUTIs<br />
						at Day 14 in the Primary Analysis Set?<sup class="text-[60%]">†1</sup>
					</p>
				</div>
				<div class="flex gap-x-7 items-center">
					<img
						src="/src/assets/images/summary-icon-3.png"
						alt="Summary Icon 3"
						class="w-[130px] h-[130px]"
					/>
					<div class="min-w-[3px] h-[66px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® is indicated to treat HAP/VAP, and<br />
						<span class="text-dark-blue font-bold"
							>could be a useful carbapenem-sparing option<br />
							for ESBL Class A-producing pathogens<sup class="text-[60%]">5,10</sup></span
						>
					</p>
				</div>
				<div class="flex gap-x-7 items-center">
					<img
						src="/src/assets/images/summary-icon-4.png"
						alt="Summary Icon 4"
						class="w-[130px] h-[130px]"
					/>
					<div class="min-w-[3px] h-[66px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated <span class="text-dark-blue font-bold">high intrapulmonary penetration</span> and similar distribution kinetics
						of both compounds into the ELF, supporting its use in the treatment of HAP/VAP<sup class="text-[60%]">6,9</sup>
					</p>
				</div>
				<div class="flex gap-x-7 items-center">
					<img
						src="/src/assets/images/summary-icon-5.png"
						alt="Summary Icon 5"
						class="w-[130px] h-[130px]"
					/>
					<div class="min-w-[3px] h-[66px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated a
						<span class="text-dark-blue font-bold"
							>favourable overall<br />
							safety profile, comparable to</span
						>
						piperacillin tazobactam<sup class="text-[60%]">1,9</sup>
					</p>
				</div>
			</section>

			<section class="max-w-[1380px] bg-[#00EAFF] shadow-dark py-4 flex items-center mt-9 relative z-10 border-[6px] border-white">
				<div class="pl-9 pr-7 py-3 border-r-[3px] border-[#002470]">
					<img
						src="/src/assets/images/chevron-right-bleu.png"
						alt="Chevron Right Bleu"
						class="w-[64px] h-[64px] mr-7"
					/>
				</div>
				<h2 class="pl-10 text-2xl font-bold text-[#002470] max-w-[1200px]">
					At ADVANZ PHARMA, we are committed to taking your treatment options further to improve patient lives, by providing novel therapeutic options
					in the fight against gram-negative and gram-positive infections
				</h2>
			</section>
		</div>
		<footer class="flex flex-col">
			<the-footer class="footer max-w-[1380px] font-effra">
				AMR, antimicrobial resistance; AP, acute pyelonephritis; CFU, colony-forming unit; cUTI, complicated urinary tract infection; ELF, epithelial
				lining fluid; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia; MIC, minimum inhibitory concentration.<br />
				*In the ALLIUM study, microbiological eradication is defined as &lt; 103 CFU/mL of qualifying baseline pathogen in urine.<sup>1</sup><br />
				†Primary outcome was the proportion of patients in the primary analysis set (PAS) who achieved a composite outcome of complete resolution of the
				baseline signs and symptoms present at screening (clinical cure) and reduction of qualifying baseline pathogen to less than 103 CFU/mL in urine
				(microbiological eradication) at Day 14. The PAS included all patients who received at least 1 dose of study drug and had a gram-negative
				baseline pathogen in urine at 105 CFU/mL or more or the same pathogen present in both blood and urine cultures that was not resistant to either
				cefepime/enmetazobactam (MIC ≤ 8 μg/mL) or piperacillin/tazobactam (MIC ≤ 64 μg/mL).<sup>1</sup>
			</the-footer>
			<div class="flex justify-end items-center mt-4 mr-12">
				<explore-another-short />
			</div>
		</footer>
	</div>
</template>

<script setup>
import { toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import TheFooter from '@/components/TheFooter.vue';
import ExploreAnotherShort from '@/components/ExploreAnotherShort.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
</script>
