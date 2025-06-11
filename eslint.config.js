import { createRequire } from 'node:module';
import antfu from '@antfu/eslint-config';

const require = createRequire(import.meta.url);
const autoImportEslintConfig = require('./.eslintrc-auto-import.json');

export default antfu({
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  typescript: true,
  jsonc: false,
  yaml: false,
  ignores: [
  ],
  lessOpinionated: true,
  // isInEditor: false  // 移除未使用的import
}, {
  languageOptions: {
    globals: {
      ...autoImportEslintConfig.globals,
    },
  },
}, {
  rules: {
    'style/semi': ['error', 'always'],
    'no-undef': 'off',
  },
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/operator-linebreak': ['error', 'before'],
  },
});
