/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#e2a8b6",
        "lightpink": "#f4d6d7",
        "secondary": "#555",
        "primary": "#FCFCFC"
      },
    },
  },
  plugins: [
    daisyui, // Updated to use import
  ],
}


