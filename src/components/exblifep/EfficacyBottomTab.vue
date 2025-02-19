<template>
	<div class="flex flex-col h-full">
		<div
			class="relative transition-all duration-300 pt-16 font-effra"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div
				class="absolute top-1/2 -left-[70px] flex flex-col gap-y-6 z-20 transform transition-transform duration-300"
				:class="{ '-translate-x-[70px]': !sidebarOpen }"
			>
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
				<Transition
					name="fade"
					mode="out-in"
				>
					<InfoCard
						:key="activeTabText"
						:text="activeTabText"
						:image-src="activeTabImageSrc"
					/>
				</Transition>
				<div class="pt-14 max-w-[624px]">
					<h4 class="text-2xl font-bold leading-normal text-[#002470]">In an intrapulmonary PK study of 20 healthy volunteers:<sup>*6</sup></h4>
					<p class="text-xl leading-normal font-medium text-cool-grey mt-4">
						Concentration-time of cefepime and enmetazobactam in plasma and epithelial lining fluid were similar
					</p>
					<p class="text-xl text-cool-grey mt-3">
						Percentage of partitioning of total drug concentrations between plasma and epithelial lining fluid:
					</p>
					<ul class="list-disc pl-5 mt-2 ml-3">
						<li class="text-xl text-cool-grey">Cefepime (mean [SD]): 60.59% (±28.62%)</li>
						<li class="text-xl text-cool-grey">Enmetazobactam: 53.03% (±21.05%)</li>
					</ul>
					<p class="text-xl text-cool-grey mt-3">
						Using the ratio of the ELF-to-plasma fAUCs over the entire 8 hour dosing interval, biodistribution coefficients of 46% for
						enmetazobactam and 46.8% for cefepime were obtained.<sup>5</sup>
					</p>
				</div>
			</section>
			<section class="bg-[#00EAFF] py-4 flex items-center mt-9 relative z-10 border-[6px] border-white">
				<div class="pl-9 py-3 border-r-[3px] border-[#002470]">
					<img
						src="/src/assets/images/chevron-right-bleu.png"
						alt="Chevron Right Bleu"
						class="w-[62px] h-auto mr-7"
					/>
				</div>
				<h2 class="pl-10 text-2xl font-bold text-[#002470]">
					EXBLIFEP® is indicated to treat HAP/VAP, and could be a useful carbapenem-sparing option for ESBL-producing pathogens<sup>†5,9</sup>
				</h2>
			</section>
			<footer class="text-cool-grey text-[10px] leading-normal mt-11 relative z-10">
				ELF, epithelial lining fluid; fAUC, area under the curve for unbound drug; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia;
				IV, intravenous; MIC, minimum inhibitory concentration; PK, pharmacokinetics; q8h: every 8 hours; SD, standard deviation.<br />
				*The intrapulmonary PK of 2.0 g-1.0 g of EXBLIFEP<sup>®</sup> IV q8h was assessed in the plasma and epithelial lining fluid obtained by
				bronchoalveolar lavage in 20 healthy volunteers. In this study, EXBLIFEP<sup>®</sup> was well tolerated. There were no serious adverse
				events.<br />
				None of the treatment-emergent adverse events led to the discontinuation of study drugs. All adverse events spontaneously resolved without
				sequelae.<sup>6</sup><br />
				<sup>†</sup>Consideration should be given to official guidance on the appropriate use of antibacterial agents.
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
		text: 'Cefepime and enmetazobactam have demonstrated similar concentration-time profiles in plasma and ELF.<sup>6</sup>',
		imageSrc: '/src/assets/images/water-drop.png',
		imageAlt: 'Water Drop',
		active: true,
	},
	{
		id: Tabs.TIME,
		text: 'Concentrations of both agents are detectable in plasma for 24 hours after last administration.<sup>6</sup>',
		imageSrc: '/src/assets/images/24-hours.png',
		imageAlt: '24 Hours',
		active: false,
	},
	{
		id: Tabs.LUNGS,
		text: 'Cefepime has high lung tissue penetration compared with other cephalosporins, and is recommended in European clinical guidelines for the management of HAP/VAP.<sup>7,8</sup>',
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
