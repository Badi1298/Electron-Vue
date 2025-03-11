<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="router.go(-1)"
	>
		<div
			class="popup min-w-[1470px] px-16 py-12"
			@click.stop
		>
			<div class="flex justify-between items-center">
				<h1 class="text-[40px] font-bold">Prescribing Information</h1>
				<img
					src="/src/assets/images/close-button-purple.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer -mx-3.5"
					@click="router.go(-1)"
				/>
			</div>

			<img
				:src="PrescribingInformation"
				alt="Zevtera Prescribing Information"
				class="w-[1380px] mt-5"
			/>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import VLazyImage from 'v-lazy-image';

import PrescribingInformation from '@/assets/images/zevtera-prescribing.png';

const router = useRouter();
</script>

<style scoped>
.popup {
	background: linear-gradient(180deg, #f6f7f9 36.47%, #ef7b00 123.64%);
}
</style>
