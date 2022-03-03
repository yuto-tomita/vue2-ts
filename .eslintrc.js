module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'first'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'space-in-parens': ['error', 'never'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-dangle': ['off'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    indent: ['off'],
    '@typescript-eslint/indent': ['error', 2],
    semi: ['off'],
    'no-prototype-builtins': ['off'],
    '@typescript-eslint/semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'no-extra-semi': ['error'],
    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'multilineDetection': 'brackets'
    }],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'no-restricted-syntax': [
      'warn',
      'TSEnumDeclaration',
      'ForInStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-undef': ['off'],
    'vue/valid-v-slot': ['off']
  }
}
