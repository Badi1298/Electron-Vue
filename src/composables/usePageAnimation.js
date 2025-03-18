import { onMounted, watch } from 'vue';
import { gsap } from 'gsap';

export function usePageAnimation(sidebarOpen) {
	const animate = (value) => {
		const marginLeft = value ? 124 : 224;
		const duration = value ? 0.4 : 0.5;

		gsap.to(['.page-content', '.footer'], {
			marginLeft,
			duration,
			ease: 'power4.inOut',
		});
	};

	onMounted(() => {
		const marginLeft = sidebarOpen.value ? 124 : 224;
		gsap.set(['.page-content', '.footer'], { marginLeft });
	});

	watch(sidebarOpen, (value) => {
		animate(value);
	});
}
