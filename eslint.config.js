import js from '@eslint/js'
import globals from 'globals'

/** @type { import('eslint').Linter.Config[] } */
export default [
  { ignores: ['eslint.config.js'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'eol-last': ['error', 'always'],
      semi: ['error', 'never'],
      'no-extra-semi': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'quote-props': ['error', 'consistent-as-needed'],
    }
  }
]
