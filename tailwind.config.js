/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        base: '0px -2px 4px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('tailwindcss-radix-colors'),
    function ({ addComponents }) {
      const newComponents = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      }
      addComponents(newComponents)
    },
  ],
}
