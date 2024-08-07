import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': eslintPluginReactRefresh,
      'simple-import-sort': pluginSimpleImportSort,
    },
  },
  {
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
)
