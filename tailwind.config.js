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
        mainColor60: '#201E43',
        mainColor30: '#134B70', 
        mainColor10: '#508C9B', 
      },
    },
  },
  plugins: [],
}