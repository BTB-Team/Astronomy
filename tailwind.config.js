/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1366px',
    },
    extend: {},
  },
  plugins: [],
}