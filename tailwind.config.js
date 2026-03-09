/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#003d7a', // Темно-синий основной
          600: '#002f5e',
          700: '#002142',
          800: '#001326',
          900: '#00050a',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb84d',
          400: '#ffa41a',
          500: '#ff8c00', // Оранжевый основной
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
      },
    },
  },
  plugins: [],
}
