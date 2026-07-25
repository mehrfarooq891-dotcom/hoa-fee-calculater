import React, { useState, useMemo } from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: 'State Guides' | 'Legal & Foreclosure' | 'Financial Planning' | 'Buying Guides';
  slug: string;
}

const ALL_ARTICLES: Article[] = [
  {
    title: "My HOA Is Threatening Foreclosure: A Step-by-Step Emergency Guide",
    excerpt: "Foreclosure over an unpaid HOA balance is legal in 22 states. Follow this 6-step emergency guide to protect your equity and stop foreclosure.",
    date: "July 22, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/hoa-threatening-foreclosure-guide"
  },
  {
    title: "I Just Got an HOA Lien Notice: What to Do in the Next 48 Hours",
    excerpt: "An HOA lien notice requires swift action. Follow this step-by-step action plan to protect your property rights and negotiate a repayment plan.",
    date: "July 15, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/hoa-lien-notice-what-to-do"
  },
  {
    title: "HOA Fees in Tennessee: Nashville, Memphis & Knoxville Compared",
    excerpt: "Nashville's HOA fees doubled between 2018 and 2025. Compare average costs, community amenities, and state statutory laws across Tennessee.",
    date: "July 12, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-tennessee"
  },
  {
    title: "HOA Fees in New Jersey: Bergen County, Shore Towns & Urban Condos",
    excerpt: "New Jersey has high property taxes and HOA dues averaging $600+/month in top developments. Learn the average costs, laws, and beach town condo rates.",
    date: "July 8, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-new-jersey"
  },
  {
    title: "HOA Fees in Virginia: Northern Virginia, Richmond & Beach Markets",
    excerpt: "Northern Virginia's master-planned communities stack HOA and CDD fees. Discover VPOAA laws, Reston double-billing, and coastal condo averages.",
    date: "July 3, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-virginia"
  },
  {
    title: "HOA Fees in Washington State: Seattle, Bellevue & Eastside Guide 2026",
    excerpt: "Seattle condo fees jumped 28% driven by seismic retrofits, tech-worker amenities, and labor costs. Compare Seattle, Bellevue, and Eastside averages.",
    date: "July 1, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-washington-state"
  },
  {
    title: "HOA Fees in Colorado: Denver, Boulder & Mountain Resort Guide",
    excerpt: "Ski condos in Breckenridge carry high fees, while Denver townhouses average $300/month. Compare LoDo, Boulder, and CCIOA budget veto rules.",
    date: "June 29, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-colorado"
  },
  {
    title: "HOA Fees in Nevada: Las Vegas, Henderson & Reno Guide 2026",
    excerpt: "Nevada has over 3,200 registered HOAs. Compare Las Vegas Strip condos, Summerlin master plans, Henderson, and NRS Chapter 116 reserve requirements.",
    date: "June 28, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-nevada"
  },
  {
    title: "HOA Fees in Illinois: Chicago Condos vs Suburban Townhouses",
    excerpt: "Chicago high-rises can run $1,000+/month in HOA maintenance fees vs $175/month for suburban townhouses. Compare Lincoln Park and Naperville trends.",
    date: "June 27, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-illinois"
  },
  {
    title: "HOA Fees in North Carolina: Charlotte, Raleigh & Triangle Area Guide",
    excerpt: "Charlotte and Raleigh suburbs feature fast-rising HOA fees. Compare Charlotte, Cary, Wilmington, and NC Planned Community Act reserve rules.",
    date: "June 26, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-north-carolina"
  },
  {
    title: "HOA Fees in Georgia: Atlanta, Savannah & Suburban Breakdown 2026",
    excerpt: "Atlanta suburbs like Alpharetta have rapidly rising HOA fees. Compare Atlanta, Savannah, and Georgia Property Owners' Association Act rules.",
    date: "June 24, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-georgia"
  },
  {
    title: "HOA Fee Increases: How Much Can They Raise It and How Often?",
    excerpt: "Discover statutory caps on annual HOA fee increases, state-by-state laws, and how to audit your community's governing CC&Rs.",
    date: "June 24, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/hoa-fee-increase-limits"
  },
  {
    title: "What State Has the Highest HOA Fees? The 2026 Ranking",
    excerpt: "Hawaii tops the list at $900+/month average — discover how Hawaii, New York, California, and Florida compare with statutory drivers.",
    date: "June 23, 2026",
    category: "State Guides",
    slug: "/blog/highest-hoa-fees-by-state"
  },
  {
    title: "Average HOA Fees in New York State: NYC, Long Island & Upstate",
    excerpt: "In Manhattan, $1,200/month is the median condo maintenance fee. Compare NYC high-rises, Long Island developments, and Upstate HOA costs.",
    date: "June 23, 2026",
    category: "State Guides",
    slug: "/blog/average-hoa-fees-new-york"
  },
  {
    title: "Are HOA Fees Tax Deductible? IRS Guidelines Explained",
    excerpt: "Understand clear-cut IRS rules on when primary residence, rental investment, or home office HOA fees can be claimed as business tax deductions.",
    date: "May 26, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-fees-tax-deductible"
  },
  {
    title: "What Happens If You Don't Pay HOA Fees? The Full Legal Picture",
    excerpt: "Explore the legal mechanisms HOAs use — from late fee penalties and collection agencies to assessment liens and foreclosure proceedings.",
    date: "May 27, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/dont-pay-hoa-fees"
  },
  {
    title: "Can an HOA Foreclose on Your Home? State-by-State Rules",
    excerpt: "Understand judicial vs non-judicial HOA assessment foreclosures, state-specific owner safeguards, and right-of-redemption timeframes.",
    date: "May 28, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/hoa-foreclosure"
  },
  {
    title: "How to Fight an HOA Fee Increase: A Step-by-Step Strategic Checklist",
    excerpt: "Learn how to review governing CC&Rs, audit proposed annual budgets, request re-bids, and organize community objections effectively.",
    date: "May 25, 2026",
    category: "Financial Planning",
    slug: "/blog/fight-hoa-fee-increase"
  },
  {
    title: "Understanding HOA Special Assessments: How to Avoid Surprise Bills",
    excerpt: "A sudden $5,000 special assessment can wreck your savings. Learn why assessments happen, how to spot underfunded reserves, and insurance options.",
    date: "May 24, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-special-assessment"
  },
  {
    title: "How to Read HOA Financial Statements Like an Expert Analyst",
    excerpt: "Stop skipping the financial package. Learn how to quickly analyze balance sheets, operating budgets, reserve balances, and aged delinquencies.",
    date: "May 23, 2026",
    category: "Financial Planning",
    slug: "/blog/read-hoa-financial-statements"
  },
  {
    title: "Warning Signs: HOA Document Red Flags to Check During Escrow",
    excerpt: "Spot warning signs inside governing bylaws, meeting minutes, reserve accounts, and pending lawsuits before removing contract contingencies.",
    date: "May 22, 2026",
    category: "Buying Guides",
    slug: "/blog/hoa-document-red-flags"
  },
  {
    title: "HOA Reserve Fund: What It Is and Why It Matters for Buyers",
    excerpt: "An underfunded reserve leads directly to special assessments. Learn how reserve studies work, percent funding targets, and red flags.",
    date: "May 21, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-reserve-fund"
  },
  {
    title: "How Much HOA Fee Is Too Much? The DTI Rule Explained",
    excerpt: "A $400/month HOA fee can slash your purchasing power by $80,000. Learn how lenders calculate debt-to-income (DTI) ratios with HOA dues.",
    date: "May 20, 2026",
    category: "Financial Planning",
    slug: "/blog/how-much-hoa-fee-too-much"
  },
  {
    title: "HOA Fees and Mortgage Approval: How Lenders Calculate DTI",
    excerpt: "Your HOA fee directly impacts your mortgage pre-approval limit. Learn how mortgage underwriting algorithms treat association dues.",
    date: "May 19, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-fees-mortgage-approval"
  },
  {
    title: "New Construction HOA Fees: Why They're Lower (And Won't Stay That Way)",
    excerpt: "Builders set initial HOA fees artificially low to sell homes. Learn about developer subsidies and the years 3-7 deficit spike.",
    date: "May 18, 2026",
    category: "Buying Guides",
    slug: "/blog/new-construction-hoa-fees"
  },
  {
    title: "Condo HOA Fees in NYC: What You're Really Paying For",
    excerpt: "In Manhattan, $1,500/month maintenance fees are common. Learn what NYC condo and co-op fees cover — from doormen to Local Law 11 inspections.",
    date: "May 16, 2026",
    category: "Buying Guides",
    slug: "/blog/condo-hoa-fees-nyc"
  },
  {
    title: "HOA Fees in Arizona: Phoenix vs Scottsdale vs Tucson Compared",
    excerpt: "Scottsdale HOA fees can run 3x higher than Tucson for similar homes. Compare city averages, ARS Title 33 buyer rights, and desert community costs.",
    date: "May 14, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-arizona"
  },
  {
    title: "How to Lower Your HOA Fees Legally: Proven Strategies",
    excerpt: "You're not stuck with whatever the board decides. Discover 6 proven, legal strategies to reduce monthly association operating costs.",
    date: "May 11, 2026",
    category: "Financial Planning",
    slug: "/blog/lower-hoa-fees"
  },
  {
    title: "HOA Management Companies: What They Do and What They Cost",
    excerpt: "Understand management company scope, per-door monthly management fees, vendor contract oversight, and performance red flags.",
    date: "May 09, 2026",
    category: "Buying Guides",
    slug: "/blog/hoa-management-companies"
  },
  {
    title: "Self-Managed HOAs: The Pros, Cons, and Financial Realities",
    excerpt: "Can small developments successfully eliminate third-party property managers? Weigh financial savings against board burnout and legal liabilities.",
    date: "May 08, 2026",
    category: "Buying Guides",
    slug: "/blog/self-managed-hoa"
  },
  {
    title: "HOA Rules Enforcement: What They Can and Can't Fine You For",
    excerpt: "Learn what HOAs can legally regulate, state statutory limits on fines, due process requirements, and how to contest unfair violation notices.",
    date: "June 15, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/hoa-rules-enforcement"
  },
  {
    title: "HOA Fee Calculator: How to Estimate Your True Lifetime Cost",
    excerpt: "A $250/month fee totals over $90,000 over 30 years with inflation. Calculate the true compounding lifetime cost of common-interest ownership.",
    date: "June 22, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-fee-calculator-guide"
  },
  {
    title: "States With No HOA Laws: Where Homeowners Have the Most Freedom",
    excerpt: "In some states, HOAs have sweeping powers — in others, owners enjoy strong legal protections. Explore state-by-state regulatory frameworks.",
    date: "June 20, 2026",
    category: "Legal & Foreclosure",
    slug: "/blog/states-no-hoa-laws"
  },
  {
    title: "HOA Annual Budget Explained: Where Your Money Actually Goes",
    excerpt: "Where does your monthly HOA fee go? Learn how budgets are created, operating vs reserve splits, and how to spot wasteful spending.",
    date: "June 19, 2026",
    category: "Financial Planning",
    slug: "/blog/hoa-annual-budget"
  },
  {
    title: "What Do HOA Fees Cover? A Complete Room-by-Room Breakdown",
    excerpt: "Discover the 15+ physical assets and services paid for by your monthly association dues, from hazard insurance to common utility lines.",
    date: "June 18, 2026",
    category: "Buying Guides",
    slug: "/blog/what-do-hoa-fees-cover"
  },
  {
    title: "Buying in an HOA Community: 10 Questions to Ask Before You Offer",
    excerpt: "Discover 10 critical questions to ask regarding reserve funding, fee history, rental restrictions, and pending litigation before making an offer.",
    date: "June 17, 2026",
    category: "Buying Guides",
    slug: "/blog/questions-before-buying-hoa"
  },
  {
    title: "HOA Fees for Townhouses vs Single-Family Homes: Real Comparisons",
    excerpt: "Townhouse HOA fees often cover roofs and exterior walls — single-family HOAs usually don't. Compare average costs and coverage splits.",
    date: "June 17, 2026",
    category: "Buying Guides",
    slug: "/blog/townhouse-hoa-fees"
  },
  {
    title: "HOA Fees vs Condo Fees: Key Differences Explained",
    excerpt: "Buyers confuse HOA fees and condo fees constantly. Discover clear legal distinctions, typical coverage limits, and national cost comparisons.",
    date: "May 20, 2026",
    category: "Buying Guides",
    slug: "/blog/hoa-vs-condo-fee"
  },
  {
    title: "HOA vs No HOA: The Real Cost Comparison Nobody Shows You",
    excerpt: "No HOA sounds cheaper until you price out private pool memberships and landscaping. Compare total cost of ownership across both options.",
    date: "May 18, 2026",
    category: "Buying Guides",
    slug: "/blog/hoa-vs-no-hoa"
  },
  {
    title: "HOA Fees in Texas: Complete City-by-City Guide 2026",
    excerpt: "Compare average monthly HOA fees across Dallas, Houston, Austin, and San Antonio alongside Chapter 209 rights and developer fee spikes.",
    date: "May 17, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-texas"
  },
  {
    title: "HOA Fees in California: Why They're the Highest in the Nation",
    excerpt: "California HOA fees average $500/month. Learn why Golden State costs are soaring and how the Davis-Stirling Act limits annual dues increases.",
    date: "May 15, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-california"
  },
  {
    title: "HOA Fees in Florida: What Every Buyer Must Know Before Closing",
    excerpt: "Florida has the highest rate of HOA communities in the US. Discover why fees are surging under SB 4-D structural reserve safety reforms.",
    date: "May 13, 2026",
    category: "State Guides",
    slug: "/blog/hoa-fees-florida"
  },
  {
    title: "Average HOA Fees by State in 2026 — Full 50-State Breakdown",
    excerpt: "Discover average monthly HOA fees across all 50 US states in 2026. Review high-density master policies, legislative updates, and complete financial data.",
    date: "May 12, 2026",
    category: "State Guides",
    slug: "/blog/average-hoa-fees-by-state"
  },
  {
    title: "What Is an HOA Fee? Complete Guide for First-Time Buyers",
    excerpt: "Unpack mandatory association dues, understand what they cover, and calculate their long-term impact on your home buying budget.",
    date: "May 10, 2026",
    category: "Buying Guides",
    slug: "/blog/what-is-hoa-fee"
  }
];

