/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        primary: '#00FFAA', // This matches the green accent color
        surface: '#1A1A1A',
        surfaceLight: '#2A2A2A',
        textMain: '#FFFFFF',
        textMuted: '#A0A0A0'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}