<template>
	<main class="flex justify-between">
		<div class="flex flex-1 flex-col h-screen">
			<router-view v-slot="{ Component }">
				<!-- <transition name="fade"> -->
				<component
					:is="Component"
					:sidebarOpen="sidebarOpen"
				/>
				<!-- </transition> -->
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
