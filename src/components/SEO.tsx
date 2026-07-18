import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  const canonicalUrl = canonical 
    ? canonical.replace('https://hoafeecalculator.com', 'https://www.hoafeecalculator.com') 
    : `https://www.hoafeecalculator.com${normalizedPath}`;

  return (
    <Helmet>
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
    </Helmet>
  );
}
