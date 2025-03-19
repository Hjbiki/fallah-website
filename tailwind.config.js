/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD54F',
        secondary: '#FF9800',
        accent: '#FFC107',
        dark: '#4A4A4A',
        light: '#F5F5F5',
        paper: '#F2E9D9',
        cardboard: '#D4A76A',
        blueprint: '#2C3E50',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'cardboard-texture': "url('/images/cardboard-texture.jpg')",
        'blueprint-pattern': "url('/images/blueprint-pattern.jpg')",
      },
    },
  },
  plugins: [],
} 