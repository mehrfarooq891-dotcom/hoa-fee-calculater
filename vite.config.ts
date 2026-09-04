import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
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
        const allStateSlugs = [
          'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware',
          'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas',
          'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
          'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
          'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
          'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah',
          'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'
        ];
        const stateRoutes = allStateSlugs.map(slug => `/states/${slug}`);

        const allCitySlugs = [
          'austin-texas',
          'houston-texas',
          'miami-florida',
          'orlando-florida',
          'los-angeles-california',
          'san-diego-california',
          'phoenix-arizona',
          'las-vegas-nevada',
          'charlotte-north-carolina',
          'atlanta-georgia'
        ];
        const cityRoutes = allCitySlugs.map(slug => `/cities/${slug}`);

        // Dynamically extract all blog routes from src/App.tsx
        let blogRoutes: string[] = [];
        try {
          const appPath = path.resolve(__dirname, 'src/App.tsx');
          if (fs.existsSync(appPath)) {
            const appContent = fs.readFileSync(appPath, 'utf8');
            const matches = appContent.matchAll(/path:\s*['"](blog\/[^'":]+)['"]/g);
            blogRoutes = Array.from(new Set(Array.from(matches).map(m => `/${m[1]}`)));
          }
        } catch (e) {
          console.error('Error reading App.tsx for blog routes:', e);
        }

        const staticRoutes = [
          '/',
          '/about',
          '/contact',
          '/compare',
          '/states',
          '/cities',
          '/blog',
          '/privacy-policy',
          '/terms',
          '/terms-of-service',
          '/disclaimer'
        ];

        const priorityRoutes = [
          ...staticRoutes,
          ...stateRoutes,
          ...cityRoutes,
          ...blogRoutes
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
