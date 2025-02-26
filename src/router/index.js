import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('../pages/Home.vue'),
		name: 'home',
		meta: { brand: 'NONE' },
	},
	{
		path: '/exblifep',
		component: () => import('../pages/ExblifepLayout.vue'),
		name: 'exblifep-index',
		children: [
			{
				path: '',
				component: () => import('../pages/Exblifep.vue'),
				name: 'exblifep-home',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/efficacy',
				component: () => import('../pages/Efficacy.vue'),
				name: 'efficacy',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/safety',
				component: () => import('../pages/Safety.vue'),
				name: 'safety',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/dosing',
				component: () => import('../pages/Dosing.vue'),
				name: 'dosing',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/summary',
				component: () => import('../pages/Summary.vue'),
				name: 'summary',
				meta: { brand: 'EXBLIFEP' },
			},
		],
	},
	{
		path: '/screensaver',
		component: () => import('../pages/Screensaver.vue'),
		name: 'screensaver',
		meta: { brand: 'NONE' },
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
