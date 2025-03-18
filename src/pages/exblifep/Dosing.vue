<template>
	<div class="flex flex-col overflow-y-scroll">
		<dosing-top-tab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
	</div>
</template>

<script setup>
import { ref, toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import DosingTopTab from '../../components/exblifep/dosing/DosingTopTab.vue';

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
