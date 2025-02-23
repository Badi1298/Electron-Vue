<template>
	<div class="grid grid-cols-5 min-h-screen bg-textured">
		<router-view v-slot="{ Component }">
			<!-- <transition name="fade"> -->
			<component
				:is="Component"
				:sidebarOpen="sidebarOpen"
				class="col-span-4"
			/>
			<!-- </transition> -->
		</router-view>
		<Sidebar
			v-model:open="sidebarOpen"
			class="justify-self-end"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

import Sidebar from '../components/exblifep/Sidebar.vue';

const sidebarOpen = ref(true);
</script>
