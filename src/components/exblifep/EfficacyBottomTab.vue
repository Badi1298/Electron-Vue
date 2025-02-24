<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
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
			class="flex flex-col justify-center font-effra transition-all duration-300 relative"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<div class="flex justify-between mr-12 items-center">
				<div>
					<h1 class="text-[32px] text-electric-blue font-bold leading-normal max-w-[1000px]">
						EXBLIFEP<sup>®</sup> demonstrated high intrapulmonary penetration in healthy volunteers, supporting its use in the treatment of
						HAP/VAP<sup>6</sup>
					</h1>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[300px] my-5"
					/>
				</div>
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

			<section class="flex gap-x-16">
				<div class="flex flex-col gap-y-12">
					<info-icon
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
					<info-card
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
			<section class="bg-[#00EAFF] py-4 flex items-center mt-9 relative z-10 border-[6px] border-white max-w-[1400px]">
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
		</div>

		<footer>
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
			>
				ELF, epithelial lining fluid; fAUC, area under the curve for unbound drug; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia;
				IV, intravenous; MIC, minimum inhibitory concentration; PK, pharmacokinetics; q8h: every 8 hours; SD, standard deviation.<br />
				*The intrapulmonary PK of 2.0 g-1.0 g of EXBLIFEP<sup>®</sup> IV q8h was assessed in the plasma and epithelial lining fluid obtained by
				bronchoalveolar lavage in 20 healthy volunteers. In this study, EXBLIFEP<sup>®</sup> was well tolerated. There were no serious adverse
				events.<br />
				None of the treatment-emergent adverse events led to the discontinuation of study drugs. All adverse events spontaneously resolved without
				sequelae.<sup>6</sup><br />
				<sup>†</sup>Consideration should be given to official guidance on the appropriate use of antibacterial agents.
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink to="/safety">
					<NextSection />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import TheFooter from './TheFooter.vue';
import NextSection from './NextSection.vue';
import InfoIcon from './efficacy/InfoIcon.vue';
import InfoCard from './efficacy/InfoCard.vue';
import ExploreAnother from './ExploreAnother.vue';

const Tabs = Object.freeze({
	DROP: 1,
	TIME: 2,
	LUNGS: 3,
});

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

const bottomTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

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
