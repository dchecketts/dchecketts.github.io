module.exports = {
    content: [
        // 1. Scan files directly in the src folder
        './src/*.{njk,md,html}',

        // 2. Scan files in all subfolders of src
        './src/**/*.{njk,md,html}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
  };