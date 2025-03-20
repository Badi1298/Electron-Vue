import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/pages/GetStarted.vue'),
		name: 'get-started',
		meta: { brand: 'NONE' },
	},
	{
		path: '/home',
		component: () => import('@/pages/Home.vue'),
		name: 'home',
		meta: { brand: 'NONE' },
	},
	{
		path: '/exblifep',
		component: () => import('@/pages/exblifep/ExblifepLayout.vue'),
		name: 'exblifep-index',
		children: [
			{
				path: '',
				component: () => import('@/pages/exblifep/Exblifep.vue'),
				name: 'exblifep-home',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: 'efficacy',
				component: () => import('@/pages/exblifep/Efficacy.vue'),
				name: 'exblifep-efficacy',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: 'safety',
				component: () => import('@/pages/exblifep/Safety.vue'),
				name: 'exblifep-safety',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: 'dosing',
				component: () => import('@/pages/exblifep/Dosing.vue'),
				name: 'exblifep-dosing',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: 'summary',
				component: () => import('@/pages/exblifep/Summary.vue'),
				name: 'exblifep-summary',
				meta: { brand: 'EXBLIFEP' },
			},
		],
	},
	{
		path: '/zevtera',
		component: () => import('@/pages/zevtera/ZevteraLayout.vue'),
		name: 'zevtera-index',
		children: [
			{
				path: '',
				component: () => import('@/pages/zevtera/Zevtera.vue'),
				name: 'zevtera-home',
				meta: { brand: 'ZEVTERA' },
			},
			{
				path: 'efficacy',
				component: () => import('@/pages/zevtera/Efficacy.vue'),
				name: 'zevtera-efficacy',
				meta: { brand: 'ZEVTERA' },
			},
			{
				path: 'safety',
				component: () => import('@/pages/zevtera/Safety.vue'),
				name: 'zevtera-safety',
				meta: { brand: 'ZEVTERA' },
			},
			{
				path: 'dosing',
				component: () => import('@/pages/zevtera/Dosing.vue'),
				name: 'zevtera-dosing',
				meta: { brand: 'ZEVTERA' },
			},
			{
				path: 'summary',
				component: () => import('@/pages/zevtera/Summary.vue'),
				name: 'zevtera-summary',
				meta: { brand: 'ZEVTERA' },
			},
		],
	},
	{
		path: '/xyd',
		component: () => import('@/pages/xyd/XydLayout.vue'),
		name: 'xyd-index',
		children: [
			{
				path: '',
				component: () => import('@/pages/xyd/Xyd.vue'),
				name: 'xyd-home',
				meta: { brand: 'XYD' },
			},
			{
				path: 'one-two-three',
				component: () => import('@/pages/xyd/OneTwoThree.vue'),
				name: 'xyd-one-two-three',
				meta: { brand: 'XYD' },
			},
			{
				path: 'treatment',
				component: () => import('@/pages/xyd/Treatment.vue'),
				name: 'xyd-treatment',
				meta: { brand: 'XYD' },
			},
			{
				path: 'safety',
				component: () => import('@/pages/xyd/Safety.vue'),
				name: 'xyd-safety',
				meta: { brand: 'XYD' },
			},
			{
				path: 'summary',
				component: () => import('@/pages/xyd/Summary.vue'),
				name: 'xyd-summary',
				meta: { brand: 'XYD' },
			},
		],
	},
	{
		path: '/exblifep-references',
		component: () => import('@/pages/exblifep/References.vue'),
		name: 'exblifep-references',
		meta: { brand: 'EXBLIFEP' },
	},
	{
		path: '/exblifep-prescribing-information',
		component: () => import('@/pages/exblifep/PrescribingInformation.vue'),
		name: 'exblifep-prescribing-information',
		meta: { brand: 'EXBLIFEP' },
	},
	{
		path: '/zevtera-references',
		component: () => import('@/pages/zevtera/References.vue'),
		name: 'zevtera-references',
		meta: { brand: 'ZEVTERA' },
	},
	{
		path: '/zevtera-prescribing-information',
		component: () => import('@/pages/zevtera/PrescribingInformation.vue'),
		name: 'zevtera-prescribing-information',
		meta: { brand: 'ZEVTERA' },
	},
	{
		path: '/xyd-references',
		component: () => import('@/pages/xyd/References.vue'),
		name: 'xyd-references',
		meta: { brand: 'XYD' },
	},
	{
		path: '/xyd-prescribing-information',
		component: () => import('@/pages/xyd/PrescribingInformation.vue'),
		name: 'xyd-prescribing-information',
		meta: { brand: 'XYD' },
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
