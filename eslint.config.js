import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    settings: {
      "react": {
        "version": "detect "
      }
    },
    files: ['**/*.{jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "@typescript-eslint/consistent-type-dfinitions": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    }
  }
]);
