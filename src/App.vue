<template>
	<main class="flex h-screen bg-textured gap-x-6 transition-all duration-300">
		<div
			:class="spacingLeft"
			class="flex-1 transition-all duration-300"
		>
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>

		<Sidebar v-model:open="sidebarOpen" />
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import Sidebar from './components/exblifep/Sidebar.vue';

const sidebarOpen = ref(true);

const route = useRoute();

const isHome = computed(() => route.path === '/');

const spacingLeft = computed(() => {
	if (isHome.value) return '';

	return sidebarOpen.value ? 'ml-[124px]' : 'ml-[224px]';
});
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
