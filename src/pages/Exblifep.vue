<template>
	<main>
		<div class="flex flex-col pt-28">
			<img
				src="../assets/images/exblifep-logo.svg"
				alt="Exblifep Logo"
				class="logo"
			/>
			<div class="images-container">
				<img
					src="../assets/images/hallway-bed.png"
					alt="Hallway Bed"
					class="hallway-bed"
				/>
				<img
					src="../assets/images/resistance-and-recurrence.png"
					alt="Resistance and Recurrence"
					class="resistance-and-recurrence"
				/>
			</div>
			<div class="exblifep-description">
				<chevron-right />
				<h1 class="text-lg">EXBLIFEP® is where microbiological eradication* meets efficacy1</h1>
			</div>
		</div>
	</main>
</template>

<script setup>
import ChevronRight from '../icons/ChevronRight.vue';
</script>

<style scoped>
main {
	height: 98.5vh;
	background-image: url('../assets/images/textured-background.png');
}

.logo {
	padding-left: 74px;
	max-width: 250px;
}

.images-container {
	position: relative;
	max-width: 1046px;
}

.hallway-bed {
	object-fit: cover;
	-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
	mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
}

.resistance-and-recurrence {
	position: absolute;
	top: -190px;
	right: 20px;
	max-width: 644px;
}

.exblifep-description {
	display: flex;
	align-items: center;
	max-width: 1078px;
	padding: 50px 54px;
	border-top: 6px solid #1f17f6;
	transform: translateY(-6px);
}
</style>
