/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#35B972",
        dark: "#1C1F2D",
        blue: "#4a8ded",
        "primary-blue": "#0084FF",
        ash: "#6a6a6a",
        smoky: "#efefef"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      keyframes: {
        'to-right-from-left': {
          '49%': {transform: 'translate(100%)'},
          '50%': {opacity: '0', transform: 'translate(-100%)'},
          '51%': {opacity: '1'},
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        'to-right-from-left': 'to-right-from-left .4s ease-in-out',
        "wiggle": 'wiggle 2s ease-in-out infinite',
      }
    },
  },
  options: {
    safelist: [
      'animate-enter',
      'animate-leave',
      // Add other dynamic classes that should not be purged
    ],
  },
  plugins: [],
}