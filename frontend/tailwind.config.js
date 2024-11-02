/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      alata: ['Alata', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      calli: ['Calligraffitti','sans-serif']
    },
    extend: {
      colors: {
        // card: '#8739F9',
        card: '#F9A826',
        other: '#0079C1',
        white: '#FFFFFF',
        gray: '#E1DFE9',
        blue: '#0079C1',
        back: '#F9F9F9',
        green: '#3AA335',
        pay: '#FFF0C8',
      },
    },
  },
  plugins: [],
};
