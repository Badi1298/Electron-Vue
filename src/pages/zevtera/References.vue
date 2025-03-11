<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="$router.go(-1)"
	>
		<div
			class="popup min-w-[1470px] px-16 py-12"
			@click.stop
		>
			<div class="flex justify-between items-center">
				<h1 class="text-[40px] font-bold">References</h1>
				<img
					src="/src/assets/images/close-button-purple.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer"
					@click="$router.go(-1)"
				/>
			</div>
			<ol class="text-xl font-uni-grotesk list-decimal list-inside mt-10 pb-40">
				<li class="flex gap-2"><span class="w-6 text-center">1.</span> Awad SS <span class="italic">et al. Clin Infect Dis</span>2014;59(1):51-61.</li>
				<li class="flex gap-2"><span class="w-6 text-center">2.</span> Crapis M <span class="italic">et al. J Chemother</span>2020:Sep EO.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">3.</span> Giacobbe D <span class="italic">et al. Expert Rev Anti-infect Ther</span>2019;17(9):689-698.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">4.</span> ZEVTERA® Summary of Product Characteristics (March 2024). Available at:
					https://www.medicines.org.uk/emc/product/9164/smpc.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">5.</span> Hebeisen P <span class="italic">et al. Antimicrob Agents Chemother</span>2001;45:825-836.
				</li>
				<li class="flex gap-2"><span class="w-6 text-center">6.</span> Scheeren T <span class="italic">et al. BMC Infect Dis</span>2019;19(1):195.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">7.</span> Pfaller MA <span class="italic">et al. Diagn Microbiol Infect Dis</span>2018;91(1):77-84.
				</li>
				<li class="flex gap-2"><span class="w-6 text-center">8.</span> Lupia T <span class="italic">et al. Antibiotics</span>2021;10(2):170.</li>
				<li class="flex gap-2"><span class="w-6 text-center">9.</span> Syed YY <span class="italic">et al. Drugs</span>2014;74(13):1523-1542.</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">10.</span> Torres A <span class="italic">et al. Int J Antimicrob Agents</span>2010;36(6):537-541.
				</li>
				<li class="flex gap-2">
					<span class="w-6 text-center">11.</span> Bäckström T <span class="italic">et al. Int J Antimicrob Agents</span>2010;36(6):537-541.
				</li>
			</ol>
		</div>
	</div>
</template>

<style scoped>
.popup {
	background: linear-gradient(180deg, #f6f7f9 36.47%, #ef7b00 123.64%);
}
</style>
