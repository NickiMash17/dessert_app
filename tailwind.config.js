/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Changed from data-theme to class
  theme: {
    extend: {},
  },
  plugins: [],
}