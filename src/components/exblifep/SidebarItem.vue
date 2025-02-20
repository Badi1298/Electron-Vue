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
			<p v-if="isOpen">{{ label }}</p>
		</li>
	</RouterLink>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'; // Make sure you import RouterLink

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
</script>
