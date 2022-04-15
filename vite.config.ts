// import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import legacy from '@vitejs/plugin-legacy';
// import eslintPlugin from 'vite-plugin-eslint';
// import { createHtmlPlugin } from 'vite-plugin-html';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const isHTTPS = (process.env.HTTPS) ? true : false;
  // const isBuild = command === 'build';

  return {
    // root: './',
    // publicDir: 'public',
    server: {
      open: true,
      https: isHTTPS
    },
    define: {
      'import.meta.env.VITE_APP_PKG_VERSION': JSON.stringify(process.env.npm_package_version),
      'import.meta.env.VITE_APP_PKG_NAME': JSON.stringify(process.env.npm_package_name)
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),  // map '~' to './src'
        // '~/public': join(__dirname, 'public'),
      },
    },
    // build: {
      // outDir: './build',
      // chunkSizeWarningLimit: 3000,
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       lodash: ['lodash']
      //     }
      //   }
      // }
    // },
    plugins: [
      // eslintPlugin({
      //   include: 'src/**/*.+(js|jsx|ts|tsx)'
      // }),
      react(),
      // createHtmlPlugin({
      //   inject: {
      //     data: {
      //       ...env,
      //       NODE_ENV: process.env.NODE_ENV,
      //       title: 'vite-plugin-html-example',
      //       // injectScript: '<script src="./inject.js"></script>',
      //     }
      //   }
      // }),
      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // })
    ]
  };
});
