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
						class="relative flex items-center justify-between bg-[#FCC100] py-5 px-10 rounded-[20px] z-50 cursor-pointer"
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
							class="w-[45px] object-contain transition-all duration-500"
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
				<div class="flex flex-col gap-y-14 mt-8 bg-white rounded-[30px] px-10 pt-14 min-h-[500px] shadow-zevtera-efficacy-pathogens-card">
					<h4 class="text-[40px] text-center leading-tight font-uni-grotesk">
						<span class="font-bold text-charcoal">Ease of use</span> in patients with comorbidities
					</h4>
					<div class="grid grid-cols-[1fr_1fr_1fr] gap-x-[52px]">
						<div class="relative flex flex-col min-h-[242px] items-center font-uni-grotesk text-charcoal">
							<div class="min-h-[111px]">
								<img
									src="/src/assets/images/Elderly.png"
									alt="Elderly"
									class="w-[125px]"
								/>
							</div>
							<h5 class="mt-4 text-[30px] font-medium">Elderly</h5>
							<p class="text-center mt-1.5 text-xl leading-tight">
								<span class="font-medium">No dose adjustment</span> is necessary in elderly patients, except in cases of moderate to severe
								renal impairment<sup class="text-[50%] -top-[1em]">4</sup>
							</p>
							<div class="w-px h-[127px] -right-8 top-1/2 -translate-y-1/2 bg-[#CECECE] absolute"></div>
						</div>
						<div class="relative flex flex-col min-h-[242px] items-center font-uni-grotesk text-charcoal -mr-10">
							<div class="flex items-center min-h-[111px]">
								<img
									src="/src/assets/images/Liver.png"
									alt="Liver"
									class="w-[114px]"
								/>
							</div>
							<h5 class="mt-4 text-[30px] font-medium">Hepatic Impairment</h5>
							<p class="text-center mt-1.5 text-xl leading-tight">
								<span class="font-medium">No dose adjustment</span> is considered necessary<br />
								as there is no relevant hepatic metabolism<sup class="text-[50%] -top-[1em]">3</sup><br />
								There is no experience in patients with hepatic impairement<sup class="text-[50%] -top-[1em]">4</sup>
							</p>
							<div class="w-px h-[127px] -right-4 top-1/2 -translate-y-1/2 bg-[#CECECE] absolute"></div>
						</div>
						<div class="flex flex-col items-center min-h-[242px] font-uni-grotesk text-charcoal">
							<div class="flex items-center min-h-[111px]">
								<img
									src="/src/assets/images/Scale.png"
									alt="Elderly"
									class="w-[90px]"
								/>
							</div>
							<h5 class="mt-4 text-[30px] font-medium">Weight/BMI</h5>
							<p class="text-center mt-1.5 text-xl leading-tight">
								<span class="font-medium">No dose adjustment</span> based on body<br />
								weight in adults<sup class="text-[50%] -top-[1em]">4</sup>
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
