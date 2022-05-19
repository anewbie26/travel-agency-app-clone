module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        bounce : "bounce 0.6s linear 3.5"
      }
    },
    fontFamily: {
      'hero': ["'Montserrat', sans-serif" ],
      'poppins': ["'Poppins', sans-serif"],
      'volk': ['Volkhov', 'serif'],
      'display': ['Oswald', ],
      'body': ['"Open Sans"',],
    }
  },
  plugins: [],
}
