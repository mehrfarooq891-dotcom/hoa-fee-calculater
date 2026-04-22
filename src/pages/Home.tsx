import React from 'react';
import Calculator from '@/src/components/Calculator';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are HOA fees tax deductible in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. If the property is your primary residence, HOA fees are not tax deductible. However, if you're a real estate investor or have a dedicated home office, parts might be deductible. Consult your CPA."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I stop paying my HOA fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you stop paying, the HOA can charge late fees, interest, and eventually place a lien on your property. In severe cases, they can foreclose on your home."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fee Calculator 2026 — Estimate Your True Cost by State | HOACalculator.com"
        description="Free HOA fee calculator — instantly estimate your lifetime HOA cost, affordability score, and year-by-year breakdown. Trusted by US homebuyers in all 50 states."
        schema={[faqSchema]}
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            HOA<span className="text-accent">Calculator</span>.com
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/states" className="hover:text-accent transition-colors">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <a href="#calculator" className="btn-primary py-2 px-6">Calculate</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              Free Tool — No Signup Required
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Free HOA Fee Calculator<br />
              <span className="text-accent">See Your True Lifetime Cost</span>
            </h1>
            <p className="text-xl text-primary opacity-70 mb-10 max-w-lg leading-relaxed">
              Instant affordability score, year-by-year breakdown and state-by-state data for US homebuyers.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "✓ No signup required",
                "✓ All 50 US States",
                "✓ 2026 Updated Data",
                "✓ Instant Results"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-primary opacity-80">
                  <span className="text-accent">{badge.split(' ')[0]}</span>
                  {badge.split(' ').slice(1).join(' ')}
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl -rotate-2 transform"></div>
            <div className="relative card border-none shadow-2xl p-4">
              <div className="bg-primary rounded-xl h-[400px] w-full flex items-center justify-center">
                <span className="text-white/20 font-serif text-8xl">HOA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TOOL SECTION */}
        <section id="calculator" className="py-20 px-6 max-w-7xl mx-auto">
          <Calculator />
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 px-6 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-20"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">
              The True Cost Nobody Talks About
            </h2>
            <p className="text-2xl opacity-90 leading-relaxed font-serif italic mb-8">
              "Over 30 years, with a modest 3% annual increase, that $400 fee will cost you over $228,000. That's nearly a quarter of a million dollars."
            </p>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>
        </section>

        {/* WHAT IS HOA SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-primary">
              What Is an HOA Fee, Really?
            </h2>
            <div className="space-y-4 text-primary opacity-80 text-lg leading-relaxed">
              <p>
                Think of an HOA fee as a subscription to your neighborhood. You're paying for the privilege of living in a community that (hopefully) maintains its standards, keeps the grass cut in common areas, and ensures your neighbor doesn't paint their house neon pink.
              </p>
              <p>
                It's a mandatory cost that supports community amenities like pools, gyms, security, and landscaping. Understanding the long-term impact is critical for your financial health.
              </p>
            </div>
          </div>
          <div className="card shadow-2xl border-none p-10 bg-bg-light">
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🏗️</div>
                   <div>
                      <h4 className="font-bold">Maintenance</h4>
                      <p className="text-sm opacity-60">Roof, exterior, and common area upkeep.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🏊</div>
                   <div>
                      <h4 className="font-bold">Amenities</h4>
                      <p className="text-sm opacity-60">Pool, gym, clubhouse, and parks access.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🛡️</div>
                   <div>
                      <h4 className="font-bold">Insurance</h4>
                      <p className="text-sm opacity-60">Master policies covering communal structures.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* STATE DATA TABLE */}
        <section className="py-20 px-6 bg-bg-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">National HOA Fee Averages</h2>
            <div className="card p-0 overflow-hidden border-none shadow-xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-8 py-4 font-serif text-xl">State</th>
                    <th className="px-8 py-4 font-serif text-xl">Avg. Monthly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-bold">
                  {[
                    { s: "California", f: "$500/mo" },
                    { s: "Florida", f: "$400/mo" },
                    { s: "Texas", f: "$300/mo" },
                    { s: "New York", f: "$450/mo" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-accent/5 transition-colors">
                      <td className="px-8 py-6 text-primary">{row.s}</td>
                      <td className="px-8 py-6 text-accent">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EXPERT SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="card bg-primary p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border-none shadow-2xl">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full -mr-32 -mb-32"></div>
            <div className="shrink-0 relative z-10">
               <img 
                 src="https://randomuser.me/api/portraits/men/52.jpg" 
                 alt="Michael Torres" 
                 className="w-40 h-40 rounded-3xl object-cover border-4 border-accent shadow-lg"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-4 -left-4 bg-accent text-white font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-widest shadow-lg">
                 14+ Yrs Exp
               </div>
            </div>
            <div className="relative z-10">
              <p className="text-2xl text-white font-serif italic mb-6 leading-relaxed">
                "Most homebuyers focus on the mortgage. The HOA fee is the silent budget-killer nobody warns you about."
              </p>
              <div className="mb-6 text-white/80 leading-relaxed text-sm max-w-xl">
                Michael Torres is a certified real estate financial analyst with 14 years 
                of experience in US residential markets. Having worked with homebuyers across 
                California, Florida, and Texas, he built HOACalculator.com to help buyers 
                understand the true lifetime cost of HOA fees before signing anything.
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Michael Torres</h4>
                <p className="text-accent uppercase tracking-widest text-xs font-bold">Real Estate Financial Analyst & Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Are HOA fees tax deductible 2026?", a: "For primary residences, no. HOA fees are considered a personal expense. However, if you rent out your home or have a qualified home office, you may be able to deduct a portion as a business expense." },
              { q: "What happens if I stop paying?", a: "The HOA will likely send notices, charge late fees and interest, and may eventually place a lien on your property. They have the power to foreclose in many jurisdictions." },
              { q: "Can HOA legally foreclose my home?", a: "Yes. In many US states, HOAs have the power to initiate foreclosure proceedings for unpaid dues, even if you are current on your mortgage." },
              { q: "What is a special assessment?", a: "A special assessment is an additional fee charged to all homeowners when the HOA's reserve funds are insufficient to cover a large, unexpected expense like a new roof or structural repair." }
            ].map((faq, i) => (
              <details key={i} className="group card border-border p-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="px-8 py-6 cursor-pointer list-none flex justify-between items-center font-bold text-lg">
                  {faq.q}
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-8 pb-8 text-primary opacity-70 leading-relaxed border-t border-border mt-0 pt-6">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 px-6 text-center">
           <div className="max-w-4xl mx-auto card bg-accent border-none shadow-2xl p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Don't let HOA fees surprise you.
                </h2>
                <p className="text-xl opacity-90 mb-10 italic">
                  Know the true cost before you sign.
                </p>
                <a href="#calculator" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                  Calculate My HOA Cost →
                </a>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <div className="font-serif text-2xl font-bold text-white mb-6">HOA<span className="text-accent">Calculator</span>.com</div>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool for US homebuyers. Trusted by homeowners in all 50 states.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">HOA Articles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
           <span>&copy; 2026 HOACalculator.com. US Real Estate Data Partners.</span>
           <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Terms</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
