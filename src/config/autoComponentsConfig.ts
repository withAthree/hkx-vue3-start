import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default {
  resolvers: [NaiveUiResolver()],
  extensions: ['vue'],
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]dist[\\/]/],
  dts: true,
};
