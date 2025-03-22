<template>
	<main class="flex bg-textured">
		<img
			src="/src/assets/images/exblifep-logo-no-triangle.png"
			alt="Exblifep Logo"
			class="absolute top-20 right-10 z-50 w-[250px]"
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
		<transition
			name="fade"
			mode="out-in"
		>
			<img
				v-if="route.name === 'exblifep-home'"
				src="/src/assets/images/background-green-circle.png"
				alt="Green Circle"
				:class="{ 'opacity-0': route.name === 'exblifep-home' }"
				class="absolute w-[776px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else-if="route.name === 'exblifep-dosing'"
				src="/src/assets/images/background-circle-blue.png"
				alt=" Background Circle Blue"
				class="absolute w-[776px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else-if="route.name === 'exblifep-safety'"
				src="/src/assets/images/background-circle-grey.png"
				alt="Background Circle Yellow"
				class="absolute w-[776px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else
				src="/src/assets/images/background-green-circle.png"
				alt="Green Circle"
				class="absolute w-[776px] bottom-0 right-0 -z-10"
			/>
		</transition>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import Sidebar from '@/components/exblifep/Sidebar.vue';
import { onMounted } from 'vue';

const route = useRoute();

const sidebarOpen = ref(true);
</script>
