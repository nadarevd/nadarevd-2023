/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  
  theme: {
    extend: {
      colors: {
        primary: '#A371F7',
        secondary: '#A5D6FF',
        tertiary: '#20C0C0',
        lightsOff: '#010409',
      }
    },
  },
  plugins: [],
}