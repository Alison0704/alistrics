/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme:{
    extend: {
      colors: {
        mainColor60: '#0E1142',
        mainColor30: '#DFC9A7', 
        mainColor10: '#FF9900', 
      },
    },
  },
  plugins: [],
}