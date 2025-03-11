<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="$router.go(-1)"
	>
		<div
			class="popup"
			@click.stop
		>
			<h1>References</h1>
		</div>
	</div>
</template>

<style scoped>
.popup {
	background: linear-gradient(180deg, #f6f7f9 36.47%, #ef7b00 123.64%);
}
</style>
