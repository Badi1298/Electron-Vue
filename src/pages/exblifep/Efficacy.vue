<template>
	<div class="overflow-y-scroll">
		<EfficacyTopTab
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<EfficacyBottomTab
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToBottomTab"
			@go-to-top-tab="onScrollToTopTab"
		/>
	</div>
</template>

<script setup>
import { ref, toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import EfficacyTopTab from '../../components/exblifep/EfficacyTopTab.vue';
import EfficacyBottomTab from '../../components/exblifep/EfficacyBottomTab.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const scrollToTopTab = ref(false);
const scrollToBottomTab = ref(false);

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);

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
