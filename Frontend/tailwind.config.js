/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '.src/Pages/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}