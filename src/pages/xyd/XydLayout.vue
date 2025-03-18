<template>
	<main class="flex justify-between">
		<img
			src="/src/assets/images/xyd-logo.png"
			alt="Exblifep Logo"
			class="absolute top-14 right-6 z-50 mt-4 ml-4 w-[291px] h-auto"
		/>
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
		<Sidebar v-model:open="sidebarOpen" />
	</main>
</template>

<script setup>
import { ref } from 'vue';

import Sidebar from '@/components/xyd/Sidebar.vue';

const sidebarOpen = ref(true);
</script>
