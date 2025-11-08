module.exports = {
  content: [
    "./src/**/*.{html,md,js,liquid,njk,css}",
    "./src/_includes/**/*.{html,md,js}",
    "./src/posts/**/*.{html,md}",
    "./src/pages/**/*.{html,md}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
