/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.5, 0, 0.8, 1) infinite",}
    },
    backgroundImage: {
      'hero-nav': "url('/src/imgs/logoZe.png')",
    },
  },
  plugins: [],
}
