<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="flex flex-col justify-center">
			<div class="flex">
				<section class="flex flex-col pt-24 pr-3">
					<div class="relative">
						<VLazyImage
							:src="MabelioBullet"
							alt="Mabelio Bullet"
							class="w-[1070px] h-auto"
						/>
						<VLazyImage
							:src="StrikeFast"
							alt="Strike Fast"
							class="absolute bottom-0 right-16 w-[370px] h-auto object-cover"
						/>
					</div>
					<div class="px-24 pt-7">
						<h1 class="relative text-[40px] font-bold leading-tight text-charcoal font-effra">
							Allows the reduction of the number of<br />
							agents<sup>2</sup>, thanks to its expanded spectrum<br />
							of antimicrobial activity<sup>3</sup>
						</h1>
						<p class="font-uni-grotesk text-xl text-charcoal font-normal mt-9">
							ZEVTERA®/MABELIO® is indicated for the treatment of the following infections in term neonates,<br />
							infants, children, adolescents and adults:<sup>4</sup>
						</p>
						<ul>
							<li class="flex items-center mt-4 gap-x-5">
								<img
									src="/src/assets/images/list-polygon.png"
									alt="List Polygon"
									class="w-5 h-auto"
								/>
								<p class="font-uni-grotesk text-xl text-charcoal font-normal">
									Hospital-acquired pneumonia (HAP), excluding ventilator-associated pneumonia (VAP)
								</p>
							</li>
							<li class="flex items-center mt-4 gap-x-5">
								<img
									src="/src/assets/images/list-polygon.png"
									alt="List Polygon"
									class="w-5 h-auto"
								/>
								<p class="font-uni-grotesk text-xl text-charcoal font-normal">Community-acquired pneumonia (CAP)</p>
							</li>
						</ul>
					</div>
				</section>
				<section class="pt-36 -translate-x-1">
					<h2 class="text-[32px] font-bold text-charcoal font-effra">I'm interested in:</h2>
					<card
						title="Efficacy"
						subtitle="Demonstrated efficacy with clinical<br /> efficacy from Days 3-4, with more pathogens covered<sup>5-8</sup>"
						button-class="bg-[#009656] text-white"
						discover-more-path="/zevtera/efficacy"
						class="mt-9 font-uni-grotesk"
					>
						<img
							src="/src/assets/images/chart-dark-green.png"
							alt="Chart Dark Green"
							class="w-[106px] h-auto"
						/>
					</card>
					<card
						title="Safety"
						subtitle="ZEVTERA®/MABELIO® is<br /> generally well tolerated<sup>9</sup>"
						button-class="bg-[#FFA94D] text-black"
						discover-more-path="/zevtera/safety"
						class="mt-11 font-uni-grotesk"
					>
						<img
							src="/src/assets/images/shield-orange.png"
							alt="Shiled Orange"
							class="w-[106px] h-auto"
						/>
					</card>
					<card
						title="Dosing"
						subtitle="Ease-of-use dosing<sup>4</sup>"
						button-class="bg-[#FCC100] text-black"
						discover-more-path="/zevtera/dosing"
						class="mt-11 font-uni-grotesk"
					>
						<img
							src="/src/assets/images/bottle-golden.png"
							alt="Dosing Golden"
							class="w-[106px] h-auto"
						/>
					</card>
				</section>
			</div>
		</div>
		<footer>
			<the-footer class="transition-all duration-300 ml-24"
				>Zevtera® is the trademark in UK, Germany, Spain, Denmark, Norway, Sweden and Finland; Mabelio® is the trademark in France and Italy.
				Commercialised by ADVANZ PHARMA® in Germany, Spain, Italy,<br />
				France, and UK. Zevtera® / Mabelio ® is licensed to ADVANZ PHARMA by Basilea Pharmaceutica International AG.<br />©2025 ADVANZ
				PHARMA®</the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import StrikeFast from '@/assets/images/strike-fast.png';
import MabelioBullet from '@/assets/images/mabelio-bullet.png';

import VLazyImage from 'v-lazy-image';

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
