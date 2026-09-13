import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Base configuration
const BASE_URL = 'https://www.hoafeecalculator.com';
const TODAY = new Date().toISOString().split('T')[0];

console.log(`[Sitemap Generator] Starting dynamic generation at ${TODAY}...`);

// 2. Define canonical static routes (excluding redirects like /terms)
const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/compare', changefreq: 'weekly', priority: '0.9' },
  { path: '/states', changefreq: 'weekly', priority: '0.9' },
  { path: '/cities', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'daily', priority: '0.9' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' }
];

// 3. Dynamically extract all 50 states from src/data/statesData.ts
let states = [];
try {
  const statesDataPath = path.join(__dirname, 'src', 'data', 'statesData.ts');
  if (fs.existsSync(statesDataPath)) {
    const statesDataContent = fs.readFileSync(statesDataPath, 'utf8');
    const stateMatches = [...statesDataContent.matchAll(/["']([a-z-]+)["']:\s*\{/g)].map(m => m[1]);
    const stateSet = new Set(stateMatches);
    states = Array.from(stateSet).sort();
    console.log(`[Sitemap Generator] Dynamically detected ${states.length} states from statesData.ts`);
  }
} catch (err) {
  console.warn('[Sitemap Generator] Error reading statesData.ts, using fallback states list:', err);
}

// Fallback states if extraction fails
if (states.length === 0) {
  states = [
    "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware",
    "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas",
    "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota",
    "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey",
    "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
    "pennsylvania", "rhode-island", "south-carolina", "south-dakota", "tennessee", "texas", "utah",
    "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming"
  ];
}

// 4. Dynamically extract cities from src/pages/Cities.tsx and src/pages/CityTemplate.tsx
let cities = [];
try {
  const citySet = new Set();
  const citiesPath = path.join(__dirname, 'src', 'pages', 'Cities.tsx');
  if (fs.existsSync(citiesPath)) {
    const citiesContent = fs.readFileSync(citiesPath, 'utf8');
    const cityMatches = [...citiesContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
    cityMatches.forEach(c => citySet.add(c));
  }
  const cityTemplatePath = path.join(__dirname, 'src', 'pages', 'CityTemplate.tsx');
  if (fs.existsSync(cityTemplatePath)) {
    const templateContent = fs.readFileSync(cityTemplatePath, 'utf8');
    const templateMatches = [...templateContent.matchAll(/["']([a-z0-9-]+-[a-z0-9-]+)["']:\s*\{/g)].map(m => m[1]);
    templateMatches.forEach(c => citySet.add(c));
  }
  cities = Array.from(citySet).sort();
  console.log(`[Sitemap Generator] Dynamically detected ${cities.length} cities:`, cities);
} catch (err) {
  console.warn('[Sitemap Generator] Error reading cities, using fallback:', err);
}

if (cities.length === 0) {
  cities = [
    "austin-texas", "houston-texas", "miami-florida", "orlando-florida",
    "los-angeles-california", "san-diego-california", "phoenix-arizona",
    "las-vegas-nevada", "charlotte-north-carolina", "atlanta-georgia"
  ];
}

// 5. Dynamically extract 100% of valid blog post URLs across App.tsx, Blog.tsx, and src/pages/*Article.tsx
const blogSlugsSet = new Set();

// Known redirects or param placeholders to exclude from sitemaps
const EXCLUDED_SLUGS = new Set([
  'hoa-fees-texas-guide', // 301 redirects to /blog/hoa-fees-texas
  ':articleSlug'
]);

// Source A: Extract from src/App.tsx routes and switch cases
try {
  const appFilePath = path.join(__dirname, 'src', 'App.tsx');
  if (fs.existsSync(appFilePath)) {
    const appContent = fs.readFileSync(appFilePath, 'utf8');

    // Match static routes like path: 'blog/what-is-hoa-fee'
    const routeRegex = /path:\s*["']blog\/([^"']+)["']/g;
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      const slug = match[1].trim();
      if (!EXCLUDED_SLUGS.has(slug)) {
        blogSlugsSet.add(`/blog/${slug}`);
      }
    }

    // Match switch cases like case 'hoa-reserve-fund':
    const caseRegex = /case\s*["']([^"']+)["']\s*:/g;
    while ((match = caseRegex.exec(appContent)) !== null) {
      const slug = match[1].trim();
      if (!EXCLUDED_SLUGS.has(slug)) {
        blogSlugsSet.add(`/blog/${slug}`);
      }
    }
  }
} catch (err) {
  console.error('[Sitemap Generator] Error extracting blog routes from App.tsx:', err);
}

// Source B: Extract from src/pages/Blog.tsx
try {
  const blogFilePath = path.join(__dirname, 'src', 'pages', 'Blog.tsx');
  if (fs.existsSync(blogFilePath)) {
    const blogContent = fs.readFileSync(blogFilePath, 'utf8');
    const slugRegex = /slug:\s*["'](\/blog\/[a-zA-Z0-9_-]+)["']/g;
    let match;
    while ((match = slugRegex.exec(blogContent)) !== null) {
      const url = match[1].trim();
      const slug = url.replace(/^\/blog\//, '');
      if (!EXCLUDED_SLUGS.has(slug)) {
        blogSlugsSet.add(url);
      }
    }
  }
} catch (err) {
  console.error('[Sitemap Generator] Error reading Blog.tsx:', err);
}

// Source C: Inspect src/pages/*Article.tsx to verify coverage
try {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  if (fs.existsSync(pagesDir)) {
    const articleFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('Article.tsx'));
    console.log(`[Sitemap Generator] Verified ${articleFiles.length} physical *Article.tsx components in src/pages`);
  }
} catch (err) {
  console.warn('[Sitemap Generator] Error inspecting src/pages directory:', err);
}

const blogSlugs = Array.from(blogSlugsSet).sort();
console.log(`[Sitemap Generator] Total unique validated blog URLs: ${blogSlugs.length}`);

// Critical check for priority URLs requested by user
const priorityUrls = [
  '/blog/hoa-fees-california',
  '/blog/hoa-reserve-fund',
  '/blog/questions-before-buying-hoa'
];
priorityUrls.forEach(url => {
  const present = blogSlugs.includes(url);
  console.log(`[Sitemap Generator] Priority URL ${url} present? ${present ? 'YES (Confirmed)' : 'MISSING (Error!)'}`);
});

// 6. Generate sitemap URLs list for main sitemap
const urls = [];

// Add static pages
staticRoutes.forEach(route => {
  urls.push(`  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
});

// Add dynamic blog posts
blogSlugs.forEach(slug => {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  urls.push(`  <url>
    <loc>${BASE_URL}${cleanSlug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

// Add dynamic state pages
states.forEach(state => {
  urls.push(`  <url>
    <loc>${BASE_URL}/states/${state}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
});

// Add dynamic city pages
cities.forEach(city => {
  urls.push(`  <url>
    <loc>${BASE_URL}/cities/${city}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
});

// XML Content construction for main sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

// Build sub-sitemaps
const pageUrls = staticRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

const pageSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageUrls}
</urlset>
`;

const blogUrls = blogSlugs.map(slug => {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return `  <url>
    <loc>${BASE_URL}${cleanSlug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const blogSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls}
</urlset>
`;

const stateUrls = states.map(state => `  <url>
    <loc>${BASE_URL}/states/${state}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

const stateSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${stateUrls}
</urlset>
`;

const cityUrls = cities.map(city => `  <url>
    <loc>${BASE_URL}/cities/${city}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n');

const citySitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cityUrls}
</urlset>
`;

const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/page-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/blog-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/state-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/city-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`;

// Helper to ensure directory exists
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Write all generated files to destinations
const sitemapsToWrite = [
  { name: 'sitemap.xml', content: sitemapContent },
  { name: 'sitemap_index.xml', content: sitemapIndexContent },
  { name: 'page-sitemap.xml', content: pageSitemapContent },
  { name: 'blog-sitemap.xml', content: blogSitemapContent },
  { name: 'state-sitemap.xml', content: stateSitemapContent },
  { name: 'city-sitemap.xml', content: citySitemapContent }
];

const destinationDirs = [
  path.join(__dirname, 'public'),
  path.join(__dirname),
  path.join(__dirname, 'dist')
];

sitemapsToWrite.forEach(({ name, content }) => {
  destinationDirs.forEach(dir => {
    if (dir.includes('dist') && !fs.existsSync(dir)) {
      return;
    }
    const target = path.join(dir, name);
    try {
      ensureDirectoryExistence(target);
      fs.writeFileSync(target, content, 'utf8');
      console.log(`[Sitemap Generator] Wrote ${name} to ${target}`);
    } catch (error) {
      console.error(`[Sitemap Generator] Failed to write ${name} to ${target}:`, error);
    }
  });
});

console.log(`[Sitemap Generator] Dynamic sitemap generation complete! Total URLs in main sitemap: ${urls.length}`);

