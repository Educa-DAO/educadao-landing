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
        lightGray: '#ECEDED',
        gullGray: '#9CA9B3',
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        't-md': '0px -5px 20px 0px rgb(0 0 0 / 30%)',
        't-lg':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        't-xl':
          '0 -20px 25px -5px rgb(0 0 0 / 10%), 0 -8px 10px -6px rgb(0 0 0 / 10%)',
        't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
