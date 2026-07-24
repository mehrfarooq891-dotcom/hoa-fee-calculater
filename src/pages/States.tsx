import React, { useState } from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

interface StateItem {
  name: string;
  slug: string;
  isActive: boolean;
}

const ALL_STATES: StateItem[] = [
  { name: "Alabama", slug: "alabama", isActive: false },
  { name: "Alaska", slug: "alaska", isActive: false },
  { name: "Arizona", slug: "arizona", isActive: false },
  { name: "Arkansas", slug: "arkansas", isActive: false },
  { name: "California", slug: "california", isActive: true },
  { name: "Colorado", slug: "colorado", isActive: false },
  { name: "Connecticut", slug: "connecticut", isActive: false },
  { name: "Delaware", slug: "delaware", isActive: false },
  { name: "Florida", slug: "florida", isActive: true },
  { name: "Georgia", slug: "georgia", isActive: true },
  { name: "Hawaii", slug: "hawaii", isActive: false },
  { name: "Idaho", slug: "idaho", isActive: false },
  { name: "Illinois", slug: "illinois", isActive: true },
  { name: "Indiana", slug: "indiana", isActive: false },
  { name: "Iowa", slug: "iowa", isActive: false },
  { name: "Kansas", slug: "kansas", isActive: false },
  { name: "Kentucky", slug: "kentucky", isActive: false },
  { name: "Louisiana", slug: "louisiana", isActive: false },
  { name: "Maine", slug: "maine", isActive: false },
  { name: "Maryland", slug: "maryland", isActive: false },
  { name: "Massachusetts", slug: "massachusetts", isActive: false },
  { name: "Michigan", slug: "michigan", isActive: false },
  { name: "Minnesota", slug: "minnesota", isActive: false },
  { name: "Mississippi", slug: "mississippi", isActive: false },
  { name: "Missouri", slug: "missouri", isActive: false },
  { name: "Montana", slug: "montana", isActive: false },
  { name: "Nebraska", slug: "nebraska", isActive: false },
  { name: "Nevada", slug: "nevada", isActive: false },
  { name: "New Hampshire", slug: "new-hampshire", isActive: false },
  { name: "New Jersey", slug: "new-jersey", isActive: false },
  { name: "New Mexico", slug: "new-mexico", isActive: false },
  { name: "New York", slug: "new-york", isActive: true },
  { name: "North Carolina", slug: "north-carolina", isActive: true },
  { name: "North Dakota", slug: "north-dakota", isActive: false },
  { name: "Ohio", slug: "ohio", isActive: false },
  { name: "Oklahoma", slug: "oklahoma", isActive: false },
  { name: "Oregon", slug: "oregon", isActive: false },
  { name: "Pennsylvania", slug: "pennsylvania", isActive: false },
  { name: "Rhode Island", slug: "rhode-island", isActive: false },
  { name: "South Carolina", slug: "south-carolina", isActive: false },
  { name: "South Dakota", slug: "south-dakota", isActive: false },
  { name: "Tennessee", slug: "tennessee", isActive: false },
  { name: "Texas", slug: "texas", isActive: true },
  { name: "Utah", slug: "utah", isActive: false },
  { name: "Vermont", slug: "vermont", isActive: false },
  { name: "Virginia", slug: "virginia", isActive: false },
  { name: "Washington", slug: "washington", isActive: false },
  { name: "West Virginia", slug: "west-virginia", isActive: false },
  { name: "Wisconsin", slug: "wisconsin", isActive: false },
  { name: "Wyoming", slug: "wyoming", isActive: false },
];

export default function States() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = ALL_STATES.filter((st) =>
    st.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fees by State | HOA Fee Calculator"
        description="Explore HOA fee data, monthly averages, and homeowners association laws across all 50 US states. Find state-by-state HOA costs updated for 2026."
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
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
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/states" className="text-accent">HOA Fees by State</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Real Estate Blog</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              HOA Fees by State
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed">
              Browse average monthly fees, state regulations, and homeowners association guides across all 50 US states for 2026.
            </p>
          </div>

          {/* Search Filter */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-11 rounded-2xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-primary transition-all shadow-sm"
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
          </div>

          {/* Grid of States */}
          {filteredStates.length === 0 ? (
            <div className="text-center py-12 text-primary/60">
              No state found matching "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredStates.map((st) => {
                if (st.isActive) {
                  return (
                    <Link
                      key={st.slug}
                      to={`/states/${st.slug}`}
                      className="card border border-border hover:border-accent hover:shadow-md transition-all p-5 rounded-2xl group flex justify-between items-center bg-white"
                    >
                      <div>
                        <span className="font-bold text-primary group-hover:text-accent block text-base transition-colors">
                          {st.name}
                        </span>
                        <span className="text-xs text-accent font-medium mt-0.5 inline-block">
                          View State Guide →
                        </span>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent font-semibold px-2.5 py-1 rounded-full shrink-0">
                        Active
                      </span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={st.slug}
                    className="border border-border/50 p-5 rounded-2xl flex justify-between items-center bg-bg-light/50 opacity-70 select-none"
                  >
                    <div>
                      <span className="font-medium text-primary/70 block text-base">
                        {st.name}
                      </span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary/50 font-medium px-2.5 py-1 rounded-full shrink-0">
                      Coming Soon
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Info Banner */}
          <section className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-16"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Why State HOA Data Matters</h2>
              <p className="opacity-80 leading-relaxed mb-6">
                HOA fees vary dramatically across the United States. While the national median is roughly $300 to $400 per month, coastal states like Florida and New York average significantly higher due to building maintenance mandates and insurance costs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-accent font-bold text-lg mb-1">High Average States</div>
                  <div className="text-sm opacity-80">New York, Florida, California</div>
                </div>
                <div>
                  <div className="text-accent font-bold text-lg mb-1">Lower Average States</div>
                  <div className="text-sm opacity-80">Arkansas, Indiana, Mississippi</div>
                </div>
              </div>
            </div>
          </section>
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
            <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool for US homebuyers.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-accent transition-colors">Calculator Home</Link></li>
              <li><Link to="/states" className="hover:text-accent transition-colors">HOA Fees by State</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Real Estate Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

