<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen relative">
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/active-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div
			class="flex flex-col justify-center font-effra transition-all duration-300 relative pb-6"
			:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
		>
			<div>
				<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">Reconstitution and dilution of EXBLIFEP<sup>®5</sup></h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
			<section class="grid grid-rows-[1.3fr_2fr]">
				<div class="z-20 flex items-center gap-x-10">
					<template
						v-for="(step, index) in steps"
						:key="step.id"
					>
						<div class="relative">
							<img
								:src="step.active ? step.activeImageSrc : step.inactiveImageSrc"
								:alt="`Dosing Step ${step.id}`"
								class="w-[216px] h-auto relative cursor-pointer z-10"
								@click="onStepClick(index)"
							/>
							<img
								v-if="step.active"
								src="/src/assets/images/active-arrow-down.png"
								alt="Active Arrow Down"
								class="absolute -bottom-16 z-0 left-1/2 -translate-x-1/2 w-[92px] h-auto"
							/>
						</div>
						<ChevronRight
							v-if="index < steps.length - 1"
							class="w-24 h-24"
						/>
					</template>
				</div>
				<div class="mt-28 pt-9 border-t-[3px] border-[#97D700]">
					<p v-if="steps[0].active">
						EXBLIFEP® is supplied as a dry powder in a single-dose vial that must be reconstituted and further diluted prior to IV infusion. Inspect
						the vial before use. Cefepime-enmetazobactam is compatible with sodium chloride 9 mg/ml (0.9%) solution for injection, 5% glucose
						injection solution and a combination of glucose injection solution and sodium chloride injection solution (containing 2.5% glucose and
						0.45% sodium chloride).
					</p>
				</div>
			</section>
		</div>
		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.5</the-footer
			>
			<ExploreAnother />
		</footer>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import TheFooter from '../TheFooter.vue';
import ExploreAnother from '../ExploreAnother.vue';
import ChevronRight from '../../../icons/ChevronRight.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const steps = ref([
	{
		id: 1,
		active: true,
		activeImageSrc: '/src/assets/images/dosing-step-1-active.png',
		inactiveImageSrc: '/src/assets/images/dosing-step-1-inactive.png',
	},
	{
		id: 2,
		active: false,
		activeImageSrc: '/src/assets/images/dosing-step-2-active.png',
		inactiveImageSrc: '/src/assets/images/dosing-step-2-inactive.png',
	},
	{
		id: 3,
		active: false,
		activeImageSrc: '/src/assets/images/dosing-step-3-active.png',
		inactiveImageSrc: '/src/assets/images/dosing-step-3-inactive.png',
	},
	{
		id: 4,
		active: false,
		activeImageSrc: '/src/assets/images/dosing-step-4-active.png',
		inactiveImageSrc: '/src/assets/images/dosing-step-4-inactive.png',
	},
]);

const onStepClick = (index) => {
	steps.value.forEach((step, i) => {
		step.active = i === index;
	});
};
</script>
