<template>
	<div class="flex">
		<RouterLink :to="{ name: 'home', query: { navigatedAwayBy: 'explore-another-button' } }">
			<div class="flex items-center shadow-explore rounded-r-[20px] overflow-hidden font-futura">
				<div class="w-28 bg-white px-4 flex justify-end rounded-r-[20px] py-2.5 relative z-20">
					<img
						src="/src/assets/images/chevron-left-green.png"
						alt="Chevron Left Green"
						class="w-[50px] h-[50px]"
					/>
				</div>
				<div class="flex items-center pr-[18px] pl-7 rounded-r-[20px] -ml-3 bg-[#195C68] h-[70px] relative z-10 text-white text-base">
					Explore another brand
				</div>
			</div>
		</RouterLink>
	</div>
</template>
