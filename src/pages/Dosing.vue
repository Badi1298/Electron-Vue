<template>
	<div class="flex flex-col overflow-y-scroll">
		<div class="grid grid-cols-1 grid-rows-1 min-h-screen">
			<div
				class="flex flex-col justify-end font-effra transition-all duration-300 relative pb-6"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
			>
				<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
					<img
						src="/src/assets/images/active-dot.png"
						alt="Active Dot"
						class="h-5 w-5 cursor-pointer"
					/>
					<img
						src="/src/assets/images/inactive-dot.png"
						alt="Active Dot"
						class="h-5 w-5 cursor-pointer"
					/>
				</div>
				<div class="flex justify-between">
					<div>
						<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">
							Dosing and administration of EXBLIFEP<sup>®5</sup>
						</h1>
						<img
							src="/src/assets/images/lime-green-border.png"
							alt="Lime Green Border"
							class="h-1.5 w-[300px] my-5"
						/>
					</div>
					<div class="flex items-center gap-3.5">
						<img
							src="/src/assets/images/touch.png"
							alt="Touch to select tab"
							class="w-[70px] h-[70px]"
						/>
						<span class="text-cool-grey text-2xl">Touch a step to continue</span>
					</div>
				</div>
				<div class="flex pt-5 gap-x-16">
					<div
						v-for="tab in tabs"
						:key="tab.id"
						class="flex"
						@click="activateTab(tab)"
					>
						<img
							:src="tab.active ? tab.activeImageSrc : tab.inactiveImageSrc"
							alt="Dosing Full"
							class="h-[704px] w-auto z-20"
						/>
						<div
							v-if="tab.active"
							class="flex justify-center flex-col bg-white border-2 border-electric-blue pl-28 rounded-r-[30px] w-[806px] -ml-20"
						>
							<div class="flex items-end">
								<img
									src="/src/assets/images/dosing-bottle.png"
									alt="Dosing Bottle"
									class="w-[150px] h-[150px]"
								/>
								<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">{{ tab.name }}</h3>
							</div>
							<div
								class="flex flex-col pl-10 text-2xl text-cool-grey"
								v-html="tab.details"
							></div>
						</div>
					</div>
				</div>
			</div>
			<footer class="relative pb-6">
				<the-footer
					class="transition-all duration-300 mb-4"
					:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
					>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data
					are available.5</the-footer
				>
				<ExploreAnother />
				<img
					src="/src/assets/images/down-button-blue.png"
					alt="Down Button"
					class="w-[140px] h-[50px] absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer"
				/>
			</footer>
		</div>
		<div class="min-h-screen">aaaaaa</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import TheFooter from '../components/exblifep/TheFooter.vue';
import ExploreAnother from '../components/exblifep/ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const tabs = ref([
	{
		id: 1,
		name: 'Dosing',
		details: `
			<p class="pr-20">
				The recommended dose for patients with normal renal function is
				<span class="text-dark-blue font-bold">2.0 g/0.5 g cefepime/enmetazobactam.<sup>5</sup></span>
			</p>
			<p class="pr-20 mt-5">
				The usual duration of treatment is 7 to 10 days. In patients with bacteraemia treatment up to 14 days may be required.<sup
					>5</sup
				>
			</p>
		`,
		activeImageSrc: '/src/assets/images/dosing-button-full.png',
		inactiveImageSrc: '/src/assets/images/dosing-button-empty.png',
		active: true,
	},
	{
		id: 2,
		name: 'Method of administration',
		details: `
			<p>Administered as:<sup>5</sup></p>
			<ul class="flex flex-col gap-y-3.5 list-disc pl-5 ml-3">
				<li class="text-dark-blue font-bold">
					2-hour <span class="text-cool-grey font-normal">IV infusion for cUTI, includixng AP</span>
				</li>
				<li class="text-dark-blue font-bold">
					4-hour <span class="text-cool-grey font-normal">IV infusion for HAP/VAP</span>
				</li>
				<li class="text-dark-blue font-bold">
					4-hour <span class="text-cool-grey font-normal">IV infusion for patients with eGFR > 150 mL/min</span>
				</li>
			</ul>
			<p class="mt-4">
				Every <span class="text-dark-blue font-bold">8 hours<sup>5</sup></span>
			</p>
		`,
		activeImageSrc: '/src/assets/images/administration-button-full.png',
		inactiveImageSrc: '/src/assets/images/administration-button-empty.png',
		active: false,
	},
	{
		id: 3,
		name: 'Storage',
		details: `
			<p class="text-dark-blue font-bold">Powder vial:</p>
			<ul class="flex flex-col gap-y-2 list-disc pl-5 ml-3 pr-12">
				<li class="text-dark-blue"><span class="text-cool-grey">Store in a refrigerator (2 °C - 8 °C)</span></li>
				<li class="text-dark-blue">
					<span class="text-cool-grey">Keep the vial in the outer carton in order to protect from light</span>
				</li>
				<li class="text-dark-blue"><span class="text-cool-grey">2-year shelf life</span></li>
			</ul>
			<p class="text-dark-blue font-bold mt-4">Reconstituted solution:</p>
			<ul class="flex flex-col gap-y-2 list-disc pl-5 ml-3 pr-5">
				<li class="text-dark-blue"><span class="text-cool-grey">The reconstituted vial should be further diluted immediately</span></li>
			</ul>
			<p class="text-dark-blue font-bold mt-4">Diluted solution:</p>
			<ul class="flex flex-col gap-y-2 list-disc pl-5 ml-3">
				<li class="text-dark-blue"><span class="text-cool-grey">Up to 6 hours in a refrigerator (2 °C - 8 °C)</span></li>
			</ul>
		`,
		activeImageSrc: '/src/assets/images/storage-button-full.png',
		inactiveImageSrc: '/src/assets/images/storage-button-empty.png',
		active: false,
	},
]);

const activateTab = (tab) => {
	tabs.value.forEach((tab) => (tab.active = false));
	tab.active = true;
};
</script>

<style scoped>
::-webkit-scrollbar {
	display: none;
}
</style>
