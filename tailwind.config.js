/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './Assets/**/*.html', // Add paths to your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Add DaisyUI plugin here
  ],
}
