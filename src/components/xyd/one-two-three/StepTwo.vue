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
			<div>
				<span>1.</span>
				<h1>One Dose</h1>
			</div>
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
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

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
		active: true,
	},
	{
		id: Tabs.TIME,
		active: false,
	},
	{
		id: Tabs.LUNGS,
		active: false,
	},
]);

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
