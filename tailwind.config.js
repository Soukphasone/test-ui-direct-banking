/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'custom-1': '-1',    // Custom negative z-index
        'custom-100': '100', // Custom high z-index
        'custom-9999': '9999', // Super high z-index
      },
    },
  },
  plugins: [],
}

