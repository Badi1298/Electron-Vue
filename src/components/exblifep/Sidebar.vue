<template>
	<aside
		ref="sidebar"
		class="z-10 flex flex-col mb-8 bg-white rounded-l-[20px] transition-all duration-300 relative shadow-sidebar"
	>
		<div
			ref="logoContainer"
			class="inset-0"
		></div>
		<div class="relative flex flex-col flex-1 justify-center">
			<div class="flex items-center absolute top-0 w-full">
				<div
					class="relative transform w-full"
					@click="toggleSidebar"
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
						v-if="open"
						class="bg-[#CDCDCD] absolute top-1/2 -translate-y-1/2 left-6 h-px w-full -z-10"
					></div>
				</div>
			</div>

			<ul class="flex flex-col gap-y-4 px-4">
				<RouterLink :to="{ name: 'exblifep-home', query: { navigatedAwayBy: 'sidebar' } }">
					<li
						class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
						:class="{
							'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep'),
							'text-[#969696]': !isActive('/exblifep'),
						}"
					>
						<div class="list-image absolute top-1/2 -translate-y-1/2">
							<img
								v-if="isActive('/exblifep')"
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
				<RouterLink :to="{ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'sidebar' } }">
					<li
						class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
						:class="{
							'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/efficacy'),
							'text-[#969696]': !isActive('/exblifep/efficacy'),
						}"
					>
						<div class="list-image absolute top-1/2 -translate-y-1/2">
							<img
								v-if="isActive('/exblifep/efficacy')"
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
						<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Efficacy</p>
					</li>
				</RouterLink>
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'sidebar' } }">
					<li
						class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
						:class="{
							'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/safety'),
							'text-[#969696]': !isActive('/exblifep/safety'),
						}"
					>
						<div class="list-image absolute top-1/2 -translate-y-1/2">
							<img
								v-if="isActive('/exblifep/safety')"
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
						<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">Safety</p>
					</li>
				</RouterLink>
				<RouterLink :to="{ name: 'exblifep-dosing', query: { navigatedAwayBy: 'sidebar' } }">
					<li
						class="list__item relative px-3 py-5 min-h-[100px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
						:class="{
							'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/dosing'),
							'text-[#969696]': !isActive('/exblifep/dosing'),
						}"
					>
						<div class="list-image absolute top-1/2 -translate-y-1/2">
							<img
								v-if="isActive('/exblifep/dosing')"
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
						<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2">
							Dosing and<br />
							administration
						</p>
					</li>
				</RouterLink>
				<RouterLink :to="{ name: 'exblifep-summary', query: { navigatedAwayBy: 'sidebar' } }">
					<li
						class="list__item relative px-3 py-5 min-h-[70px] font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
						:class="{
							'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/summary'),
							'text-[#969696]': !isActive('/exblifep/summary'),
						}"
					>
						<div class="list-image absolute top-1/2 -translate-y-1/2">
							<img
								v-if="isActive('/exblifep/summary')"
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
		<div class="flex flex-col mx-4 py-2.5 border-t border-[#CDCDCD] min-h-[250px]">
			<div
				ref="bottomIcons"
				class="grid grid-cols-2 gap-y-9 items-center"
			>
				<RouterLink :to="{ name: 'exblifep-references', query: { navigatedAwayBy: 'sidebar' } }">
					<img
						src="/src/assets/images/book.png"
						alt="Book Icon"
						class="w-8 h-8 justify-self-center"
						@click="referencesPopupOpen = true"
					/>
				</RouterLink>
				<RouterLink :to="{ name: 'exblifep-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
					<img
						src="/src/assets/images/pi.png"
						alt="PI Icon"
						class="w-[30px] h-auto justify-self-center"
						@click="prescribingPopupOpen = true"
					/>
				</RouterLink>
			</div>
			<div
				ref="bottomText"
				class="grid grid-cols-2 text-center"
			>
				<RouterLink :to="{ name: 'exblifep-references', query: { navigatedAwayBy: 'sidebar' } }">
					<p
						class="text-xl font-uni-grotesk text-[#969696]"
						@click="referencesPopupOpen = true"
					>
						References
					</p>
				</RouterLink>
				<RouterLink :to="{ name: 'exblifep-prescribing-information', query: { navigatedAwayBy: 'sidebar' } }">
					<p
						class="text-xl font-uni-grotesk text-[#969696]"
						@click="prescribingPopupOpen = true"
					>
						Prescribing information
					</p>
				</RouterLink>
			</div>
			<img
				ref="advanzLargeLogo"
				src="/src/assets/images/advanz-logo.png"
				alt="Advanz Logo"
				class="w-44 h-auto m-auto"
			/>
			<img
				ref="advanzSmallLogo"
				src="/src/assets/images/advanz-logo-small.png"
				alt="Advanz Logo"
				class="w-12 h-auto m-auto"
			/>
		</div>
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
const referencesPopupOpen = ref(false);
const prescribingPopupOpen = ref(false);

const sidebar = ref(null);
const bottomText = ref(null);
const bottomIcons = ref(null);
const logoContainer = ref(null);
const advanzLargeLogo = ref(null);
const advanzSmallLogo = ref(null);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
	gsap.set(sidebar.value, {
		width: 350,
		marginTop: 32,
	});
	gsap.set(logoContainer.value, {
		height: 155,
	});
	gsap.set(advanzSmallLogo.value, {
		opacity: 0,
		display: 'none',
	});
	gsap.set('.list-image', {
		left: 12,
	});
});

const isActive = (currentRoute) => {
	return currentRoute === route.path;
};

const toggleSidebar = async () => {
	if (props.open) {
		gsap.to('.sidebar-text', {
			opacity: 0,
			display: 'none',
			duration: 0.3,
		});
		gsap.to(sidebar.value, {
			width: 118,
			marginTop: 176,
			duration: 0.3,
		});
		gsap.to('.list-image', {
			left: '50%',
			translateX: '-50%',
		}).delay(0.35);
		gsap.to(logoContainer.value, {
			height: 0,
		});

		emit('update:open', false);
	} else {
		emit('update:open', true);

		gsap.to(sidebar.value, {
			width: 350,
			marginTop: 32,
			duration: 0.3,
		});
		gsap.to(logoContainer.value, {
			height: 155,
			duration: 0.3,
		});
		gsap.to('.sidebar-text', {
			opacity: 1,
			display: 'block',
			duration: 0.3,
		}).delay(0.5);
		gsap.to('.list-image', {
			left: 12,
			translateX: 0,
		}).delay(0.3);
	}
};
</script>
