/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme:{
    extend: {
      colors: {
        primary: '#201E43', // primary:
        secondary: '#134B70', // secondary:
        mytext:'#EEEEEE',//text colour
        accent:'#508C9B', //component colour
      },
    },
  },
  plugins: [],
}