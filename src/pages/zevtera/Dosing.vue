<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10">
		<div
			class="flex flex-col font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<img
				src="/src/assets/images/bullet-long.png"
				alt="Bullet Long"
				class="-ml-20 mt-3"
			/>
			<the-title>Dosing<sup>4</sup></the-title>
			<p class="text-2xl font-medium font-uni-grotesk mt-4">
				The recommended regimen for adult and paediatric patients with normal renal function is shown in the table.
			</p>
			<section class="pr-[60px] mt-6">
				<div class="flex items-center justify-between bg-primary-light-orange py-5 px-10 rounded-[20px]">
					<p class="text-2xl font-medium font-uni-grotesk text-charcoal">
						Dosage in adult and paediatric patients with normal renal function or mild renal impairment<br />
						(i.e., [CL<sub>CR</sub>] ≥ 50 mL/min)
					</p>
					<img
						src="/src/assets/images/chevron-right-charcoal.png"
						alt="Chevron Right"
						class="w-11 h-11 cursor-pointer"
					/>
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
						<div class="flex flex-col items-center font-uni-grotesk text-charcoal mx-6">
							<img
								src="/src/assets/images/Elderly.png"
								alt="Elderly"
								class="w-[99px]"
							/>
							<h5 class="mt-4 text-[23px] font-medium">Elderly</h5>
							<p class="text-center mt-1.5">
								<span class="font-medium">No dose adjustment</span> is necessary in elderly patients, except in cases of moderate to severe
								renal impairment<sup>4</sup>
							</p>
						</div>
						<div class="flex flex-col items-center font-uni-grotesk text-charcoal mx-6">
							<img
								src="/src/assets/images/Liver.png"
								alt="Elderly"
								class="w-[90px]"
							/>
							<h5 class="mt-4 text-[23px] font-medium">Hepatic Impairment</h5>
							<p class="text-center mt-1.5">
								<span class="font-medium">No dose adjustment</span> is considered necessary as there is no relevant hepatic metabolism<sup
									>3</sup
								>
								There is no experience in patients with hepatic impairement<sup>4</sup>
							</p>
						</div>
						<div class="flex flex-col items-center font-uni-grotesk text-charcoal mx-6">
							<img
								src="/src/assets/images/Scale.png"
								alt="Elderly"
								class="w-[70px]"
							/>
							<h5 class="mt-4 text-[23px] font-medium">Weight/BMI</h5>
							<p class="text-center mt-1.5"><span class="font-medium">No dose adjustment</span> based on body weight in adults<sup>4</sup></p>
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
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
import TheTitle from '@/components/zevtera/TheTitle.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
