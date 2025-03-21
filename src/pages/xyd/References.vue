<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="bg-white min-w-[1470px] min-h-[850px] px-16 py-12 font-gothic"
			@click.stop
			@touchstart.stop
		>
			<div class="flex justify-between items-center">
				<h1 class="text-[32px] font-bold text-primary-purple">References</h1>
				<img
					src="/src/assets/images/close-button-purple.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer -mx-3.5"
					@click="router.go(-1)"
					@touchstart.prevent="router.go(-1)"
				/>
			</div>
			<ol class="text-xl list-decimal list-inside mt-10 pb-40">
				<li class="flex gap-2">
					<span class="w-6 text-center">1.</span> XYDALBA™ Summary of Product Characteristics (September 2024). Available at:
					https://www.ema.europa.eu/en/documents/<br />product-information/xydalba-epar-product-information_en.pdf.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">2.</span> Marcellusi A <span class="italic">et al. Expert Rev Pharmacoecon Outcomes Res</span>2019;4:1-19.
				</li>
				<li class="flex gap-2"><span class="w-6 text-center">3.</span> McCarthy MW <span class="italic">et al. Infect Dis Ther</span>2020;9:53-67.</li>
				<li class="flex gap-2"><span class="w-6 text-center">4.</span> Dunne MW <span class="italic">et al. Clin Infect Dis</span>2016;62:545-551.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">5.</span> Giorgobiani M <span class="italic">et al. Pediatr Infect Dis J</span>2023;42(3):199-205.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">6.</span> Eckmann C <span class="italic">et al. Int J Antimicrob Agents</span>2014;44:56-64.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">7.</span> Soriano A <span class="italic">et al. Expert Rev Anti-infect Ther</span>2020;18(5):415-422.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">8.</span> Boucher HW <span class="italic">et al. N Engl J Med</span>2014;370:2169-2179.
				</li>
				<li class="flex gap-2"><span class="w-6 text-center">9.</span> Dunne MW <span class="italic">et al. Drug Safety</span>2016;39:147-157.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">10.</span> Rappo U <span class="italic">et al. J Glob Antimicrob Resist</span>2019;17:60-65.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">11.</span> Streit JM <span class="italic">et al. Diagn Microbiol Infect Dis</span>2005;53(4):307-310.
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
