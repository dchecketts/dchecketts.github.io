module.exports = {
    content: [
        // This tells Tailwind to scan the *final, built* HTML.
        './_site/**/*.html',
        './_site/*.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
  };