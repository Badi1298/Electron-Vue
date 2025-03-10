<template>
	<main class="flex justify-between bg-zevtera">
		<img
			src="/src/assets/images/zevtera-mabelio-logo.png"
			alt="Exblifep Logo"
			class="absolute top-14 right-4 z-50 mt-4 ml-4 w-[310px] h-auto"
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
import { RouterView } from 'vue-router';

import Sidebar from '../components/exblifep/Sidebar.vue';

const sidebarOpen = ref(true);
</script>
