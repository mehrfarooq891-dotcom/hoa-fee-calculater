import React from 'react';
import Calculator from '@/src/components/Calculator';
import SEO from '@/src/components/SEO';
import { useParams, Link } from 'react-router-dom';
import { statesData } from '@/src/data/statesData';

interface StateConfig {
  avgFee: number;
  excerpt: string;
  cities: { name: string; avgFee: number; range: string }[];
  laws: string[];
}

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
  
  // Format state name for display
  const displayName = stateName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Fetch data specifically for this state
  const stateData = getStateData(stateName, displayName);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${displayName} HOA Fees 2026 | Average Costs & Calculator`}
        description={`Calculate HOA fees in ${displayName}. See average costs by city, legal rules, and estimate your lifetime HOA expenses.`}
        schema={[{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `HOA Guide ${displayName}`,
          "description": `HOA fee data and laws for ${displayName}`
        }]}
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
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/states" className="hover:text-accent transition-colors">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          </nav>
        </div>
      </header>

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
                </div>
              </article>

              <section id="calculator" className="pt-8 border-t border-border">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Calculate Your Custom {displayName} Lifetime HOA Cost</h2>
                <Calculator />
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

              <div className="card shadow-lg border-none">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xl">💡</div>
                   <h4 className="font-serif text-xl font-bold text-primary">Expert Tip</h4>
                </div>
                <p className="text-primary opacity-70 leading-relaxed italic font-sans text-base">
                  "In {displayName}, property values are highly tied to HOA financial health. A poorly managed reserve fund can lead to 'Special Assessments' that destroy your home equity overnight."
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/40 mt-auto border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
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
          <p className="text-sm font-sans">© 2026 All Rights Reserved. Data for {displayName} updated April 2026.</p>
        </div>
      </footer>
    </div>
  );
}
