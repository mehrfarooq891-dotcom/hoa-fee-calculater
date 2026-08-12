import React, { useState, useMemo } from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import { Link } from 'react-router-dom';

interface CityItem {
  name: string;
  state: string;
  slug: string;
  avgMonthly: string;
  excerpt: string;
}

const ALL_CITIES: CityItem[] = [
  {
    name: "Austin",
    state: "Texas",
    slug: "austin-texas",
    avgMonthly: "$65 – $520",
    excerpt: "Downtown condos and suburban master-planned developments in Travis County like West Lake Hills and Steiner Ranch."
  },
  {
    name: "Houston",
    state: "Texas",
    slug: "houston-texas",
    avgMonthly: "$45 – $750",
    excerpt: "Master-planned communities in Katy, The Woodlands, and Sugar Land relying on HOA deed restrictions without formal city zoning."
  },
  {
    name: "Miami",
    state: "Florida",
    slug: "miami-florida",
    avgMonthly: "$185 – $890",
    excerpt: "Brickell luxury high-rises and beachfront condos navigating SB 4-D structural reserve mandates and coastal insurance premiums."
  },
  {
    name: "Orlando",
    state: "Florida",
    slug: "orlando-florida",
    avgMonthly: "$70 – $480",
    excerpt: "Short-term rental resort communities, Lake Nona master plans, and Central Florida condo maintenance trends."
  },
  {
    name: "Los Angeles",
    state: "California",
    slug: "los-angeles-california",
    avgMonthly: "$190 – $950",
    excerpt: "High-rise condo towers in Downtown LA and Century City to exclusive gated estates in Calabasas and Bel Air."
  },
  {
    name: "San Diego",
    state: "California",
    slug: "san-diego-california",
    avgMonthly: "$155 – $820",
    excerpt: "Coastal high-rise condos in La Jolla and Gaslamp, suburban townhomes, and Carmel Valley master associations."
  },
  {
    name: "Phoenix",
    state: "Arizona",
    slug: "phoenix-arizona",
    avgMonthly: "$60 – $360",
    excerpt: "Scottsdale luxury golf communities, East Valley master-planned HOAs in Gilbert and Chandler, and ARS Title 33 regulations."
  },
  {
    name: "Las Vegas",
    state: "Nevada",
    slug: "las-vegas-nevada",
    avgMonthly: "$55 – $780",
    excerpt: "Strip high-rise luxury towers, Summerlin master associations, Henderson communities, and NRS Chapter 116 reserve rules."
  },
  {
    name: "Charlotte",
    state: "North Carolina",
    slug: "charlotte-north-carolina",
    avgMonthly: "$50 – $430",
    excerpt: "Uptown lofts, Ballantyne master-planned subdivisions, and NC Planned Community Act guidelines."
  },
  {
    name: "Atlanta",
    state: "Georgia",
    slug: "atlanta-georgia",
    avgMonthly: "$75 – $510",
    excerpt: "Buckhead high-rise condos, Alpharetta swim & tennis clubs, and Georgia Property Owners' Association Act rules."
  }
];

const STATES = ['All', 'Texas', 'Florida', 'California', 'Arizona', 'Nevada', 'North Carolina', 'Georgia'];

