<template>
	<div class="flex flex-col overflow-y-scroll">
		<dosing-top-tab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<dosing-bottom-tab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToBottomTab"
			@go-to-top-tab="onScrollToTopTab"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import DosingTopTab from '../components/exblifep/dosing/DosingTopTab.vue';
import DosingBottomTab from '../components/exblifep/dosing/DosingBottomTab.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const scrollToTopTab = ref(false);
const scrollToBottomTab = ref(false);

const onScrollToTopTab = () => {
	scrollToTopTab.value = true;
	setTimeout(() => {
		scrollToTopTab.value = false;
	}, 1000);
};

const onScrollToBottomTab = () => {
	scrollToBottomTab.value = true;
	setTimeout(() => {
		scrollToBottomTab.value = false;
	}, 1000);
};
</script>

<style scoped>
::-webkit-scrollbar {
	display: none;
}
</style>
