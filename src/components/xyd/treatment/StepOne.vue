<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToMiddleTab')"
				@touchstart.prevent="emit('goToMiddleTab')"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			/>
		</div>
		<div class="page-content flex flex-col justify-end font-effra max-w-[1446px]">
			<h1 class="text-[40px] font-bold text-primary-purple">Xydalba™ demonstrated clinical success at Day 14-15<sup>8</sup></h1>

			<section class="grid grid-cols-[1fr_0.34fr] items-end gap-x-6 mt-7 pr-[60px]">
				<div>
					<div class="bg-primary-green py-7 rounded-t-[20px] pl-10 text-xl font-bold text-white">
						Xydalba™ provides clinical success at end-of-treatment similar to vancomycin/linezolid<sup>8</sup>
					</div>
					<div class="bg-white px-16 py-6 shadow-treatment">
						<VLazyImage
							:src="Chart"
							alt="Chart 1"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px] h-[587px]">
					<img
						src="/src/assets/images/efficacy-purple.png"
						alt="Clock"
						class="w-[90px] h-[90px] mx-auto"
					/>
					<p class="text-[22px] text-primary-purple text-center">
						Xydalba™ delivers the clinical success your patients need, with
						<span class="font-bold">91% achieving relief from symptoms at two weeks,</span> in patients infected with S. aureus (including MRSA)*8
					</p>
				</div>
			</section>
		</div>

		<footer class="relative pb-6 pt-8">
			<the-footer class="footer mb-4 max-w-[1446px] pr-[60px] font-gothic">
				>*EMA primary end-point: Clinical success at End-of-treatment visit (Day 14-15) in the ITT population defined as decreased lesion size (both
				length and width measurements), a temperature of ≤37.6°C, local signs of fluctuance and localized heat/warmth were absent; local signs of
				tenderness to palpation and swelling/induration were no worse than mild; and for patients with a wound infection, the severity of purulent
				drainage was improved and no worse than mild relative to baseline; no need for further systemic antibacterial treatment for the SSTI.<br />
				ITT: Intent To Treat.</the-footer
			>
			<ExploreAnother />
			<button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToMiddleTab')"
				@touchstart.prevent="emit('goToMiddleTab')"
			>
				<img
					src="/src/assets/images/page-vertical-down-green.png"
					alt="Down Button"
					class="w-[140px] h-[50px] cursor-pointer"
				/>
			</button>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

import VLazyImage from 'v-lazy-image';

import Chart from '@/assets/images/xyd-treatment-chart-1.svg';

import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
	scrollIntoView: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['goToMiddleTab', 'goToBottomTab']);

const topTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>
