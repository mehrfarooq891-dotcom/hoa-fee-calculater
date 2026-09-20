import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function FloridaHOAFeesArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HOA Fees in Florida: What Every Buyer Must Know Before Closing",
    "description": "Examine the average HOA fees in Florida across major metro cities, review landmark Senate Bill 4-D reserve funding rules, Florida Statutes 718 and 720, and red flags before closing.",
    "datePublished": "2026-05-13T12:00:00Z",
    "dateModified": "2026-05-13T12:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "HOA Research Team"
    },
    "creator": {
      "@type": "Person",
      "name": "HOA Research Team",
      "jobTitle": "Real Estate Financial Analyst",
      "url": "https://www.hoafeecalculator.com/about"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fees in Florida: What to Know Before Closing (2026)"
        description="Comprehensive analysis of Florida's HOA fees, SB 4-D reserve rules, Statute 718 & 720, city averages, and buying tips."
        canonical="/blog/hoa-fees-florida"
        schema={[articleSchema]}
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
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
              className="font-serif text-2xl font-bold text-primary"
              style={{display: 'none'}}
            >
              HOAFee<span className="text-accent">Calculator</span>.com.com
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors text-primary font-bold">Home</Link>
            <Link to="/states" className="hover:text-accent transition-colors text-primary font-bold">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors text-primary font-bold">Compare</Link>
            <Link to="/blog" className="text-accent font-bold">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-6">
            <Link to="/blog" className="text-accent font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary opacity-80 uppercase font-bold tracking-wider mb-2">
              <span>Homebuying Guide</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>May 13, 2026</span>
              <span>•</span>
              <span className="text-accent normal-case">Reviewed by the HOA Research Team</span>
            </div>
          </div>

          <article className="prose prose-slate max-w-none text-primary">
            
            {/* H1 matching topic specification */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              HOA Fees in Florida: What Every Buyer Must Know Before Closing
            </h1>

            {/* Hook Section - Opening with Florida's highest per capita count */}
            <div className="text-lg opacity-90 leading-relaxed space-y-6 mb-12">
              <p>
                Florida holds a striking real estate distinction that surprises many newcomers: the Sunshine State is home to the highest concentration of homeowners association (HOA) and condominium communities per capita in the entire United States. With over 48,000 active community associations representing upwards of 9.6 million residents, managed communities are not just an option in Florida—they are the default vehicle of modern residential homeownership.
              </p>
              <p>
                From manicured golf courses in Palm Beach county to master-planned golf layouts in Orlando, buying a home or condominium unit in Florida almost guarantees you will find yourself paying recurring fees. These fees quietly dictate your overall budget. However, in recent years, <strong className="text-primary font-bold"><a href="https://www.hoafeecalculator.com/" className="text-accent underline hover:text-accent/80 transition-colors">HOA fees</a> Florida</strong> have undergone a dramatic structural transformation. 
              </p>
              <p>
                Under new mandates enacted by state lawmakers, millions of Floridian property owners are waking up to climbing regular dues, unexpected special assessments, and complex structural studies. Facing skyrocketing insurance coverage rates alongside zeroed-out reserve limitations, buyers today are entering a landscape vastly different from that of five years ago.
              </p>
              <p>
                If you are planning to sign a real estate purchase agreement or close on a townhouse, condo, or single-family home anywhere in the state, understanding how Florida HOAs are structured is no longer just recommended—it is a critical shield protecting you from physical and financial insolvency. Let's explore the financial, legal, and operational realities of Florida's association fee landscape in 2026.
              </p>
            </div>

            {/* Section 1: Florida HOA fee averages */}
            <div id="averages" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                1. Florida HOA Fee Averages: Miami vs. Orlando vs. Tampa vs. Jacksonville
              </h2>
              <p>
                The financial footprint of a Florida homeowner association varies enormously based on geography. High-density coastal regions heavily exposed to open-ocean winds carry vastly different cost formulas than central Florida's flat single-family communities.
              </p>
              <p>
                To understand the local cost spectrum, let's explore some of Florida's primary metropolitan housing markets and their typical monthly rates in 2026:
              </p>
              
              <ul className="list-disc pl-6 space-y-4 leading-relaxed mb-6">
                <li>
                  <strong className="text-primary font-bold">Miami Metro Area (Average: $400 - $600/mo):</strong> Miami represents the highest cost concentration in Florida. The massive presence of oceanfront high-rises makes Miami exceptionally prone to climb walls. Elevator maintenance packages, central air systems, custom shoreline treatments, and high-rise structural wind systems easily drive fees in luxury Brickell or Miami Beach units past $800 to $1,500 monthly.
                </li>
                <li>
                  <strong className="text-primary font-bold">Orlando Metro Area (Average: $200 - $350/mo):</strong> Orlando features the highest concentration of master-planned single-family neighborhoods. While low-density detached developments keep baseline maintenance affordable, communities heavily utilize resort-style clubhouses, water slide loops, and guard house lines that require consistent general contractor teams.
                </li>
                <li>
                  <strong className="text-primary font-bold">Tampa Bay Area (Average: $250 - $400/mo):</strong> Tampa combines mixed layouts of single-family suburbs in areas like Riverview with coastal mid-rises along St. Petersburg beach. Water-oriented associations are facing heavy premium adjustments, while mid-density inland townhouses remain close to the middle-tier state average.
                </li>
                <li>
                  <strong className="text-primary font-bold">Jacksonville Metro Area (Average: $150 - $300/mo):</strong> Because Jacksonville features more sprawling single-family developments and experiences slightly lower winter/summer extreme wind premiums compared to South Florida, monthly dues are generally the lowest among major Florida metros.
                </li>
              </ul>

              <p>
                When shopping, remember that these city averages represent standard operational baselines. A single outlier—such as an older building containing two elevators or an association maintaining an active golf course—can instantly push a property's nominal fees double what its neighboring layout demands.
              </p>
            </div>

            {/* Section 2: Why Florida HOA fees are high */}
            <div id="why-high" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                2. Why Florida HOA Fees are Skyrocketing
              </h2>
              <p>
                If Florida has abundant land and a growing population, why are local association budgets climbing faster than almost any other state? Real estate listings feature massive annual hikes, driven primarily by three converging economic storm cells.
              </p>
              
              <h3 className="text-xl font-serif font-bold text-primary">
                The Master Property Insurance Crisis
              </h3>
              <p>
                Following major natural events over the last decade, the international reinsurance market has re-priced coastal Florida risk. Entire insurance carriers have pulled out of the state or gone into insolvency. 
              </p>
              <p>
                Under Florida law, condo associations are mandated to carry full replacement-value property insurance on the collective "shell" of their development. When a building's commercial master insurance premium climbs from $80,000 to $320,000 in a three-year window, that delta must be divided and billed directly to individual unit owners, boosting baseline monthly dues by hundreds of dollars.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary">
                The Cost of Flood Zone Safeguards
              </h3>
              <p>
                FEMA's updated flood insurance maps place thousands of previous dry zones into mandatory flood protection bands. Associations maintaining sub-level parking garages, coastal retaining walls, or pump networks have to buy commercial flood protections. These mandatory policies push operational ledger items higher every year.
              </p>

              <h3 className="text-xl font-serif font-bold text-primary">
                Luxury Amenity creep and General Landscaping Overhead
              </h3>
              <p>
                Florida communities compete heavily to attract northern retirees and young families. Developers build immense, shared lazy rivers, multiple clubhouse layers, lighted tennis facilities, and tennis complexes. 
              </p>
              <p>
                Maintaining these elaborate wet amenities requires professional pool tech companies, permanent tennis court resurfacing contracts, and high electrical utility reserves. Additionally, Florida's rapid tropical plant growth demands expensive weekly landscaping, palm tree trimming, and complex irrigation upkeep, keeping regional lawn labor rates very strong.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="pull-quote bg-bg-light border-l-4 border-accent p-8 rounded-r-2xl italic my-8 text-lg font-medium text-primary leading-relaxed">
              "Buying in Florida without reviewing the HOA's financial records is like buying a used car without checking if there's oil in the engine. One bad financial year or an underfunded roofing budget can easily lead to a post-closing surprise cost of $15,000 to $40,000."
            </blockquote>

            {/* Section 3: SB 4D 2023 */}
            <div id="sb-4d-laws" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                3. Landmark Laws: Florida Senate Bill 4-D and Reserve Funding Mandates
              </h2>
              <p>
                The biggest structural event to ever hit the Florida condo market was the passage of <strong className="text-primary font-bold">Senate Bill 4-D (SB 4-D)</strong> and its follow-up clean-up bill SB 154. Enacted by lawmakers in Tallahassee, these bills transformed how structural integrity and reserve funding must be managed inside the state.
              </p>
              <p>
                Prior to the law, Florida condo boards could utilize a popular loophole: they could host an annual meeting and vote to waive or drastically reduce reserve savings funding. This kept monthly HOA fees incredibly low, but left buildings completely unprepared for large upcoming capital repairs.
              </p>
              <p>
                Under SB 4-D, the rules have changed completely:
              </p>

              <ul className="list-disc pl-6 space-y-3 leading-relaxed mb-6">
                <li>
                  <strong className="text-primary font-bold">Mandatory Milestone Inspections:</strong> All condominium and cooperative buildings that are three stories or higher must complete a "Milestone Inspection" once the building reaches 30 years of age, focusing strictly on structural load-bearing components.
                </li>
                <li>
                  <strong className="text-primary font-bold">Structural Integrity Reserve Study (SIRS):</strong> Every condo association with buildings over three stories must complete a formal SIRS. This technical engineering study evaluates vital columns, foundations, outer doors, roofing, and safety components.
                </li>
                <li>
                  <strong className="text-primary font-bold">Zero Waiver Rules for Vital Repairs:</strong> Boards are strictly prohibited from waiving or reducing reserve funding for structural integrity items listed inside the SIRS. Associations must fully fund reserves to cover the remaining useful life of these items, hitting budgets like a financial sledgehammer.
                </li>
              </ul>

              <p>
                For older buildings along the Miami or Fort Lauderdale coast, transitioning from a "zero-reserve" status to a fully funded reserve has forced boards to multiply their monthly association collect levels, causing severe budget crunches for retirees on fixed pensions.
              </p>
            </div>

            {/* Section 4: Surfside Assess */}
            <div id="post-surfside" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                4. The Nightmare of Post-Surfside Special Assessments
              </h2>
              <p>
                The tragic, sudden structural collapse of Champlain Towers South in Surfside, Florida in 2021 changed the paradigm of building safety. In the wake of this disaster, local cities, building inspectors, and banks became extremely risk-averse.
              </p>
              <p>
                When a milestone inspection identifies structural issues—such as spalling concrete, rusted rebar within balcony frames, or foundation movement—the repair cannot be delayed. This has triggered an unprecedented wave of massive <strong className="text-primary font-bold">special assessments</strong> across coastal Florida.
              </p>
              <p>
                For example, if an engineer reports that a 40-unit building requires $1.2 million in waterproofing and balcony repairs, and the association's savings account holds only $150,000, the board must vote to access those remaining funds. The resulting $1,050,000 gap is split across the 40 owners to pay.
              </p>
              <p>
                Each unit owner receives a non-negotiable invoice for <strong className="text-primary font-bold">$26,250</strong>, often due in a single lump-sum or short interest installments over 12 months. Owners who cannot afford these payments are forced to list their properties under market value, leading to a surge of heavily discounted "cash-only" listings in older developments.
              </p>

              {/* Real World Florida Case Study */}
              <div className="not-prose my-8 bg-amber-50/60 border border-amber-300/80 rounded-2xl p-6 md:p-8">
                <span className="bg-amber-200/70 text-amber-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                  Florida Case Study: The 1984 Broward County Oceanfront Milestone Assessment
                </span>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">
                  Case Study: The $45,000 Special Assessment + 98% Monthly Dues Hike
                </h4>
                <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-4">
                  A retiree purchased an oceanfront 2-bedroom condominium in Pompano Beach (Broward County) in 2019 for $340,000, paying a comfortable $580 monthly maintenance fee. In late 2024, the association conducted its statutory 40-year milestone inspection and mandatory Structural Integrity Reserve Study (SIRS).
                </p>
                <div className="bg-white p-4 rounded-xl border border-amber-200 text-sm space-y-2 mb-4">
                  <div className="flex justify-between items-center"><span className="text-primary/70">Pre-Inspection Monthly HOA Fee:</span><span className="font-bold text-primary">$580 / month</span></div>
                  <div className="flex justify-between items-center"><span className="text-primary/70">Emergency Rebar &amp; Post-Tension Cable Spalling Repair:</span><span className="font-bold text-primary">$45,000 / unit special assessment</span></div>
                  <div className="flex justify-between items-center"><span className="text-primary/70">Non-Waivable SIRS Reserve Surcharge:</span><span className="font-bold text-primary">+$360 / month</span></div>
                  <div className="flex justify-between items-center"><span className="text-primary/70">Citizens Commercial Windstorm Premium Hike:</span><span className="font-bold text-primary">+$210 / month</span></div>
                  <div className="border-t border-border pt-2 flex justify-between items-center font-bold text-base text-primary"><span>New Monthly Carrying Fee (Excluding Assessment):</span><span className="text-accent">$1,150 / month</span></div>
                </div>
                <p className="text-primary/80 text-sm leading-relaxed">
                  Because previous unit owners had voted year after year to waive reserve funding under prior Florida law, the association had zero reserves when the bill came due. Unit owners faced an immediate $45,000 lump sum assessment plus an ongoing monthly dues surge from $580 to $1,150/month, illustrating why verifying SIRS compliance is now the single most critical step in Florida real estate transactions.
                </p>
              </div>
            </div>

            {/* Section 5: Florida Red Flags */}
            <div id="red-flags" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                5. Warning Signs: Florida Association Red Flags Specific to Chapter 718 and 720
              </h2>
              <p>
                When you fall in love with a property, it is very easy to overlook administrative cracks. However, under Florida's legal system, associations are governed by very specific chapters: <strong className="text-primary font-bold">Florida Statute Chapter 718 (for Condos)</strong> and <strong className="text-primary font-bold">Florida Statute Chapter 720 (for Single-Family HOAs)</strong>.
              </p>
              <p>
                During your statutory review window, you must look for these critical warning flags within the association's disclosures:
              </p>

              <h3 className="text-lg font-serif font-bold text-primary mt-6">
                Red Flag 1: A "Developer-Controlled" Board with Leftover Debt
              </h3>
              <p>
                In new master-planned subdivisions, the builder often retains majority control of the board under Chapter 720 until a specific proportion of units are sold. Developers sometimes keep fees artificially low to attract buyers. Once the developer transfers control to the homeowners, the real maintenance costs hit, causing fees to skyrocket.
              </p>

              <h3 className="text-lg font-serif font-bold text-primary mt-6">
                Red Flag 2: Extreme "Transfer Fees" or Sudden Capital Contribution Rules
              </h3>
              <p>
                Review the bylaws to check if there is a "capital contribution fee" due at closing (often 2 or 3 months' worth of dues). Some aggressive associations charge hefty application and background screening fees to buyers. Be sure to confirm who is responsible for these fees prior to closing.
              </p>

              <h3 className="text-lg font-serif font-bold text-primary mt-6">
                Red Flag 3: A "Funding Ratio" Below 40% inside the SIRS Report
              </h3>
              <p>
                If the property has completed its Structural Integrity Reserve Study, ask for the formal report. If the funding ratio is low, a special assessment or severe monthly fee hike is practically inevitable. Look for buildings that are already above 75% funded to ensure physical and financial stability.
              </p>
            </div>

            {/* Section 6 + Inline CTA: Calculator CTA */}
            <div id="calculator-cta" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                6. Estimate Your True Florida HOA Cost Before Signing
              </h2>
              <p>
                A monthly HOA fee is not a fixed utility charge. In Florida, dues grow to match building wear, rising wages, and escalating commercial insurance rates (see our urgent guide on <Link to="/blog/hoa-insurance-not-renewed" className="text-accent underline font-bold">what to do if your HOA insurance is not renewed or dropped</Link>). Even if a $300 monthly fee fits your current lifestyle, a 5% annual increase will push that fee to over $480 in ten years, adding thousands of dollars to your holding costs.
              </p>
              <p>
                Before finalizing your real estate deal, use our complimentary <Link to="/" className="text-accent hover:underline font-bold">HOA fee calculator</Link> directly on the home page. By inputting your purchase price, regular monthly dues, mortgage terms, and anticipated inflation adjustments, you can map out a perfect year-by-year cost schedule.
              </p>
              <p>
                Arming yourself with this data gives you the analytical leverage to negotiate structural repairs with sellers and buy your Florida home with complete peace of mind.
              </p>

              {/* Action Button */}
              <div className="inline-cta my-10 text-center">
                <Link to="/" className="inline-block bg-accent hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-xl text-lg duration-300">
                  Access the Free Florida HOA Calculator →
                </Link>
              </div>
            </div>

            {/* Florida HOA & Condo Frequently Asked Questions */}
            <div id="florida-faqs" className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary border-b border-border pb-3">
                7. Frequently Asked Questions About Florida HOA &amp; Condo Laws
              </h2>
              <div className="space-y-6 text-primary/85 leading-relaxed text-base font-sans">
                <div className="bg-bg-light p-6 rounded-2xl border border-border/70">
                  <h3 className="font-bold text-lg text-primary mb-2">Can Florida condo unit owners still vote to waive reserve funding?</h3>
                  <p>
                    No, under Florida Senate Bill 4-D and subsequent statutory updates in Florida Statute § 718.112, condo associations with buildings three stories or higher are strictly prohibited from voting to waive or partially fund reserves for structural components covered in the mandatory Structural Integrity Reserve Study (SIRS). Previously, developers and investor-controlled associations could hold annual majority votes to waive reserve funding, keeping monthly dues artificially cheap. That practice is now illegal under Florida law, making full structural reserve funding mandatory.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-2xl border border-border/70">
                  <h3 className="font-bold text-lg text-primary mb-2">What happens if a Florida condo building fails its milestone inspection?</h3>
                  <p>
                    If the licensed engineer or architect identifies substantial structural deterioration during a Phase 1 milestone inspection, the association is legally required to commence a Phase 2 intensive testing inspection within 180 days. If life-safety issues remain unaddressed, local municipal building officials can issue condemnation notices, revoke the building's certificate of occupancy, or mandate immediate emergency shoring. The board must immediately levy a special assessment or secure a commercial bank loan to complete structural repairs within the statutory deadline.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-2xl border border-border/70">
                  <h3 className="font-bold text-lg text-primary mb-2">What is the "cooling-off" rescission period for buyers in Florida?</h3>
                  <p>
                    Under Florida Statute § 718.503 for condominiums, a buyer purchasing a resale unit has an absolute statutory right to cancel the purchase contract within three business days (excluding Saturdays, Sundays, and legal holidays) following the date they receive the complete package of condominium governance documents, financial statements, and the FAQ/governance summary. For developer sales of brand-new units, the cancellation window is 15 days. For single-family HOAs under Chapter 720, buyers have a 3-day right to cancel after receiving the mandatory disclosure summary.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-2xl border border-border/70">
                  <h3 className="font-bold text-lg text-primary mb-2">Why is Citizens Property Insurance forcing HOA fees upward across Florida?</h3>
                  <p>
                    Citizens Property Insurance Corporation, Florida's state-backed insurer of last resort, has instituted aggressive depopulation rules and mandatory flood insurance mandates for policyholders. As private commercial carriers withdrew from writing master wind and hurricane policies for multi-unit coastal associations, communities were forced onto Citizens policies carrying elevated rates, strict roof age limitations, and 2% to 5% hurricane deductibles. To pay these five-to-six figure annual master insurance invoices, HOA boards are required to pass large dues increases onto homeowners.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlighted CTA Box */}
            <div className="not-prose my-12 bg-[#EFF6FF] border border-[#2563EB]/10 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3 flex items-center gap-2">
                <span>📊</span> Calculate Your HOA Costs
              </h3>
              <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-5">
                Use our free HOA Fee Calculator to estimate your true lifetime HOA expenses — with year-by-year breakdown.
              </p>
              <a 
                href="https://www.hoafeecalculator.com/" 
                className="inline-flex items-center bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-6 rounded-full transition-all active:scale-95 text-sm shadow-sm"
              >
                Calculate Now →
              </a>
            </div>

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-border flex items-center gap-6">
              <div className="h-16 w-16 bg-accent/10 text-accent font-bold rounded-full flex items-center justify-center text-xl font-serif">
                HR
              </div>
              <div>
                <h4 className="text-primary font-bold text-lg">Written by: HOA Research Team</h4>
                <p className="text-primary opacity-80 text-sm">Providing real-time financial tracking, state laws analysis, and consumer protection guides for American property buyers. <Link to="/about" className="text-accent font-bold hover:underline">Learn more about our research methodology and editorial standards</Link>.</p>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-12 px-6 text-white/80">
        <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-12">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center">
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
                HOAFee<span className="text-accent">Calculator</span>.com.com
              </span>
            </Link>
          </div>
          <p className="text-sm">© 2026 HOAFeeCalculator.com — Expert Analysis for All 50 States.</p>
        </div>
      </footer>
    </div>
  );
}
