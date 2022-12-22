import mdx from '@mdx-js/rollup';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mdx({
      providerImportSource: '@mdx-js/react',
    }),
    splitVendorChunkPlugin(),
  ],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
});
