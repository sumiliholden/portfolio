/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#EDE8D9',
        'accent': '#2ECC71',
        'light-gray': '#E8E4D8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'neo-shadow': '8px 8px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
