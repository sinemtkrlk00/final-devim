module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#f5e6d3',
        'cream-dark': '#e8d4bf',
        gold: '#d4af37',
        'gold-light': '#e6c547',
        black: '#1a1a1a',
        'black-light': '#2a2a2a',
      },
      fontFamily: {
        script: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [require('tailwindcss-backdrop-filter')],
};
