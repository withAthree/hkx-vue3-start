import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import { fileURLToPath, URL } from 'node:url';

import viteCompression from 'vite-plugin-compression';
import topLevelAwait from 'vite-plugin-top-level-await';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // 是否开发环境
  const isDev = env.ENV === 'development';
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      vueSetupExtend({}),
      viteCompression(),
      topLevelAwait({
        promiseExportName: '__tla',
        promiseImportName: (i) => `__tla_${i}`,
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
          /\.vue\.[tj]sx?\?vue/,
        ],
        imports: ['vue', 'vue-router', {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
          '@vueuse/core': [],
        }],
        dts: 'typings/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [NaiveUiResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'typings/components.d.ts',
      }),
      tailwindcss(),
    ],

    // 项目根目录
    root: process.cwd(),
    // 别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    base: mode === 'production' ? './' : env.VITE_PUBLIC_PATH,
    server: {
      // 服务器地址
      host: '0.0.0.0',
      // 服务器端口号
      port: env.VITE_PORT as unknown as number,
      // 是否自动打开浏览器
      open: env.VITE_OPEN === 'true',
      // 启用热更新
      hmr: true,
      proxy: {
        '/gateway': {
          target: env.VITE_ADMIN_PROXY_PATH,
          ws: true,
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1500,
      // 开发使用 esbuild 更快，生产环境打包使用 terser 可以删除更多注释
      minify: isDev ? 'esbuild' : 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          // 删除所有注释
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          compact: true,
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            return null;
          },
        },
      },
    },
  };
});
