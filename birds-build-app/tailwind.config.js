/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'light-gray': '#F4F5F9',
        'dark-blue': '#2D3B87'
      },
      colors: {
        'light-gray': '#969DC3',
      },
      borderColor: {
        'light-border': '#E0E3EE'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
