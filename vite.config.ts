import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
      types: path.resolve(__dirname, 'src/types'),
      services: path.resolve(__dirname, 'src/services'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      pages: path.resolve(__dirname, 'src/pages'),
      datas: path.resolve(__dirname, 'src/datas'),
    },
  },
});
