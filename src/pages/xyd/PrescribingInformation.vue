<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="bg-white min-w-[1470px] px-16 py-12"
			@click.stop
			@touchstart.stop
		>
			<div class="flex justify-between items-center">
				<h1 class="text-[32px] text-primary-purple font-bold">XYDALBA™ prescribing information & AE Reporting</h1>
				<img
					src="/src/assets/images/close-button-purple.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer -mx-3.5"
					@click="router.go(-1)"
					@touchstart.prevent="router.go(-1)"
				/>
			</div>

			<VLazyImage
				:src="PrescribingInformation"
				alt="Zevtera Prescribing Information"
				class="w-[1284px] h-[864px] mt-5"
			/>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import VLazyImage from 'v-lazy-image';

import PrescribingInformation from '@/assets/images/prescribing-information-xyd.png';

const router = useRouter();
</script>
