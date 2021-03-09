module.exports = {
  root    : true,
  extends : [
    'plugin:vue/vue3-recommended',
    '../common/.eslintrc.js',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/html-quotes': [
      'error',
      'double',
    ],
  },
}
