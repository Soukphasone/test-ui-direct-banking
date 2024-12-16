/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'custom-1': '-1',    
        'custom-100': '100', 
        'custom-9999': '9999', 
      },
      screens: {
        xs: '480px', // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}

