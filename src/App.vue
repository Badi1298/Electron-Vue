<template>
	<main class="relative flex h-screen bg-textured gap-x-6 transition-all duration-300">
		<div class="absolute right-12 top-[76px] z-20">
			<ExblifepLogo />
		</div>

		<div class="flex flex-1 transition-all duration-300">
			<router-view v-slot="{ Component }">
				<!-- <transition name="fade"> -->
				<component
					:is="Component"
					:sidebar-open="sidebarOpen"
				/>
				<!-- </transition> -->
			</router-view>
		</div>

		<Sidebar v-model:open="sidebarOpen" />
	</main>
	<img
		src="./assets/images/background-green-circle.png"
		alt="Background Green Circle"
		class="fixed bottom-0 right-0 z-0 w-[756px] h-auto"
	/>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import ExblifepLogo from './icons/ExblifepLogo.vue';

import Sidebar from './components/exblifep/Sidebar.vue';

const sidebarOpen = ref(true);

const route = useRoute();

const isHome = computed(() => route.path === '/');
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
