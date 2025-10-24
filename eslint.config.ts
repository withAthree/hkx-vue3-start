import { defineConfig } from 'eslint/config';
import eslintConfig from 'hkx-eslint-config/typescript/vue';
import formatter from 'hkx-eslint-config/formatter';

export default defineConfig([
  ...eslintConfig,
  ...formatter,
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
]);
