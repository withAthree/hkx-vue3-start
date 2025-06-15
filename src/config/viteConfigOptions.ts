import type { Options } from 'unplugin-auto-import/types';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export const autoImportConfig: Options = {
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
  ],
  imports: ['vue', 'vue-router', {
    'naive-ui': [
      'useDialog',
      'useMessage',
      'useNotification',
      'useLoadingBar',
    ],
  }],
  dts: 'types/auto-imports.d.ts',
  eslintrc: {
    enabled: true,
  },
};

export const autoComponentsConfig = {
  dirs: ['src/components'],
  resolvers: [NaiveUiResolver()],
  include: [/\.vue$/, /\.vue\?vue/],
  dts: 'types/components.d.ts',
};
