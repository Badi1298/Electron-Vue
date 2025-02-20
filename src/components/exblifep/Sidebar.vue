<template>
	<aside
		:class="open ? 'w-[350px]' : 'w-[118px]'"
		class="grid grid-rows-[0.5fr_3fr_1fr] my-8 bg-white rounded-l-[20px] pt-12 transition-all duration-300 relative shadow-sidebar"
	>
		<div class="flex justify-center">
			<ExblifepLogo />
		</div>
		<ul class="flex flex-col gap-y-4 px-4 self-center">
			<SidebarItem>Home</SidebarItem>
			<SidebarItem>Efficacy</SidebarItem>
			<SidebarItem>Safety</SidebarItem>
			<SidebarItem>Dosing and administration</SidebarItem>
			<SidebarItem>Summary</SidebarItem>
		</ul>
		<div>aaaaaa</div>

		<button
			class="absolute top-[140px] -left-5 transform bg-gray-700 text-white p-2.5 rounded-md bg-[#ECECEC]"
			@click="toggleSidebar"
		>
			<SimpleChevronRightIcon
				v-if="open"
				class="w-6 h-6"
			/>
			<SimpleChevronLeftIcon
				v-else
				class="w-6 h-6"
			/>
		</button>
	</aside>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

import ExblifepLogo from '../../icons/ExblifepLogo.vue';
import SimpleChevronLeftIcon from '../../icons/SimpleChevronLeftIcon.vue';
import SimpleChevronRightIcon from '../../icons/SimpleChevronRightIcon.vue';

import SidebarItem from './SidebarItem.vue';

const props = defineProps({
	open: {
		type: Boolean,
		required: true,
	},
});
const emit = defineEmits(['update:open']);

const toggleSidebar = () => {
	emit('update:open', !props.open);
};
</script>
