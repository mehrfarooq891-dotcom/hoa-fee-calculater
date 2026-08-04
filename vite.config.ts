import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    ssgOptions: {
      script: 'async',
      formatting: 'none',
      dirStyle: 'nested',
      includedRoutes(paths, routes) {
        const priorityRoutes = [
          '/',
          '/blog/what-is-hoa-fee',
          '/blog/average-hoa-fees-by-state',
          '/blog/hoa-fees-florida',
          '/blog/hoa-fees-california',
          '/blog/hoa-fees-texas',
          '/blog/hoa-vs-no-hoa',
          '/blog/hoa-vs-condo-fee',
          '/states/california',
          '/states/texas',
          '/states/florida',
          '/states/new-york',
          '/states/georgia',
          '/states/north-carolina',
          '/states/illinois',
          '/compare',
          '/about',
          '/contact',
          '/blog',
          '/states',
          '/cities',
          '/privacy-policy',
          '/terms',
          '/disclaimer'
        ];
        return Array.from(new Set([...priorityRoutes, ...paths]));
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
