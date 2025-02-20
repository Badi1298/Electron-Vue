<template>
	<div class="flex justify-between z-10 relative">
		<div class="flex flex-col">
			<div class="flex">
				<section class="flex flex-col pt-28">
					<img
						src="../assets/images/exblifep-logo.svg"
						alt="Exblifep Logo"
						class="w-64 ml-[74px]"
					/>
					<div class="images-container">
						<img
							src="../assets/images/hallway-bed.png"
							alt="Hallway Bed"
							class="hallway-bed h-[560px]"
						/>
						<img
							src="../assets/images/resistance-and-recurrence.png"
							alt="Resistance and Recurrence"
							class="resistance-and-recurrence"
						/>
					</div>
					<div class="flex items-center gap-x-5 py-10 px-14 border-x-0 border-y-[6px] border-[#1F17F6] max-w-[1078px]">
						<chevron-right class="w-24 h-24" />
						<h1 class="relative text-[40px] text-center font-bold leading-tight text-electric-blue font-effra">
							EXBLIFEP<sup class="text-2xl font-normal">®</sup> is where microbiological eradication* meets efficacy<sup class="text-[26px]"
								>1</sup
							>
						</h1>
					</div>
				</section>
				<section class="pt-40 -translate-x-1">
					<h2 class="text-[32px] font-bold text-electric-blue font-effra">I'm interested in -</h2>
					<card
						title="Efficacy"
						subtitle="EXBLIFEP<sup>®</sup> superiority in primary endpoint vs. piperacillin/tazobactam<sup>1</sup>"
						button-class="bg-[#97D700] text-black"
						class="mt-9"
					>
						<chart-icon class="min-w-[106px]" />
					</card>
					<card
						title="Safety"
						subtitle="Comparable safety profile to piperacillin/tazobactam<sup>5</sup>"
						button-class="bg-cool-grey text-white"
						class="mt-11"
					>
						<shield-icon class="min-w-[106px]" />
					</card>
					<card
						title="Dosing"
						subtitle="Recommended dosing and administration details<sup>5</sup>"
						button-class="bg-electric-blue text-white"
						class="mt-11"
					>
						<bottle-icon class="min-w-[106px]" />
					</card>
				</section>
			</div>
			<footer class="pl-[74px] pt-6 text-[10px] text-cool-grey font-effra">
				*In the ALLIUM study, microbiological eradication is defined as reduction of the qualifying baseline pathogen to less than 103 CFU/mL in urine.1
				<br />
				EXBLIFEP® is indicated for the treatment of the following infections in adults:5 - Complicated urinary tract infections (cUTI), including
				pyelonephritis - Hospital-acquired pneumonia (HAP), including ventilator associated pneumonia (VAP) Treatment of patients with bacteraemia that
				occurs in association with, or is suspected to be associated with, any of the infections listed above.5 Consideration should be given to
				official guidance on the appropriate use of antibacterial agents.5 For healthcare professionals only.
			</footer>
		</div>
	</div>
</template>

<script setup>
import ChartIcon from '../icons/ChartIcon.vue';
import ShieldIcon from '../icons/ShieldIcon.vue';
import BottleIcon from '../icons/BottleIcon.vue';
import ChevronRight from '../icons/ChevronRight.vue';

import Card from '../components/exblifep/Card.vue';
import Sidebar from '../components/exblifep/Sidebar.vue';
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
