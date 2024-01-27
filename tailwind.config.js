/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        'shblue': '#b1e0f0',
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Merriweather', 'serif']
			}
		}
  },
  plugins: []
};
