<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/active-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
		</div>
		<div
			class="flex flex-col font-effra transition-all duration-300 relative pb-6"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="pt-[70px]">
				<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">Reconstitution and dilution of EXBLIFEP<sup>®5</sup></h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
			<section class="grid grid-rows-[1.3fr_2fr]">
				<div class="z-20 flex items-center gap-x-10 mb-28">
					<div class="relative">
						<img
							v-show="steps[0].active"
							src="/src/assets/images/dosing-step-1-active.png"
							:alt="`Dosing Step 1`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(0)"
						/>
						<img
							v-show="!steps[0].active"
							src="/src/assets/images/dosing-step-1-inactive.png"
							:alt="`Dosing Step 1`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(0)"
						/>
						<img
							v-if="steps[0].active"
							src="/src/assets/images/active-arrow-down.png"
							alt="Active Arrow Down"
							class="absolute -bottom-16 z-0 left-1/2 -translate-x-1/2 w-[92px] h-auto"
						/>
					</div>
					<ChevronRight class="w-24 h-24" />
					<div class="relative">
						<img
							v-show="steps[1].active"
							src="/src/assets/images/dosing-step-2-active.png"
							:alt="`Dosing Step 2`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(1)"
						/>
						<img
							v-show="!steps[1].active"
							src="/src/assets/images/dosing-step-2-inactive.png"
							:alt="`Dosing Step 2`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(1)"
						/>
						<img
							v-if="steps[1].active"
							src="/src/assets/images/active-arrow-down.png"
							alt="Active Arrow Down"
							class="absolute -bottom-16 z-0 left-1/2 -translate-x-1/2 w-[92px] h-auto"
						/>
					</div>
					<ChevronRight class="w-24 h-24" />
					<div class="relative">
						<img
							v-show="steps[2].active"
							src="/src/assets/images/dosing-step-3-active.png"
							:alt="`Dosing Step 3`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(2)"
						/>
						<img
							v-show="!steps[2].active"
							src="/src/assets/images/dosing-step-3-inactive.png"
							:alt="`Dosing Step 3`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(2)"
						/>
						<img
							v-if="steps[2].active"
							src="/src/assets/images/active-arrow-down.png"
							alt="Active Arrow Down"
							class="absolute -bottom-16 z-0 left-1/2 -translate-x-1/2 w-[92px] h-auto"
						/>
					</div>
					<ChevronRight class="w-24 h-24" />
					<div class="relative">
						<img
							v-show="steps[3].active"
							src="/src/assets/images/dosing-step-4-active.png"
							:alt="`Dosing Step 4`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(3)"
						/>
						<img
							v-show="!steps[3].active"
							src="/src/assets/images/dosing-step-4-inactive.png"
							:alt="`Dosing Step 4`"
							class="w-[216px] h-auto relative cursor-pointer z-10"
							@click="onStepClick(3)"
						/>
						<img
							v-show="steps[3].active"
							src="/src/assets/images/active-arrow-down.png"
							alt="Active Arrow Down"
							class="absolute -bottom-16 z-0 left-1/2 -translate-x-1/2 w-[92px] h-auto"
						/>
					</div>
				</div>
				<div class="border-t-[3px] border-[#97D700] w-[1412px]">
					<p
						v-if="steps[0].active"
						class="text-2xl text-cool-grey pr-20 pt-12"
					>
						EXBLIFEP® is supplied as a dry powder in a single-dose vial that must be reconstituted and further diluted prior to IV infusion. Inspect
						the vial before use. Cefepime-enmetazobactam is compatible with sodium chloride 9 mg/ml (0.9%) solution for injection, 5% glucose
						injection solution and a combination of glucose injection solution and sodium chloride injection solution (containing 2.5% glucose and
						0.45% sodium chloride).
					</p>
					<div v-if="steps[1].active">
						<p class="text-2xl text-cool-grey pt-12">
							Withdraw 10 mL from an infusion bag of 250 mL (compatible injection solution) and reconstitute the EXBLIFEP<sup>®</sup> vial.
						</p>
						<ul class="flex flex-col gap-y-2.5 text-2xl list-disc pl-5 mt-8 ml-3 max-w-[450px]">
							<li class="text-dark-blue"><span class="text-cool-grey">0.9% sodium chloride 5% glucose</span></li>
							<li class="text-dark-blue"><span class="text-cool-grey">5% glucose</span></li>
							<li class="text-dark-blue"><span class="text-cool-grey">Combination containing 2.5% glucose and 0.45% sodium chloride</span></li>
						</ul>
					</div>
					<div
						v-if="steps[2].active"
						class="text-2xl text-cool-grey flex flex-col gap-y-5 pt-12"
					>
						<p>Mix gently to dissolve.</p>
						<p><span class="text-dark-blue font-bold">CAUTION:</span> the reconstituted solution is not for direct injection.</p>
						<p>The reconstituted vial should be further diluted immediately.</p>
						<p>The final volume of the reconstituted solution is approximately 10mL.</p>
					</div>
					<div
						v-if="steps[3].active"
						class="text-base text-cool-grey grid grid-cols-2 pt-5"
					>
						<div class="max-w-[610px]">
							<ul class="flex flex-col gap-y-1 list-disc pl-4 ml-3">
								<li class="text-dark-blue font-bold">Dilute further, immediately</li>
								<li class="text-cool-grey">
									Dilute the reconstituted solution <span class="text-dark-blue font-bold">in an infusion bag of 250 mL</span> (compatible
									injection solution) before IV infusion.
								</li>
							</ul>
							<p class="mt-2.5">
								To dilute the reconstituted solution,
								<span class="text-dark-blue font-bold">withdraw the full or partial reconstituted vial</span> content and add it back into the
								infusion bag according to the table.
							</p>
							<p class="mt-5">
								<span class="text-dark-blue font-bold">IV infusion of the diluted solution must be completed within 8 hours</span> if stored
								under refrigerated conditions (i.e., at 2°C to 8 °C; where it has been refrigerated for less than 6 hours, prior to being
								allowed to reach room temperature and then administered at room temperature over a period of 2 or 4 hours).
							</p>
							<p class="mt-5">It must only be used if the solution is free from particles. Use only clear solutions.</p>
							<p class="mt-5">
								Like other cephalosporins, cefepime-enmetazobactam solutions can develop a yellow to amber color, depending on storage
								conditions. However, this has no negative influence on the effect of the product.
							</p>
						</div>
						<img
							src="/src/assets/images/dosing-table.png"
							alt="Dosing Table"
							class="w-[706px] h-[329px]"
						/>
					</div>
				</div>
			</section>
		</div>
		<footer class="relative pb-6">
			<p
				v-if="steps[3].active"
				class="transition-all duration-300 mb-4 text-dark-blue font-bold text-xl"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
			>
				Any unused medicinal product or waste material should be disposed of in accordance with local requirements.
			</p>
			<the-footer
				v-else
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
			>
				EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.1
			</the-footer>

			<div class="flex justify-between items-center mr-12">
				<ExploreAnother />
				<RouterLink to="/summary">
					<NextSection />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

import TheFooter from '../TheFooter.vue';
import NextSection from '../NextSection.vue';
import ExploreAnother from '../ExploreAnother.vue';
import ChevronRight from '../../../icons/ChevronRight.vue';

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

const emit = defineEmits(['goToTopTab']);

const steps = ref([
	{
		active: true,
	},
	{
		active: false,
	},
	{
		active: false,
	},
	{
		active: false,
	},
]);

const bottomTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

const onStepClick = (index) => {
	steps.value.forEach((step, i) => {
		step.active = i === index;
	});
};
</script>
