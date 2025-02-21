<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen">
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
