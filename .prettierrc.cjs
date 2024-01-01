// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
