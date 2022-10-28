/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        daisyBush: '#411998',
        sun: '#FCBD10',
        blackHaze: '#ECEDED',
        gullGray: '#9CA9B3',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
