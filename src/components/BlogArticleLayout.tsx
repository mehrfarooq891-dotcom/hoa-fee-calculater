import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import { Link, useLocation } from 'react-router-dom';

interface BlogArticleLayoutProps {
  title: string;
  description: string;
  canonical?: string;
  category?: string;
  readTime?: string;
  date?: string;
  relatedLinks?: { label: string; to: string }[];
  children: React.ReactNode;
}

function getSlugFromTitle(title: string): string {
  const cleanTitle = title.toLowerCase().trim();
  if (cleanTitle.includes("insurance not renewed") || cleanTitle.includes("insurance was not renewed")) return "/blog/hoa-insurance-not-renewed";
  if (cleanTitle.includes("emergency hoa meeting") || cleanTitle.includes("emergency meeting")) return "/blog/emergency-hoa-meeting-called";
  if (cleanTitle.includes("won't respond") || cleanTitle.includes("not responding")) return "/blog/hoa-not-responding";
  if (cleanTitle.includes("sent my account to collections") || cleanTitle.includes("sent to collections")) return "/blog/hoa-sent-to-collections";
  if (cleanTitle.includes("what is an hoa fee")) return "/blog/what-is-hoa-fee";
  if (cleanTitle.includes("hoa laws by state")) return "/blog/hoa-laws-by-state";
  if (cleanTitle.includes("condo fees vs hoa fees")) return "/blog/condo-fees-vs-hoa-fees";
  if (cleanTitle.includes("hoa dues explained")) return "/blog/hoa-dues-explained";
  if (cleanTitle.includes("cant afford special assessment") || cleanTitle.includes("can't afford")) return "/blog/cant-afford-special-assessment";
  if (cleanTitle.includes("threatening foreclosure")) return "/blog/hoa-threatening-foreclosure-guide";
  if (cleanTitle.includes("lien notice")) return "/blog/hoa-lien-notice-what-to-do";
  if (cleanTitle.includes("tennessee")) return "/blog/hoa-fees-tennessee";
  if (cleanTitle.includes("new jersey")) return "/blog/hoa-fees-new-jersey";
  if (cleanTitle.includes("virginia")) return "/blog/hoa-fees-virginia";
  if (cleanTitle.includes("washington state") || cleanTitle.includes("seattle")) return "/blog/hoa-fees-washington-state";
  if (cleanTitle.includes("colorado")) return "/blog/hoa-fees-colorado";
  if (cleanTitle.includes("nevada")) return "/blog/hoa-fees-nevada";
  if (cleanTitle.includes("georgia")) return "/blog/hoa-fees-georgia";
  if (cleanTitle.includes("north carolina")) return "/blog/hoa-fees-north-carolina";
  if (cleanTitle.includes("illinois")) return "/blog/hoa-fees-illinois";
  if (cleanTitle.includes("foreclosure")) return "/blog/hoa-foreclosure";
  if (cleanTitle.includes("tax deductible")) return "/blog/hoa-fees-tax-deductible";
  if (cleanTitle.includes("don't pay") || cleanTitle.includes("dont pay")) return "/blog/dont-pay-hoa-fees";
  if (cleanTitle.includes("fight hoa fee increase")) return "/blog/fight-hoa-fee-increase";
  if (cleanTitle.includes("special assessment")) return "/blog/hoa-special-assessment";
  if (cleanTitle.includes("financial statements")) return "/blog/read-hoa-financial-statements";
  if (cleanTitle.includes("red flags")) return "/blog/hoa-document-red-flags";
  if (cleanTitle.includes("reserve fund")) return "/blog/hoa-reserve-fund";
  if (cleanTitle.includes("too much")) return "/blog/how-much-hoa-fee-too-much";
  if (cleanTitle.includes("mortgage approval")) return "/blog/hoa-fees-mortgage-approval";
  if (cleanTitle.includes("new construction")) return "/blog/new-construction-hoa-fees";
  if (cleanTitle.includes("nyc")) return "/blog/condo-hoa-fees-nyc";
  if (cleanTitle.includes("arizona")) return "/blog/hoa-fees-arizona";
  if (cleanTitle.includes("lower hoa fees")) return "/blog/lower-hoa-fees";
  if (cleanTitle.includes("management companies")) return "/blog/hoa-management-companies";
  if (cleanTitle.includes("self-managed") || cleanTitle.includes("self managed")) return "/blog/self-managed-hoa";
  if (cleanTitle.includes("rules enforcement")) return "/blog/hoa-rules-enforcement";
  if (cleanTitle.includes("questions before buying") || cleanTitle.includes("10 questions") || cleanTitle.includes("questions to ask") || cleanTitle.includes("buying in an hoa community")) return "/blog/questions-before-buying-hoa";
  if (cleanTitle.includes("townhouse")) return "/blog/townhouse-hoa-fees";
  if (cleanTitle.includes("cover")) return "/blog/what-do-hoa-fees-cover";
  if (cleanTitle.includes("annual budget")) return "/blog/hoa-annual-budget";
  if (cleanTitle.includes("no hoa laws")) return "/blog/states-no-hoa-laws";
  if (cleanTitle.includes("calculator guide")) return "/blog/hoa-fee-calculator-guide";
  if (cleanTitle.includes("texas guide")) return "/blog/hoa-fees-texas-guide";
  if (cleanTitle.includes("new york")) return "/blog/average-hoa-fees-new-york";
  if (cleanTitle.includes("highest hoa fees")) return "/blog/highest-hoa-fees-by-state";
  if (cleanTitle.includes("increase limits")) return "/blog/hoa-fee-increase-limits";

  const slugified = cleanTitle
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return `/blog/${slugified}`;
}

