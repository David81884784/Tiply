/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

