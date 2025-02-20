<template>
	<div class="flex flex-col overflow-y-scroll">
		<EfficacyTopTab :sidebarOpen="sidebarOpen" />
		<EfficacyBottomTab :sidebarOpen="sidebarOpen" />
	</div>
</template>

<script setup>
import EfficacyTopTab from '../components/exblifep/EfficacyTopTab.vue';
import EfficacyBottomTab from '../components/exblifep/EfficacyBottomTab.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
