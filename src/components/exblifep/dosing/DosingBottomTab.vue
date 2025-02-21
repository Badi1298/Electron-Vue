<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen">
		<div
			class="flex flex-col justify-end font-effra transition-all duration-300 relative pb-6"
			:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
		>
			<div>
				<h1 class="text-[32px] font-bold text-electric-blue leading-normal max-w-[920px]">Reconstitution and dilution of EXBLIFEP<sup>®5</sup></h1>
				<img
					src="/src/assets/images/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-5"
				/>
			</div>
		</div>
		<footer class="relative pb-6">
			<the-footer
				class="transition-all duration-300 mb-4"
				:class="[sidebarOpen ? 'pl-[124px]' : 'pl-[224px]']"
				>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.5</the-footer
			>
			<ExploreAnother />
		</footer>
	</div>
</template>

<script setup>
import TheFooter from '../TheFooter.vue';
import ExploreAnother from '../ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
