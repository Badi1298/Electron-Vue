<template>
	<div class="flex flex-col h-full">
		<div class="pt-20 font-effra">
			<div class="absolute left-[50px] top-1/2 -translate-y-1/2 flex flex-col gap-y-6">
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
			<div class="flex justify-between mr-12">
				<h1 class="text-[32px] text-electric-blue font-medium leading-normal max-w-[950px]">
					EXBLIFEP<sup>®</sup> demonstrated high intrapulmonary penetration in healthy volunteers, supporting its use in the treatment of HAP/VAP<sup
						>6</sup
					>
				</h1>
				<div
					class="flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium transform transition-all duration-300"
					:class="[sidebarOpen ? 'translate-x-0' : '-translate-x-full']"
				>
					<img
						src="/src/assets/images/touch.png"
						alt="Touch to select tab"
						class="w-[70px] h-[70px]"
					/>
					<span>Select a tab</span>
				</div>
			</div>
			<img
				src="/src/assets/images/lime-green-border.png"
				alt="Lime Green Border"
				class="h-1.5 w-auto mt-5 mb-7"
			/>
			<section class="flex gap-x-16">
				<div class="flex flex-col gap-y-12">
					<InfoIcon
						v-for="tab in tabsInfo"
						:key="tab.id"
						:id="tab.id"
						:image-src="tab.imageSrc"
						:image-alt="tab.imageAlt"
						:active="tab.active"
						@click="onClickTab"
					/>
				</div>
				<InfoCard
					:text="activeTabText"
					:image-src="activeTabImageSrc"
				/>
			</section>
			<footer class="text-cool-grey text-[10px] leading-normal mt-3.5 relative z-10">
				ELF, epithelial lining fluid; fAUC, area under the curve for unbound drug; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia;
				IV, intravenous; MIC, minimum inhibitory concentration; PK, pharmacokinetics; q8h: every 8 hours; SD, standard deviation. *The intrapulmonary PK
				of 2.0 g-1.0 g of EXBLIFEP® IV q8h was assessed in the plasma and epithelial lining fluid obtained by bronchoalveolar lavage in 20 healthy
				volunteers. In this study, EXBLIFEP® was well tolerated. There were no serious adverse events. None of the treatment-emergent adverse events led
				to the discontinuation of study drugs. All adverse events spontaneously resolved without sequelae.6 †Consideration should be given to official
				guidance on the appropriate use of antibacterial agents.
			</footer>
		</div>
		<button>Next Section</button>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

import InfoIcon from './efficacy/InfoIcon.vue';
import InfoCard from './efficacy/InfoCard.vue';

const Tabs = Object.freeze({
	DROP: 1,
	TIME: 2,
	LUNGS: 3,
});

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const tabsInfo = ref([
	{
		id: Tabs.DROP,
		text: 'Cefepime and enmetazobactam have demonstrated similar concentration-time profiles in plasma and ELF.6',
		imageSrc: '/src/assets/images/water-drop.png',
		imageAlt: 'Water Drop',
		active: true,
	},
	{
		id: Tabs.TIME,
		text: 'Concentrations of both agents are detectable in plasma for 24 hours after last administration.6',
		imageSrc: '/src/assets/images/24-hours.png',
		imageAlt: '24 Hours',
		active: false,
	},
	{
		id: Tabs.LUNGS,
		text: 'Cefepime has high lung tissue penetration compared with other cephalosporins, and is recommended in European clinical guidelines for the management of HAP/VAP.7,8',
		imageSrc: '/src/assets/images/lungs.png',
		imageAlt: 'Lungs',
		active: false,
	},
]);

const activeTabText = computed(() => tabsInfo.value.find((tab) => tab.active).text);
const activeTabImageSrc = computed(() => tabsInfo.value.find((tab) => tab.active).imageSrc);

const onClickTab = (id) => {
	tabsInfo.value.forEach((tab) => {
		tab.active = tab.id === id;
	});
};
</script>
