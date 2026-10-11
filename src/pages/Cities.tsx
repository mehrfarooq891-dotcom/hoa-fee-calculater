import React, { useState, useMemo } from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
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


const citiesPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are HOA fees higher in big cities than in suburbs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually yes, mostly because of housing type rather than the city itself. Big-city cores have more high-rise condos with elevators, parking structures, and full-time staff, which raise dues. Suburbs lean toward single-family HOAs covering landscaping and amenities, which tend to cost less."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are the fee ranges on the city guides?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ranges are estimates based on typical fees for each metro, useful for comparing cities and setting expectations. Actual fees vary by community, building age, and amenities. Confirm the real number in the HOA's resale certificate and current budget before making an offer."
        }
      },
      {
        "@type": "Question",
        "name": "Do HOA fees include property taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. HOA dues pay for community maintenance, amenities, insurance on shared structures, and reserves. Property taxes go to the city, county, and school district. Budget for both independently."
        }
      },
      {
        "@type": "Question",
        "name": "Can I negotiate HOA fees when buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dues are set by the HOA and generally not negotiable, but you can negotiate around them: ask the seller to cover upcoming special assessments, split HOA transfer fees, or factor high dues into your offer price."
        }
      }
    ]
  }
];

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
        schema={citiesPageSchema}
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

          {/* === ADDED 2026-10-11: expanded editorial content (AdSense value) === */}
          <div className="max-w-4xl mx-auto mt-20 space-y-14">

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Why Do HOA Fees Vary So Much by City?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-4">
                Two homes with the same price tag in different cities can come with HOA fees that differ by hundreds of dollars a month — and even two neighborhoods in the same city can be far apart. City-level variation comes down to a mix of local economics, housing stock, climate, and insurance markets.
              </p>
              <p className="text-primary/80 leading-relaxed mb-4">
                Labor and maintenance costs track local wages, so a community in a high-cost metro tends to spend more on landscaping, management, and repairs than a similar community in a lower-cost market. Climate matters too: coastal cities face salt-air corrosion, hurricane exposure, and expensive building insurance, while desert cities deal with extreme heat that wears on roofs and HVAC systems. And the age and style of a city's housing stock — downtown high-rises versus suburban subdivisions — shapes what HOAs are responsible for.
              </p>
              <p className="text-primary/80 leading-relaxed">
                That is why city-level data is more useful than state averages alone. A state average blends expensive coastal metros with affordable inland suburbs into one number that describes neither. Use the guides below to understand the city you are actually buying in.
              </p>
            </section>

            <section className="bg-bg-light border border-border/60 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                How to Use This City Guide
              </h2>
              <ol className="space-y-4 text-primary/80 leading-relaxed list-decimal list-inside">
                <li><strong className="text-primary">Search or filter</strong> for the metro you are buying in, then open its full city guide for typical fee ranges, neighborhood breakdowns, and local regulations.</li>
                <li><strong className="text-primary">Match the property type.</strong> Condo fees and single-family HOA fees cover different things — compare your target property type, not the city average.</li>
                <li><strong className="text-primary">Read the "what affects fees" factors below</strong> so you understand why a specific community sits above or below its city's typical range.</li>
                <li><strong className="text-primary">Verify with real documents.</strong> Ranges on this page are estimates to help you compare; the resale certificate, HOA budget, and reserve study tell you what a specific community actually charges.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                HOA Fee Trends by Region
              </h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                Every region has its own pattern. Here is a general overview of what tends to drive fees in the metros covered by this guide — remember that individual communities always vary.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Texas Cities: Austin and Houston</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Texas metros lean heavily on HOAs, especially in master-planned suburbs — Houston famously has no formal city zoning, so deed restrictions enforced by HOAs do much of the land-use work. Suburban single-family communities in areas like Katy, The Woodlands, and Sugar Land often carry modest dues for landscaping and amenity upkeep, while downtown Austin and Houston condos run higher because the association maintains the building. Property taxes are high in Texas, but that is separate from HOA dues — compare the two independently.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Florida Cities: Miami and Orlando</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Florida HOA fees tend to run higher than the national middle, driven by coastal insurance costs, hurricane exposure, and — since the Surfside tragedy — stricter structural reserve requirements for older condo buildings (SB 4-D milestone inspections and mandatory reserves). Miami's luxury high-rises sit at the top of the range with full-service staffing, while Orlando's resort and short-term-rental communities carry their own amenity-heavy fee structures. Buyers in Florida should pay special attention to reserve funding and insurance line items in HOA budgets.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">California Cities: Los Angeles and San Diego</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                California fees tend to be among the highest in the country, reflecting high labor costs, earthquake insurance considerations, and the prevalence of condo and townhouse living in expensive metros. Downtown LA and Century City high-rises with elevators, parking structures, and 24-hour staffing sit at the top; suburban townhome communities in places like Carmel Valley run lower but still above national averages. California also caps annual regular assessment increases at 20 percent by statute, which gives buyers some predictability on dues growth.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Arizona and Nevada: Phoenix and Las Vegas</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Phoenix-area HOAs are common in master-planned communities in Gilbert, Chandler, and Scottsdale, where dues often cover extensive common landscaping in a desert climate — irrigation is a real line item. Las Vegas combines Summerlin-style master associations with Strip-area luxury high-rises, so the city's range is wide: modest suburban dues on one end, full-service tower fees on the other. Both states have HOA statutes governing reserves and disclosures, so buyers get a reasonable paper trail when doing due diligence.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Southeast: Charlotte and Atlanta</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Charlotte and Atlanta tend to sit in the moderate range nationally. Swim-and-tennis suburban communities are the classic HOA model here — dues covering pools, clubhouses, and landscaping at levels many buyers find reasonable compared with coastal metros. Uptown Charlotte and Buckhead Atlanta condos run higher, as with any downtown high-rise. Both states have planned-community statutes that set ground rules for HOA governance, which is worth reviewing before you buy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                What Affects HOA Fees in a City?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                When you see a fee that is higher or lower than a city's typical range, one of these factors is usually the reason.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">Housing type and building style</h3>
              <p className="text-primary/80 leading-relaxed mb-5">
                High-rise condos with elevators, parking garages, and central systems cost more to run than garden-style townhomes, which cost more than single-family subdivisions where owners maintain their own lots. A city's mix of housing stock shapes its overall fee profile.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">Local labor and service costs</h3>
              <p className="text-primary/80 leading-relaxed mb-5">
                Landscaping, property management, security, and maintenance are all local services priced at local wages. In high-cost metros, these line items alone can double what a comparable community pays in a lower-cost market.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">Insurance markets</h3>
              <p className="text-primary/80 leading-relaxed mb-5">
                In hurricane-prone coastal cities and wildfire-exposed areas, master insurance policies have become one of the fastest-growing HOA expenses. A spike in premiums can push dues up sharply year over year — and it is largely outside the HOA's control.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">Amenities and services</h3>
              <p className="text-primary/80 leading-relaxed mb-5">
                Resort-style pools, fitness centers, gatehouses, and concierge staff are priced into dues. Cities with many amenity-rich master-planned communities will show higher typical ranges than cities where basic landscaping-only HOAs dominate.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">Building age and reserve health</h3>
              <p className="text-primary/80 leading-relaxed mb-5">
                Older buildings in established cities face more major-repair cycles — roofs, facades, elevators, plumbing. Communities that fund reserves properly bake that into dues; those that do not eventually issue special assessments. Always check the reserve study, not just the monthly number.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary mb-2">State and local regulations</h3>
              <p className="text-primary/80 leading-relaxed">
                Some states mandate reserve studies, cap fee increases, or require structural inspections for older buildings — all of which show up in what owners pay. Local ordinances on short-term rentals, water use, or building codes can add costs too.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                City HOA Fee FAQs
              </h2>
              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Are HOA fees higher in big cities than in suburbs?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Usually, yes — but mostly because of housing type, not the city itself. Big-city cores have more high-rise condos with elevators, parking structures, and full-time staff, all of which raise dues. Suburbs lean toward single-family HOAs covering landscaping and amenities, which tend to cost less. Compare similar property types rather than city averages when you are deciding where to buy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">How accurate are the fee ranges on the city guides?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    They are estimates based on typical ranges for each metro — useful for comparing cities and setting expectations, but not quotes. Actual fees vary by community, building age, and amenities. Before making an offer, confirm the real number in the HOA's resale certificate and current budget.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Which cities in this guide tend to have the highest HOA fees?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    In general, Los Angeles and Miami tend to show the highest typical ranges, driven by luxury high-rises, coastal insurance costs, and full-service staffing. San Diego and Las Vegas high-rise towers also run high. Suburban Texas and Southeast communities — Houston suburbs, Charlotte, Atlanta — tend to be more moderate. These are broad tendencies; individual communities vary widely.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Do HOA fees include property taxes?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    No. HOA dues and property taxes are completely separate. Your HOA fee pays for community maintenance, amenities, insurance on shared structures, and reserves. Property taxes go to the city, county, and school district. In high-tax states like Texas, buyers sometimes confuse the two — budget for both independently.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Can I negotiate HOA fees when buying?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    The dues themselves are set by the HOA and are generally not negotiable. But you can negotiate around them: ask the seller to cover upcoming special assessments, request HOA transfer fees be split, or factor high dues into your offer price. What you can always do is choose — compare total ownership costs across communities and pick the one whose fee buys the value and risk profile you want.
                  </p>
                </div>

              </div>
            </section>

          </div>
          {/* === END added content === */}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-100 py-12 px-6 border-t border-primary/20 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                HOAFee<span className="text-accent">Calculator</span>.com
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
              <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-primary/20">
              <span className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">Connect With Us</span>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary/10 text-center text-xs opacity-60">
          <p>© 2026 HOAFeeCalculator.com. All rights reserved. Estimates are for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
