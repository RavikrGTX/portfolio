/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 allows manual dark mode toggle
  content: [
    "./src/app//*.{js,ts,jsx,tsx}",
    "./src/components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}