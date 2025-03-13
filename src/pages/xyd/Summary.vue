<template>
	<div class="flex items-center">
		<img
			src="/src/assets/images/xyd-summary-bg.png"
			alt="Summary BG"
			class="h-screen w-fit rounded-r-[20px]"
		/>
		<div class="ml-9">
			<div class="flex flex-col">
				<div class="flex items-center gap-x-10">
					<div class="relative flex items-center justify-center border-[3px] border-primary-purple rounded-full w-[90px] h-[90px]">
						<span class="text-[50px] translate-x-1 text-primary-purple font-bold">1.</span>
						<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-purple to-primary-green rounded-full"></div>
					</div>
					<div class="relative flex flex-col">
						<h2 class="text-[40px] text-primary-purple font-bold">1 dose of Xydalba™</h2>
						<div class="flex gap-x-3 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple">
							<img
								src="/src/assets/images/list-item-emblem-purple.png"
								alt="List Emblem"
								class="h-[15px] translate-y-2"
							/>
							<p>
								A single dose of Xydalba™ provides a simple and full treatment course, freeing your<br />
								patients from the discomfort of daily infusions and potentially reduction of length of stay<sup>2,3</sup>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col mt-[72px]">
				<div class="flex items-center gap-x-10">
					<div class="relative flex items-center justify-center border-[3px] border-primary-green rounded-full w-[90px] h-[90px]">
						<span class="text-[50px] translate-x-1 text-primary-green font-bold">2.</span>
						<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-green to-primary-turqoise rounded-full"></div>
					</div>
					<div class="relative flex flex-col">
						<h2 class="text-[40px] text-primary-purple font-bold">2 weeks of effective treatment</h2>
						<div class="flex gap-x-3 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple">
							<div class="flex gap-x-3">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-2"
								/>
								<p>
									Potent activity against key<br />
									Gram-positive pathogens, including multi-resistant strains<sup>11</sup>
								</p>
							</div>
							<div class="flex gap-x-3">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-2"
								/>
								<p>
									Xydalba™ delivers long-lasting treatment without<br />
									compromising on early clinical response, and demonstrated effectiveness in paediatric patients<sup>5,8</sup>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col mt-[72px]">
				<div class="flex items-center gap-x-10">
					<div class="relative flex items-center justify-center border-[3px] border-primary-turqoise rounded-full w-[90px] h-[90px]">
						<span class="text-[50px] translate-x-1 text-primary-turqoise font-bold">3.</span>
						<div class="absolute -bottom-52 w-[3px] h-[190px] bg-gradient-to-b from-primary-turqoise to-primary-purple rounded-full"></div>
					</div>
					<div class="relative flex flex-col">
						<h2 class="text-[40px] text-primary-purple font-bold">30-minute infusion*1</h2>
						<div class="flex flex-col gap-y-6 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple">
							<div class="flex gap-x-3">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-2"
								/>
								<p>
									No dose adjustment, except for severe renal impairment<sup>†</sup>, and for infants and children (weight-based)<sup>1</sup>
								</p>
							</div>
							<div class="flex gap-x-3">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-2"
								/>
								<p>No required TDM (Therapeutic Drug Monitoring), or blood cell, or CPK (creatinine phosphokinase) monitoring<sup>1</sup></p>
							</div>
							<div class="flex gap-x-3">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-2"
								/>
								<p>Low potential for drug-drug interactions<sup>‡1</sup></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
