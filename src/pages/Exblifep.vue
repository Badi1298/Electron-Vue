<template>
	<div class="h-screen bg-textured">
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
						class="hallway-bed"
					/>
					<img
						src="../assets/images/resistance-and-recurrence.png"
						alt="Resistance and Recurrence"
						class="resistance-and-recurrence"
					/>
				</div>
				<div class="flex items-center gap-x-5 py-12 px-14 border-x-0 border-y-[6px] border-[#1F17F6] max-w-[1078px]">
					<chevron-right />
					<h1 class="relative text-[40px] text-center font-bold leading-tight px-2 text-electric-blue">
						EXBLIFEP<sup class="text-2xl font-normal">®</sup> is where microbiological eradication* meets efficacy<sup class="text-[26px]">1</sup>
					</h1>
				</div>
			</section>
			<section class="pt-40">
				<h2 class="text-[32px] font-bold text-electric-blue">I'm interested in -</h2>
				<card
					title="Efficacy"
					subtitle="EXBLIFEP<sup>®</sup> superiority in primary endpoint vs. piperacillin/tazobactam<sup>1</sup>"
					button-class="bg-[#97D700] text-black"
				>
					<chart-icon class="min-w-[106px]" />
				</card>
			</section>
		</div>
	</div>
</template>

<script setup>
import ChartIcon from '../icons/ChartIcon.vue';
import ChevronRight from '../icons/ChevronRight.vue';

import Card from '../components/exblifep/Card.vue';
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
	top: -190px;
	right: 20px;
	max-width: 644px;
}
</style>
