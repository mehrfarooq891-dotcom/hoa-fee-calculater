import React from 'react';
import Calculator from '@/src/components/Calculator';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isEmbedModalOpen, setIsEmbedModalOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "HOA Fee Calculator",
    "url": "https://www.hoafeecalculator.com",
    "description": "Free HOA fee calculator for all 50 US states. Estimate your true lifetime HOA cost with year-by-year breakdown.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a typical HOA fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical HOA fees in the United States average between $200 and $400 per month, depending heavily on the state, property location, type of community, and the specific amenities provided to residents."
        }
      },
      {
        "@type": "Question",
        "name": "How is HOA fee calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HOA fees are calculated by dividing the community's projected annual operating expenses and long-term reserve fund requirements by the total number of property owners in the homeowner association."
        }
      },
      {
        "@type": "Question",
        "name": "Can HOA fees increase every year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, homeowner associations can increase dues annually to keep pace with inflation, rising utility rates, and the increased cost of landscaping, building materials, and insurance premiums."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if you don't pay HOA fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failure to pay mandatory HOA fees can result in standard late fees, restriction of community amenities, property liens, and potential foreclosure action by the association under state laws."
        }
      },
      {
        "@type": "Question",
        "name": "Are HOA fees tax deductible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "General HOA fees are not tax-deductible for primary single-family residences, but they can be fully deducted as an operating expense if the property is a rental or used for home office space."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fee Calculator 2026 — Estimate Your True Cost by State | HOACalculator.com"
        description="Free HOA fee calculator — instantly estimate your lifetime HOA cost, affordability score, and year-by-year breakdown. Trusted by US homebuyers in all 50 states."
        schema={[webAppSchema, faqSchema]}
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
            <Link to="/states" className="hover:text-accent transition-colors">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <a href="#calculator" className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full font-bold transition-all active:scale-95 inline-flex items-center justify-center text-sm">Calculate</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TOOL SECTION */}
        <section id="calculator" className="pt-20 md:pt-24 pb-12 px-6 max-w-7xl mx-auto">
          <Calculator />
        </section>

        {/* REALTOR EMBED SECTION */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="bg-bg-light border border-border/80 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Are You a Real Estate Agent or Realtor?
            </h2>
            <p className="text-lg text-primary opacity-70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Embed this free HOA calculator on your website — help your clients make smarter buying decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsEmbedModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-8 rounded-full transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                Get Free Embed Code →
              </button>
              <Link 
                to="/contact"
                className="bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-8 rounded-full transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 text-base"
              >
                Contact Us for Custom Integration →
              </Link>
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        <section className="py-20 px-6 bg-bg-light relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
                Free Tool — No Signup Required
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Free HOA Fee Calculator<br />
                <span className="text-accent">See Your True Lifetime Cost</span>
              </h1>
              <p className="text-xl text-primary opacity-70 mb-6 max-w-lg leading-relaxed">
                Instant affordability score, year-by-year breakdown and state-by-state data for US homebuyers.
              </p>
              
              <div className="text-xs text-primary/60 mb-8 border-l-2 border-accent pl-3">
                Data compiled and reviewed by the <span className="font-semibold">HOACalculator.com Research Team</span> | Last updated: June 2026
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "✓ No signup required",
                  "✓ All 50 States — Select Below",
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
                <div className="p-6 bg-white rounded-xl h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">HOA Market Data</h3>
                    <p className="text-xs text-primary/75 mb-4 font-sans font-medium">National statistics for US homeowners associations in 2026.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 flex-grow">
                    <div className="stat-card flex flex-col justify-center p-4">
                      <div className="stat-label text-[10px] mb-1">Average US HOA Fee</div>
                      <div className="stat-value text-xl font-bold text-accent font-serif">$331<span className="text-xs font-sans font-normal text-primary/60">/mo</span></div>
                    </div>
                    <div className="stat-card flex flex-col justify-center p-4">
                      <div className="stat-label text-[10px] mb-1">HOA Communities</div>
                      <div className="stat-value text-xl font-bold text-accent font-serif">370,000+</div>
                    </div>
                    <div className="stat-card flex flex-col justify-center p-4">
                      <div className="stat-label text-[10px] mb-1">Homeowners in HOAs</div>
                      <div className="stat-value text-xl font-bold text-accent font-serif">74 Million</div>
                    </div>
                    <div className="stat-card flex flex-col justify-center p-4">
                      <div className="stat-label text-[10px] mb-1">Avg Annual Increase</div>
                      <div className="stat-value text-xl font-bold text-accent font-serif">3% – 5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="mt-8 text-center">
              <Link to="/states" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all active:scale-95 shadow-md">
                View All 50 States
              </Link>
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

        {/* FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is a typical HOA fee?",
                a: "Average HOA fees in the US range from $200 to $400 per month, depending on the state, community type, and amenities offered."
              },
              {
                q: "How is HOA fee calculated?",
                a: "HOA fees are calculated based on shared maintenance costs, reserve funds, insurance, and amenities divided among all unit owners."
              },
              {
                q: "Can HOA fees increase every year?",
                a: "Yes, HOA fees typically increase 3-5% annually to account for inflation and rising maintenance costs."
              },
              {
                q: "What happens if you don't pay HOA fees?",
                a: "Unpaid HOA fees can result in late charges, liens on your property, and in some states, foreclosure proceedings."
              },
              {
                q: "Are HOA fees tax deductible?",
                a: "HOA fees are generally not tax deductible for primary residences, but may be deductible for rental properties."
              }
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
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="inline-flex items-center mb-6">
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
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">A detailed HOA fee calculation tool for US homebuyers. Trusted by homeowners in all 50 states.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">HOA Articles</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
           <span>&copy; 2026 HOACalculator.com. US Real Estate Data Partners.</span>
           <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
           </div>
        </div>
      </footer>

      {/* EMBED MODAL */}
      {isEmbedModalOpen && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200 text-left">
            <button 
              onClick={() => setIsEmbedModalOpen(false)}
              className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors text-xl font-bold p-2 cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4 animate-none">
              Embed Calculator Code
            </h3>
            <p className="text-sm text-primary/70 mb-4 font-sans leading-relaxed">
              Copy the code below and paste it into any HTML section on your website to embed the calculator.
            </p>
            
            <div className="relative mb-6">
              <textarea 
                readOnly
                value={`<iframe src="https://www.hoafeecalculator.com" width="100%" height="600" frameborder="0"></iframe>`}
                className="w-full h-32 bg-bg-light border border-border rounded-xl p-4 font-mono text-xs text-primary/80 focus:outline-none focus:ring-1 focus:ring-accent"
                onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              />
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`<iframe src="https://www.hoafeecalculator.com" width="100%" height="600" frameborder="0"></iframe>`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="absolute bottom-4 right-4 bg-primary hover:bg-primary/95 text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-accent font-bold font-sans">
                Free forever. No attribution required.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
