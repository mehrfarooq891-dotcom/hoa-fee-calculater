import React, { useState, useMemo } from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

type Region = 'Northeast' | 'Midwest' | 'South' | 'West';

interface StateItem {
  name: string;
  slug: string;
  region: Region;
}

const ALL_STATES: StateItem[] = [
  { name: "Alabama", slug: "alabama", region: "South" },
  { name: "Alaska", slug: "alaska", region: "West" },
  { name: "Arizona", slug: "arizona", region: "West" },
  { name: "Arkansas", slug: "arkansas", region: "South" },
  { name: "California", slug: "california", region: "West" },
  { name: "Colorado", slug: "colorado", region: "West" },
  { name: "Connecticut", slug: "connecticut", region: "Northeast" },
  { name: "Delaware", slug: "delaware", region: "South" },
  { name: "Florida", slug: "florida", region: "South" },
  { name: "Georgia", slug: "georgia", region: "South" },
  { name: "Hawaii", slug: "hawaii", region: "West" },
  { name: "Idaho", slug: "idaho", region: "West" },
  { name: "Illinois", slug: "illinois", region: "Midwest" },
  { name: "Indiana", slug: "indiana", region: "Midwest" },
  { name: "Iowa", slug: "iowa", region: "Midwest" },
  { name: "Kansas", slug: "kansas", region: "Midwest" },
  { name: "Kentucky", slug: "kentucky", region: "South" },
  { name: "Louisiana", slug: "louisiana", region: "South" },
  { name: "Maine", slug: "maine", region: "Northeast" },
  { name: "Maryland", slug: "maryland", region: "South" },
  { name: "Massachusetts", slug: "massachusetts", region: "Northeast" },
  { name: "Michigan", slug: "michigan", region: "Midwest" },
  { name: "Minnesota", slug: "minnesota", region: "Midwest" },
  { name: "Mississippi", slug: "mississippi", region: "South" },
  { name: "Missouri", slug: "missouri", region: "Midwest" },
  { name: "Montana", slug: "montana", region: "West" },
  { name: "Nebraska", slug: "nebraska", region: "Midwest" },
  { name: "Nevada", slug: "nevada", region: "West" },
  { name: "New Hampshire", slug: "new-hampshire", region: "Northeast" },
  { name: "New Jersey", slug: "new-jersey", region: "Northeast" },
  { name: "New Mexico", slug: "new-mexico", region: "West" },
  { name: "New York", slug: "new-york", region: "Northeast" },
  { name: "North Carolina", slug: "north-carolina", region: "South" },
  { name: "North Dakota", slug: "north-dakota", region: "Midwest" },
  { name: "Ohio", slug: "ohio", region: "Midwest" },
  { name: "Oklahoma", slug: "oklahoma", region: "South" },
  { name: "Oregon", slug: "oregon", region: "West" },
  { name: "Pennsylvania", slug: "pennsylvania", region: "Northeast" },
  { name: "Rhode Island", slug: "rhode-island", region: "Northeast" },
  { name: "South Carolina", slug: "south-carolina", region: "South" },
  { name: "South Dakota", slug: "south-dakota", region: "Midwest" },
  { name: "Tennessee", slug: "tennessee", region: "South" },
  { name: "Texas", slug: "texas", region: "South" },
  { name: "Utah", slug: "utah", region: "West" },
  { name: "Vermont", slug: "vermont", region: "Northeast" },
  { name: "Virginia", slug: "virginia", region: "South" },
  { name: "Washington", slug: "washington", region: "West" },
  { name: "West Virginia", slug: "west-virginia", region: "South" },
  { name: "Wisconsin", slug: "wisconsin", region: "Midwest" },
  { name: "Wyoming", slug: "wyoming", region: "West" },
];

const REGIONS: ('All' | Region)[] = ['All', 'Northeast', 'South', 'Midwest', 'West'];

export default function States() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | Region>('All');

  const filteredStates = useMemo(() => {
    return ALL_STATES.filter((st) => {
      const matchesSearch = st.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const matchesRegion = selectedRegion === 'All' || st.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fees by State | All 50 US States | HOA Fee Calculator"
        description="Explore HOA fee data, monthly averages, legal limits, and homeowners association laws across all 50 US states for 2026."
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
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              HOA Fees by State — All 50 US States
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed">
              Browse average monthly fees, legal guidelines, and community regulations for all 50 US states updated for 2026.
            </p>
          </div>

          {/* Search & Region Filters */}
          <div className="max-w-3xl mx-auto mb-10 space-y-5">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search any of the 50 states..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {REGIONS.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-bg-light text-primary/70 hover:bg-bg-light/80 hover:text-primary border border-border/60'
                    }`}
                  >
                    {region}
                    {region === 'All' ? ` (${ALL_STATES.length})` : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Count Status Bar */}
          <div className="flex justify-between items-center mb-6 text-sm text-primary/60 border-b border-border/40 pb-3">
            <span>
              Showing <strong className="text-primary">{filteredStates.length}</strong> {filteredStates.length === 1 ? 'state' : 'states'}
              {selectedRegion !== 'All' && <span> in <span className="text-accent font-semibold">{selectedRegion}</span> region</span>}
              {searchQuery && <span> matching "<span className="text-primary font-semibold">{searchQuery}</span>"</span>}
            </span>
            <span className="text-xs bg-accent/10 text-accent font-bold px-3 py-1 rounded-full">
              All 50 States Available
            </span>
          </div>

          {/* Grid of States */}
          {filteredStates.length === 0 ? (
            <div className="text-center py-16 card bg-bg-light/50 border border-border/60 rounded-3xl max-w-md mx-auto">
              <p className="text-lg font-serif font-bold text-primary mb-2">No state found</p>
              <p className="text-sm text-primary/60 mb-6">Try searching for another state name or selecting a different region.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All');
                }}
                className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredStates.map((st) => (
                <Link
                  key={st.slug}
                  to={`/states/${st.slug}`}
                  className="card border border-border/80 hover:border-accent hover:shadow-md transition-all p-5 rounded-2xl group flex justify-between items-center bg-white"
                >
                  <div>
                    <span className="font-bold text-primary group-hover:text-accent block text-base transition-colors">
                      {st.name}
                    </span>
                    <span className="text-xs text-accent font-semibold mt-1 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View State Guide &rarr;
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-bg-light text-primary/60 px-2.5 py-1 rounded-full shrink-0 border border-border/50">
                    {st.region}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Info Banner */}
          <section className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-16"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Why State HOA Data Matters</h2>
              <p className="opacity-80 leading-relaxed mb-6">
                HOA fees vary dramatically across the United States. While the national median is roughly $300 to $400 per month, coastal states like Hawaii, New York, Florida, and California average significantly higher due to structural reserves, hazard insurance, and property taxes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-accent font-bold text-base mb-1">Highest Average States</div>
                  <div className="text-xs opacity-80 leading-relaxed">Hawaii, New York, California, Florida, New Jersey</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-accent font-bold text-base mb-1">Lower Average States</div>
                  <div className="text-xs opacity-80 leading-relaxed">Arkansas, Indiana, Mississippi, West Virginia, Iowa</div>
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
            <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool and resource hub for US homebuyers.</p>
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


