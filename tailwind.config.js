const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
          colors: {
            orange: colors.orange,
          }
        }
      }
    // specify other options here
  };