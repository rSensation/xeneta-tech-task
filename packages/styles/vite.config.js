import { defineConfig, normalizePath } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.scss')
      },
      output: {
        assetFileNames: 'main.[ext]',
      }
    }
  },
});
