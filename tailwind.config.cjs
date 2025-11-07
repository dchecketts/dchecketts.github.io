module.exports = {
  content: [
    "./src/**/*.{html,md,js,liquid,njk}",
    "./pages/**/*.{html,md}",
    "./posts/**/*.{html,md}",
    "./**/*.html",
    "./**/*.md"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
