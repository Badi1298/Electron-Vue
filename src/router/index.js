import { createMemoryHistory, createRouter } from 'vue-router';

import Home from '../pages/Home.vue';
import Dosing from '../pages/Dosing.vue';
import Safety from '../pages/Safety.vue';
import Summary from '../pages/Summary.vue';
import Exblifep from '../pages/Exblifep.vue';
import Efficacy from '../pages/Efficacy.vue';
import ExblifepLayout from '../pages/ExblifepLayout.vue';

const routes = [
	{ path: '/', component: Home, name: 'home' },
	{
		path: '/exblifep',
		component: ExblifepLayout,
		name: 'exblifep-index',
		children: [
			{ path: '', component: Exblifep, name: 'exblifep' },
			{ path: '/efficacy', component: Efficacy, name: 'efficacy' },
			{ path: '/safety', component: Safety, name: 'safety' },
			{ path: '/dosing', component: Dosing, name: 'dosing' },
			{ path: '/summary', component: Summary, name: 'summary' },
		],
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
