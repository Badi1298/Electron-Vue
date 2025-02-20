<template>
	<div class="pt-20 font-effra">
		<div class="absolute left-[50px] top-1/2 -translate-y-1/2 flex flex-col gap-y-6">
			<img
				src="../assets/images/active-dot.png"
				alt="Active Dot"
				class="h-5 w-auto cursor-pointer"
			/>
			<img
				src="../assets/images/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-auto cursor-pointer"
			/>
		</div>
		<div class="flex justify-between mr-12">
			<h1 class="text-[32px] text-electric-blue font-medium leading-normal max-w-[920px]">
				EXBLIFEP® achieved superiority in overall treatment success* in patients with cUTIs vs piperacillin/tazobactam<sup>1</sup>
			</h1>
			<div class="flex gap-x-3.5 items-center text-[#646469] text-2xl font-medium">
				<img
					src="../assets/images/touch.png"
					alt="Touch to select tab"
					class="w-[70px] h-[70px]"
				/>
				<span>Select a tab</span>
			</div>
		</div>
		<img
			src="../assets/images/lime-green-border.png"
			alt="Lime Green Border"
			class="h-1.5 w-auto my-5"
		/>
		<p class="max-w-[1300px] text-xl leading-normal">
			In ALLIUM, EXBLIFEP® demonstrated both non-inferiority and statistical superiority in overall treatment success (a composite endpoint of clinical
			cure and microbiological eradication) at Day 14 vs piperacillin/tazobactam in patients in the PAS with cUTIs caused by gram-negative pathogens1
		</p>

		<div class="flex pt-5 gap-x-[22px]">
			<div class="flex flex-col w-[1034px]">
				<div class="grid grid-cols-[1fr_2fr] gap-x-2">
					<button
						class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-300"
						:class="[activeTab === Tabs.OVERALL_SUCCESS ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
						@click="activeTab = Tabs.OVERALL_SUCCESS"
					>
						Overall success*: Day 14
					</button>
					<button
						class="py-2.5 rounded-t-[20px] text-2xl transition-colors duration-300"
						:class="[activeTab === Tabs.CLINICAL_CURE ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4]']"
						@click="activeTab = Tabs.CLINICAL_CURE"
					>
						Clinical cure & Microbiological eradication: Day 14
					</button>
				</div>
				<img
					v-if="activeTab === Tabs.OVERALL_SUCCESS"
					src="../assets/images/chart-a.svg"
					alt="Chart A"
				/>
				<img
					v-if="activeTab === Tabs.CLINICAL_CURE"
					src="../assets/images/chart-b.png"
					alt="Chart B"
				/>
			</div>
			<div class="bg-[#00EAFF]">aaaa</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const Tabs = Object.freeze({
	OVERALL_SUCCESS: 1,
	CLINICAL_CURE: 2,
});

const activeTab = ref(Tabs.OVERALL_SUCCESS);
</script>
