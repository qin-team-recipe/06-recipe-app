/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        base: '0px -2px 4px rgba(0, 0, 0, 0.12)',
        smallInner: '0px 0px 4px 0px hsla(0, 0%, 0%, 0.5) inset',
        inner: '0px -60px 60px 0px hsla(0, 0%, 0%, 0.5) inset',
        heroInner: '0px -60px 16px -40px #FFF inset',
      },
    },
  },
  plugins: [require('tailwindcss-radix-colors')],
};
