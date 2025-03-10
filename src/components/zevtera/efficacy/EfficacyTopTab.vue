<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/active-dot-purple.png"
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
			class="flex flex-col font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="relative flex justify-end mr-12 mt-16">
				<img
					src="/src/assets/images/bullet-long.png"
					alt="Bullet Long"
					class="absolute top-1/2 -translate-y-1/2 -left-20"
				/>
				<div
					class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium transform transition-all duration-300"
					:class="[sidebarOpen ? 'translate-x-0' : '-translate-x-52']"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span>Touch a step to continue</span>
				</div>
			</div>

			<section class="grid grid-cols-3 flex-1 content-center">
				<div
					ref="content"
					class="flex flex-col gap-y-16"
				>
					<the-title>More for your difficult-to-treat patients*</the-title>
					<div class="relative bg-primary-green px-6 h-[284px] flex flex-col justify-center rounded-[20px] overflow-hidden">
						<h3 class="text-[32px] leading-normal font-bold text-white">
							Demonstrated<br />
							efficacy<sup>5,6</sup>
						</h3>
						<img
							src="/src/assets/images/chart-dark-green.png"
							alt="Chart Dark Green"
							class="absolute bottom-0 right-0 h-[255px] w-auto"
						/>
					</div>
				</div>
				<div
					ref="bacterialActivity"
					class="relative bg-primary-green ml-10 rounded-[20px] overflow-hidden max-w-[420px] cursor-pointer"
					@click="animateBacterialActivity"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="absolute w-[85px] h-[85px] top-[18px] right-6"
					/>
					<img
						src="/src/assets/images/arrow-down-dark-green.png"
						alt="Arrow Down"
						class="h-[175px] w-auto mt-5"
					/>
					<h2 class="text-5xl text-white font-bold mt-7 pl-7">
						Fast<br />
						bactericidal activity
					</h2>
					<p class="text-2xl text-white leading-normal mt-4 font-uni-grotesk pl-7">
						ZEVTERA® exhibits rapid in vitro bactericidal activity in Gram-positive and Gram-negative pathogens<sup>5</sup>
					</p>
					<div
						ref="bacterialActivityDetails"
						class="absolute bottom-0 right-0 bg-white"
					>
						<h2>aaaaaa</h2>
					</div>
				</div>
				<div
					ref="clinicalEfficacy"
					class="relative bg-primary-green rounded-[20px] overflow-hidden max-w-[420px] cursor-pointer"
				>
					<img
						src="/src/assets/images/touch-purple.png"
						alt="Touch to select tab"
						class="absolute w-[85px] h-[85px] top-[18px] right-6"
					/>
					<img
						src="/src/assets/images/up-arrows-dark-green.png"
						alt="Arrow Down"
						class="h-[225px] w-auto mt-[22px] ml-7"
					/>
					<h2 class="text-5xl text-white font-bold mt-7 pl-7">Clinical efficacy from Days 3-4</h2>
					<p class="text-2xl text-white leading-normal mt-4 font-uni-grotesk pl-7 pr-4">
						Early improvement at Day 3 in patients with CAP by risk factors (CE)<sup>6</sup>
					</p>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>*Patients' groups who are severely ill or at high risk of poor outcomes</the-footer
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

import { gsap } from 'gsap';

import TheTitle from '@/components/zevtera/TheTitle.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

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
const content = ref(null);
const clinicalEfficacy = ref(null);
const bacterialActivity = ref(null);
const bacterialActivityDetails = ref(null);

const bacterialActivityActive = ref(false);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

const animateBacterialActivity = () => {
	const tl = gsap.timeline();
	const isActive = bacterialActivityActive.value;
	const elements = [clinicalEfficacy.value, content.value];

	// Common animation properties
	const opacityConfig = {
		opacity: isActive ? 1 : 0,
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const detailsOpacityConfig = {
		opacity: isActive ? 0 : 1,
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const slideConfig = {
		x: isActive ? 0 : -window.innerWidth / 2 + 420,
		duration: 0.9,
		ease: 'power2.inOut',
		onComplete: () => {
			bacterialActivityActive.value = !isActive;
		},
	};

	if (isActive) {
		// Animate slide first, then opacity
		tl.to(bacterialActivityDetails.value, detailsOpacityConfig).to(bacterialActivity.value, slideConfig, '-=0.5').to(elements, opacityConfig, '-=0.5');
	} else {
		// Animate opacity first, then slide
		tl.to(elements, opacityConfig).to(bacterialActivity.value, slideConfig, '-=0.5').to(bacterialActivityDetails.value, detailsOpacityConfig, '-=0.5');
	}

	return tl;
};
</script>
