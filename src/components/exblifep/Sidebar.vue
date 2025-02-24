<template>
	<aside
		:class="[open ? 'w-[350px] grid-rows-[0.5fr_3fr_1fr]' : 'w-[118px] mt-48']"
		class="z-10 grid my-8 bg-white rounded-l-[20px] pt-12 transition-all duration-300 relative shadow-sidebar"
	>
		<div v-if="open"></div>
		<ul class="flex flex-col gap-y-4 px-4 self-center">
			<RouterLink
				v-for="route in routes"
				:to="route.route"
				:key="route.name"
			>
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{ 'justify-center': !open, 'bg-[#EFEFEF] font-bold text-black': isActive(route), 'text-[#969696]': !isActive(route) }"
				>
					<img
						:src="isActive(route) ? route.iconActive : route.iconInactive"
						:alt="`${route.name}-icon`"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">
						{{ route.name }}
					</p>
				</li>
			</RouterLink>
		</ul>
		<div class="flex flex-col">
			<div
				class="grid items-center"
				:class="[open ? 'grid-cols-2' : 'grid-cols-1 gap-y-10']"
			>
				<img
					src="/src/assets/images/book.png"
					alt="Book Icon"
					class="w-8 h-8 justify-self-center"
				/>
				<img
					src="/src/assets/images/pi.png"
					alt="PI Icon"
					class="w-4 h-auto justify-self-center"
				/>
			</div>
			<div
				v-if="open"
				class="grid grid-cols-2 text-center"
			>
				<p class="text-xl font-uni-grotesk text-[#969696]">References</p>
				<p class="text-xl font-uni-grotesk text-[#969696]">Prescribing information</p>
			</div>
			<img
				:src="open ? '/src/assets/images/advanz-logo.png' : '/src/assets/images/advanz-logo-small.png'"
				alt="Advanz Logo"
				:class="[open ? 'w-44' : 'w-12']"
				class="h-auto m-auto"
			/>
		</div>

		<button
			class="absolute -left-5 transform bg-gray-700 text-white p-2.5 rounded-md bg-[#ECECEC]"
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
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

import SimpleChevronLeftIcon from '../../icons/SimpleChevronLeftIcon.vue';
import SimpleChevronRightIcon from '../../icons/SimpleChevronRightIcon.vue';

const props = defineProps({
	open: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:open']);

const route = useRoute();

const routes = ref([
	{
		name: 'Home',
		iconActive: '/src/assets/images/home-sidebar-full.png',
		iconInactive: '/src/assets/images/home-sidebar.png',
		route: '/exblifep',
	},
	{
		name: 'Efficacy',
		iconActive: '/src/assets/images/chart-sidebar-full.png',
		iconInactive: '/src/assets/images/chart-sidebar.png',
		route: '/efficacy',
	},
	{
		name: 'Safety',
		iconActive: '/src/assets/images/shield-sidebar-full.png',
		iconInactive: '/src/assets/images/shield-sidebar.png',
		route: '/safety',
	},
	{
		name: 'Dosing and administration',
		iconActive: '/src/assets/images/bottle-sidebar-full.png',
		iconInactive: '/src/assets/images/bottle-sidebar.png',
		route: '/dosing',
	},
	{
		name: 'Summary',
		iconActive: '/src/assets/images/summary-sidebar-full.png',
		iconInactive: '/src/assets/images/summary-sidebar.png',
		route: '/summary',
	},
]);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
});

const isActive = (currentRoute) => {
	return currentRoute.route === route.path;
};

const toggleSidebar = async () => {
	if (props.open) {
		gsap.set('.sidebar-text', {
			opacity: 0,
			display: 'none',
		});
		emit('update:open', false);
	} else {
		emit('update:open', true);
		gsap.to('.sidebar-text', {
			opacity: 1,
			display: 'block',
			duration: 0.4,
		}).delay(0.3);
	}
};
</script>
