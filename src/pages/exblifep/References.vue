<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="router.go(-1)"
	>
		<div
			class="bg-white min-w-[1470px] min-h-[900px] px-16 py-12"
			@click.stop
		>
			<div class="flex justify-between items-center">
				<div>
					<the-title>References</the-title>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[136px] my-5"
					/>
				</div>
				<img
					src="/src/assets/images/close-button.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer -mx-4 -mt-10"
					@click="router.go(-1)"
				/>
			</div>
			<ol class="text-xl list-decimal text-cool-grey list-inside mt-8 pb-40 font-effra">
				<li class="flex gap-2"><span class="w-6 text-center">1.</span> Kaye KS <span class="italic"></span>et al. JAMA 2022;328(13):1304-1314.</li>
				<li class="flex gap-2"><span class="w-6 text-center">2.</span> Kiem S, Schentag JJ. Infect Chemother 2013;45(3):283-291.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">3.</span> Kadry N <span class="italic">et al. Clin Infect Dis</span> 2023;76(10):1768-1775.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">4.</span> Albin OR <span class="italic">et al. Clin Infect Dis</span> 2020;71(12):3033-3041.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">5.</span> EXBLIFEP® Summary of Product Characteristics (March 2024). Available at:
					https://www.ema.europa.eu/en/documents/product-information/<br />exblifep-epar-product-information_en.pdf.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">6.</span> Das S <span class="italic">et al. Antimicrob Agents Chemother</span> 2020;65(1):e01468-20.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">7.</span> Rodvold KA <span class="italic">et al. Clin Pharmacokinet</span> 2011;50(10):637-664.
				</li>
				<li class="flex gap-2"><span class="w-6 text-center">8.</span> Torres A <span class="italic">et al. Eur Respir J</span> 2017;50(3):1700582.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">9.</span> European Medicines Agency. EXBLIFEP® Assessment report. Available at:
					https://www.ema.europa.eu/en/documents/assessment-report/exblifep-<br />epar-public-assessment-report_en.pdf. Accessed January 2025.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">10.</span> Belley A <span class="italic">et al. J Glob Antimicrob Resist</span> 2021;25:93-101.
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import TheTitle from '@/components/exblifep/TheTitle.vue';

const router = useRouter();
</script>

<style scoped></style>
