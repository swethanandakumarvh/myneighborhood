/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF1F4',
          100: '#FFE2E8',
          200: '#FFB8C6',
          300: '#FF8AA3',
          400: '#FF527A',
          500: '#FF2E59',
          600: '#FF0F3D',
          700: '#DB0632',
          800: '#B7042A',
          900: '#8F0320',
        },
        dark: {
          50: '#EAEAEA',
          100: '#D5D5D5',
          200: '#ABABAB',
          300: '#808080',
          400: '#565656',
          500: '#2C2C2C',
          600: '#1E1E1E',
          700: '#141414',
          800: '#0A0A0B',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
  ],
}