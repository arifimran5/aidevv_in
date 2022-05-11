module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary_text: '#787878',
        accent_green: '#A7FBB5',
        accent_yellow: '#F2B100',
        accent_blue: '#A7BFFB',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'Verdana', 'sans-serif'],
      },
    },
    screens: {
      sm: '600px',
      md: '720px',
      lg: '845px',
      xl: '1124px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
  },
  plugins: [],
};
