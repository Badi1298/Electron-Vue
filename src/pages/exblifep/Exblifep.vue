<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="flex flex-col justify-center">
			<div class="flex">
				<section class="flex flex-col pt-24">
					<VLazyImage
						:src="Logo"
						alt="EXBLIFEP®"
						class="w-64 ml-[74px]"
					/>
					<div class="images-container z-20">
						<VLazyImage
							:src="HallwayBed"
							alt="Hallway Bed"
							class="hallway-bed h-[560px]"
						/>
						<VLazyImage
							:src="ResistanceAndRecurrence"
							alt="Resistance and Recurrence"
							class="resistance-and-recurrence"
						/>
					</div>
					<div class="relative flex items-center gap-x-9 pt-5 pb-8 px-14 max-w-[1078px] font-effra">
						<chevron-right class="min-w-[62px] min-h-[64px]" />
						<img
							src="/src/assets/images/exblifep-blue-line.png"
							alt="Top Blue Line"
							class="absolute -top-0.5 left-0 w-full"
						/>
						<img
							src="/src/assets/images/exblifep-blue-line.png"
							alt="Top Blue Line"
							class="absolute bottom-0 left-0 w-full"
						/>
						<div class="flex flex-col">
							<h1 class="relative text-2xl font-bold leading-tight text-electric-blue font-effra">
								EXBLIFEP<sup class="text-base">®</sup> is where microbiological eradication* meets efficacy<sup class="text-base">1</sup>
							</h1>
							<div class="flex flex-col leading-tight">
								<p class="text-cool-grey">EXBLIFEP® is indicated for the treatment of the following infections in adults:</p>
								<ul class="list-disc pl-5 ml-3 text-cool-grey">
									<li>Complicated urinary tract infections (cUTI), including pyelonephritis</li>
									<li>Hospital-acquired pneumonia (HAP), including ventilator associated pneumonia (VAP)</li>
								</ul>
								<p class="text-cool-grey">
									Treatment of patients with bacteraemia that occurs in association with, or is suspected to be associated with, any of the
									infections listed above. Consideration should be given to official guidance on the appropriate use of antibacterial agents.5
								</p>
							</div>
						</div>
					</div>
				</section>
				<section class="pt-36 -translate-x-1">
					<h2 class="text-[32px] font-bold text-electric-blue font-effra">I'm interested in:</h2>
					<card
						title="Efficacy"
						subtitle="EXBLIFEP<sup>®</sup> superiority in primary endpoint vs. piperacillin/tazobactam<sup>1</sup>"
						button-class="bg-[#97D700] text-black"
						discover-more-path="/exblifep/efficacy"
						class="mt-9 font-effra"
					>
						<chart-icon class="min-w-[106px]" />
					</card>
					<card
						title="Safety"
						subtitle="Comparable safety profile<br /> to piperacillin/tazobactam<sup>5</sup>"
						button-class="bg-cool-grey text-white"
						discover-more-path="/exblifep/safety"
						class="mt-11 font-effra"
					>
						<shield-icon class="min-w-[106px]" />
					</card>
					<card
						title="Dosing"
						subtitle="Recommended dosing and<br /> administration details<sup>5</sup>"
						button-class="bg-electric-blue text-white"
						discover-more-path="/exblifep/dosing"
						class="mt-11 font-effra"
					>
						<bottle-icon class="min-w-[106px]" />
					</card>
				</section>
			</div>
		</div>
		<footer class="pt-2 font-effra">
			<div class="flex items-end ml-[54px] max-w-[1446px] gap-x-9">
				<the-footer
					>*In the ALLIUM study, microbiological eradication is defined as reduction of the qualifying baseline pathogen to less than 103 CFU/mL in
					urine.<sup>1</sup><br />
					For healthcare professionals only.<br />
					This medicine has been authorised by the EMA. Product is not yet commercialised in all European markets, because it is in the reimbursement
					phase. MAH for Europe: Advanz Pharma Limited, Unit 17 Northwood House, Northwood Crescent, Dublin 9, D09 V504, Ireland. MAH for UK: Mercury
					Pharmaceuticals Ltd, Dashwood House, 69 Old Broad Street, London, EC2M 1QS, UK.<br />
					©2025 ADVANZ PHARMA® | GL/CEFE/PM/0051 - Date of preparation: March 2025
				</the-footer>
				<div class="flex items-center text-[10px] text-cool-grey h-[50px] px-4 border border-black max-w-[468px]">
					▼ This medicinal product is subject to additional monitoring. This will allow quick identification of new safety information. Healthcare
					professionals are asked to report any suspected adverse reactions.
				</div>
			</div>
			<div class="flex justify-between items-center mt-2 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import Logo from '@/assets/images/exblifep-logo.svg';
import HallwayBed from '@/assets/images/hallway-bed.png';
import ResistanceAndRecurrence from '@/assets/images/resistance-and-recurrence.png';

import VLazyImage from 'v-lazy-image';

import ChartIcon from '../../icons/ChartIcon.vue';
import ShieldIcon from '../../icons/ShieldIcon.vue';
import BottleIcon from '../../icons/BottleIcon.vue';
import ChevronRight from '../../icons/ChevronRight.vue';

import Card from '@/components/Card.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>

<style scoped>
.logo {
	padding-left: 74px;
	max-width: 250px;
}

.images-container {
	position: relative;
	max-width: 1046px;
}

.hallway-bed {
	object-fit: cover;
	-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
	mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
}

.resistance-and-recurrence {
	position: absolute;
	top: -150px;
	right: 0px;
	max-width: 644px;
}
</style>
