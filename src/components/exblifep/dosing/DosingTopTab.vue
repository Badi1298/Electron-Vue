<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<!-- <div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
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
		</div> -->
		<div class="page-content flex flex-col justify-end font-effra relative pb-12">
			<div class="relative flex justify-between mr-12">
				<div>
					<h1 class="text-[32px] font-bold text-electric-blue max-w-[920px]">
						Dosing and administration of EXBLIFEP®<sup class="text-[22px]">5</sup>
					</h1>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[300px] my-5"
					/>
				</div>
				<div class="select-tab absolute top-1/2 -translate-y-1/2 flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium">
					<img
						src="/src/assets/images/touch.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span class="text-cool-grey text-2xl">Touch a step to continue</span>
				</div>
			</div>
			<div class="flex pt-10 gap-x-10">
				<div
					class="flex"
					@click="activateTab(tabs[0])"
					@touchstart.prevent="activateTab(tabs[0])"
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
						:class="[tabs[0].class, tabs[0].active ? 'w-[1000px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-28 rounded-r-[30px] ml-20 z-10 overflow-hidden max-h-[704px]"
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
					@touchstart.prevent="activateTab(tabs[1])"
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
						:class="[tabs[1].class, tabs[1].active ? 'w-[1000px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-28 rounded-r-[30px] ml-20 z-10 overflow-hidden max-h-[704px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[1].class}-content`"
						>
							<div class="flex items-end mt-8">
								<img
									src="/src/assets/images/iv-bag-blue.png"
									alt="Dosing Bottle"
									class="w-[150px] h-[150px]"
								/>
								<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">
									{{ tabs[1].name }}
								</h3>
							</div>
							<div
								class="relative flex flex-col pl-10 text-2xl text-cool-grey"
								v-html="tabs[1].details"
							></div>
							<div
								class="max-w-fit bg-[#00EAFF] shadow-dark py-4 ml-10 flex mt-4 items-center z-10 border-[3px] border-white pr-20 translate-y-14"
							>
								<div class="pl-7 pr-3 py-2 border-r-2 border-[#002470]">
									<img
										src="/src/assets/images/chevron-right-bleu.png"
										alt="Chevron Right Bleu"
										class="w-[40px] h-[33px]"
									/>
								</div>
								<h2 class="pl-3 text-base font-bold text-[#002470] max-w-[1200px]">
									For more information on the reconstitution/dilution of EXBLIFEP®,<br />
									speak to a member of the Advanz team.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="relative pb-6">
			<the-footer class="footer mb-4"
				>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.5
			</the-footer>
			<div class="flex justify-between items-center mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-summary', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
			<!-- <button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToBottomTab')"
			>
				<img
					src="/src/assets/images/down-button-blue.png"
					alt="Down Button"
					class="w-[140px] h-[50px] cursor-pointer"
				/>
			</button> -->
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, inject, onMounted, watch } from 'vue';

import { gsap } from 'gsap';

import { trackAction } from '@/utils/analytics.js';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
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

const route = useRoute();

const sessionId = inject('sessionId');

const fullDosingButton = ref(null);
const emptyDosingButton = ref(null);
const fullAdministrationButton = ref(null);
const emptyAdministrationButton = ref(null);

const tabs = ref([
	{
		id: 1,
		class: 'dosing',
		name: 'Dosing',
		action: 'dosing',
		details: `
			<p class="pr-20">
				The recommended dose for patients with normal renal<br /> function is
				<span class="text-dark-blue font-bold">2.0 g/0.5 g cefepime/enmetazobactam.<sup>5</sup></span>
			</p>
			<p class="pr-20 mt-5">
				The usual duration of treatment is 7 to 10 days. In patients with bacteraemia treatment up to 14 days may be required.<sup
					>5</sup
				>
			</p>
			<div class="max-w-fit bg-[#00EAFF] shadow-dark py-4 flex items-center mt-10 relative z-10 border-[3px] border-white pr-20 translate-y-5">
				<div class="pl-7 pr-3 py-2 border-r-2 border-[#002470]">
					<img
						src="/src/assets/images/chevron-right-bleu.png"
						alt="Chevron Right Bleu"
						class="w-[40px] h-[33px]"
					/>
				</div>
				<h2 class="pl-3 text-base font-bold text-[#002470] max-w-[1200px]">
					For more information on the reconstitution/dilution of EXBLIFEP®,<br /> speak to a member of the Advanz team.
				</h2>
			</div>
		`,
		activeImageSrc: '/src/assets/images/dosing-button-full.png',
		inactiveImageSrc: '/src/assets/images/dosing-button-empty.png',
		active: true,
	},
	{
		id: 2,
		class: 'administration',
		name: 'Method of administration',
		action: 'administration',
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
]);

const topTab = ref(null);
const activeTab = ref(1);

const brand = computed(() => route.meta.brand);

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
		gsap.to(fullDosingButton.value, { opacity: 1, display: 'block', duration: 0.3 });
		gsap.to(emptyDosingButton.value, { opacity: 0, display: 'none', duration: 0.3 });
	} else {
		gsap.to(fullDosingButton.value, { opacity: 0, display: 'none', duration: 0.3 });
		gsap.to(emptyDosingButton.value, { opacity: 1, display: 'block', duration: 0.3 });
	}

	if (newValue[1].active) {
		gsap.to(fullAdministrationButton.value, { opacity: 1, display: 'block', duration: 0.3 });
		gsap.to(emptyAdministrationButton.value, { opacity: 0, display: 'none', duration: 0.3 });
	} else {
		gsap.to(fullAdministrationButton.value, { opacity: 0, display: 'none', duration: 0.3 });
		gsap.to(emptyAdministrationButton.value, { opacity: 1, display: 'block', duration: 0.3 });
	}
});

watch(
	() => props.sidebarOpen,
	(value) => {
		if (value) {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: '0px',
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		} else {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: '250px',
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		}
	}
);

onMounted(() => {
	gsap.set('.dosing', { width: '1000px', opacity: 1, borderRight: '2px solid #1F17F6', borderTop: '2px solid #1F17F6', borderBottom: '2px solid #1F17F6' });
	gsap.set('.administration', { width: 20, opacity: 0, borderRight: '2px solid #1F17F6', borderTop: '2px solid #1F17F6', borderBottom: '2px solid #1F17F6' });
	gsap.set('.dosing-content', { opacity: 1 });
	gsap.set(fullDosingButton.value, { opacity: 1, display: 'block' });

	if (props.sidebarOpen) {
		gsap.set('.select-tab', { right: '0' });
	} else {
		gsap.set('.select-tab', { right: '250px' });
	}
});

const activateTab = async (newTab) => {
	if (newTab.id === activeTab.value) return; // Do nothing if already active

	const previousTab = tabs.value.find((tab) => tab.id === activeTab.value);
	const nextTab = newTab;

	trackAction('Dosing and administration', newTab.action, sessionId.value, brand.value);

	previousTab.active = false;

	let tl = gsap.timeline();

	tl.to(`.${previousTab.class}-content`, {
		opacity: 0,
		duration: 0.2,
	})
		.to(`.${previousTab.class}`, {
			opacity: 0,
			width: 20,
			duration: 0.5,
		})
		.to(
			`.${nextTab.class}`,
			{
				opacity: 1,
				width: '1000px',
				borderRight: '2px solid #1F17F6',
				borderTop: '2px solid #1F17F6',
				borderBottom: '2px solid #1F17F6',
				duration: 0.5,
			},
			'-=0.3'
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
