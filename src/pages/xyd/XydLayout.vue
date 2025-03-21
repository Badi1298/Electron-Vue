<template>
	<main class="flex justify-between">
		<transition
			name="fade"
			mode="out-in"
		>
			<img
				v-if="sidebarOpen"
				src="/src/assets/images/xyd-logo.png"
				alt="Exblifep Logo"
				class="absolute top-14 right-6 z-50 mt-4 ml-4 w-[291px] h-auto"
			/>
			<img
				v-else
				src="/src/assets/images/xyd-logo-white.png"
				alt="Exblifep Logo"
				class="absolute top-14 right-6 z-50 mt-4 ml-4 w-[291px] h-auto"
			/>
		</transition>
		<div class="flex flex-1 flex-col h-screen">
			<router-view v-slot="{ Component }">
				<transition
					name="fade"
					mode="out-in"
				>
					<component
						:is="Component"
						:sidebarOpen="sidebarOpen"
					/>
				</transition>
			</router-view>
		</div>
		<Sidebar
			v-model:open="sidebarOpen"
			:class="{ '-ml-[350px]': isOneTwoThreeRoute }"
		/>
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import Sidebar from '@/components/xyd/Sidebar.vue';

const sidebarOpen = ref(true);

const route = useRoute();

const isOneTwoThreeRoute = computed(() => {
	return route.name === 'xyd-one-two-three';
});
</script>
