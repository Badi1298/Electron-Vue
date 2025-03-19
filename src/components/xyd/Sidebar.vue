<template>
	<div class="flex">
		<div class="flex items-center absolute z-20 top-[17%] w-[324px]">
			<div
				class="relative transform w-full"
				@click="toggleSidebar"
				@touchstart.prevent="toggleSidebar"
			>
				<button class="absolute top-1/2 -translate-y-1/2 -left-5 bg-[#ECECEC] text-white p-2.5 rounded-md">
					<SimpleChevronRightIcon
						v-if="open"
						class="w-6 h-6"
					/>
					<SimpleChevronLeftIcon
						v-else
						class="w-6 h-6"
					/>
				</button>
				<div
					ref="sidebarLine"
					class="bg-[#CDCDCD] absolute top-1/2 -translate-y-1/2 left-6 h-px w-full -z-10"
				></div>
			</div>
		</div>
		<aside
			ref="sidebar"
			class="z-10 flex flex-col mb-8 bg-white rounded-l-[20px] relative shadow-sidebar sidebar"
		>
			<div
				ref="sidebarContent"
				class="relative flex flex-col flex-1 justify-end mb-20"
			>
				<ul class="flex flex-col gap-y-4 px-4">
					<RouterLink :to="{ name: 'xyd-home', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/xyd'),
								'text-[#969696]': !isActive('/xyd'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/xyd')"
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
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Home</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'xyd-one-two-three', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/xyd/one-two-three'),
								'text-[#969696]': !isActive('/xyd/one-two-three'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/xyd/one-two-three')"
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
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">1, 2, 3</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'xyd-treatment', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/xyd/treatment'),
								'text-[#969696]': !isActive('/xyd/treatment'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/xyd/treatment')"
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
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Effective treatment</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'xyd-safety', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[100px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/xyd/safety'),
								'text-[#969696]': !isActive('/xyd/safety'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/xyd/safety')"
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
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Safety Profile</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'xyd-summary', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/xyd/summary'),
								'text-[#969696]': !isActive('/xyd/summary'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/xyd/summary')"
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
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Summary</p>
						</li>
					</RouterLink>
				</ul>
			</div>
			<transition
				name="fade"
				mode="out-in"
			>
				<div
					v-if="open"
					class="flex flex-col mx-4 py-2.5 border-t border-[#CDCDCD] min-h-[240px]"
				>
					<div class="grid grid-cols-2 gap-y-9 items-center">
						<RouterLink :to="{ name: 'xyd-references', query: { navigatedAwayBy: 'sidebar' } }">
							<img
								src="/src/assets/images/book.png"
								alt="Book Icon"
								class="w-8 h-8 justify-self-center"
								@click="referencesPopupOpen = true"
								@touchstart.prevent="referencesPopupOpen = true"
							/>
						</RouterLink>
						<RouterLink :to="{ name: 'xyd-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
							<img
								src="/src/assets/images/pi.png"
								alt="PI Icon"
								class="w-[30px] h-auto justify-self-center"
								@click="prescribingPopupOpen = true"
								@touchstart.prevent="prescribingPopupOpen = true"
							/>
						</RouterLink>
					</div>
					<div class="grid grid-cols-2 text-center">
						<RouterLink :to="{ name: 'xyd-references', query: { navigatedAwayBy: 'sidebar' } }">
							<p
								class="text-xl font-uni-grotesk text-[#969696]"
								@click="referencesPopupOpen = true"
								@touchstart.prevent="referencesPopupOpen = true"
							>
								References
							</p>
						</RouterLink>
						<RouterLink :to="{ name: 'xyd-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
							<p
								class="text-xl font-uni-grotesk text-[#969696]"
								@click="prescribingPopupOpen = true"
								@touchstart.prevent="prescribingPopupOpen = true"
							>
								Prescribing information
							</p>
						</RouterLink>
					</div>
					<img
						src="/src/assets/images/advanz-logo.png"
						alt="Advanz Logo"
						class="w-44 h-auto m-auto"
					/>
				</div>
				<div
					v-else
					class="flex flex-col pt-9 border-t border-[#CDCDCD] min-h-[300px] -mt-[60px]"
				>
					<div class="grid grid-cols-1 gap-y-9 items-center border-b border-[#CDCDCD] pb-9">
						<RouterLink :to="{ name: 'xyd-references', query: { navigatedAwayBy: 'sidebar' } }">
							<img
								src="/src/assets/images/book.png"
								alt="Book Icon"
								class="w-8 h-8 justify-self-center"
								@click="referencesPopupOpen = true"
								@touchstart.prevent="referencesPopupOpen = true"
							/>
						</RouterLink>
						<RouterLink :to="{ name: 'xyd-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
							<img
								src="/src/assets/images/pi.png"
								alt="PI Icon"
								class="w-[30px] h-auto justify-self-center"
								@click="prescribingPopupOpen = true"
								@touchstart.prevent="prescribingPopupOpen = true"
							/>
						</RouterLink>
					</div>
					<img
						src="/src/assets/images/advanz-logo-small.png"
						alt="Advanz Logo"
						class="w-12 h-auto m-auto"
					/>
				</div>
			</transition>
		</aside>
	</div>
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
const referencesPopupOpen = ref(false);
const prescribingPopupOpen = ref(false);

const sidebar = ref(null);
const sidebarLine = ref(null);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
	gsap.set(sidebar.value, {
		width: 350,
		marginTop: 32,
	});
});

const isActive = (currentRoute) => {
	return currentRoute === route.path;
};

const toggleSidebar = async () => {
	const tl = gsap.timeline();

	if (props.open) {
		// Collapse sidebar timeline
		tl.to(
			'.sidebar-text',
			{
				autoAlpha: 0,
				duration: 0.3,
			},
			0
		)
			.to(
				'.list-image',
				{
					left: '50%',
					xPercent: -50,
					duration: 0.5,
				},
				0.2
			)
			.to(
				sidebarLine.value,
				{
					opacity: 0,
					duration: 0.5,
				},
				0
			)
			.to(
				sidebar.value,
				{
					width: 118,
					clipPath: 'inset(15% 0 0 0)',
					ease: 'power4.inOut',
					duration: 0.5,
				},
				0
			);

		emit('update:open', false);
	} else {
		// Expand sidebar timeline
		tl.to(
			sidebar.value,
			{
				width: 350,
				marginTop: 32,
				clipPath: 'none',
				ease: 'power4.inOut',
				duration: 0.4,
			},
			0
		)
			.to(
				'.list-image',
				{
					left: 12,
					xPercent: 0,
					duration: 0.4,
				},
				0.1
			)
			.to(
				'.sidebar-text',
				{
					autoAlpha: 1,
					duration: 0.3,
				},
				0.2
			)
			.to(
				sidebarLine.value,
				{
					opacity: 1,
					duration: 0.3,
				},
				0.2
			);

		emit('update:open', true);
	}
};
</script>

<style scoped>
.sidebar {
	will-change: width, clip-path;
}
</style>
