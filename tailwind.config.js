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
			},
			boxShadow: {
				'exblifep-card': '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
				sidebar: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
				explore: '0px 0px 4px 0px rgba(0, 0, 0, 0.08)',
				dark: '3px 4px 10px 2px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
};
