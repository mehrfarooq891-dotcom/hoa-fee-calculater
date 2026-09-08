import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Base configuration
const BASE_URL = 'https://www.hoafeecalculator.com';
const TODAY = new Date().toISOString().split('T')[0];

console.log('Generating dynamic sitemap...');

// 2. Define static routes
const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/compare', changefreq: 'weekly', priority: '0.9' },
  { path: '/states', changefreq: 'monthly', priority: '0.8' },
  { path: '/cities', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'daily', priority: '0.9' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' }
];

// 3. Define all 50 states in lowercase URL slugs
const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware",
  "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas",
  "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota",
  "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey",
  "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
  "pennsylvania", "rhode-island", "south-carolina", "south-dakota", "tennessee", "texas", "utah",
  "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming"
];

// 4. Extract blog post URLs dynamically from Blog.tsx
let blogSlugs = [];
try {
  const blogFilePath = path.join(__dirname, 'src', 'pages', 'Blog.tsx');
  if (fs.existsSync(blogFilePath)) {
    const blogContent = fs.readFileSync(blogFilePath, 'utf8');
    // Regex to match "slug: "/blog/...""
    const slugRegex = /slug:\s*["'](\/blog\/[a-zA-Z0-9_-]+)["']/g;
    let match;
    while ((match = slugRegex.exec(blogContent)) !== null) {
      blogSlugs.push(match[1]);
    }
    blogSlugs = blogSlugs.filter(slug => slug !== '/blog/hoa-fees-texas-guide');
    console.log(`Found ${blogSlugs.length} blog posts in Blog.tsx:`, blogSlugs);
  } else {
    console.warn(`Warning: Blog.tsx not found at ${blogFilePath}. Using static fallbacks for blogs.`);
  }
} catch (error) {
  console.error('Error reading Blog.tsx: ', error);
}

// Fallbacks if extraction failed
if (blogSlugs.length === 0) {
  blogSlugs = [
    '/blog/hoa-fees-florida',
    '/blog/average-hoa-fees-by-state',
    '/blog/what-is-hoa-fee'
  ];
}

// Generate sitemap URLs list
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
const cities = [
  "austin-texas",
  "houston-texas",
  "miami-florida",
  "orlando-florida",
  "los-angeles-california",
  "san-diego-california",
  "phoenix-arizona",
  "las-vegas-nevada",
  "charlotte-north-carolina",
  "atlanta-georgia"
];

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
      console.log(`Generated ${name} at: ${target}`);
    } catch (error) {
      console.error(`Failed to write ${name} to ${target}:`, error);
    }
  });
});

console.log('Dynamic sitemap generation complete.');
