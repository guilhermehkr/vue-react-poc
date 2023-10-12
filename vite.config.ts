import path from 'path';

import veauryVitePlugins from 'veaury/vite/index';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-react-poc',
      fileName: (format) => `vue-react-poc.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({ insertTypesEntry: true }),
    veauryVitePlugins({
      type: 'react',
    }),
  ],
});
