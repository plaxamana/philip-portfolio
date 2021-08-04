const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
