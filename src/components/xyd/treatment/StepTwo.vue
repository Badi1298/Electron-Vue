<template>
	<div
		ref="middleTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<button
			class="absolute left-1/2 -translate-x-1/2 top-0 cursor-pointer z-20"
			@click="emit('goToTopTab')"
			@touchstart.prevent="emit('goToTopTab')"
		>
			<img
				src="/src/assets/images/page-vertical-up-green.png"
				alt="Down Button"
				class="w-[140px] h-[50px]"
			/>
		</button>
		<div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToTopTab')"
				@touchstart.prevent="emit('goToTopTab')"
			/>
			<img
				src="/src/assets/images/active-dot-purple.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/src/assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			/>
		</div>
		<div class="page-content flex flex-col justify-end font-effra relative max-w-[1446px]">
			<h1 class="text-[40px] font-bold text-primary-purple">
				Xydalba™ delivers long-lasting treatment without compromising<br />
				on early clinical response<sup>8</sup>
			</h1>

			<section class="grid grid-cols-[1fr_0.34fr] items-end gap-x-6 mt-7 pr-[60px]">
				<div>
					<div class="bg-primary-green py-7 rounded-t-[20px] pl-10 text-xl font-bold text-white">
						Xydalba™ provides clinical success at end-of-treatment similar to vancomycin/linezolid<sup>8</sup>
					</div>
					<div class="bg-white px-16 py-3.5 shadow-treatment w-[1016px] h-[587px]">
						<VLazyImage
							:src="Chart"
							alt="Chart 1"
						/>
						<p class="text-[10px] mt-2.5">
							DISCOVER 1: Absolute Difference (95% CI) Percentage Points [1.5 (-4.6 to 7.9)]<br />
							DISCOVER 2: Absolute Difference (95% CI) Percentage Points [-1.5 (-7.4, 4.6)]<br />
							Pooled Analysis: (95% CI) Percentage Points [-0.1 (-4.5 to 4.2)].
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-y-8 items-center justify-center px-3.5 border-2 border-primary-purple rounded-r-[20px] h-[587px]">
					<img
						src="/src/assets/images/clock-purple.png"
						alt="Clock"
						class="w-[90px] h-[90px] mx-auto"
					/>
					<p class="text-[22px] text-primary-purple text-center">
						81.4% of patients benefited from a ≥20% reduction in lesion size in 48-72 hours<sup>†9</sup>
					</p>
				</div>
			</section>
		</div>

		<footer class="pt-6">
			<the-footer class="footer mb-6 max-w-[1446px] pr-[60px]">
				*FDA primary endpoint, EMA secondary endpoint: Early clinical response at 48 and 72 hours of therapy was defined as both cessation of spread of
				the erythema associated with the infection (i.e. no increase in the surface area as compared with baseline) and a temperature of 37.6°C or lower
				at three consecutive readings performed 6 hours apart.<sup>8 †</sup>Without needing rescue antibacterial therapy<sup>9</sup>
			</the-footer>
			<ExploreAnother />
			<button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
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

import Chart from '@/assets/images/xyd-treatment-chart-2.svg';

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

const emit = defineEmits(['goToTopTab', 'goToBottomTab']);

const chart = ref(null);
const details = ref(null);
const middleTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			middleTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
