<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<img
			src="/src/assets/images/page-vertical-up-blue.png"
			alt="Vertical Up Blue"
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[50px] cursor-pointer z-50"
			@click="emit('goToTopTab')"
		/>
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
		<div class="page-content flex flex-col justify-center font-effra relative pr-[60px] transition-all">
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
			</div>

			<section class="flex gap-x-12 mt-14 items-center">
				<div class="flex flex-col gap-y-9">
					<div class="flex items-center">
						<div class="relative min-w-fit cursor-pointer">
							<img
								src="/src/assets/images/water-drop.png"
								alt="Water Drop"
								class="min-w-[130px] max-w-[130px] z-10 relative"
							/>
							<img
								src="/src/assets/images/active-arrow.png"
								alt="Active Arrow"
								class="w-[70px] h-[70px] absolute top-1/2 -right-[52px] transform -translate-y-1/2 z-0"
							/>
						</div>
						<div class="relative bg-white border-2 border-electric-blue w-[680px] ml-16 rounded-[20px] px-10 py-10 overflow-hidden">
							<h4 class="text-2xl font-medium text-cool-grey">
								Cefepime and enmetazobactam have demonstrated similar concentration-time profiles in plasma and ELF.<sup>6</sup>
							</h4>
						</div>
					</div>
					<div class="flex items-center">
						<div class="relative w-fit cursor-pointer">
							<img
								src="/src/assets/images/24-hours.png"
								alt="Water Drop"
								class="min-w-[130px] max-w-[130px] z-10 relative"
							/>
							<img
								src="/src/assets/images/active-arrow.png"
								alt="Active Arrow"
								class="w-[70px] h-[70px] absolute top-1/2 -right-[52px] transform -translate-y-1/2 z-0"
							/>
						</div>
						<div class="relative bg-white border-2 border-electric-blue w-[680px] ml-16 rounded-[20px] px-10 py-10 overflow-hidden">
							<h4 class="text-2xl font-medium text-cool-grey">
								Concentrations of both agents are detectable in plasma for 24 hours after last administration.<sup>6</sup>
							</h4>
						</div>
					</div>
					<div class="flex items-center">
						<div class="relative w-fit cursor-pointer">
							<img
								src="/src/assets/images/lungs.png"
								alt="Water Drop"
								class="min-w-[130px] max-w-[130px] z-10 relative"
							/>
							<img
								src="/src/assets/images/active-arrow.png"
								alt="Active Arrow"
								class="w-[70px] h-[70px] absolute top-1/2 -right-[52px] transform -translate-y-1/2 z-0"
							/>
						</div>
						<div class="relative bg-white border-2 border-electric-blue w-[680px] ml-16 rounded-[20px] px-10 py-10 overflow-hidden">
							<h4 class="text-2xl font-medium text-cool-grey">
								Cefepime has high lung tissue penetration compared with other cephalosporins, and is recommended in European clinical guidelines
								for the management of HAP/VAP.<sup>7,8</sup>
							</h4>
						</div>
					</div>
				</div>

				<div class="min-w-[416px] max-w-[416px]">
					<h4 class="text-2xl font-bold leading-normal text-[#002470]">
						In an intrapulmonary PK study<br />
						of 20 healthy volunteers:<sup>*6</sup>
					</h4>
					<p class="text-xl leading-normal font-medium text-cool-grey mt-4">
						Concentration-time of cefepime and enmetazobactam in plasma and epithelial lining fluid were similar
					</p>
					<p class="text-xl text-cool-grey mt-3">
						Percentage of partitioning of total<br />
						drug concentrations between plasma<br />
						and epithelial lining fluid:
					</p>
					<ul class="list-disc pl-5 mt-2 ml-3">
						<li class="text-xl text-cool-grey">Cefepime (mean [SD]): 60.59% (±28.62%)</li>
						<li class="text-xl text-cool-grey">Enmetazobactam: 53.03% (±21.05%)</li>
					</ul>
					<p class="text-xl text-cool-grey mt-3">
						Using the ratio of the ELF-to-plasma fAUCs over the entire 8 hour dosing interval, biodistribution coefficients of 46% for
						enmetazobactam and 46.8% for cefepime were obtained.<sup>9</sup>
					</p>
				</div>
			</section>
		</div>

		<footer>
			<the-footer class="footer mb-4">
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
import { ref, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

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
