/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#832A2A',
      black: 'rgba(0, 0, 0, 0.81)',
      gray: '#E0E0E0',
      ['gray-opacity']: 'rgba(0, 0, 0, 0.33)',
      white: ' #FFFFFF',
      ['bg-button-gr']: '#B7B7B7',
      ['bg-search']: 'rgba(217, 217, 217, 0.58)',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
};
