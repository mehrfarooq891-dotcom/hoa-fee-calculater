import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(__dirname, 'dist', 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// 1. Core Static Routes
const routes = [
  {
    path: '/',
    title: 'HOA Fee Calculator - Free Monthly & Lifetime Dues Estimator 2026',
    description: 'Calculate your monthly HOA fees, inflation projections, and total housing costs across all 50 states with our free, instant calculator.',
    h1: 'HOA Fee Calculator 2026'
  },
  {
    path: '/about',
    title: 'About Us - HOA Fee Research & Financial Analysis | HOACalculator.com',
    description: 'Learn about the HOA Research Team, our data sources, methodology, and consumer advocacy for American homeowners.',
    h1: 'About HOACalculator.com'
  },
  {
    path: '/contact',
    title: 'Contact HOA Calculator - Editorial & Data Inquiries | HOACalculator.com',
    description: 'Get in touch with our research team for data inquiries, editorial corrections, or media requests.',
    h1: 'Contact Our Research Team'
  },
  {
    path: '/compare',
    title: 'HOA Fee Comparison Tool - Compare HOA vs Condo Fees | HOACalculator.com',
    description: 'Compare single-family HOA fees versus condo monthly assessments side-by-side with our interactive housing cost calculator.',
    h1: 'HOA & Condo Fee Comparison Tool'
  },
  {
    path: '/states',
    title: 'HOA Fees by State - 2026 National Directory & Law Guide | HOACalculator.com',
    description: 'Browse average HOA fees, state-specific laws, reserve requirements, and legislative rights across all 50 US states.',
    h1: 'HOA Fees & Laws by State Directory'
  },
  {
    path: '/cities',
    title: 'HOA Fees by City - 2026 Local Metro Guides | HOACalculator.com',
    description: 'Explore average HOA fees, condo rates, and local association trends across major American metropolitan cities.',
    h1: 'HOA Fees by City'
  },
  {
    path: '/blog',
    title: 'HOA Fee Insights & Research Blog | HOACalculator.com',
    description: 'Expert analysis on HOA fees, special assessments, state laws, budget red flags, and homeowner legal protections.',
    h1: 'HOA Research & Insights Blog'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | HOACalculator.com',
    description: 'Read our privacy policy regarding user data, cookies, and analytics.',
    h1: 'Privacy Policy'
  },
  {
    path: '/disclaimer',
    title: 'Financial Disclaimer | HOACalculator.com',
    description: 'Read our financial and legal disclaimer regarding HOA fee calculations and estimation tools.',
    h1: 'Financial Disclaimer'
  }
];

// 2. Extract 49 Blog Posts from Blog.tsx
try {
  const blogContent = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'Blog.tsx'), 'utf8');
  const articleRegex = /{\s*title:\s*["']([^"']+)["'],\s*excerpt:\s*["']([^"']+)["'],\s*date:\s*["']([^"']+)["'],\s*category:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["']\s*}/g;
  let match;
  while ((match = articleRegex.exec(blogContent)) !== null) {
    const [, title, excerpt, date, category, slug] = match;
    routes.push({
      path: slug.startsWith('/') ? slug : `/${slug}`,
      title: `${title} | HOACalculator.com`,
      description: excerpt,
      h1: title,
      category,
      date
    });
  }
} catch (err) {
  console.error('Error reading Blog.tsx for prerendering:', err);
}

// 3. 50 State Routes
const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware",
  "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas",
  "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota",
  "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey",
  "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
  "pennsylvania", "rhode-island", "south-carolina", "south-dakota", "tennessee", "texas", "utah",
  "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming"
];

states.forEach(stateSlug => {
  const displayName = stateSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  routes.push({
    path: `/states/${stateSlug}`,
    title: `${displayName} HOA Fees 2026 | Average Costs & Calculator`,
    description: `Calculate HOA fees in ${displayName}. See average costs by city, legal rules, and estimate your lifetime HOA expenses.`,
    h1: `${displayName} HOA Fees 2026`
  });
});

// 4. City Routes
const citiesData = {
  'austin-texas': { city: 'Austin', state: 'Texas' },
  'houston-texas': { city: 'Houston', state: 'Texas' },
  'miami-florida': { city: 'Miami', state: 'Florida' },
  'orlando-florida': { city: 'Orlando', state: 'Florida' },
  'los-angeles-california': { city: 'Los Angeles', state: 'California' },
  'san-diego-california': { city: 'San Diego', state: 'California' },
  'phoenix-arizona': { city: 'Phoenix', state: 'Arizona' },
  'las-vegas-nevada': { city: 'Las Vegas', state: 'Nevada' },
  'charlotte-north-carolina': { city: 'Charlotte', state: 'North Carolina' },
  'atlanta-georgia': { city: 'Atlanta', state: 'Georgia' }
};

Object.entries(citiesData).forEach(([slug, info]) => {
  routes.push({
    path: `/cities/${slug}`,
    title: `HOA Fee Calculator ${info.city}, ${info.state} 2026 | Average Costs & Estimates`,
    description: `Calculate HOA fees in ${info.city}, ${info.state}. See average monthly costs, neighborhood comparisons, and estimate your lifetime HOA expenses.`,
    h1: `${info.city}, ${info.state} HOA Fee Calculator 2026`
  });
});

console.log(`Prerendering ${routes.length} total routes...`);

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let successCount = 0;

routes.forEach(route => {
  const cleanPath = route.path === '/' ? '' : route.path;
  const canonicalUrl = `https://www.hoafeecalculator.com${cleanPath}`;

  // Replace <title>
  let html = template.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`);

  // Replace meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${escapeHtml(route.description)}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(route.description)}" />\n</head>`);
  }

  // Inject extra head tags
  const headExtra = `
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:title" content="${escapeHtml(route.title)}" />
  <meta property="og:description" content="${escapeHtml(route.description)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(route.title)}" />
  <meta name="twitter:description" content="${escapeHtml(route.description)}" />`;

  html = html.replace('</head>', `${headExtra}\n</head>`);

  // Output file path
  let targetFile;
  if (route.path === '/') {
    targetFile = path.join(__dirname, 'dist', 'index.html');
  } else {
    const dirPath = path.join(__dirname, 'dist', route.path.replace(/^\//, ''));
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    targetFile = path.join(dirPath, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf8');
  successCount++;
});

console.log(`Prerender completed successfully! ${successCount} routes generated in dist/`);
