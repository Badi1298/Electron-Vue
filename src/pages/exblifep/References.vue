<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="bg-white min-w-[1470px] min-h-[900px] px-16 py-12 font-effra"
			@click.stop
			@touchstart.stop
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
					@touchstart.prevent="router.go(-1)"
				/>
			</div>
			<div class="space-y-1 mt-8 text-xl text-cool-grey -ml-2">
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">1.</div>
					<div class="ml-2">Kaye KS <span class="italic">et al. JAMA </span>2022;328(13):1304-1314.</div>
				</div>
				<div class="flex max-h-6">
					<div class="w-[3ch] text-right">2.</div>
					<div class="ml-2">Kiem S, Schentag JJ. Infect Chemother 2013;45(3):283-291.</div>
				</div>
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">3.</div>
					<div class="ml-2">Kadry N <span class="italic">et al. Clin Infect Dis </span>2023;76(10):1768-1775.</div>
				</div>
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">4.</div>
					<div class="ml-2">Albin OR <span class="italic">et al. Clin Infect Dis </span>2020;71(12):3033-3041.</div>
				</div>
				<div class="flex leading-tight max-h-[46px]">
					<div class="w-[3ch] text-right">5.</div>
					<div class="ml-2">
						EXBLIFEP® Summary of Product Characteristics (March 2024). Available at: https://www.ema.europa.eu/en/documents/product-information/<br />exblifep-epar-product-information_en.pdf.
					</div>
				</div>
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">7.</div>
					<div class="ml-2">Rodvold KA <span class="italic">et al. Clin Pharmacokinet </span>2011;50(10):637-664.</div>
				</div>
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">8.</div>
					<div class="ml-2">Torres A <span class="italic">et al. Eur Respir J </span>2017;50(3):1700582.</div>
				</div>
				<div class="flex leading-tight max-h-[46px]">
					<div class="w-[3ch] text-right">9.</div>
					<div class="ml-2">
						European Medicines Agency. EXBLIFEP® Assessment report. Available at:
						https://www.ema.europa.eu/en/documents/assessment-report/exblifep-<br />epar-public-assessment-report_en.pdf. Accessed January 2025.
					</div>
				</div>
				<div class="flex items-start leading-none">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">10.</div>
					<div class="ml-2">Belley A <span class="italic">et al. J Glob Antimicrob Resist </span>2021;25:93-101.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import TheTitle from '@/components/exblifep/TheTitle.vue';

const router = useRouter();
</script>

<style scoped></style>
