<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10">
		<div class="page-content flex flex-col font-effra">
			<img
				src="/src/assets/images/bullet-long.png"
				alt="Bullet Long"
				class="-ml-20 mt-3 w-[1440px]"
			/>
			<the-title>Dosing<sup>4</sup></the-title>
			<p class="text-2xl font-medium font-uni-grotesk mt-4">
				The recommended regimen for adult and paediatric patients with normal renal function is shown in the table.
			</p>
			<section class="pr-[60px] mt-6 max-w-[1386px]">
				<div class="relative">
					<div
						class="relative flex items-center justify-between bg-primary-light-orange py-5 px-10 rounded-[20px] z-50 cursor-pointer"
						@click="showDosingTable"
						@touchstart.prevent="showDosingTable"
					>
						<p class="text-2xl font-medium font-uni-grotesk text-charcoal">
							Dosage in adult and paediatric patients with normal renal function or mild renal impairment<br />
							(i.e., [CL<sub>CR</sub>] ≥ 50 mL/min)
						</p>
						<img
							src="/src/assets/images/chevron-right-charcoal.png"
							alt="Chevron Right"
							:class="[dosingTableActive ? 'transform rotate-180' : '']"
							class="w-11 h-11 transition-all duration-500"
						/>
					</div>
					<div
						ref="dosingTable"
						class="bg-white absolute top-24 left-0 z-40 shadow-zevtera-efficacy-pathogens-card rounded-b-[30px] overflow-hidden"
					>
						<img
							src="/src/assets/images/zevtera-dosing-table.png"
							alt="Zevtera Dosing Table"
							class="p-10"
						/>
						<p class="p-10 pb-6 text-xs font-uni-grotesk">
							*Special precautions for disposal and other handling (See section Reconsitution and dilution)
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-y-20 mt-8 bg-white rounded-[30px] px-10 py-12 min-h-[500px] shadow-zevtera-efficacy-pathogens-card">
					<div class="flex gap-x-7 items-center">
						<img
							src="/src/assets/images/shield-orange-bright.png"
							alt="Shield"
							class="w-20 h-20"
						/>
						<p class="text-2xl font-uni-grotesk text-charcoal">
							The safety and efficacy of ZEVTERA® in preterm neonates have not been established. ZEVTERA® is not recommended for use in preterm
							neonates.<sup>4</sup>
						</p>
					</div>
					<div class="grid grid-cols-[0.7fr_1fr_1fr_1fr] items-center">
						<h4 class="text-[40px] leading-snug font-uni-grotesk"><span class="font-bold">Ease of use</span> in patients with comorbidities</h4>
						<div class="relative flex flex-col min-h-[242px] items-center font-uni-grotesk text-charcoal mx-6">
							<div class="min-h-[90px]">
								<img
									src="/src/assets/images/Elderly.png"
									alt="Elderly"
									class="w-[99px]"
								/>
							</div>
							<h5 class="mt-4 text-[23px] font-medium">Elderly</h5>
							<p class="text-center mt-1.5 text-[15px] leading-snug">
								<span class="font-medium fontsm">No dose adjustment</span> is necessary in elderly patients, except in cases of moderate to
								severe renal impairment<sup>4</sup>
							</p>
							<div class="w-px h-[100px] -right-[24px] top-1/2 -translate-y-1/2 bg-[#CECECE] absolute"></div>
						</div>
						<div class="relative flex flex-col min-h-[242px] items-center font-uni-grotesk text-charcoal mx-6">
							<div class="flex items-center min-h-[90px]">
								<img
									src="/src/assets/images/Liver.png"
									alt="Elderly"
									class="w-[90px]"
								/>
							</div>
							<h5 class="mt-4 text-[23px] font-medium">Hepatic Impairment</h5>
							<p class="text-center mt-1.5 text-[15px] leading-snug">
								<span class="font-medium">No dose adjustment</span> is considered necessary as there is no relevant hepatic metabolism<sup
									>3</sup
								>
								There is no experience in patients with hepatic impairement<sup>4</sup>
							</p>
							<div class="w-px h-[100px] -right-[24px] top-1/2 -translate-y-1/2 bg-[#CECECE] absolute"></div>
						</div>
						<div class="flex flex-col items-center min-h-[242px] font-uni-grotesk text-charcoal mx-6">
							<div class="flex items-center min-h-[90px]">
								<img
									src="/src/assets/images/Scale.png"
									alt="Elderly"
									class="w-[70px]"
								/>
							</div>
							<h5 class="mt-4 text-[23px] font-medium">Weight/BMI</h5>
							<p class="text-center mt-1.5 text-[15px] leading-snug">
								<span class="font-medium">No dose adjustment</span> based on body weight in adults<sup>4</sup>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'zevtera-summary', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-purple" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, toRef, computed, inject, onMounted } from 'vue';

import { gsap } from 'gsap';

import { trackAction } from '@/utils/analytics.js';
import { usePageAnimation } from '@/composables/usePageAnimation.js';

import NextSection from '@/components/NextSection.vue';
import TheTitle from '@/components/zevtera/TheTitle.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const route = useRoute();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);

const sessionId = inject('sessionId');

const dosingTable = ref(null);
const dosingTableActive = ref(false);

const brand = computed(() => route.meta.brand);

onMounted(() => {
	gsap.set(dosingTable.value, { height: 0 });
});

const showDosingTable = () => {
	if (dosingTableActive.value) {
		gsap.to(dosingTable.value, { height: 0, duration: 0.5 });
	} else {
		gsap.to(dosingTable.value, { height: 480, duration: 0.5 });
		trackAction('Dosing', 'table', sessionId.value, brand.value);
	}

	dosingTableActive.value = !dosingTableActive.value;
};
</script>
