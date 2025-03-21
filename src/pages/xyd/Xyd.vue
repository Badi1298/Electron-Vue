<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="flex flex-col justify-center">
			<div class="page-content flex justify-between items-center max-w-[1386px]">
				<section class="flex flex-col pt-24">
					<img
						src="/src/assets/images/xyd-logo-white.png"
						alt="Xyd Logo"
						class="relative z-30 w-[454px] h-auto"
					/>
					<VLazyImage
						:src="Background"
						alt="Background"
						class="absolute top-0 left-0 -z-10"
					/>

					<div class="pt-7 mt-14">
						<h1 class="relative text-[75px] font-bold leading-tight text-white">One dose does it.*</h1>
						<p class="text-[32px] text-white font-normal">
							Xydalba™ delivers two weeks of effective<br />
							treatment in a single dose,<sup>1</sup> meaning your<br />
							patients can spend <span class="font-bold">less days in hospital.</span><sup>2,3</sup>
						</p>
					</div>
				</section>
				<section class="pt-36 -translate-x-1">
					<h2 class="text-[32px] font-bold text-white">I'm interested in:</h2>
					<div class="flex h-[186px] justify-between items-center bg-white shadow-exblifep-card rounded-[10px] px-8 min-w-[465px] font-gothic">
						<div class="flex flex-col h-full justify-center">
							<h3 class="font-bold text-[20px] leading-tight text-black">1,2,3</h3>
							<p class="text-sm leading-tight mt-1.5">
								1 dose of Xydalba™ gives your patients<br />
								2 weeks of effective treatment in a<br />
								single 30-minute infusion<sup>1</sup>
							</p>

							<RouterLink :to="{ name: 'xyd-one-two-three', query: { navigatedAwayBy: 'discover-more-button' } }">
								<button class="flex items-center justify-center py-3 mt-2 text-sm w-[150px] bg-[#982384] text-white">
									<span>Discover more</span>
								</button>
							</RouterLink>
						</div>
						<img
							src="/src/assets/images/123-icon-purple.png"
							alt="Chart Dark Green"
							class="w-[106px] h-auto"
						/>
					</div>
					<div class="flex h-[186px] justify-between items-center bg-white shadow-exblifep-card rounded-[10px] px-8 min-w-[465px] font-gothic mt-11">
						<div class="flex flex-col h-full justify-center">
							<h3 class="font-bold text-[20px] leading-tight text-black">Effective treatment</h3>
							<p class="text-sm leading-tight mt-1.5">
								Xydalba™ provided effective treatment<br />
								in adult and paediatric patientst<sup>t5</sup>
							</p>
							<RouterLink :to="{ name: 'xyd-treatment', query: { navigatedAwayBy: 'discover-more-button' } }">
								<button class="flex items-center justify-center py-3 mt-[18px] text-sm w-[150px] bg-[#276B88] text-white">
									<span>Discover more</span>
								</button>
							</RouterLink>
						</div>
						<img
							src="/src/assets/images/dosing-bottle-turqoise.png"
							alt="Shiled Orange"
							class="w-[106px] h-auto font-gothic"
						/>
					</div>
					<div
						class="flex h-[186px] justify-between items-center bg-white shadow-exblifep-card rounded-[10px] px-8 min-w-[465px] font-gothic mt-11 max-w-[465px]"
					>
						<div class="flex flex-col h-full justify-center">
							<h3 class="font-bold text-[20px] leading-tight text-black">Safety profile</h3>
							<p class="text-sm leading-tight mt-1.5">
								Well-tolerated safety profile, consistent<br />
								in both adult and paediatric patients<sup>1,5</sup>
							</p>
							<RouterLink :to="{ name: 'xyd-treatment', query: { navigatedAwayBy: 'discover-more-button' } }">
								<button class="flex items-center justify-center py-3 mt-[18px] text-sm w-[150px] bg-[#009656] text-white">
									<span>Discover more</span>
								</button>
							</RouterLink>
						</div>
						<img
							src="/src/assets/images/shield-green.png"
							alt="Dosing Golden"
							class="w-[106px] h-auto"
						/>
					</div>
				</section>
			</div>
		</div>
		<footer>
			<the-footer class="footer text-white"
				>*Clinical success achieved in 84% of adult patients (ITT) on day 14 in the phase 3 study assessing a single dose vs 2-dose regimen of
				dalbavancin in ABSSSI.<sup>4</sup><br />
				Clinical cure rate similar across dalbavancin Single-Dose (97.4%) and 2-dose regimen (97.3%).<sup>5</sup><br />
				Xydalba™ is indicated for the treatment of Acute Bacterial Skin and Skin Structure Infections (ABSSSI) in adults. Consideration should be given
				to official guidance on the appropriate use of antibacterial agents.<sup>1</sup><br />
				More information about this product may be requested from the local representative of the marketing authorisation holder. MAH for Europe: AbbVie
				Deutschland GmbH & Co. KG, Knollstraße, 67061 Ludwigshafen, Germany. MAH for UK: AbbVie Ltd., Maidenhead, SL6 4UB, UK.<br />
				Commercialised by ADVANZ PHARMA® in France, UK, Ireland, Luxembourg, Norway, Denmark, Finland, Sweden, Germany; local contacts are available in
				the Patient Information Leaflet (<span class="underline"
					>https://www.ema.europa.eu/en/documents/product-information/xydalba-epar-product-information_en.pdf</span
				>).<br />
				Xydalba™ is a trademark of Allergan Pharmaceuticals International Limited ©2025 ADVANZ PHARMA®</the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import { toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import VLazyImage from 'v-lazy-image';

import Background from '@/assets/images/xyd-background.png';

import Card from '@/components/Card.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
</script>
