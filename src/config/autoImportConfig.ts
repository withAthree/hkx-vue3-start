export default {
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
  dirsScanOptions: {
    filePatterns: ['*.ts'], // Glob patterns for matching files
    fileFilter: (file: any) => file.endsWith('.ts'), // Filter files
    types: true, // Enable auto import the types under the directories
  },
  dts: true,
  eslintrc: {
    enabled: true, // Default `false`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },
  exclude: [
    /[\\/]node_modules[\\/]/,
    /[\\/]dist[\\/]/,
  ],
};
