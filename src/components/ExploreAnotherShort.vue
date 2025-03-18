<template>
	<RouterLink :to="{ name: 'home', query: { navigatedAwayBy: 'explore-another-button' } }">
		<div class="flex items-center shadow-explore">
			<div class="flex items-center p-6 pr-[30px] rounded-l-[20px] bg-[#195C68] h-[70px] relative z-10 text-white text-base shadow-explore">
				Explore another brand
			</div>
			<div class="bg-white px-[17px] -translate-x-3 flex justify-end shadow-explore rounded-[20px] py-2.5 relative z-20">
				<img
					src="/src/assets/images/chevron-right-green.png"
					alt="Chevron Left Green"
					class="w-[50px] h-[50px]"
				/>
			</div>
		</div>
	</RouterLink>
</template>
