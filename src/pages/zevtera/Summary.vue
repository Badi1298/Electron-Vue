<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 relative z-10 h-full">
		<div
			class="flex flex-col justify-end pb-8 font-effra transition-all duration-300"
			:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
		>
			<img
				src="/src/assets/images/zevtera-mabelio-logo.png"
				alt="Zevtera Mabelio Logo"
				class="w-[593px]"
			/>
			<div class="relative bg-transparent overflow-hidden mt-10 pr-[60px]">
				<!-- <img
					src="/src/assets/images/mabelio-bullet.png"
					alt="Mabelio Bullet"
					class="absolute top-0 left-0 z-10 -rotate-12 w-[1624px] opacity-15"
				/> -->
				<div class="grid grid-cols-3 z-20 gap-x-3">
					<img
						src="/src/assets/images/zevtera-summar-cards.png"
						alt="Summary Cards"
						class="absolute w-[1400px] h-[634px] -z-10"
					/>
					<div class="rounded-[20px] px-7 py-12">
						<h3 class="text-[40px] font-bold leading-tight">
							More for your<br />
							difficult to treat patients*
						</h3>
						<div class="flex flex-col gap-y-6">
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card mt-6"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Demonstrated efficacy</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Fast bactericidal activity</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Clinical efficacy from D3-4</h4>
							</div>
						</div>
					</div>
					<div class="rounded-[20px] px-7 py-12">
						<h3 class="text-[40px] font-bold leading-tight min-h-[150px]">
							More<br />
							pathogens covered
						</h3>
						<div class="flex flex-col gap-y-6">
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card mt-6"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Polymicrobial infections</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Empiric use</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Documented use</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">
									Adapted to your local<br />
									stewardship program
								</h4>
							</div>
						</div>
					</div>
					<div class="rounded-[20px] px-7 py-12">
						<h3 class="text-[40px] font-bold leading-tight min-h-[150px]">Less burden to treat your patients</h3>
						<div class="flex flex-col gap-y-6">
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card mt-6"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Less number of agents</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Less impact on gut flora</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Well tolerated</h4>
							</div>
							<div
								class="relative flex items-center gap-x-5 z-30 bg-primary-light-orange px-4 py-3 rounded-xl shadow-zevtera-efficacy-pathogens-card"
							>
								<img
									src="/src/assets/images/tick-icon-black.png"
									alt="Tick"
									class="w-[52px] h-auto"
								/>
								<h4 class="text-xl font-medium text-charcoal">Ease-of-use</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="flex flex-col gap-y-6">
			<the-footer
				class="transition-all duration-300 max-w-[1380px]"
				:class="[sidebarOpen ? 'ml-[124px]' : 'ml-[224px]']"
			>
				*Patients' groups who are severely ill or at high risk of poor outcomes
			</the-footer>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
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
