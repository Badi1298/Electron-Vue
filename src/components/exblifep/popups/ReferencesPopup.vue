<template>
	<Popup
		v-bind:popup-open="popupOpen"
		v-on:update:popupOpen="emit('update:popupOpen', $event)"
		title="References"
	>
		<ol class="text-xl text-cool-grey pt-2.5">
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
	</Popup>
</template>

<script setup>
import Popup from '../Popup.vue';

defineProps({
	popupOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:popupOpen']);
</script>
