import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App.tsx';
import './index.css';

// Client-side safeguard: Prevent SyntaxError when fetch calls receive HTML 404 pages instead of JSON
if (typeof window !== 'undefined' && typeof Response !== 'undefined' && Response.prototype) {
  const originalJson = Response.prototype.json;
  Response.prototype.json = function () {
    const contentType = this.headers ? (this.headers.get('content-type') || '') : '';
    if (!this.ok || (contentType && !contentType.includes('json'))) {
      console.warn(`[SafeFetch] Suppressed JSON parse on non-JSON/HTTP error response (status ${this.status}, type '${contentType}')`);
      return Promise.resolve(null);
    }
    return originalJson.call(this).catch(err => {
      console.warn('[SafeFetch] Safely caught JSON parse error:', err);
      return null;
    });
  };
}

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

export const createRoot = ViteReactSSG({
  routes,
});



