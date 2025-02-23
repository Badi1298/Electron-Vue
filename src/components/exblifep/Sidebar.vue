<template>
	<aside
		:class="[open ? 'min-w-[350px] grid-rows-[0.5fr_3fr_1fr]' : 'min-w-[118px] mt-48']"
		class="z-10 grid my-8 bg-white rounded-l-[20px] pt-12 transition-all duration-300 relative shadow-sidebar"
	>
		<div v-if="open"></div>
		<ul class="flex flex-col gap-y-4 px-4 self-center">
			<SidebarItem
				v-for="item in routes"
				:key="item.name"
				:to="item.route"
				:icon="item.icon"
				:label="item.name"
				:is-open="open"
			/>
		</ul>
		<div>aaaaaa</div>

		<button
			class="absolute top-[140px] -left-5 transform bg-gray-700 text-white p-2.5 rounded-md bg-[#ECECEC]"
			:class="[open ? 'top-[140px]' : '-top-5']"
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
import { ref, markRaw } from 'vue';

import HomeIcon from '../../icons/HomeIcon.vue';
import SafetyIcon from '../../icons/SafetyIcon.vue';
import DosingIcon from '../../icons/DosingIcon.vue';
import SummaryIcon from '../../icons/SummaryIcon.vue';
import EfficacyIcon from '../../icons/EfficacyIcon.vue';
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

const routes = ref([
	{
		name: 'Home',
		icon: markRaw(HomeIcon),
		route: '/exblifep',
	},
	{
		name: 'Efficacy',
		icon: markRaw(EfficacyIcon),
		route: '/efficacy',
	},
	{
		name: 'Safety',
		icon: markRaw(SafetyIcon),
		route: '/safety',
	},
	{
		name: 'Dosing',
		icon: markRaw(DosingIcon),
		route: '/dosing',
	},
	{
		name: 'Summary',
		icon: markRaw(SummaryIcon),
		route: '/summary',
	},
]);

const toggleSidebar = () => {
	emit('update:open', !props.open);
};
</script>
