import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: any[];
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://www.hoafeecalculator.com/assets/og-image.jpg',
  schema = []
}: SEOProps) {
  let locationPath = '';
  try {
    const location = useLocation();
    locationPath = location?.pathname || '';
  } catch (e) {
    if (typeof window !== 'undefined') {
      locationPath = window.location.pathname || '';
    }
  }

  const normalizedPath = locationPath === '/' || !locationPath
    ? '' 
    : (locationPath.endsWith('/') ? locationPath.slice(0, -1) : locationPath);

  let canonicalUrl = '';
  if (canonical) {
    if (canonical.startsWith('http')) {
      canonicalUrl = canonical.replace('https://hoafeecalculator.com', 'https://www.hoafeecalculator.com');
    } else {
      const cleanCanonical = canonical.startsWith('/') ? canonical : `/${canonical}`;
      canonicalUrl = `https://www.hoafeecalculator.com${cleanCanonical}`;
    }
  } else {
    canonicalUrl = `https://www.hoafeecalculator.com${normalizedPath}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema */}
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  );
}
