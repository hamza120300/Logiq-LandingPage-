/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        logiq: {
          navy: '#0B1C2E',
          deep: '#07151E',
          surface: '#0E2436',
          teal: '#0A6F7A',
          cyan: '#2BB8B3',
          mint: '#34D6BA',
          ice: '#EEF5F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
