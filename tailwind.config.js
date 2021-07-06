module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // more settings @ `./assets/styles/index.css`
    colors: {
      background: '#FFFFFF',
      primary: '#11B0F8',
      secondary: '#A9B1BD',
      input: '#000000'
    },
    fontFamily: {
      default: ['Roboto']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
