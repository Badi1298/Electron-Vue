<template>
	<aside
		:class="open ? 'w-[350px]' : 'w-[118px]'"
		class="my-8 bg-white pt-12 px-4 rounded-l-[20px] transition-all duration-300 relative"
	>
		<!-- Toggle Button -->
		<button
			class="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
			@click="toggleSidebar"
		>
			<SimpleChevronRightIcon
				v-if="open"
				class="w-4 h-4"
			/>
			<SimpleChevronLeftIcon
				v-else
				class="w-4 h-4"
			/>
		</button>

		<!-- Sidebar Content -->
		<div
			class="overflow-hidden"
			v-if="open"
		>
			<ExblifepLogo />
			<p class="mt-4">Sidebar content here...</p>
		</div>
	</aside>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

import ExblifepLogo from '../../icons/ExblifepLogo.vue';
import SimpleChevronLeftIcon from '../../icons/SimpleChevronLeftIcon.vue';
import SimpleChevronRightIcon from '../../icons/SimpleChevronRightIcon.vue';

const props = defineProps({ open: Boolean });
const emit = defineEmits(['update:open']);

const toggleSidebar = () => {
	emit('update:open', !props.open);
};
</script>