const CATEGORIES = [
  'All',
  'State Guides',
  'Legal & Foreclosure',
  'Financial Planning',
  'Buying Guides'
] as const;

type CategoryFilter = typeof CATEGORIES[number];

const ITEMS_PER_PAGE = 12;

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset pagination when category or search changes
  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Pagination math
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Real Estate Blog | HOA Fee Calculator"
        description="Explore comprehensive articles, state HOA fee breakdowns, legal guides, foreclosure prevention steps, and financial advice for US homebuyers."
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              className="font-serif text-2xl font-bold text-primary"
              style={{display: 'none'}}
            >
              HOA<span className="text-accent">Calculator</span>.com
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider text-primary">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/states" className="hover:text-accent transition-colors">HOA Fees by State</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/blog" className="text-accent">Real Estate Blog</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Real Estate &amp; HOA Insights Blog
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Expert guides, state-by-state fee breakdowns, legal analysis, and financial strategies for American homeowners.
            </p>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search articles by topic, state, or keywords..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-5 py-3.5 pl-11 rounded-2xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-primary transition-all shadow-sm font-sans"
              />
              <svg 
                className="w-5 h-5 text-primary/40 absolute left-4 top-1/2 -translate-y-1/2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-bg-light text-primary/70 hover:bg-bg-light/80 hover:text-primary border border-border/60'
                    }`}
                  >
                    {category}
                    {category === 'All' ? ` (${ALL_ARTICLES.length})` : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Count Status */}
          <div className="flex justify-between items-center mb-6 text-sm text-primary/60 max-w-7xl mx-auto border-b border-border/40 pb-3">
            <span>
              Showing <strong className="text-primary">{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== 'All' && <span> in <span className="text-accent font-semibold">{selectedCategory}</span></span>}
              {searchQuery && <span> matching "<span className="text-primary font-semibold">{searchQuery}</span>"</span>}
            </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 card bg-bg-light/50 border border-border/60 rounded-3xl max-w-md mx-auto">
              <p className="text-lg font-serif font-bold text-primary mb-2">No articles found</p>
              <p className="text-sm text-primary/60 mb-6">Try searching for a different keyword or select another category.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article, idx) => (
                <article
                  key={idx}
                  className="card bg-white border border-border/80 hover:border-accent hover:shadow-xl transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-primary/60 font-medium">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
                      <Link to={article.slug}>{article.title}</Link>
                    </h2>

                    <p className="text-primary/70 text-sm leading-relaxed font-sans mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    to={article.slug}
                    className="text-accent font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-sans mt-auto"
                  >
                    Read Article <span>&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-border bg-white text-primary text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-all cursor-pointer"
              >
                &larr; Previous
              </button>

              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-accent text-white shadow-sm'
                        : 'bg-white border border-border text-primary/80 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-border bg-white text-primary text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-all cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-16 px-6 text-white/80 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
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
            <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool and resource hub for US homebuyers.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Calculator Home</Link></li>
              <li><Link to="/states" className="hover:text-accent transition-colors">HOA Fees by State</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Real Estate Blog</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="hover:text-accent transition-colors">Financial Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-xs opacity-60">
          © 2026 HOACalculator.com — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
