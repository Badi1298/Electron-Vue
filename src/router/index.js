import { createMemoryHistory, createRouter } from 'vue-router';

import { trackPageTime } from '../utils/analytics';

import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';

const routes = [
	{ path: '/', component: Home, name: 'home' },
	{ path: '/about-us', component: AboutUs, name: 'about' },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

let startTime = performance.now();

const handleRouteChange = (pageName) => {
	const timeSpent = performance.now() - startTime;
	trackPageTime(pageName, timeSpent / 1000);
};

router.beforeEach((_, from, next) => {
	handleRouteChange(from.name);
	next();
});

router.afterEach(() => {
	startTime = performance.now();
});

export default router;
