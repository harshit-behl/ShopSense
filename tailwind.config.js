/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
      }
    },
  },
  plugins: [],
}
