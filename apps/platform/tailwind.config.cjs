/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../packages/cc3-design/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('@cc3/design/tailwind.config.cjs')],
};
