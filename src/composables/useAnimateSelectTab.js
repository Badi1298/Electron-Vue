import { onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export function useAnimateSelectTab(sidebarOpen) {
	const positions = {
		open: '0px',
		closed: '250px',
	};

	const animateTab = (targetPosition) => {
		const tl = gsap.timeline();

		tl.to('.select-tab', {
			opacity: 0,
			duration: 0.3,
		})
			.set(
				'.select-tab',
				{
					right: targetPosition,
				},
				'+=0.2'
			)
			.to('.select-tab', {
				opacity: 1,
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
