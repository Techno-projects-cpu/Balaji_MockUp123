/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        telangana: {
          gold: '#F9A825',     // Auspicious yellow/gold
          emerald: '#004D40',  // Deep trust-worthy green
          navy: '#1A237E',     // Academic dark blue
          accent: '#E65100'    // Deep orange (Sankranti/cultural)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
