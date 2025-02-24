<template>
	<RouterLink :to="to">
		<li
			class="px-3 py-5 font-uni-grotesk text-xl leading-normal rounded-md flex gap-x-2.5 items-center"
			:class="{ 'justify-center': !isOpen, 'bg-[#EFEFEF] font-bold text-black': isActive, 'text-[#969696]': !isActive }"
		>
			<component
				:is="icon"
				class="w-[30px] h-[30px]"
			/>
			<p class="opacity-0 hidden sidebar-text">
				{{ label }}
			</p>
		</li>
	</RouterLink>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	icon: {
		type: Object,
		required: true,
	},
	label: {
		type: String,
		default: '',
	},
	isOpen: {
		type: Boolean,
		required: true,
	},
});

const route = useRoute();

const isActive = computed(() => route.path === props.to);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
});

watch(
	() => props.isOpen,
	(newValue) => {
		if (newValue) {
			gsap.to('.sidebar-text', {
				opacity: 1,
				display: 'block',
				duration: 0.5,
			});
		} else {
			gsap.to('.sidebar-text', {
				opacity: 0,
				display: 'none',
				duration: 0.5,
			});
		}
	}
);
</script>
