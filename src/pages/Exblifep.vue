<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="flex flex-col justify-center">
			<div class="flex">
				<section class="flex flex-col pt-24">
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
				<section class="pt-36 -translate-x-1">
					<h2 class="text-[32px] font-bold text-electric-blue font-effra">I'm interested in -</h2>
					<card
						title="Efficacy"
						subtitle="EXBLIFEP<sup>®</sup> superiority in primary endpoint vs. piperacillin/tazobactam<sup>1</sup>"
						button-class="bg-[#97D700] text-black"
						discover-more-path="/efficacy"
						class="mt-9"
					>
						<chart-icon class="min-w-[106px]" />
					</card>
					<card
						title="Safety"
						subtitle="Comparable safety profile<br /> to piperacillin/tazobactam<sup>5</sup>"
						button-class="bg-cool-grey text-white"
						discover-more-path="/safety"
						class="mt-11"
					>
						<shield-icon class="min-w-[106px]" />
					</card>
					<card
						title="Dosing"
						subtitle="Recommended dosing and<br /> administration details<sup>5</sup>"
						button-class="bg-electric-blue text-white"
						discover-more-path="/dosing"
						class="mt-11"
					>
						<bottle-icon class="min-w-[106px]" />
					</card>
				</section>
			</div>
		</div>
		<footer>
			<the-footer class="transition-all duration-300 ml-[124px]"
				>For full list of adverse reactions and frequency please consult the Summary of Product Characteristics.<br />
				ALT, alanine transaminase; AST, aspartate aminotransferase; SAE, serious adverse event.</the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import ChartIcon from '../icons/ChartIcon.vue';
import ShieldIcon from '../icons/ShieldIcon.vue';
import BottleIcon from '../icons/BottleIcon.vue';
import ChevronRight from '../icons/ChevronRight.vue';

import Card from '../components/exblifep/Card.vue';
import TheFooter from '../components/exblifep/TheFooter.vue';
import ExploreAnother from '../components/exblifep/ExploreAnother.vue';

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
