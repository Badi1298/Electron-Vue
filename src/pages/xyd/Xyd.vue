<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="flex flex-col justify-center">
			<div
				class="flex justify-between items-center transition-all duration-300"
				:class="[sidebarOpen ? 'mr-[60px] ml-[124px]' : 'mr-[120px] ml-[224px]']"
			>
				<section class="flex flex-col pt-24">
					<img
						src="/src/assets/images/xyd-logo-white.png"
						alt="Mabelio Bullet"
						class="relative z-30 w-[454px] h-auto"
					/>
					<img
						src="/src/assets/images/xyd-background.png"
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
					<card
						title="1, 2, 3"
						subtitle="1 dose of Xydalba™ gives your patients<br /> 2 weeks of effective treatment in a<br /> single 30-minute infusion<sup>1</sup>"
						button-class="bg-[#982384] text-white"
						discover-more-path="/xyd/one-two-three"
						class="mt-9 min-w-[465px]"
					>
						<img
							src="/src/assets/images/123-icon-purple.png"
							alt="Chart Dark Green"
							class="w-[106px] h-auto"
						/>
					</card>
					<card
						title="Effective paediatric treatment"
						subtitle="Xydalba™ provided effective treatment<br /> in adult and paediatric patientst<sup>5</sup>"
						button-class="bg-[#276B88] text-white"
						discover-more-path="/xyd/treatment"
						class="mt-11 max-w-[465px]"
					>
						<img
							src="/src/assets/images/dosing-bottle-turqoise.png"
							alt="Shiled Orange"
							class="w-[106px] h-auto"
						/>
					</card>
					<card
						title="Safety profile"
						subtitle="Well-tolerated safety profile, consistent in both adult and paediatric patients<sup>1,5</sup>"
						button-class="bg-[#009656] text-white"
						discover-more-path="/xyd/safety"
						class="mt-11 max-w-[465px]"
					>
						<img
							src="/src/assets/images/shield-green.png"
							alt="Dosing Golden"
							class="w-[106px] h-auto"
						/>
					</card>
				</section>
			</div>
		</div>
		<footer>
			<the-footer
				class="transition-all duration-300 text-white"
				:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
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
import Card from '@/components/Card.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
