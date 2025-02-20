import { createMemoryHistory, createRouter } from 'vue-router';

import { trackPageTime } from '../utils/analytics';

import Dosing from '../pages/Dosing.vue';
import Safety from '../pages/Safety.vue';
import Summary from '../pages/Summary.vue';
import Exblifep from '../pages/Exblifep.vue';
import Efficacy from '../pages/Efficacy.vue';

const routes = [
	{ path: '/', component: Exblifep, name: 'home' },
	{ path: '/efficacy', component: Efficacy, name: 'efficacy' },
	{ path: '/safety', component: Safety, name: 'safety' },
	{ path: '/dosing', component: Dosing, name: 'dosing' },
	{ path: '/summary', component: Summary, name: 'summary' },
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
	// handleRouteChange(from.name);
	next();
});

router.afterEach(() => {
	// startTime = performance.now();
});

export default router;
