/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			'electric-blue': '#1F17F6',
			'dark-blue': '#002470',
			'cool-grey': '#646469',
			charcoal: '#2E2E2E',
			'primary-green': '#009656',
		},
		extend: {
			fontFamily: {
				effra: ['Effra', 'sans-serif'],
				gothic: ['Gothic', 'sans-serif'],
				'stag-sans': ['StagSans', 'sans-serif'],
				'uni-grotesk': ['UniGroteskStd', 'sans-serif'],
			},
			backgroundImage: {
				textured: "url('/src/assets/images/textured-background.png')",
				zevtera: "url('/src/assets/images/zevtera-bg.png')",
			},
			boxShadow: {
				'exblifep-card': '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
				sidebar: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
				explore: '0px 0px 4px 0px rgba(0, 0, 0, 0.08)',
				dark: '3px 4px 10px 2px rgba(0, 0, 0, 0.25)',
				'zevtera-efficacy-card':
					'-39px 347px 98px 0px rgba(0, 0, 0, 0.00), -25px 222px 89px 0px rgba(0, 0, 0, 0.01), -14px 125px 75px 0px rgba(0, 0, 0, 0.05), -6px 56px 56px 0px rgba(0, 0, 0, 0.09), -2px 14px 31px 0px rgba(0, 0, 0, 0.10)',
			},
		},
	},
	plugins: [],
};
