<template>
	<div class="overflow-y-scroll">
		<step-one
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
			@go-to-bottom-tab="onScrollToBottomTab"
		/>
		<step-two
			:sidebar-open="sidebarOpen"
			:scroll-into-view="scrollToBottomTab"
			@go-to-top-tab="onScrollToTopTab"
		/>
		<step-three
			:sidebarOpen="sidebarOpen"
			:scroll-into-view="scrollToTopTab"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import StepOne from '@/components/xyd/one-two-three/StepOne.vue';
import StepTwo from '@/components/xyd/one-two-three/StepTwo.vue';
import StepThree from '@/components/xyd/one-two-three/StepThree.vue';

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
