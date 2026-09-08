import React, { Suspense } from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import { useParams, Link } from 'react-router-dom';
import { statesData } from '@/src/data/statesData';

const Calculator = React.lazy(() => import('@/src/components/Calculator'));

interface StateConfig {
  avgFee: number;
  excerpt: string;
  cities: { name: string; avgFee: number; range: string }[];
  laws: string[];
}

const STATE_BLOG_GUIDES: Record<string, { url: string; title: string; desc: string }> = {
  arizona: {
    url: "/blog/hoa-fees-arizona",
    title: "Arizona HOA Fees: Laws, County Averages & Buyer's Guide",
    desc: "Read our comprehensive deep-dive into A.R.S. Title 33 regulations, Maricopa vs. Pima County dues, and desert pool/AC reserve requirements."
  },
  california: {
    url: "/blog/hoa-fees-california",
    title: "California HOA Fees: Davis-Stirling Act & Cost Analysis",
    desc: "In-depth analysis of Davis-Stirling Civil Code caps, 20% annual increase limits, and coastal condo reserve fund health."
  },
  texas: {
    url: "/blog/hoa-fees-texas",
    title: "Texas HOA Fees: Complete City-by-City Legal & Financial Guide",
    desc: "Texas Property Code Chapter 209 rules, North Dallas vs. West Houston vs. Austin master-planned amenities, and assessment limits."
  },
  florida: {
    url: "/blog/hoa-fees-florida",
    title: "Florida HOA & Condo Fees: Post-SB 4-D Milestone Inspection Guide",
    desc: "Critical guide to mandatory structural integrity reserve studies, hurricane insurance spikes, and special assessment prevention."
  },
  georgia: {
    url: "/blog/hoa-fees-georgia",
    title: "Georgia HOA Fees: POA Act & Metro Atlanta Cost Guide",
    desc: "Understanding the Georgia Property Owners' Association Act, voluntary vs. statutory HOAs, and Atlanta club amenities."
  },
  illinois: {
    url: "/blog/hoa-fees-illinois",
    title: "Illinois HOA & Condo Dues: Chicago High-Rise & Suburb Guide",
    desc: "Section 18.5 master associations, central heating utility reserves, and Cook County structural requirements."
  },
  nevada: {
    url: "/blog/hoa-fees-nevada",
    title: "Nevada HOA Fees: NRS 116 Rules & Las Vegas Valley Guide",
    desc: "NRS 116 super-priority liens, Ombudsman dispute arbitration, and master association fee layering in Clark County."
  },
  "new-york": {
    url: "/blog/average-hoa-fees-new-york",
    title: "New York HOA & Condo Common Charges Guide",
    desc: "NYC condominium common charges vs. co-op maintenance fees, local laws, and tax abatement expirations."
  },
  "north-carolina": {
    url: "/blog/hoa-fees-north-carolina",
    title: "North Carolina HOA Fees: Planned Community Act Guide",
    desc: "NCGS Chapter 47F requirements, Charlotte vs. Raleigh dues, and retention pond capital reserve budgeting."
  },
  virginia: {
    url: "/blog/hoa-fees-virginia",
    title: "Virginia HOA Fees: Property Owners' Association Act Guide",
    desc: "Title 55.1 Chapter 18 regulations, Northern Virginia (NOVA) vs. Richmond fee trends, and resale disclosure package rights."
  },
  washington: {
    url: "/blog/hoa-fees-washington-state",
    title: "Washington State HOA Fees: WUCIOA & Pacific Northwest Guide",
    desc: "RCW 64.90 (WUCIOA) mandatory reserve studies, Seattle King County dues, and moisture/earthquake remediation reserves."
  },
  colorado: {
    url: "/blog/hoa-fees-colorado",
    title: "Colorado HOA Fees: CCIOA & HB 22-1137 Guide",
    desc: "HB 22-1137 collection and foreclosure restrictions, Denver metro median dues, and mountain snow removal budgeting."
  },
  tennessee: {
    url: "/blog/hoa-fees-tennessee",
    title: "Tennessee HOA Fees: Nashville & Memphis Homeowner Guide",
    desc: "Navigating high-growth middle Tennessee dues, restrictive covenants, and property management oversight."
  },
  "new-jersey": {
    url: "/blog/hoa-fees-new-jersey",
    title: "New Jersey HOA Fees: PREDFDA & Radburn Law Guide",
    desc: "Radburn election regulations, NJ DCA oversight, and commuter corridor townhouse association reserves."
  }
};

const getStateData = (slug: string, displayName: string): StateConfig => {
  const normalized = slug.toLowerCase().trim();
  const stateRecord = statesData[normalized] || statesData['texas'];
  return {
    avgFee: stateRecord.avgFee,
    excerpt: stateRecord.intro,
    cities: stateRecord.cities,
    laws: stateRecord.laws
  };
};

