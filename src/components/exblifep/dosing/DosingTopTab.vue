<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
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
				@click="emit('goToBottomTab')"
			/>
		</div>
		<div
			class="flex flex-col justify-center font-effra transition-all duration-300 relative pb-6"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="flex justify-between mr-12">
				<div>
					<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">Dosing and administration of EXBLIFEP<sup>®5</sup></h1>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[300px] my-5"
					/>
				</div>
				<div
					class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium transform transition-all duration-300"
					:class="[sidebarOpen ? 'translate-x-0' : '-translate-x-52']"
				>
					<img
						src="/src/assets/images/touch.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span class="text-cool-grey text-2xl">Touch a step to continue</span>
				</div>
			</div>
			<div class="flex pt-5 gap-x-10">
				<div
					class="flex"
					@click="activateTab(tabs[0])"
				>
					<!-- Image Section -->
					<img
						ref="fullDosingButton"
						src="/src/assets/images/dosing-button-full.png"
						alt="Dosing Full"
						class="absolute h-[704px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>
					<img
						ref="emptyDosingButton"
						src="/src/assets/images/dosing-button-empty.png"
						alt="Dosing Empty"
						class="absolute h-[704px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>

					<!-- Expanding Content Section -->
					<div
						:class="[tabs[0].class, tabs[0].active ? 'w-[806px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white border-1 border-electric-blue border-l-0 pl-28 rounded-r-[30px] ml-20 z-10 overflow-hidden max-h-[704px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[0].class}-content`"
						>
							<div class="flex items-end">
								<img
									src="/src/assets/images/dosing-bottle.png"
									alt="Dosing Bottle"
									class="w-[150px] h-[150px]"
								/>
								<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">
									{{ tabs[0].name }}
								</h3>
							</div>
							<div
								class="flex flex-col pl-10 text-2xl text-cool-grey"
								v-html="tabs[0].details"
							></div>
						</div>
					</div>
				</div>
				<div
					class="flex"
					@click="activateTab(tabs[1])"
				>
					<!-- Image Section -->
					<img
						ref="fullAdministrationButton"
						src="/src/assets/images/administration-button-full.png"
						alt="Dosing Full"
						class="absolute h-[704px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>
					<img
						ref="emptyAdministrationButton"
						src="/src/assets/images/administration-button-empty.png"
						alt="Dosing Empty"
						class="absolute h-[704px] w-auto z-20 cursor-pointer"
					/>

					<!-- Expanding Content Section -->
					<div
						:class="[tabs[1].class, tabs[1].active ? 'w-[806px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-28 rounded-r-[30px] ml-20 z-10 overflow-hidden max-h-[704px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[1].class}-content`"
						>
							<div class="flex items-end">
								<img
									src="/src/assets/images/dosing-bottle.png"
									alt="Dosing Bottle"
									class="w-[150px] h-[150px]"
								/>
								<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">
									{{ tabs[1].name }}
								</h3>
							</div>
							<div
								class="flex flex-col pl-10 text-2xl text-cool-grey"
								v-html="tabs[1].details"
							></div>
						</div>
					</div>
				</div>
				<div
					class="flex"
					@click="activateTab(tabs[2])"
				>
					<!-- Image Section -->
					<img
						ref="fullStorageButton"
						src="/src/assets/images/storage-button-full.png"
						alt="Dosing Full"
						class="absolute h-[704px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>
					<img
						ref="emptyStorageButton"
						src="/src/assets/images/storage-button-empty.png"
						alt="Dosing Empty"
						class="absolute h-[704px] w-auto z-20 cursor-pointer"
					/>

					<!-- Expanding Content Section -->
					<div
						:class="[tabs[2].class, tabs[2].active ? 'w-[806px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-28 rounded-r-[30px] ml-20 z-10 overflow-hidden max-h-[704px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[2].class}-content`"
						>
							<div class="flex items-end">
								<img
									src="/src/assets/images/dosing-bottle.png"
									alt="Dosing Bottle"
									class="w-[150px] h-[150px]"
								/>
								<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">
									{{ tabs[2].name }}
								</h3>
							</div>
							<div
								class="flex flex-col pl-10 text-2xl text-cool-grey"
								v-html="tabs[2].details"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.5
			</the-footer>
			<ExploreAnother />
			<button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToBottomTab')"
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
import { ref, onMounted, watch } from 'vue';

import { gsap } from 'gsap';

import TheFooter from '../TheFooter.vue';
import ExploreAnother from '../ExploreAnother.vue';

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

const fullDosingButton = ref(null);
const emptyDosingButton = ref(null);
const fullAdministrationButton = ref(null);
const emptyAdministrationButton = ref(null);
const fullStorageButton = ref(null);
const emptyStorageButton = ref(null);

const tabs = ref([
	{
		id: 1,
		class: 'dosing',
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
		class: 'administration',
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
		class: 'storage',
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

const topTab = ref(null);
const activeTab = ref(1);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

watch(tabs.value, (newValue) => {
	if (newValue[0].active) {
		gsap.to(fullDosingButton.value, { opacity: 1, display: 'block' });
		gsap.to(emptyDosingButton.value, { opacity: 0, display: 'none' });
	} else {
		gsap.to(fullDosingButton.value, { opacity: 0, display: 'none' });
		gsap.to(emptyDosingButton.value, { opacity: 1, display: 'block' });
	}

	if (newValue[1].active) {
		gsap.to(fullAdministrationButton.value, { opacity: 1, display: 'block' });
		gsap.to(emptyAdministrationButton.value, { opacity: 0, display: 'none' });
	} else {
		gsap.to(fullAdministrationButton.value, { opacity: 0, display: 'none' });
		gsap.to(emptyAdministrationButton.value, { opacity: 1, display: 'block' });
	}

	if (newValue[2].active) {
		gsap.to(fullStorageButton.value, { opacity: 1, display: 'block' });
		gsap.to(emptyStorageButton.value, { opacity: 0, display: 'none' });
	} else {
		gsap.to(fullStorageButton.value, { opacity: 0, display: 'none' });
		gsap.to(emptyStorageButton.value, { opacity: 1, display: 'block' });
	}
});

onMounted(() => {
	gsap.set('.dosing', { width: '806px', opacity: 1, borderRight: '1px solid #1F17F6', borderTop: '1px solid #1F17F6', borderBottom: '1px solid #1F17F6' });
	gsap.set('.dosing-content', { opacity: 1 });
	gsap.set(fullDosingButton.value, { opacity: 1, display: 'block' });
});

const activateTab = async (newTab) => {
	if (newTab.id === activeTab.value) return; // Do nothing if already active

	const previousTab = tabs.value.find((tab) => tab.id === activeTab.value);
	const nextTab = newTab;

	previousTab.active = false;

	let tl = gsap.timeline();

	tl.to(`.${previousTab.class}-content`, {
		opacity: 0,
		duration: 0.2,
	})
		.to(`.${previousTab.class}`, {
			opacity: 0,
			width: 0,
			border: 0,
			duration: 0.4,
		})
		.to(
			`.${nextTab.class}`,
			{
				opacity: 1,
				width: '806px',
				borderRight: '1px solid #1F17F6',
				borderTop: '1px solid #1F17F6',
				borderBottom: '1px solid #1F17F6',
				duration: 0.4,
			},
			'-=0.2'
		)
		.to(`.${nextTab.class}-content`, {
			opacity: 1,
			duration: 0.2,
			onComplete: () => {
				activeTab.value = newTab.id;
				nextTab.active = true;
			},
		});
};
</script>