export default function BlogArticleLayout({
  title,
  description,
  canonical,
  category = "Homebuying Guide",
  readTime = "6 min read",
  date = "May 21, 2026",
  relatedLinks = [],
  children
}: BlogArticleLayoutProps) {
  let locationPath = '';
  try {
    const location = useLocation();
    locationPath = location?.pathname || '';
  } catch (e) {}

  const resolvedCanonical = canonical || (locationPath && locationPath.startsWith('/blog/') ? locationPath : getSlugFromTitle(title));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
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
      "name": "HOA Research Team",
      "jobTitle": "Real Estate Financial Analyst",
      "url": "https://hoafeecalculator.com/about"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${title} | HOACalculator.com`}
        description={description}
        canonical={resolvedCanonical}
        schema={[articleSchema]}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-6">
            <Link to="/blog" className="text-accent font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary opacity-80 uppercase font-bold tracking-wider mb-2">
              <span>{category}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span className="text-accent normal-case">Reviewed by the HOA Research Team</span>
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
            <div className="not-prose my-12 bg-[#EFF6FF] border border-[#2563EB]/10 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-primary mb-3 flex items-center gap-2">
                <span>📊</span> Calculate Your HOA Costs
              </h2>
              <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-5">
                Use our free HOA Fee Calculator to estimate your true lifetime HOA expenses — with year-by-year breakdown.
              </p>
              <a 
                href="https://hoafeecalculator.com/" 
                className="inline-flex items-center bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-6 rounded-full transition-all active:scale-95 text-sm shadow-sm"
              >
                Calculate Now →
              </a>
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
                <h2 className="text-xl font-serif font-bold text-primary mb-4">Related Insights & Guides</h2>
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
                <p className="text-primary opacity-80 text-sm">
                  Providing real-time financial tracking, state laws analysis, and consumer protection guides for American property buyers. <Link to="/about" className="text-accent font-bold hover:underline">Learn more about our research methodology and editorial standards</Link>.
                </p>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-12 px-6 text-white/80">
        <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-12">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/hoa_calculator_logo.svg" 
                alt="HOA Fee Calculator" 
                width="180" height="45" style={{height: '45px', width: '180px'}}
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
