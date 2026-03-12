/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#111827',
        accent: '#22C58E',
        light: '#F3F4F6',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}