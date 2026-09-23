import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import { Link } from 'react-router-dom';
import QuickAnswerBox from '@/src/components/QuickAnswerBox';
import Calculator from '@/src/components/Calculator';

export default function Home() {
  const [isEmbedModalOpen, setIsEmbedModalOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const consolidatedFaqs = [
    {
      q: "How much are average HOA fees in 2026?",
      a: "Nationwide, average HOA fees in 2026 range from $200 to $400 per month for single-family homes in suburban developments, and between $300 and $700+ per month for townhouses and condominiums with shared amenities. In premium urban high-rises or luxury coastal enclaves in New York, San Francisco, or Miami, monthly common charges frequently exceed $1,200 to $2,500. Lower-density inland states like Arkansas, Mississippi, and Indiana maintain significantly lower monthly averages (typically $140 to $190/month) because they require fewer full-time staff, have lower commercial insurance premiums, and maintain simpler shared infrastructure."
    },
    {
      q: "Are HOA fees tax deductible?",
      a: "For your primary residence, regular monthly HOA dues and special assessments are generally not tax deductible on your federal or state tax returns. However, if you rent out the property as an investment, the IRS classifies mandatory association fees as an ordinary and necessary rental operating expense that can be 100% deducted against rental income. Furthermore, if you maintain a legitimate, qualified home office used regularly and exclusively for business, you may deduct the proportional square-footage percentage of your monthly dues under standard IRS home office rules."
    },
    {
      q: "What happens if I don't pay my HOA fees?",
      a: "Defaulting on HOA dues sets off a statutory collection timeline that begins with late charges (often $25 to $50 or 10% of the delinquent sum) and escalating interest penalties. If an account remains unpaid for 60 to 90 days, the association's legal counsel will issue a formal intent to lien and can record an assessment lien against your real estate title, which clouds the title and prevents you from selling or refinancing. In some states, an HOA lien may have limited priority over a first mortgage. Check your state's law."
    },
    {
      q: "Can HOA fees increase every year?",
      a: "Yes, HOA boards can and routinely do increase regular assessments annually to match general inflation, rising municipal utility rates, vendor wage increases, and surging property casualty insurance premiums. Most state statutes and community Declaration of Covenants, Conditions, and Restrictions (CC&Rs) place a statutory ceiling on annual board-approved increases—such as California's 20% limit under the Davis-Stirling Act—without requiring a vote of the general membership. Increases exceeding statutory caps or unforeseen emergency capital shortfalls require a formal ballot and majority approval from all voting homeowners."
    },
    {
      q: "What's the difference between HOA fees and condo fees?",
      a: "Single-family HOA fees primarily fund shared neighborhood grounds, including private access roads, entry monument landscaping, storm water retention basins, and recreational amenities like swimming pools and clubhouses, leaving the exterior roof, siding, and foundation 100% to the individual homeowner. By contrast, condo fees cover all communal amenities plus the structural envelope of the physical building: exterior wall tuckpointing, flat membrane roof replacements, commercial elevator modernization, master hazard insurance policies, and central domestic hot water boilers. Because condo associations must fund multi-million-dollar structural reserve accounts, their monthly fees average 40% to 150% higher than single-family subdivision dues."
    },
    {
      q: "Are HOA fees included in a mortgage payment?",
      a: "No, monthly HOA dues are not paid to your mortgage servicer and are not collected inside your lender's property tax and insurance escrow account. Instead, homeowners make separate monthly, quarterly, or annual payments directly to the community management company or association lockbox. However, during the mortgage underwriting process, lenders strictly factor your mandatory monthly HOA dues into your Debt-to-Income (DTI) ratio; a higher monthly HOA fee reduces the loan amount you may qualify for; ask your lender to run the numbers."
    },
    {
      q: "How do I find out how much a property's HOA fees are?",
      a: "While public real estate listing portals like Zillow, Redfin, and the local MLS report an estimated monthly fee, buyers should never rely on marketing figures alone. Before removing your loan contingencies or waiving inspection rights, demand a certified Resale Disclosure Certificate (or Estoppel Certificate) directly from the property management company. This legally binding disclosure package provides the exact current monthly dues, confirmed scheduled increases for the upcoming fiscal year, any outstanding balance owed by the seller, active reserve study funding ratios, and any pending special assessments currently under board consideration."
    }
  ];

  const bottomFaqs = consolidatedFaqs;

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "HOA Fee Calculator",
    "url": "https://www.hoafeecalculator.com",
    "description": "Free HOA fee calculator for all 50 US states. Estimate your true lifetime HOA cost with year-by-year breakdown.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "datePublished": "2026-01-15T08:00:00Z",
    "dateModified": "2026-09-10T12:00:00Z",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".aeo-quick-answer", "#quick-answer"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "HOAFeeCalculator.com",
      "url": "https://www.hoafeecalculator.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hoafeecalculator.com/favicon.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": consolidatedFaqs.map(faq => ({
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
        title="HOA Fee Calculator 2026 — Estimate Your True Cost by State | HOAFeeCalculator.com"
        description="Free HOA fee calculator — estimate your lifetime HOA cost, affordability score, and year-by-year breakdown. Built for homebuyers in all 50 states."
        canonical="/"
        schema={[webAppSchema, faqSchema]}
      />

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <h1 className="sr-only">Free HOA Fee Calculator - Estimate Your True Cost</h1>
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
          <div className="max-w-7xl mx-auto">
            <QuickAnswerBox
              title="Quick Answer: How HOA Fees Work & Lifetime Cost"
              answer="A Homeowners Association (HOA) fee is a mandatory recurring assessment paid by property owners in managed subdivisions, townhouses, and condos to maintain common grounds, service community amenities, and fund structural reserve accounts. In 2026, nationwide HOA dues typically range from $200 to $400 per month for single-family homes and $300 to $700+ per month for condominiums. Over a standard 30-year mortgage with a 3% annual inflation rate, a $350 monthly HOA fee results in over $200,000 in cumulative carrying costs."
              highlights={[
                { label: "US Median HOA", value: "$200 - $400 / mo" },
                { label: "Condo Median", value: "$300 - $700 / mo" },
                { label: "30-Yr Cumulative", value: "$200,000+ Total" }
              ]}
              className="mb-12 bg-white"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
                  Free Tool — No Signup Required
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                  Free HOA Fee Calculator<br />
                  <span className="text-accent">See Your True Lifetime Cost</span>
                </h2>
                <p className="text-xl text-primary opacity-70 mb-6 max-w-lg leading-relaxed">
                  Instant affordability score, year-by-year breakdown and state-by-state data for US homebuyers.
                </p>
                
                <div className="text-xs text-primary/60 mb-8 border-l-2 border-accent pl-3">
                  Prepared by HOAFeeCalculator.com | Last updated: September 22, 2026
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

                  <p className="text-[11px] text-primary/60 text-center mt-3">Figures are approximate industry estimates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* REAL-WORLD CASE STUDY SECTION */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="card bg-bg-light border border-border/80 p-8 md:p-12 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                Real-World Financial Scenario
              </span>
              <span className="text-xs text-primary/60 font-medium">Comparative 30-Year Cash Flow Analysis</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
              The 30-Year Wealth Drag: Suburban Home vs. Urban Condo
            </h2>

            <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-6 font-sans">
              Homebuyers frequently treat a $250/month single-family HOA fee and a $650/month urban condo fee as minor operational details compared to home purchase price. However, over a conventional 30-year amortization schedule with a conservative 3.5% average annual dues increase, the compounded divergence reshapes your net worth:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-2xl border border-border/70 shadow-xs">
                <div className="text-accent font-bold text-sm uppercase tracking-wide mb-1">Scenario A: Single-Family Home</div>
                <div className="text-2xl font-serif font-bold text-primary mb-2">$250 / month initial fee</div>
                <p className="text-sm text-primary/75 leading-relaxed mb-4">
                  In a master-planned suburban community, dues cover entrance landscaping, private neighborhood parks, and a community pool. Exterior siding, roof shingles, and foundations remain the homeowner's responsibility.
                </p>
                <div className="border-t border-border/50 pt-3 flex justify-between items-center text-sm">
                  <span className="text-primary/70">30-Year Total Dues Paid:</span>
                  <span className="font-bold text-primary text-base">$154,874</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border/70 shadow-xs">
                <div className="text-accent font-bold text-sm uppercase tracking-wide mb-1">Scenario B: Urban Mid-Rise Condo</div>
                <div className="text-2xl font-serif font-bold text-primary mb-2">$650 / month initial fee</div>
                <p className="text-sm text-primary/75 leading-relaxed mb-4">
                  In a 40-unit building, dues fund commercial flat roof replacements, dual traction elevators, central water boilers, and a master hazard insurance policy with soaring coastal premiums.
                </p>
                <div className="border-t border-border/50 pt-3 flex justify-between items-center text-sm">
                  <span className="text-primary/70">30-Year Total Dues Paid:</span>
                  <span className="font-bold text-primary text-base">$402,672</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 border-l-4 border-accent p-6 rounded-r-2xl text-primary/85 text-sm md:text-base leading-relaxed">
              <strong className="text-primary font-bold">The Opportunity Cost Reality:</strong> The $247,798 difference in dues between these two homes, if instead invested in a standard diversified S&amp;P 500 index fund compounding at an average annual return of 7%, represents over <strong className="text-accent font-bold">$580,000 in lost retirement wealth</strong>. Before selecting a home, run the full lifecycle projections to ensure the amenities justify the long-term equity drag.
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
                It's a mandatory cost that supports community amenities like pools, gyms, security, and landscaping (read our complete breakdown of <Link to="/blog/what-is-hoa-fee" className="text-accent underline font-semibold hover:text-accent/80">what an HOA fee covers</Link>). Understanding whether an assessment fits your debt-to-income ratio is essential—see our guide on <Link to="/blog/how-much-hoa-fee-too-much" className="text-accent underline font-semibold hover:text-accent/80">how much HOA fee is too much</Link>.
              </p>
            </div>
          </div>
          <div className="card shadow-2xl border-none p-10 bg-bg-light">
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🏗️</div>
                   <div>
                      <h4 className="font-bold">Maintenance</h4>
                      <p className="text-sm opacity-80">Roof, exterior, and common area upkeep.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🏊</div>
                   <div>
                      <h4 className="font-bold">Amenities</h4>
                      <p className="text-sm opacity-80">Pool, gym, clubhouse, and parks access.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-10 btn-primary rounded-xl flex items-center justify-center p-0">🛡️</div>
                   <div>
                      <h4 className="font-bold">Insurance</h4>
                      <p className="text-sm opacity-80">Master policies covering communal structures.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* FAQ: What's the difference between HOA fees and condo fees? */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto card bg-bg-light border border-border/60 p-8 md:p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              What's the difference between HOA fees and condo fees?
            </h2>
            <p className="text-primary/80 text-base md:text-lg leading-relaxed font-sans">
              While both are monthly assessments, HOA fees typically cover common areas, neighborhood roads, and shared amenities for single-family homes or townhouses. Condo fees generally cover those items plus structural elements, exterior hazard insurance, shared utilities, and outer building maintenance of individual units (explore our in-depth comparison of <Link to="/blog/hoa-vs-condo-fee" className="text-accent underline font-semibold hover:text-accent/80">HOA vs condo fees</Link> and what happens when associations face a sudden <Link to="/blog/cant-afford-special-assessment" className="text-accent underline font-semibold hover:text-accent/80">special assessment</Link>).
            </p>
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
                    <th scope="col" className="px-8 py-4 font-serif text-xl">State</th>
                    <th scope="col" className="px-8 py-4 font-serif text-xl">Avg. Monthly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-bold">
                  {[
                    { s: "Florida", f: "$390/mo", link: "/blog/hoa-fees-florida" },
                    { s: "California", f: "$450/mo", link: "/blog/hoa-fees-california" },
                    { s: "New York", f: "$480/mo", link: "/blog/average-hoa-fees-new-york" },
                    { s: "Texas", f: "$230/mo", link: "/blog/hoa-fees-texas" },
                    { s: "Colorado", f: "$280/mo", link: "/blog/hoa-fees-colorado" },
                    { s: "Illinois", f: "$330/mo", link: "/blog/hoa-fees-illinois" },
                    { s: "Washington", f: "$375/mo", link: "/blog/hoa-fees-washington-state" },
                    { s: "Georgia", f: "$220/mo", link: "/blog/hoa-fees-georgia" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-accent/5 transition-colors">
                      <td className="px-8 py-6 text-primary">
                        <Link to={row.link} className="hover:text-accent transition-colors underline decoration-border">
                          {row.s}
                        </Link>
                      </td>
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

            {/* MORTGAGE UNDERWRITING & FANNIE MAE SECTION */}
            <div className="mt-12 card bg-white border border-border/80 p-8 md:p-10 rounded-3xl shadow-sm">
              <span className="bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                Lending &amp; Underwriting Reality
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                How Lenders Evaluate an HOA Before Approving Your Mortgage
              </h2>
              <p className="text-primary/80 text-base md:text-lg leading-relaxed font-sans mb-4">
                Many buyers assume mortgage approval hinges solely on personal credit scores, income, and down payments. In reality, when purchasing inside a managed community, your loan can be rejected entirely due to the HOA's financial health.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm text-primary/80">
                <div className="border-l-2 border-accent pl-4">
                  <strong className="block text-primary font-bold mb-1">10% Operating Budget Reserve Rule:</strong>
                  Fannie Mae and Freddie Mac guidelines require at least 10% of the association's annual operating budget to be allocated directly to capital replacement reserves.
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <strong className="block text-primary font-bold mb-1">15% Delinquency Ceiling:</strong>
                  If more than 15% of homeowners in the community are 60 or more days delinquent on their monthly dues, conventional secondary mortgage buyers will classify the entire development as non-warrantable.
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <strong className="block text-primary font-bold mb-1">Single-Entity Ownership Limits:</strong>
                  In buildings where one corporate investor or developer retains more than 10% to 20% of the total units, lenders frequently refuse to underwrite standard conventional conforming loans.
                </div>
              </div>
              <p className="text-xs text-primary/70 mt-6 pt-4 border-t border-border/50">
                Requirements vary by lender and loan program. Confirm current Fannie Mae and Freddie Mac project standards with your lender.
              </p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE & ABOUT SECTION */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="card bg-primary p-10 md:p-12 relative overflow-hidden border-none shadow-2xl">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full -mr-32 -mb-32"></div>
            <div className="relative z-10 max-w-3xl">
              <p className="text-2xl md:text-3xl text-white font-serif italic mb-6 leading-relaxed">
                "Most homebuyers focus on the mortgage. The HOA fee is the silent budget-killer nobody warns you about."
              </p>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                HOAFeeCalculator.com is an independent, free educational tool. Figures are estimates compiled from public sources and AI-assisted research. See our <Link to="/about" className="text-accent underline font-semibold hover:text-white">methodology page</Link> for details.
              </p>
            </div>
          </div>
        </section>

        {/* PRE-CLOSING DOCUMENT AUDIT PROTOCOL */}
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <div className="card bg-bg-light border border-border/80 p-8 md:p-10 rounded-3xl shadow-sm">
            <span className="bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
              Buyer Protection Protocol
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              The 4 HOA Documents to Audit During Your Review Period
            </h2>
            <p className="text-primary/80 text-base leading-relaxed font-sans mb-6">
              When buying in an association, state law generally gives purchasers a statutory rescission or due diligence window (typically 3 to 10 calendar days). Never let your closing agent rush you past reviewing these four essential records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-primary/85">
              <div className="bg-white p-5 rounded-xl border border-border/60">
                <div className="font-bold text-primary text-base mb-1">1. The Latest Full Reserve Study</div>
                <p className="leading-relaxed">Check the percent funded ratio. A score of 70% or higher is considered healthy; anything below 30% indicates severe underfunding and guarantees upcoming special assessments.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border/60">
                <div className="font-bold text-primary text-base mb-1">2. Two Years of Board Meeting Minutes</div>
                <p className="leading-relaxed">Review executive minutes for mentions of unbudgeted emergency plumbing repairs, ongoing contractor lawsuits, elevator failures, or discussions of pending dues hikes.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border/60">
                <div className="font-bold text-primary text-base mb-1">3. The Master Insurance Policy Certificate</div>
                <p className="leading-relaxed">Inspect the deductible limits for wind, hail, or water damage. Some aging buildings carry $100,000+ deductibles per occurrence, which get passed to homeowners if a pipe bursts.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border/60">
                <div className="font-bold text-primary text-base mb-1">4. The Official Resale Disclosure Certificate</div>
                <p className="leading-relaxed">Verify there are no outstanding violations on the specific lot, confirm current paid-to date, and verify that no board votes have approved unbilled capital assessments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL GUIDES & HELPFUL RESOURCES */}
        <section className="py-20 px-6 bg-bg-light border-t border-border/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Educational Guides &amp; Helpful Resources
              </h2>
              <p className="text-primary/70 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
                Explore comprehensive articles, state-by-state cost comparisons, and in-depth guides to help you navigate HOA fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "What Is an HOA Fee? The Complete 2026 Guide",
                  excerpt: "Learn what homeowners association fees cover, how they are calculated, and what happens if you don't pay them.",
                  link: "/blog/what-is-hoa-fee"
                },
                {
                  title: "Average HOA Fees by State: 2026 Comparison",
                  excerpt: "Explore state-by-state HOA fee averages across all 50 US states to plan your home buying budget.",
                  link: "/blog/average-hoa-fees-by-state"
                },
                {
                  title: "HOA Fees in Florida: Average Costs & Laws",
                  excerpt: "Discover average monthly fees in Miami, Orlando, and Tampa along with post-SB 4D structural reserve mandates.",
                  link: "/blog/hoa-fees-florida"
                },
                {
                  title: "HOA Fees in California: Averages & CC&R Rules",
                  excerpt: "Compare condo and townhouse dues in Los Angeles and San Francisco with Davis-Stirling 20% increase caps.",
                  link: "/blog/hoa-fees-california"
                },
                {
                  title: "HOA Fees in Texas: Legal & Financial Breakdown",
                  excerpt: "Understand master-planned community fees in Houston, Dallas, and Austin under Texas Property Code Chapter 209.",
                  link: "/blog/hoa-fees-texas"
                },
                {
                  title: "HOA vs No HOA: Costs, Pros & Cons Compared",
                  excerpt: "Compare living in an HOA community versus a non-HOA neighborhood to decide what fits your lifestyle.",
                  link: "/blog/hoa-vs-no-hoa"
                },
                {
                  title: "HOA Fees vs Condo Fees: Key Differences Explained",
                  excerpt: "Uncover the critical financial and legal distinctions between condo maintenance fees and townhouse HOA dues.",
                  link: "/blog/hoa-vs-condo-fee"
                },
                {
                  title: "HOA Fees in Washington State: Seattle, Bellevue & Eastside",
                  excerpt: "Compare Seattle condo fees, tech-worker amenities, seismic retrofit reserves, and Eastside townhouse averages.",
                  link: "/blog/hoa-fees-washington-state"
                },
                {
                  title: "HOA Fees in Illinois: Chicago Condos vs Suburban Townhouses",
                  excerpt: "Compare high-rise condo maintenance fees in Lincoln Park with suburban townhouse HOA dues in Naperville.",
                  link: "/blog/hoa-fees-illinois"
                }
              ].map((guide, idx) => (
                <Link
                  key={idx}
                  to={guide.link}
                  className="card bg-white border border-border/80 hover:border-accent hover:shadow-lg transition-all p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-primary/70 text-sm leading-relaxed mb-4 font-sans">
                      {guide.excerpt}
                    </p>
                  </div>
                  <span className="text-accent font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-full transition-all active:scale-95 shadow-md text-sm"
              >
                View All Real Estate Articles &rarr;
              </Link>
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

        {/* CONSOLIDATED FAQ ACCORDION BLOCK ABOVE FOOTER */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-border">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {bottomFaqs.map((faq, index) => {
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
                    <p className="px-6 py-5 text-primary opacity-80 leading-relaxed font-sans">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/80">
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
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">A free HOA cost calculator for US homebuyers.</p>
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
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">Connect With Us</span>
              <SocialIcons />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-accent transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
           <span>&copy; 2026 HOAFeeCalculator.com.</span>
           <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
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
