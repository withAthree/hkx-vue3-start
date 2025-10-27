import { defineConfig } from 'eslint/config';
import eslintConfig from 'hkx-eslint-config/typescript/vue';
import formatter from 'hkx-eslint-config/formatter';
import { createRequire } from 'node:module';

const autoImport = createRequire(import.meta.url)('./.eslintrc-auto-import.json');

export default defineConfig([
  ...eslintConfig,
  ...formatter,
  {
    languageOptions: {
      globals: {
        ...autoImport.globals,
      },
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
]);
