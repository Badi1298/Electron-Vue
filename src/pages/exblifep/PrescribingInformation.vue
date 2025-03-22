<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="bg-white min-w-[1470px] px-16 py-12"
			@click.stop
			@touchstart.stop
		>
			<div class="flex justify-between items-center">
				<div>
					<the-title>EXBLIFEP<span class="font-normal">®</span> prescribing information</the-title>
					<img
						src="/src/assets/images/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[240px] my-5"
					/>
				</div>
				<img
					src="/src/assets/images/close-button.png"
					alt="Close Button"
					class="w-[60px] h-[60px] cursor-pointer -mx-4 -mt-10"
					@click="router.go(-1)"
					@touchstart.prevent="router.go(-1)"
				/>
			</div>

			<VLazyImage
				:src="PrescribingInformation"
				alt="Zevtera Prescribing Information"
				class="w-[1370px] h-[666px] mt-5"
			/>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import VLazyImage from 'v-lazy-image';

import TheTitle from '@/components/exblifep/TheTitle.vue';
import PrescribingInformation from '@/assets/images/prescribing-information-exblifep.png';

const router = useRouter();
</script>

<style scoped></style>
