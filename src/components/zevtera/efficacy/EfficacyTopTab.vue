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

			<section class="relative grid grid-cols-3 flex-1 content-center">
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
					class="relative bg-primary-green ml-10 rounded-[20px] max-w-[420px] cursor-pointer z-50"
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
				<div
					ref="bacterialActivityDetails"
					class="flex flex-col gap-y-5 pl-[260px] pt-14 pb-8 absolute top-1/2 -translate-y-1/2 left-[190px] right-[60px] bg-white z-10 rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card"
				>
					<h2 class="text-[32px] font-bold pr-3">
						ZEVTERA® exhibits rapid in vitro bactericidal activity in Gram-positive and Gram-negative pathogens<sup>5</sup>
					</h2>
					<div class="flex gap-x-28">
						<div>
							<h3 class="text-2xl font-uni-grotesk italic mb-2.5 text-center">Staphylococcus aureus*</h3>
							<img
								src="/src/assets/images/bacterial-activity-sa.png"
								alt="Bacterial Activity"
								class="h-[420px] w-auto"
							/>
						</div>
						<div class="flex flex-col">
							<h3 class="text-2xl font-uni-grotesk italic mb-2.5 text-center">Escherichia coli*</h3>
							<img
								src="/src/assets/images/bacterial-activity-ec.png"
								alt="Bacterial Activity"
								class="max-h-[400px] w-auto flex-1 mt-auto"
							/>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-4 mr-12 font-uni-grotesk">
						Adapted from Hebeisen P et al. 2001<sup>5</sup><br /><br />*Overnight cultures of <span class="italic">E. coli</span> and MSSA/MRSA test
						strain were grown in 30 mL of Mueller-Hinton broth and diluted into fresh medium to yield an inoculum of 10<sup>6</sup> CFU/mL or
						higher. Drug was added either with<br />
						the inoculumor at intervals of 1.5 hours (early log phase) and 3 hours (log phase) after its addition. Drug concentrations of 2 times
						the MIC were used. Ten-microlitre aliquots of appropriate dilutions were plated on Mueller-Hinton agar (MHA), and colonies were counted
						after 24 hours of incubation. To check if resistant clones had been selected, the MICs were determined for those cultures that showed
						growth after 24 hours. Bactericidal activity wasdefined by a ≥ 3-log<sub>10</sub> decrease in the number of CFU/mL within 24 hours.<sup
							>5</sup
						><br />
						CFU, colony-forming unit; MIC, minimum inhibitory concentration; MRSA, Methicillin-resistant <span class="italic">S. aureus</span>;
						MSSA, Methicillin-susceptible <span class="italic">S. aureus</span>.
					</footer>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
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
import { onMounted } from 'vue';

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

onMounted(() => {
	gsap.set(bacterialActivityDetails.value, { opacity: 0 });
});

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
