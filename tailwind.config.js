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
        'very-light-grey': '#e0dada',
        'light-warm-grey': '#7b6e6e',
        'lighter-warm-grey': '#504747',
        'warm-grey': '#393232',
        'darker-warm-grey': '#221f1f',
        'aside-text-grey': '#cfc3c3',
      },
    },
  },
  plugins: [],
}

