/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust to match your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        fold: '280px', // Samsung Fold and similar
        phablet: '540px', // Samsung A51/71, etc.
        nesthub: '1024px', // Google Nest Hub
        nesthubmax: '1280px', // Google Nest Hub Max
        surface: '1368px', // Surface Pro 7 width
        asusfold: '1920px', // ASUS Zenbook Fold (unfolded)
      },
      animation: {
        'scroll-up': 'scroll-up 30s linear infinite',
        'scroll-down': 'scroll-down 30s linear infinite',
        'scroll-left': 'scroll-left 20s linear infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
