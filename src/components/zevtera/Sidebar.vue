<template>
	<aside
		:class="[open ? 'w-[350px] grid-rows-[0.5fr_3fr_1fr]' : 'w-[118px] mt-48']"
		class="z-10 grid my-8 bg-white rounded-l-[20px] pt-12 transition-all duration-300 relative shadow-sidebar"
	>
		<div v-if="open"></div>
		<ul class="flex flex-col gap-y-4 px-4 self-center">
			<RouterLink :to="{ name: 'zevtera-home', query: { navigatedAwayBy: 'sidebar' } }">
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{ 'justify-center': !open, 'bg-[#EFEFEF] font-bold text-black': isActive('/zevtera'), 'text-[#969696]': !isActive('/zevtera') }"
				>
					<img
						v-if="isActive('/zevtera')"
						src="/src/assets/images/home-sidebar-full.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<img
						v-else
						src="/src/assets/images/home-sidebar.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">Home</p>
				</li>
			</RouterLink>
			<RouterLink :to="{ name: 'zevtera-efficacy', query: { navigatedAwayBy: 'sidebar' } }">
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{
						'justify-center': !open,
						'bg-[#EFEFEF] font-bold text-black': isActive('/zevtera/efficacy'),
						'text-[#969696]': !isActive('/zevtera/efficacy'),
					}"
				>
					<img
						v-if="isActive('/zevtera/efficacy')"
						src="/src/assets/images/chart-sidebar-full.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<img
						v-else
						src="/src/assets/images/chart-sidebar.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">Efficacy</p>
				</li>
			</RouterLink>
			<RouterLink :to="{ name: 'zevtera-safety', query: { navigatedAwayBy: 'sidebar' } }">
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{
						'justify-center': !open,
						'bg-[#EFEFEF] font-bold text-black': isActive('/zevtera/safety'),
						'text-[#969696]': !isActive('/zevtera/safety'),
					}"
				>
					<img
						v-if="isActive('/zevtera/safety')"
						src="/src/assets/images/shield-sidebar-full.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<img
						v-else
						src="/src/assets/images/shield-sidebar.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">Safety</p>
				</li>
			</RouterLink>
			<RouterLink :to="{ name: 'zevtera-dosing', query: { navigatedAwayBy: 'sidebar' } }">
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{
						'justify-center': !open,
						'bg-[#EFEFEF] font-bold text-black': isActive('/zevtera/dosing'),
						'text-[#969696]': !isActive('/zevtera/dosing'),
					}"
				>
					<img
						v-if="isActive('/zevtera/dosing')"
						src="/src/assets/images/bottle-sidebar-full.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<img
						v-else
						src="/src/assets/images/bottle-sidebar.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">Dosing</p>
				</li>
			</RouterLink>
			<RouterLink :to="{ name: 'zevtera-summary', query: { navigatedAwayBy: 'sidebar' } }">
				<li
					class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
					:class="{
						'justify-center': !open,
						'bg-[#EFEFEF] font-bold text-black': isActive('/zevtera/summary'),
						'text-[#969696]': !isActive('/zevtera/summary'),
					}"
				>
					<img
						v-if="isActive('/zevtera/summary')"
						src="/src/assets/images/summary-sidebar-full.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<img
						v-else
						src="/src/assets/images/summary-sidebar.png"
						alt="Home Icon"
						class="w-[30px] h-[30px]"
					/>
					<p class="opacity-0 hidden sidebar-text">Summary</p>
				</li>
			</RouterLink>
		</ul>
		<div class="flex flex-col">
			<div
				class="grid items-center"
				:class="[open ? 'grid-cols-2' : 'grid-cols-1 gap-y-10']"
			>
				<RouterLink :to="{ name: 'zevtera-references', query: { navigatedAwayBy: 'sidebar' } }">
					<img
						src="/src/assets/images/book.png"
						alt="Book Icon"
						class="w-8 h-8 justify-self-center"
						@click="referencesPopupOpen = true"
					/>
				</RouterLink>
				<RouterLink :to="{ name: 'zevtera-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
					<img
						src="/src/assets/images/pi.png"
						alt="PI Icon"
						class="w-4 h-auto justify-self-center"
						@click="prescribingPopupOpen = true"
					/>
				</RouterLink>
			</div>
			<div
				v-if="open"
				class="grid grid-cols-2 text-center"
			>
				<RouterLink :to="{ name: 'zevtera-references', query: { navigatedAwayBy: 'sidebar' } }">
					<p
						class="text-xl font-uni-grotesk text-[#969696]"
						@click="referencesPopupOpen = true"
					>
						References
					</p>
				</RouterLink>
				<RouterLink :to="{ name: 'zevtera-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
					<p
						class="text-xl font-uni-grotesk text-[#969696]"
						@click="prescribingPopupOpen = true"
					>
						Prescribing information
					</p>
				</RouterLink>
			</div>
			<img
				v-if="open"
				src="/src/assets/images/advanz-logo.png"
				alt="Advanz Logo"
				:class="[open ? 'w-44' : 'w-12']"
				class="h-auto m-auto"
			/>
			<img
				v-else
				src="/src/assets/images/advanz-logo-small.png"
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

import SimpleChevronLeftIcon from '@/icons/SimpleChevronLeftIcon.vue';
import SimpleChevronRightIcon from '@/icons/SimpleChevronRightIcon.vue';

const props = defineProps({
	open: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:open']);

const route = useRoute();
const referencesPopupOpen = ref(false);
const prescribingPopupOpen = ref(false);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
});

const isActive = (currentRoute) => {
	return currentRoute === route.path;
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
