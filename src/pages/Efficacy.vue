<template>
	<div class="overflow-y-scroll">
		<EfficacyTopTab
			:sidebarOpen="sidebarOpen"
			@go-to-bottom-tab="onGoToBottomTab"
		/>
		<EfficacyBottomTab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollIntoView"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import EfficacyTopTab from '../components/exblifep/EfficacyTopTab.vue';
import EfficacyBottomTab from '../components/exblifep/EfficacyBottomTab.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const scrollIntoView = ref(false);

const onGoToBottomTab = () => {
	scrollIntoView.value = true;
	setTimeout(() => {
		scrollIntoView.value = false;
	}, 1000);
};
</script>

<style scoped>
::-webkit-scrollbar {
	display: none;
}
</style>
