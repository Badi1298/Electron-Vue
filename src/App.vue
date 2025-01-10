<template>
	<main>
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
		</router-view>
	</main>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
