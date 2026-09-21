import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import { Link } from 'react-router-dom';

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About HOAFeeCalculator.com — Research & Methodology",
    "description": "Learn how Sarah Mitchell compiles and analyzes HOA fee data across all 50 US states to empower American homebuyers with complete financial transparency.",
    "publisher": {
      "@type": "Organization",
      "name": "HOAFeeCalculator.com",
      "url": "https://www.hoafeecalculator.com/"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="About Us & Methodology | HOAFeeCalculator.com"
        description="Learn how Sarah Mitchell compiles and analyzes HOA fee data across all 50 US states. Our research methodology, statutory tracking, and commitment to transparency."
        canonical="/about"
        schema={[aboutSchema]}
      />

      {/* Header */}
      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero / Header */}
          <div className="text-center mb-16">
            <span className="text-accent text-xs uppercase tracking-widest font-bold px-3 py-1 bg-accent/10 rounded-full inline-block mb-4">
              How We Research
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              About HOAFeeCalculator.com
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Empowering American homebuyers with verified state-by-state HOA cost benchmarks, statutory legal guides, and lifetime assessment calculators.
            </p>
            <div className="h-1 w-20 bg-accent mx-auto mt-8"></div>
          </div>

          {/* Section 1: Who We Are */}
          <section className="mb-20">
            <div className="bg-bg-light border border-border rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 h-16 w-16 bg-primary text-accent font-serif font-bold rounded-2xl flex items-center justify-center text-2xl shadow-md">
                  SM
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    1. About the Author & Researcher
                  </h2>
                  <p className="text-primary/90 text-base md:text-lg leading-relaxed">
                    Written and maintained by <strong>Sarah Mitchell</strong>, an independent researcher tracking HOA and condo costs across the US. Figures are compiled from public sources listed on our methodology page.
                  </p>
                  <p className="text-primary/80 text-base leading-relaxed">
                    Homeowners Association (HOA) dues represent one of the fastest-growing ongoing expenses for US homebuyers, yet reliable data on long-term fee increases, state legal caps, and special assessment risks remains notoriously hard to find. The mission of HOAFeeCalculator.com is to bridge this information gap by aggregating, tracking, and modeling HOA financial data across all 50 states — helping buyers accurately calculate their true lifetime cost of homeownership before signing a purchase contract.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics / Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "State Coverage", value: "50 States" },
              { label: "Data Review", value: "Periodic" },
              { label: "Independence", value: "100% Free" },
              { label: "Legal Tracking", value: "Statutory" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-border p-6 rounded-2xl text-center shadow-xs">
                <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">{item.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary/70">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Section 2: Our Methodology */}
          <section className="mb-20 space-y-8">
            <div className="border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Data Sourcing & Integrity</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-1">
                2. How We Research & Source HOA Data
              </h2>
            </div>
            
            <p className="text-primary/90 text-lg leading-relaxed">
              Finding standardized, reliable information on Homeowners Association fees is challenging because HOA dues are set independently by hundreds of thousands of individual association boards across the country without a centralized reporting database. To provide realistic fee benchmarks, statutory overviews, and budgeting tools, we compile and synthesize information using the following transparent process:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg">
                  ⚖️
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">1. Public State Legislative Statutes & Codes</h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  We review the actual, freely accessible text of state property codes and condominium acts across all 50 states—such as Texas Property Code Chapters 202 and 209, California's Davis-Stirling Act, Florida Chapter 720, and Florida SB 4-D structural reserve legislation. This ensures our explanations of annual increase limits, reserve study mandates, notice timelines, and foreclosure procedures are grounded in current statutory law.
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg">
                  📈
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">2. Public Market Knowledge & Cost Estimates</h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Baseline fee estimates and typical cost ranges are developed using AI-assisted research that draws on general, publicly available market knowledge and commonly reported housing cost data, rather than direct access to any single proprietary or licensed database. These estimates are refined through ongoing editorial review to keep them reasonable and broadly representative, but they are approximate ranges for budgeting and comparison purposes—not a substitute for a property's actual current HOA disclosure documents.
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg">
                  🔄
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">3. AI-Assisted Synthesis & Regular Editorial Reviews</h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  We utilize AI-assisted research and writing tools to help organize, summarize, and synthesize these public legal and market insights into clear, accessible consumer guides. Because inflation, insurance premiums, and utility rates impact association budgets over time, our figures and statutory summaries are periodically reviewed and updated to reflect current conditions.
                </p>
              </div>
            </div>

            <p className="text-xs text-primary/70 italic border-l-2 border-accent pl-3 mt-4">
              Note: HOAFeeCalculator.com is an independent educational resource. Figures are estimates intended for general budgeting and comparative research, not formal real estate underwriting appraisals or legal counsel. Homebuyers should always obtain and review an official resale disclosure packet or estoppel certificate directly from the association before closing on a property.
            </p>
          </section>

          {/* Section 3: Editorial Standards */}
          <section className="mb-20 space-y-8">
            <div className="border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Editorial Policy</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-1">
                3. Editorial Standards & Review Process
              </h2>
            </div>

            <div className="bg-bg-light border border-border rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-primary">Legal Citation Verification</h4>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      Every consumer guide and state-specific article published on HOAFeeCalculator.com is cross-referenced directly against official state property statutes, statutory notice periods, and legal precedent before publication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-primary">Regular Financial & Market Updates</h4>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      All numerical benchmarks and state fee averages are audited on a regular cycle. When statutory changes occur (such as cap adjustments or insurance mandate shifts), relevant articles are updated with a revised modification timestamp.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-primary">Strict Editorial Independence</h4>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      We operate with complete objectivity. HOAFeeCalculator.com does not accept sponsored content, paid promotional placement from HOA management companies, or referral commissions from real estate brokerages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Corrections & Feedback */}
          <section className="mb-20">
            <div className="border-b border-border pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Community Feedback</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-1">
                4. Corrections & Community Feedback
              </h2>
            </div>

            <p className="text-primary/90 text-base md:text-lg leading-relaxed mb-6">
              We welcome corrections from property buyers, board members, and legal professionals. Submissions are reviewed and addressed as promptly as possible.
            </p>

            <div className="bg-white border border-border p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xs">
              <div>
                <h4 className="font-serif font-bold text-primary text-lg mb-1">Spot an Outdated Regulation or Fee Figure?</h4>
                <p className="text-primary/80 text-sm">
                  Let us know and we will review and address the submission as promptly as possible.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full text-sm transition-all shadow-xs"
              >
                Submit Correction →
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-bg-light border border-border p-8 rounded-2xl text-center mb-16">
            <p className="text-xs md:text-sm text-primary/80 leading-relaxed max-w-3xl mx-auto">
              <strong>Legal Disclaimer:</strong> HOAFeeCalculator.com is an independent educational and research platform. All calculator projections, state averages, and legislative summaries are provided for informational purposes only and do not constitute formal financial, legal, or real estate underwriting advice. Homebuyers should always review official community CC&Rs, financial statements, and resale disclosures with a qualified legal professional prior to closing.
            </p>
          </div>

          {/* CTA Banner */}
          <section className="bg-accent text-white py-12 px-8 text-center rounded-3xl shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-white mb-3">
                Calculate Your True Lifetime HOA Dues
              </h2>
              <p className="text-base opacity-95 mb-6 font-medium">
                Free tool — instant state-adjusted results — 100% independent data
              </p>
              <Link to="/#calculator" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold transition-all inline-flex items-center justify-center text-sm shadow-md">
                Launch HOA Calculator →
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-16 px-6 text-white/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="inline-flex items-center mb-6">
               <img 
                 src="/hoa_calculator_logo.svg" 
                 alt="HOAFeeCalculator.com" 
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
                 HOAFee<span className="text-accent">Calculator</span>.com
               </span>
             </Link>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">Providing financial transparency for US residents and homebuyers across all 50 states.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools & Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog Insights</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Trust & Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">Connect With Us</span>
              <SocialIcons />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
