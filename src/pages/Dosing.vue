<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6">
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
			<div>
				<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">Dosing and administration of EXBLIFEP<sup>®5</sup></h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
			<div class="flex pt-5 gap-x-16">
				<div
					v-for="tab in tabs"
					:key="tab.name"
					class="flex"
					@click="activateTab(tab)"
				>
					<img
						src="/src/assets/images/dosing-button-full.png"
						alt="Dosing Full"
						class="h-[704px] w-auto z-20"
					/>
					<div
						v-if="tab.active"
						class="flex justify-center flex-col bg-white border-2 border-electric-blue pl-28 pr-16 rounded-r-[30px] w-[806px] -ml-20"
					>
						<div class="flex items-end">
							<img
								src="/src/assets/images/dosing-bottle.png"
								alt="Dosing Bottle"
								class="w-[150px] h-[150px]"
							/>
							<h3 class="text-[40px] font-semibold text-electric-blue -translate-y-4 -translate-x-3">Dosing</h3>
						</div>
						<div class="flex flex-col pl-10 text-2xl text-cool-grey">
							<p>
								The recommended dose for patients with normal renal function is
								<span class="text-dark-blue font-bold">2.0 g/0.5 g cefepime/enmetazobactam.<sup>5</sup></span>
							</p>
							<p>
								The usual duration of treatment is 7 to 10 days. In patients with bacteraemia treatment up to 14 days may be required.<sup
									>5</sup
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer>
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
		name: 'Dosing',
		active: true,
	},
	{
		name: 'Administration',
		active: false,
	},
	{
		name: 'Storage',
		active: false,
	},
]);

const activateTab = (tab) => {
	tabs.value.forEach((tab) => (tab.active = false));
	tab.active = true;
};
</script>
