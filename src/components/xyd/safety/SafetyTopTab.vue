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
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			/>
		</div>
		<div class="page-content flex flex-col justify-end font-effra">
			<h1 class="text-[40px] font-bold text-primary-purple">
				Xydalba™ delivers two weeks of fast-acting, effective<br />
				treatment in one single dose, while remaining well-tolerated<sup>1</sup>
			</h1>

			<p class="text-2xl text-primary-purple mt-5">
				Analysis of 2,473 adult patients enrolled in Phase II/III trials receiving either the single or two-dose regimen of<br />
				Xydalba™ showed that the most common adverse reactions were generally of mild or moderate severity<sup>1</sup>
			</p>

			<section class="flex pt-11">
				<div class="flex flex-col justify-center px-16 h-[550px] max-w-[844px] bg-primary-purple/10">
					<p class="text-[28px] font-bold text-primary-purple">
						Most common adverse reactions occurring in >1%<br />
						of Xydalba™ patients (n=2,473)
					</p>
					<div class="flex mt-11 gap-x-24">
						<div class="flex flex-col gap-y-4 text-center">
							<img
								src="/src/assets/images/safety-pie-1.png"
								alt="Pie Chart"
								class="w-[156px] h-[156px]"
							/>
							<p class="text-[31px] leading-none text-primary-purple font-bold">Nausea</p>
						</div>
						<div class="flex flex-col gap-y-4 text-center">
							<img
								src="/src/assets/images/safety-pie-2.png"
								alt="Pie Chart"
								class="w-[156px] h-[156px]"
							/>
							<p class="text-[31px] leading-none text-primary-purple font-bold">Diarrhoea</p>
						</div>
						<div class="flex flex-col gap-y-4 text-center">
							<img
								src="/src/assets/images/safety-pie-3.png"
								alt="Pie Chart"
								class="w-[156px] h-[156px]"
							/>
							<p class="text-[31px] leading-none text-primary-purple font-bold">Headache</p>
						</div>
					</div>
				</div>
				<div>
					<img
						src="/src/assets/images/safety-doctor.png"
						alt="Safety Doctor"
						class="h-[550px]"
					/>
				</div>
			</section>
		</div>

		<footer class="relative pb-6 pt-8">
			<the-footer class="footer mb-4 pr-[60px]"
				>*Sponsor assessment. <sup>†</sup>mITT: randomised patients who received ≥1 dose of study drug and had a diagnosis of ABSSSI (or, in cohort 5,
				suspected/confirmed sepsis) not known to be caused exclusively by a gram-negative organism. <sup>†</sup>Vancomycin IV, oxacillin IV; or
				flucloxacillin IV<br />
				ABSSSI: Acute Bacterial Skin and Skin Structure Infections; EOT: End of treatment; mITT: Modified intent-to-treat; TOC: Test of cure; IV:
				Intravenous.</the-footer
			>
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

const emit = defineEmits(['goToBottomTab']);

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
