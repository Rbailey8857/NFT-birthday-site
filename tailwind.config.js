/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0deg': { transform: 'rotate(0deg)' },
          '360deg': { transform: 'rotate(360deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    fontFamily: {
      messy: ["messy"]
    }
  },
  variants: {},
  plugins: [],
}

