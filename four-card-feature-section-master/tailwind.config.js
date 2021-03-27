module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        body: '15px',
      },
      boxShadow: {
        card:
          '0  5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2);',
      },
      colors: {
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          veryDarkBlue: 'hsl(234, 12%, 34%)',
          grayishBlue: 'hsl(229, 6%, 66%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
