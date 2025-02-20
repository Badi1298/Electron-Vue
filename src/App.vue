<template>
	<main class="relative flex h-screen bg-textured gap-x-6 transition-all duration-300">
		<div class="absolute right-12 top-[76px] z-20">
			<ExblifepLogo />
		</div>

		<div
			:class="spacingLeft"
			class="flex flex-1 transition-all duration-300"
		>
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

	<div class="flex items-center fixed bottom-4 left-0 shadow-explore">
		<div class="w-28 bg-white px-4 flex justify-end shadow-explore rounded-r-[20px] py-2.5 relative z-20">
			<img
				src="/src/assets/images/chevron-left-green.png"
				alt="Chevron Left Green"
				class="w-[50px] h-[50px]"
			/>
		</div>
		<div class="flex items-center pr-[18px] pl-7 rounded-r-[20px] -translate-x-3 bg-[#195C68] h-[70px] relative z-10 text-white text-base shadow-explore">
			Explore another brand
		</div>
	</div>
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
