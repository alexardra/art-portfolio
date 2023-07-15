/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '600px',
      lg: '768px',
      xl: '992px',
      '2xl': '1200px',
      '3xl': '1400px',
    },
    extend: {
      backgroundImage: {
        'star-icon': "url('/src/assets/star-icon.svg')",
        'dark-cover':
          "url('/src/assets/background-dark.svg')",
      },
      colors: {
        red: '#ff6666',
        dark: '#242424',
        light: '#f6f5ec',
      },
    },
  },
  plugins: [],
}
