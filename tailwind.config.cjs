module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C658C',
        darkBg: '#0F1123'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
