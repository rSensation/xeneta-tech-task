import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: {
        components: path.resolve(__dirname, 'src/components/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
        hooks: path.resolve(__dirname, 'src/hooks/'),
      },
      name: '@xeneta/common',
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
