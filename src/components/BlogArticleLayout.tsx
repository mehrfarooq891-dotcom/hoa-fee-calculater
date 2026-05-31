import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

interface BlogArticleLayoutProps {
  title: string;
  description: string;
  category?: string;
  readTime?: string;
  date?: string;
  relatedLinks?: { label: string; to: string }[];
  children: React.ReactNode;
}

export default function BlogArticleLayout({
  title,
  description,
  category = "Homebuying Guide",
  readTime = "6 min read",
  date = "May 21, 2026",
  relatedLinks = [],
  children
}: BlogArticleLayoutProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "datePublished": `${date.includes('2026') ? '2026' : '2026'}-05-21T12:00:00Z`,
    "dateModified": `${date.includes('2026') ? '2026' : '2026'}-05-21T12:00:00Z`,
    "author": {
      "@type": "Organization",
      "name": "HOA Research Team"
    },
    "creator": {
      "@type": "Person",
      "name": "Michael Torres",
      "jobTitle": "Real Estate Financial Analyst",
      "url": "https://www.hoafeecalculator.com/about"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${title} | HOACalculator.com`}
        description={description}
        schema={[articleSchema]}
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
               src="/hoa_calculator_logo.svg" 
               alt="HOA Fee Calculator" 
               style={{height: '45px', width: 'auto'}}
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 if (e.currentTarget.nextElementSibling) {
                   (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                 }
               }}
            />
            <span 
              className="font-serif text-2xl font-bold text-primary"
              style={{display: 'none'}}
            >
              HOA<span className="text-accent">Calculator</span>.com
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors text-primary font-bold">Home</Link>
            <Link to="/states" className="hover:text-accent transition-colors text-primary font-bold">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors text-primary font-bold">Compare</Link>
            <Link to="/blog" className="text-accent font-bold">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-6">
            <Link to="/blog" className="text-accent font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
            <div className="flex items-center gap-4 text-xs text-primary opacity-50 uppercase font-bold tracking-wider mb-2">
              <span>{category}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>

          <article className="prose prose-slate max-w-none text-primary">
            {/* H1 matching title */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
              {title}
            </h1>

            {/* Content Slot */}
            <div className="text-lg opacity-90 leading-relaxed space-y-6 mb-12">
              {children}
            </div>

            {/* Highlighted CTA Box */}
            <div className="not-prose my-12 bg-bg-light border-l-4 border-accent rounded-r-2xl p-6 md:p-8 shadow-sm">
              <p className="text-primary font-bold text-lg md:text-xl leading-relaxed m-0">
                Ready to calculate your HOA costs? Use our free{" "}
                <Link to="/" className="text-accent underline hover:text-accent/80 transition-colors">
                  HOA Fee Calculator
                </Link>{" "}
                to estimate your true lifetime HOA expenses in seconds.
              </p>
            </div>

            {/* Inline CTA */}
            <div className="inline-cta my-10 text-center">
              <a href="/#calculator" className="inline-block bg-accent hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-xl text-lg duration-300">
                Use Our Free HOA Calculator →
              </a>
            </div>

            {/* Related posts */}
            {relatedLinks.length > 0 && (
              <div className="bg-bg-light rounded-2xl p-6 md:p-8 border border-border mt-12 mb-12">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Related Insights & Guides</h3>
                <ul className="space-y-3">
                  {relatedLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="text-accent hover:underline font-bold transition-colors block">
                        • {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-border flex items-center gap-6">
              <div className="h-16 w-16 bg-accent/10 text-accent font-bold rounded-full flex items-center justify-center text-xl font-serif">
                HR
              </div>
              <div>
                <h4 className="text-primary font-bold text-lg">Written by: HOA Research Team</h4>
                <p className="text-primary opacity-60 text-sm">Providing real-time financial tracking, state laws analysis, and consumer protection guides for American property buyers.</p>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-12 px-6 text-white/60">
        <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-12">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/hoa_calculator_logo.svg" 
                alt="HOA Fee Calculator" 
                style={{height: '45px', width: 'auto'}}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <span 
                className="font-serif text-2xl font-bold text-white"
                style={{display: 'none'}}
              >
                HOA<span className="text-accent">Calculator</span>.com
              </span>
            </Link>
          </div>
          <p className="text-sm">© 2026 HOACalculator.com — Expert Analysis for All 50 States.</p>
        </div>
      </footer>
    </div>
  );
}
