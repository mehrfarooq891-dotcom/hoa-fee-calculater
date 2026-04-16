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
        "name": "Are HOA fees tax deductible in 2025/2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. If the property is your primary residence, HOA fees are not tax deductible. However, if you use the property as a rental or for business purposes, you may be able to deduct them as a business expense. Always consult with a tax professional."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I stop paying HOA fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you stop paying, the HOA can charge late fees, interest, and eventually place a lien on your property. In many states, they can even foreclose on your home to recover the unpaid dues."
        }
      }
      // ... more questions will be added in the full implementation
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HOA Fee Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="HOA Fee Calculator 2026 — Estimate Your True Cost by State | HOACalculator.com"
        description="Free HOA fee calculator — instantly estimate your lifetime HOA cost, affordability score, and year-by-year breakdown. Trusted by US homebuyers in all 50 states."
        schema={[faqSchema, softwareSchema]}
      />

      <header className="bg-primary-dark text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
            HOA<span className="text-accent-light">Calculator</span>.com
          </Link>
          <nav className="hidden md:flex gap-2 items-center">
            <Link to="/" className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Home</Link>
            <Link to="/states" className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">State Guides</Link>
            <Link to="/compare" className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Compare</Link>
            <Link to="/blog" className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Blog</Link>
            <Link to="/contact" className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors ml-2">Agent Finder</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block bg-accent-light/20 border border-accent-light/40 text-accent-light text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1 rounded-full mb-4">
            Free Tool — No Signup Required
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Free HOA Fee Calculator<br /><span className="italic text-accent-light">See Your True Lifetime Cost</span>
          </h1>
          <p className="text-lg text-white/80">
            Instant affordability score, year-by-year breakdown & state-by-state data for US homebuyers.
          </p>
        </div>
      </section>

      <div className="bg-bg-section border-y border-border-light py-3 text-center text-[11px] text-text-light uppercase tracking-widest">
        AdSense: Top Banner
      </div>

      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        <section id="calculator" className="mb-16">
          <Calculator />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 pt-12 border-t border-border-light">
          <aside className="hidden lg:block sticky top-24 h-fit">
            <nav className="card p-5">
              <h4 className="font-bold mb-4 text-text-light uppercase text-[10px] tracking-[1.5px]">Table of Contents</h4>
              <ul className="space-y-1">
                <li><a href="#what-is-hoa" className="block text-[13px] text-text-medium py-1 px-2 rounded-lg hover:bg-bg-section hover:text-primary transition-all border-l-2 border-transparent hover:border-accent">What Is an HOA Fee?</a></li>
                <li><a href="#true-cost" className="block text-[13px] text-text-medium py-1 px-2 rounded-lg hover:bg-bg-section hover:text-primary transition-all border-l-2 border-transparent hover:border-accent">The True Cost</a></li>
                <li><a href="#how-calculated" className="block text-[13px] text-text-medium py-1 px-2 rounded-lg hover:bg-bg-section hover:text-primary transition-all border-l-2 border-transparent hover:border-accent">How Fees Are Calculated</a></li>
                <li><a href="#state-data" className="block text-[13px] text-text-medium py-1 px-2 rounded-lg hover:bg-bg-section hover:text-primary transition-all border-l-2 border-transparent hover:border-accent">State-by-State Data</a></li>
                <li><a href="#faq" className="block text-[13px] text-text-medium py-1 px-2 rounded-lg hover:bg-bg-section hover:text-primary transition-all border-l-2 border-transparent hover:border-accent">FAQ</a></li>
              </ul>
            </nav>
          </aside>

          <article className="max-w-3xl prose prose-navy prose-headings:font-serif prose-headings:text-primary prose-p:text-text-medium">
            <section id="what-is-hoa" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What Is an HOA Fee, Really?</h2>
              <p>
                Think of an HOA fee as a subscription to your neighborhood. You're paying for the privilege of living in a community that (hopefully) maintains its standards, keeps the grass cut in common areas, and ensures your neighbor doesn't paint their house neon pink.
              </p>
              <p>
                It's a mandatory payment. If you buy a home in a community with a Homeowners Association, you're signing a contract. You'll pay these fees as long as you own the home. It's not optional, and it's not a suggestion.
              </p>
            </section>

            <section id="true-cost" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The True Cost Nobody Talks About</h2>
              <div className="bg-bg-section border-l-4 border-accent p-6 rounded-r-xl my-8">
                <p className="m-0 text-lg">
                  Over 30 years, with a modest 3% annual increase, that $400 fee will cost you over <strong>$228,000</strong>. That's nearly a quarter of a million dollars — money that isn't building equity in your home and isn't going into your 401(k). It's a "second mortgage" that never goes away.
                </p>
              </div>
              <p>
                This is exactly why using a calculator like this one matters before you sign anything. The sticker price of the home is just the beginning.
              </p>
            </section>

            <section id="how-calculated" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How HOA Fees Are Calculated</h2>
              <p>
                Your board doesn't just pull a number out of a hat. They use a formula based on the association's annual budget. They look at the "Reserve Study"—a document that predicts when the roof will fail or the pool will need resurfacing.
              </p>
            </section>

            <section id="state-data" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">State-by-State Comparison</h2>
              <div className="card p-0 overflow-hidden my-8">
                <table className="w-full text-left border-collapse text-sm">
                  <thead className="bg-primary text-accent-light">
                    <tr>
                      <th className="p-4 uppercase text-[11px] tracking-wider">State</th>
                      <th className="p-4 uppercase text-[11px] tracking-wider">Avg. Monthly Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light even:bg-bg-section/30">
                      <td className="p-4 font-bold text-primary">California</td>
                      <td className="p-4">$500/mo</td>
                    </tr>
                    <tr className="border-b border-border-light even:bg-bg-section/30">
                      <td className="p-4 font-bold text-primary">Florida</td>
                      <td className="p-4">$400/mo</td>
                    </tr>
                    <tr className="border-b border-border-light even:bg-bg-section/30">
                      <td className="p-4 font-bold text-primary">Texas</td>
                      <td className="p-4">$300/mo</td>
                    </tr>
                    <tr className="border-b border-border-light even:bg-bg-section/30">
                      <td className="p-4 font-bold text-primary">New York</td>
                      <td className="p-4">$450/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="bg-primary rounded-xl p-8 my-12 text-white">
              <h3 className="text-2xl font-serif font-bold mb-4 text-accent-light">Connect with a Local Expert</h3>
              <p className="mb-6 opacity-80 text-sm">Thinking about buying in an HOA? Get a local agent who knows which boards are healthy and which are a nightmare.</p>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:bg-white/20 text-sm" />
                <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:bg-white/20 text-sm" />
                <input type="text" placeholder="Zip Code" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:bg-white/20 text-sm" />
                <button type="button" className="md:col-span-3 btn-primary">Find an Agent →</button>
              </form>
              <p className="text-[10px] opacity-40 mt-4">By submitting, you agree to be contacted by a licensed real estate agent. See our Privacy Policy.</p>
            </div>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {[
                  { q: "Are HOA fees tax deductible in 2025/2026?", a: "Generally, no. If the property is your primary residence, HOA fees are not tax deductible." },
                  { q: "What happens if I stop paying HOA fees?", a: "If you stop paying, the HOA can charge late fees, interest, and eventually place a lien on your property." },
                  { q: "Can an HOA legally foreclose on my home?", a: "Yes, in most US states. HOAs have the legal right to foreclose on a property for unpaid dues, regardless of your mortgage status." },
                  { q: "What is a special assessment?", a: "A special assessment is a one-time fee charged when the HOA needs to cover a large, unexpected expense like a new roof." }
                ].map((item, i) => (
                  <details key={i} className="group card p-0 overflow-hidden border-card-border shadow-sm">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-primary hover:bg-bg-section transition-colors">
                      {item.q}
                      <span className="text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="p-5 pt-0 text-sm text-text-medium border-t border-border-light mt-0">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="bg-bg-section border border-border-light rounded-xl p-5 my-8">
              <p className="text-[11px] text-text-light leading-relaxed m-0">
                <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only and does not constitute financial, legal, or real estate advice. HOA fee data and projections are based on national averages and may not reflect your specific community.
              </p>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-primary-dark text-white/70 px-6 py-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif text-xl font-bold text-white mb-4">HOA<span className="text-accent-light">Calculator</span>.com</div>
              <p className="text-sm max-w-sm">The most comprehensive HOA fee calculator for US homebuyers. Free, instant, no signup required. Trusted by homeowners in all 50 states.</p>
            </div>
            <div>
              <h4 className="text-accent-light text-[11px] font-bold uppercase tracking-widest mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/states" className="hover:text-white transition-colors">State Guides</Link></li>
                <li><Link to="/compare" className="hover:text-white transition-colors">Compare Tools</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">HOA Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent-light text-[11px] font-bold uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
            <span>© 2026 HOACalculator.com — All Rights Reserved. Not financial advice.</span>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
