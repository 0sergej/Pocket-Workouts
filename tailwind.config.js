/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
        screens: {
            phone: '900px',

            tablet: '1030px',

			laptop: '1280px',

			desktop: '1600px',
		},
	},
	plugins: [],
};
