<template>
	<div
		v-show="popupOpen"
		class="fixed top-0 left-0 h-screen w-screen bg-black/40 z-50 backdrop-blur-sm"
		@click="emit('update:popupOpen', false)"
	>
		<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-16 w-4/5 h-5/6 font-effra">
			<the-title>References</the-title>
			<img
				src="/src/assets/images/lime-green-border.png"
				alt="Lime Green Border"
				class="h-1.5 w-auto mt-5 mb-8"
			/>
			<ol class="text-xl text-cool-grey">
				<li>1. Kaye KS <span class="italic">et al. JAMA</span> 2022;328(13):1304-1314.</li>
				<li>2. Kiem S, Schentag JJ. Infect Chemother 2013;45(3):283-291.</li>
				<li>3. Kadry N <span class="italic">et al. Clin Infect Dis</span> 2023;76(10):1768-1775.</li>
				<li>4. Albin OR <span class="italic">et al. Clin Infect Dis</span> 2020;71(12):3033-3041.</li>
				<li>
					5. EXBLIFEP<sup>®</sup> Summary of Product Characteristics (March 2024). Available at:
					https://www.ema.europa.eu/en/documents/product-information/<br />exblifep-epar-product-information_en.pdf.
				</li>
				<li>6. Das S <span class="italic">et al. Antimicrob Agents Chemother</span> 2020;65(1):e01468-20.</li>
				<li>7. Rodvold KA <span class="italic">et al. Clin Pharmacokinet</span> 2011;50(10):637-664.</li>
				<li>8. Torres A <span class="italic">et al. Eur Respir J</span> 2017;50(3):1700582.</li>
				<li>9. Belley A <span class="italic">et al. J Glob Antimicrob Resist</span> 2021;25:93-101.</li>
				<li>
					10. European Medicines Agency. EXBLIFEP<sup>®</sup> Assessment report. Available at:
					https://www.ema.europa.eu/en/documents/assessment-report/exblifep-<br />epar-public-assessment-report_en.pdf. Accessed January 2025.
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import TheTitle from '../TheTitle.vue';

defineProps({
	popupOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:popupOpen']);
</script>
