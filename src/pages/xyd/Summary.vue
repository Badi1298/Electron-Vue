<template>
	<div class="flex font-gothic">
		<img
			src="/src/assets/images/xyd-summary-bg.png"
			alt="Summary BG"
			class="h-screen w-fit"
		/>
		<div class="relative flex flex-col flex-1 px-9 pb-10">
			<section class="flex flex-col flex-1 justify-end mb-20">
				<div class="flex flex-col">
					<div class="flex items-center gap-x-10">
						<div class="relative flex items-center justify-center border-[3px] border-primary-purple rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-purple font-bold -tracking-[0.15em] mr-2.5">1.</span>
							<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-purple to-primary-green rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">1 dose of Xydalba<sup class="text-[60%]">™</sup></h2>
							<div class="flex gap-x-3 absolute top-16 left-0 w-[900px] text-primary-purple leading-tight">
								<img
									src="/src/assets/images/list-item-emblem-purple.png"
									alt="List Emblem"
									class="h-[15px] translate-y-[3px]"
								/>
								<p>
									A single dose of Xydalba™ provides a simple and full treatment course, freeing your<br />
									patients from the discomfort of daily infusions and potentially reduction of length of stay<sup
										class="text-[60%] -top-[0.55em]"
										>2,3</sup
									>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col mt-[72px]">
					<div class="flex items-center gap-x-10">
						<div class="relative flex items-center justify-center border-[3px] border-primary-green rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-green font-bold tracking-tighter">2.</span>
							<div class="absolute -bottom-16 w-[3px] h-[50px] bg-gradient-to-b from-primary-green to-primary-turqoise rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">2 weeks of effective treatment</h2>
							<div class="flex gap-x-6 absolute top-16 left-0 w-[900px] mt-3 text-primary-purple leading-tight">
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-[3px]"
									/>
									<p>
										Potent activity against key<br />
										Gram-positive pathogens,<br />
										including multi-resistant strains<sup class="text-[60%] -top-[0.55em]">11</sup>
									</p>
								</div>
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-[3px]"
									/>
									<p>
										Xydalba™ delivers long-lasting treatment without<br />
										compromising on early clinical response, and demonstrated<br />
										effectiveness in paediatric patients<sup class="text-[60%] -top-[0.55em]">5,8</sup>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col mt-[72px]">
					<div class="flex items-center gap-x-10">
						<div class="relative flex items-center justify-center border-[3px] border-primary-turqoise rounded-full w-[100px] h-[100px]">
							<span class="text-[52px] translate-x-1 text-primary-turqoise font-bold tracking-tighter">3.</span>
							<div class="absolute -bottom-40 w-[3px] h-[144px] bg-gradient-to-b from-primary-turqoise to-primary-purple rounded-full"></div>
						</div>
						<div class="relative flex flex-col">
							<h2 class="text-[40px] text-primary-purple font-bold">30-minute infusion<sup class="text-[60%]">*1</sup></h2>
							<div class="flex flex-col gap-y-6 absolute top-16 left-0 w-[900px] text-primary-purple leading-tight mt-3">
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-[3px]"
									/>
									<p>
										No dose adjustment, except for severe renal impairment<sup class="text-[60%] -top-[0.55em]">†</sup>, and for infants and
										children (weight-based)<sup class="text-[60%] -top-[0.55em]">1</sup>
									</p>
								</div>
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-[3px]"
									/>
									<p>
										No required TDM (Therapeutic Drug Monitoring), or blood cell, or CPK (creatinine phosphokinase)<br />
										monitoring<sup class="text-[60%] -top-[0.55em]">1</sup>
									</p>
								</div>
								<div class="flex gap-x-3">
									<img
										src="/src/assets/images/list-item-emblem-purple.png"
										alt="List Emblem"
										class="h-[15px] translate-y-[3px]"
									/>
									<p>Low potential for drug-drug interactions<sup class="text-[60%] -top-[0.55em]">‡1</sup></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-x-10 mt-[180px]">
					<img
						src="/src/assets/images/xyd-summary-bed.png"
						alt="Bed Icon"
						class="w-[100px] h-[100px]"
					/>
					<h2 class="text-[40px] text-primary-purple font-bold">Less days in hospital<sup class="text-[60%] -top-[0.6em]">2,3</sup></h2>
				</div>
			</section>
			<footer class="flex justify-between gap-x-16 items-center">
				<the-footer class="flex-1 font-gothic"
					>*Clinical success achieved in 84% of adult patients (ITT) on day 14 in the phase 3 study assessing a single dose vs 2-dose regimen of
					dalbavacin in ABSSSI.<sup>4</sup> In paediatric patients, clinical cure rate similar across dalbavancin Single-Dose (97.4%) and 2-dose
					regimen (97.3%).<sup>1 †</sup>Caution should be exercised when prescribing Xydalba™ to patients with moderate or severe hepatic impairment
					(Child-Pugh Class B or C) as no data are available to determine the appropriate dosing in these patients.<sup>1 ‡</sup>Clinical drug-drug
					interaction studies with dalbavancin have not been conducted.<sup>1</sup></the-footer
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
