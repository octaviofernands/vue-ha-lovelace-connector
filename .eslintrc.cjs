/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/attribute-hyphenation': 'off'
  }
}