export default function Cities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');

  const filteredCities = useMemo(() => {
    return ALL_CITIES.filter((city) => {
      const fullCityState = `${city.name}, ${city.state}`.toLowerCase();
      const matchesSearch = fullCityState.includes(searchQuery.toLowerCase().trim()) || 
                            city.excerpt.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const matchesState = selectedState === 'All' || city.state === selectedState;
      return matchesSearch && matchesState;
    });
  }, [searchQuery, selectedState]);

  // Group filtered cities by state for structured view
  const groupedCities = useMemo(() => {
    const groups: Record<string, CityItem[]> = {};
    filteredCities.forEach((city) => {
      if (!groups[city.state]) {
        groups[city.state] = [];
      }
      groups[city.state].push(city);
    });
    return groups;
  }, [filteredCities]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fees by City | HOA Fee Calculator"
        description="Explore HOA fee averages, monthly maintenance estimates, and community guidelines for major US cities including Austin, Miami, Los Angeles, Houston, and more for 2026."
        canonical="/cities"
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
              City-Level Market Hub
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              HOA Fees by City
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed">
              Explore average monthly dues, neighborhood variations, and homeowners association regulations across major US metropolitan markets for 2026.
            </p>
          </div>

          {/* Cross-link to States Banner */}
          <div className="max-w-3xl mx-auto mb-10 bg-bg-light border border-border/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
            <div>
              <span className="font-bold text-primary block text-base mb-0.5">Looking for state-wide averages?</span>
              <span className="text-xs text-primary/70">Compare HOA fee data, laws, and regulations across all 50 US states.</span>
            </div>
            <Link 
              to="/states"
              className="bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shrink-0"
            >
              View All 50 States &rarr;
            </Link>
          </div>

          {/* Search & State Filter Controls */}
          <div className="max-w-3xl mx-auto mb-10 space-y-5">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search city or state..."
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

            {/* State Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {STATES.map((st) => {
                const isActive = selectedState === st;
                return (
                  <button
                    key={st}
                    onClick={() => setSelectedState(st)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-bg-light text-primary/70 hover:bg-bg-light/80 hover:text-primary border border-border/60'
                    }`}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-8 text-sm text-primary/60 border-b border-border/40 pb-3">
            <span>
              Showing <strong className="text-primary">{filteredCities.length}</strong> {filteredCities.length === 1 ? 'city' : 'cities'}
              {selectedState !== 'All' && <span> in <span className="text-accent font-semibold">{selectedState}</span></span>}
              {searchQuery && <span> matching "<span className="text-primary font-semibold">{searchQuery}</span>"</span>}
            </span>
            <span className="text-xs bg-accent/10 text-accent font-bold px-3 py-1 rounded-full">
              Full Metro Guides
            </span>
          </div>

          {/* Empty State */}
          {filteredCities.length === 0 ? (
            <div className="text-center py-16 card bg-bg-light/50 border border-border/60 rounded-3xl max-w-md mx-auto">
              <p className="text-lg font-serif font-bold text-primary mb-2">No city found</p>
              <p className="text-sm text-primary/60 mb-6">Try searching for another city name or resetting filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedState('All');
                }}
                className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            /* Grouped View by State */
            <div className="space-y-12">
              {(Object.entries(groupedCities) as [string, CityItem[]][]).map(([stateName, citiesInState]) => (
                <div key={stateName} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-serif font-bold text-primary">{stateName}</h2>
                    <span className="text-xs bg-primary/10 text-primary/80 font-bold px-2.5 py-1 rounded-full">
                      {citiesInState.length} {citiesInState.length === 1 ? 'City' : 'Cities'}
                    </span>
                    <div className="flex-1 h-px bg-border/60"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {citiesInState.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/cities/${city.slug}`}
                        className="card border border-border/80 hover:border-accent hover:shadow-lg transition-all p-6 rounded-2xl group flex flex-col justify-between bg-white relative overflow-hidden"
                      >
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">
                                {city.name}, {city.state}
                              </h3>
                              <span className="text-xs text-primary/60 font-medium">
                                Estimated Range: <strong className="text-primary">{city.avgMonthly}/mo</strong>
                              </span>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-accent/10 text-accent px-3 py-1 rounded-full">
                              {city.state}
                            </span>
                          </div>
                          <p className="text-sm text-primary/70 line-clamp-2 leading-relaxed">
                            {city.excerpt}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-border/40 flex justify-between items-center text-xs font-bold text-accent">
                          <span>View Full {city.name} Guide</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Educational Info Section */}
          <section className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-16"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Why City-Level HOA Data Matters</h2>
              <p className="text-primary-100 text-base md:text-lg mb-8 leading-relaxed">
                Even within the same state, HOA dues vary dramatically between major urban downtown cores and outer suburban neighborhoods. Factors like high-rise elevator servicing, 24/7 security concierge, coastal building insurance, and gated infrastructure drive significant differences in monthly expenses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-accent font-bold text-base mb-1">Urban High-Rises</div>
                  <div className="text-xs opacity-80 leading-relaxed">$400 – $950+/mo including elevators, structural reserves & utilities.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-accent font-bold text-base mb-1">Resort / Gated</div>
                  <div className="text-xs opacity-80 leading-relaxed">$200 – $500/mo covering pools, security gates & private roads.</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-accent font-bold text-base mb-1">Standard Suburban</div>
                  <div className="text-xs opacity-80 leading-relaxed">$45 – $150/mo for common area landscaping & deed enforcement.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-100 py-12 px-6 border-t border-primary/20 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                HOA<span className="text-accent">Calculator</span>.com
              </span>
            </Link>
            <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool and city resource hub for US homebuyers.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Calculator</Link></li>
              <li><Link to="/states" className="hover:text-accent transition-colors">HOA Fees by State</Link></li>
              <li><Link to="/cities" className="hover:text-accent transition-colors">HOA Fees by City</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Tool</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Real Estate Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary/10 text-center text-xs opacity-60">
          <p>© 2026 HOACalculator.com. All rights reserved. Estimates are for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
