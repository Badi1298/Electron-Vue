import { createMemoryHistory, createRouter } from 'vue-router';

import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/about-us', component: AboutUs },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
