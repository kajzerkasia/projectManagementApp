/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Playpen Sans"', 'cursive'],
      },
      colors: {
        'almost-white': '#fceae4',
        'lighter-warm-gray': '#504747',
        'warm-gray': '#393232',
        'darker-warm-gray': '#221f1f',
        'aside-text-gray': '#cfc3c3',
      },
    },
  },
  plugins: [],
}

