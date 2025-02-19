<template>
	<main class="flex h-screen bg-textured gap-x-12">
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
			<sidebar />
		</router-view>
	</main>
</template>

<script setup>
import { RouterView } from 'vue-router';

import Sidebar from './components/exblifep/Sidebar.vue';
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
