/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				green: '#97C292',
				yellow: '#FFDDAC',
				pink: '#FFB8B7',
				red: '#F4EEEE'
			}
		},
	},
	plugins: [],
}
