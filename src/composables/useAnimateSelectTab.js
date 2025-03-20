import { onMounted, watch, computed } from 'vue';
import { gsap } from 'gsap';

export function useAnimateSelectTab(sidebarOpen) {
	const positions = {
		open: '0px',
		closed: '250px',
	};

	const duration = computed(() => (sidebarOpen.value ? 0.4 : 0.5));

	const animateTab = (targetPosition) => {
		gsap.to('.select-tab', {
			right: targetPosition,
			duration: duration.value,
			ease: 'power4.inOut',
		});
	};

	watch(sidebarOpen, (isOpen) => {
		const position = isOpen ? positions.open : positions.closed;
		animateTab(position);
	});

	onMounted(() => {
		const initialPosition = sidebarOpen.value ? positions.open : positions.closed;
		gsap.set('.select-tab', { right: initialPosition });
	});
}
