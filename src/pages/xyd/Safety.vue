<template>
	<div class="overflow-y-scroll">
		<safety-top-tab
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<safety-bottom-tab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToBottomTab"
			@go-to-top-tab="onScrollToTopTab"
		/>
	</div>
</template>

<script setup>
import { ref, toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import SafetyTopTab from '@/components/xyd/safety/SafetyTopTab.vue';
import SafetyBottomTab from '@/components/xyd/safety/SafetyBottomTab.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);

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
