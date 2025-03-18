<template>
	<div class="overflow-y-scroll">
		<step-one
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-middle-tab="onScrollToMiddleTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<step-two
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToMiddleTab"
			@go-to-top-tab="onScrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<step-three
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToBottomTab"
			@goToTopTab="onScrollToTopTab"
			@goToMiddleTab="onScrollToMiddleTab"
		/>
	</div>
</template>

<script setup>
import { ref, toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import StepOne from '@/components/xyd/treatment/StepOne.vue';
import StepTwo from '@/components/xyd/treatment/StepTwo.vue';
import StepThree from '@/components/xyd/treatment/StepThree.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);

const scrollToTopTab = ref(false);
const scrollToMiddleTab = ref(false);
const scrollToBottomTab = ref(false);

const onScrollToTopTab = () => {
	scrollToTopTab.value = true;
	setTimeout(() => {
		scrollToTopTab.value = false;
	}, 1000);
};

const onScrollToMiddleTab = () => {
	scrollToMiddleTab.value = true;
	setTimeout(() => {
		scrollToMiddleTab.value = false;
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
