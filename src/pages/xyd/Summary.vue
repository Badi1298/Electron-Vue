<template>
	<div class="flex">
		<img
			src="/src/assets/images/xyd-summary-bg.png"
			alt="Summary BG"
			class="h-screen w-fit rounded-r-[20px]"
		/>
		<div class="relative flex flex-col justify-center">
			<section class="flex-1 content-center ml-9">
				<div class="flex flex-col">
					<div class="flex items-center gap-x-10">
						<div class="relative flex items-center justify-center border-[3px] border-primary-purple rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-purple font-bold">1.</span>
							<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-purple to-primary-green rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">1 dose of Xydalba™</h2>
							<div class="flex gap-x-3 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple leading-tight">
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
						<div class="relative flex items-center justify-center border-[3px] border-primary-green rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-green font-bold">2.</span>
							<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-green to-primary-turqoise rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">2 weeks of effective treatment</h2>
							<div class="flex gap-x-3 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple leading-tight">
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
						<div class="relative flex items-center justify-center border-[3px] border-primary-turqoise rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-turqoise font-bold">3.</span>
							<div class="absolute -bottom-52 w-[3px] h-[190px] bg-gradient-to-b from-primary-turqoise to-primary-purple rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">30-minute infusion*1</h2>
							<div class="flex flex-col gap-y-6 absolute top-16 left-0 w-[900px] text-[20px] text-primary-purple leading-tight">
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-2"
									/>
									<p>
										No dose adjustment, except for severe renal impairment<sup>†</sup>, and for infants and children (weight-based)<sup
											>1</sup
										>
									</p>
								</div>
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-2"
									/>
									<p>
										No required TDM (Therapeutic Drug Monitoring), or blood cell, or CPK (creatinine phosphokinase) monitoring<sup>1</sup>
									</p>
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
				<div class="flex items-center gap-x-10 mt-[220px]">
					<img
						src="/src/assets/images/xyd-summary-bed.png"
						alt="Bed Icon"
						class="w-[100px] h-[100px]"
					/>
					<h2 class="text-[40px] text-primary-purple font-bold">Less days in hospital<sup>2,3</sup></h2>
				</div>
			</section>
			<footer class="flex justify-between absolute bottom-10 left-9 w-[1000px]">
				<the-footer
					>*Clinical success achieved in 84% of adult patients (ITT) on day 14 in the phase 3 study assessing a single dose<br />
					vs 2-dose regimen of dalbavacin in ABSSSI.<sup>4</sup> In paediatric patients, clinical cure rate similar across dalbavancin Single-Dose
					(97.4%)<br />
					and 2-dose regimen (97.3%).<sup>1 †</sup>Caution should be exercised when prescribing Xydalba™ to patients with moderate or severe<br />
					hepatic impairment (Child-Pugh Class B or C) as no data are available to determine the appropriate dosing in these<br />
					patients.<sup>1 ‡</sup>Clinical drug-drug interaction studies with dalbavancin have not been conducted.<sup>1</sup></the-footer
				>
				<explore-another-short />
			</footer>
		</div>
	</div>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnotherShort from '@/components/ExploreAnotherShort.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
