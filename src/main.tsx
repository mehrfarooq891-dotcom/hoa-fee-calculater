import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Instant redirect from non-www to primary www domain for SEO consistency
if (
  typeof window !== 'undefined' &&
  window.location.hostname === 'hoafeecalculator.com'
) {
  window.location.replace(
    'https://www.hoafeecalculator.com' +
      window.location.pathname +
      window.location.search
  );
}

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}


