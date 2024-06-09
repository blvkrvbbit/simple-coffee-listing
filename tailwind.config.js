/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      black: '#1b1d1f',
      'jet-black': '#111315',
      gray: '#6f757c',
      torqoise: '#bee3cc',
      white: '#fef7ee',
      yellow: '#f6c768',
      red: '#ed635d',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '1rem',
          '@screen sm': {
            maxWidth: '640px',
            margin: '0 auto',
            padding: '0',
          },
        },
      });
    },
  ],
};