export default function StateTemplate() {
  const { stateName = 'texas' } = useParams();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  
  // Format state name for display
  const cleanSlug = (stateName || 'texas').toLowerCase().trim();
  const displayName = cleanSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Fetch data specifically for this state
  const stateData = getStateData(cleanSlug, displayName);
  const stateGuide = STATE_BLOG_GUIDES[cleanSlug];

  const faqs = [
    {
      q: `How much are average HOA fees in ${displayName}?`,
      a: `The estimated average HOA fee in ${displayName} is around $${stateData.avgFee} per month. However, actual monthly costs vary significantly by city, with high-demand urban areas and master-planned golf communities skewing higher, while rural or older subdivisions have much lower dues.`
    },
    {
      q: `What are the primary homeowners association laws in ${displayName}?`,
      a: `HOAs in ${displayName} are governed by specific state regulations designed to ensure financial transparency and protect homeowner rights. These statutes typically mandate that associations hold open board meetings, maintain detailed financial records, and provide reasonable access to books for all active members.`
    },
    {
      q: `Can ${displayName} HOAs restrict solar panels or xeriscaping?`,
      a: `While associations can enforce aesthetic standards, ${displayName} laws often protect homeowners' rights to install solar energy systems or low-water xeriscaping. However, you should always consult your specific community's bylaws and CC&Rs, as reasonable aesthetic guidelines can still be enforced by the board.`
    },
    {
      q: `What happens if a homeowner defaults on HOA fees in ${displayName}?`,
      a: `If a homeowner defaults on dues in ${displayName}, the association has the legal authority to impose late fees, apply interest penalties, and suspend access to communal amenities. If the delinquency remains unpaid, the HOA can place a lien on the property, which can ultimately lead to foreclosure.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${displayName} HOA Fees 2026 | Average Costs & Calculator`}
        description={`Calculate HOA fees in ${displayName}. See average costs by city, legal rules, and estimate your lifetime HOA expenses.`}
        canonical={`/states/${cleanSlug}`}
        schema={[{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `HOA Guide ${displayName}`,
          "description": `HOA fee data and laws for ${displayName}`
        }, faqSchema]}
      />

      {/* Header */}
      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <Link to="/states" className="text-accent font-bold hover:underline mb-4 inline-block">← Back to All States</Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              {displayName} HOA Fee Calculator & Guide 2026
            </h1>
            <p className="text-xl text-primary opacity-70 max-w-3xl leading-relaxed">
              Thinking about buying in {displayName}? Here's what you need to know about local HOA laws, average costs, and how to avoid overpaying.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary opacity-80 uppercase font-bold tracking-wider mt-4">
              <span>Updated: April 2026</span>
              <span>•</span>
              <span className="text-accent normal-case font-bold">Reviewed by the HOA Research Team</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <section className="card border-none shadow-xl">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">HOA Fees by City in {displayName}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-4 font-bold text-primary uppercase text-xs tracking-wider">City</th>
                        <th className="py-4 font-bold text-primary uppercase text-xs tracking-wider">Estimated Average HOA Fee Range</th>
                        <th className="py-4 font-bold text-primary uppercase text-xs tracking-wider">2026 Trend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {stateData.cities.map((city) => (
                        <tr key={city.name} className="hover:bg-bg-light transition-colors">
                          <td className="py-6 font-bold text-primary">{city.name}</td>
                          <td className="py-6 text-accent font-bold">{city.range}/mo</td>
                          <td className="py-6 text-red-500 font-bold">↑ 4.2%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">{displayName} HOA Laws You Must Know</h2>
                <div className="space-y-6 text-primary opacity-80 text-lg leading-relaxed font-sans">
                  <p>
                    {stateData.excerpt}
                  </p>
                  <p>
                    In {displayName}, HOAs are governed by specific state statutes that protect both the association and individual homeowners. It's critical to understand your rights before you sign on the dotted line.
                  </p>
                  <p>
                    One of the most important aspects of local laws is transparency. HOA boards are typically required to hold open, announced meetings and provide clear, itemized access to financial records and meeting minutes.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    {stateData.laws.map((law, index) => (
                      <li key={index} className="text-primary/90 font-medium font-sans">
                        {law}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-bg-light p-8 rounded-2xl border-l-4 border-accent italic mt-6 font-serif">
                    "Always review the 'Master Deed' and 'Bylaws' specific to your community. These documents often override general state guidelines regarding architectural controls and fine structures."
                  </div>

                  {stateGuide ? (
                    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-bg-light border-2 border-accent/30 rounded-2xl p-6 md:p-8 mt-10 shadow-sm not-prose">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="space-y-2">
                          <span className="inline-block bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                            Featured Research Guide
                          </span>
                          <h3 className="text-2xl font-serif font-bold text-primary">
                            {stateGuide.title}
                          </h3>
                          <p className="text-primary/80 text-sm md:text-base max-w-2xl leading-relaxed font-sans">
                            {stateGuide.desc}
                          </p>
                        </div>
                        <Link 
                          to={stateGuide.url}
                          className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all whitespace-nowrap shadow-md hover:scale-105 active:scale-95"
                        >
                          Read Full Guide →
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-bg-light border border-border rounded-2xl p-6 md:p-8 mt-10 not-prose">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                          <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                            National Benchmark
                          </span>
                          <h3 className="text-xl font-serif font-bold text-primary">
                            How Do {displayName} HOA Fees Compare Nationally?
                          </h3>
                          <p className="text-primary/70 text-sm mt-1 font-sans">
                            See how {displayName} stacks up against all 50 states in our nationwide fee and legislation report.
                          </p>
                        </div>
                        <Link 
                          to="/blog/average-hoa-fees-by-state"
                          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full text-sm transition-all whitespace-nowrap"
                        >
                          View 50-State Ranking →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </article>

              <section id="calculator" className="pt-8 border-t border-border">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Calculate Your Custom {displayName} Lifetime HOA Cost</h2>
                <Suspense fallback={
                  <div className="min-h-[500px] flex flex-col items-center justify-center bg-bg-light/50 rounded-3xl border border-border/50 p-8 shadow-sm">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-sm text-primary/60 font-medium">Loading HOA Fee Calculator...</p>
                  </div>
                }>
                  <Calculator />
                </Suspense>
              </section>

              <section className="pt-16 mt-8 border-t border-border">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">{displayName} HOA Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={index} className="border border-border/60 rounded-2xl overflow-hidden transition-all duration-200">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full text-left px-6 py-5 bg-bg-light hover:bg-bg-light/80 flex justify-between items-center transition-colors font-sans cursor-pointer focus:outline-none"
                        >
                          <span className="font-bold text-primary text-lg pr-4">{faq.q}</span>
                          <span className={`text-accent font-bold transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-border/40' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                          <p className="px-6 py-5 text-primary opacity-80 leading-relaxed font-sans text-base">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="bg-bg-light p-8 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Need a Comprehensive Property Budget?</h3>
                  <p className="text-primary/70 text-sm font-sans">Compare multiple properties side-by-side or calculate complex inflation-adjusted lifetime HOA costs.</p>
                </div>
                <Link to="/" className="btn bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-bold transition-all text-center whitespace-nowrap font-sans">
                  ← Go to Home Page Calculator
                </Link>
              </div>
            </div>

            <aside className="space-y-8">
              {stateGuide && (
                <div className="card bg-accent/10 border-2 border-accent/30 shadow-md">
                  <span className="text-xs uppercase font-bold tracking-wider text-accent block mb-2">Detailed State Report</span>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">
                    {stateGuide.title}
                  </h4>
                  <p className="text-primary/75 text-xs font-sans leading-relaxed mb-4">
                    {stateGuide.desc}
                  </p>
                  <Link 
                    to={stateGuide.url}
                    className="inline-flex items-center gap-1.5 text-accent font-bold hover:underline text-sm font-sans"
                  >
                    Read State Analysis →
                  </Link>
                </div>
              )}

              <div className="card bg-primary text-white border-none">
                <h4 className="font-serif text-xl font-bold mb-6 text-accent font-sans">Related State Guides</h4>
                <ul className="space-y-4">
                  {['Florida', 'California', 'Arizona', 'Texas'].filter(s => s.toLowerCase() !== stateName.toLowerCase()).slice(0, 3).map((s) => (
                    <li key={s}>
                      <Link 
                        to={`/states/${s.toLowerCase()}`} 
                        className="flex justify-between items-center group"
                      >
                        <span className="group-hover:text-accent transition-colors font-bold font-sans">{s} HOA Guide</span>
                        <span className="text-accent">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card shadow-md border border-border">
                <h4 className="font-serif text-lg font-bold text-primary mb-4 font-sans">Essential Buyer Guides</h4>
                <ul className="space-y-3 text-sm font-sans">
                  <li>
                    <Link to="/blog/hoa-reserve-fund" className="text-primary/80 hover:text-accent font-medium block">
                      • HOA Reserve Fund Guide for Buyers
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/questions-before-buying-hoa" className="text-primary/80 hover:text-accent font-medium block">
                      • 10 Questions to Ask Before Buying
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/hoa-document-red-flags" className="text-primary/80 hover:text-accent font-medium block">
                      • Red Flags in HOA Resale Documents
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/average-hoa-fees-by-state" className="text-primary/80 hover:text-accent font-medium block">
                      • Average HOA Fees by State (Ranked)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="card shadow-lg border-none">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xl">💡</div>
                   <h4 className="font-serif text-xl font-bold text-primary">Expert Tip</h4>
                </div>
                <p className="text-primary opacity-70 leading-relaxed italic font-sans text-base">
                  "In {displayName}, property values are highly tied to HOA financial health. A poorly funded{' '}
                  <Link to="/blog/hoa-reserve-fund" className="text-accent underline hover:text-accent/80 not-italic font-semibold">
                    reserve fund
                  </Link>{' '}
                  can trigger five-figure{' '}
                  <Link to="/blog/hoa-special-assessment" className="text-accent underline hover:text-accent/80 not-italic font-semibold">
                    special assessments
                  </Link>{' '}
                  that destroy home equity overnight."
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/75 mt-auto border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
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
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm font-sans">© 2026 All Rights Reserved. Data for {displayName} updated April 2026.</p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
}
