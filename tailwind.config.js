/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#FC2016',
        gray: '#EAEAEA',
        yellow: '#FFE81E',
        spinner: '#E5E7EB',
        content: '#434343'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
