/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      'aside-min-width': '24rem',
    },
    extend: {
      fontFamily: {
        main: ['"Playpen Sans"', 'cursive'],
      },
      colors: {
        'almost-white': '#fceae4',
        'the-lightest-grey': '#eee9e9',
        'very-light-grey': '#e0dada',
        'aside-text-grey': '#cfc3c3',
        'light-warm-grey': '#7b6e6e',
        'lighter-warm-grey': '#504747',
        'warm-grey': '#393232',
        'darker-warm-grey': '#221f1f',
        'almost-black': '#090909',
      },
    },
  },
  plugins: [],
}

