import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import { Link } from 'react-router-dom';

export default function Compare() {
  const comparisons = [
    {
      feature: "Typical Monthly Fee",
      hoaSolo: "$150 - $400",
      condo: "$300 - $800+",
      townhouse: "$200 - $500"
    },
    {
      feature: "Exterior Maintenance",
      hoaSolo: "Homeowner Only",
      condo: "HOA Managed",
      townhouse: "Shared Responsibility"
    },
    {
      feature: "Insurance Costs",
      hoaSolo: "Highest (Full Policy)",
      condo: "Lowest (Walls-In Only)",
      townhouse: "Medium"
    },
    {
      feature: "Amenities Level",
      hoaSolo: "Parks/Security",
      condo: "Pools/Gyms/Staff",
      townhouse: "Shared Courtyards"
    }
  ];


const comparePageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a lower HOA fee always better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. A low fee can mean a well-run, lean community, but it can also mean deferred maintenance, underfunded reserves, or an upcoming large special assessment. Compare what the fee covers and the community's financial health, not the monthly number alone."
        }
      },
      {
        "@type": "Question",
        "name": "Why are condo HOA fees higher than single-family HOA fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Condo associations maintain the roof, exterior walls, elevators, and common systems and typically carry a master insurance policy on the structure. Single-family HOAs usually cover only common areas, with owners maintaining and insuring their own homes. Compare total cost of ownership, not the fee in isolation."
        }
      },
      {
        "@type": "Question",
        "name": "What is a special assessment and how do I compare them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A special assessment is a one-time charge for expenses beyond regular dues, such as roof replacement or structural repairs. Compare assessment risk by checking the age of major building systems, the most recent reserve study, and whether the HOA has issued assessments in the last five years."
        }
      },
      {
        "@type": "Question",
        "name": "Can HOA fees increase after I buy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In most states there is no statutory cap on HOA fee increases, and annual increases of 3 to 8 percent are common. Check the community's fee history and budget for future increases when calculating affordability."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include HOA fees when calculating what I can afford?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. HOA dues are part of your monthly housing payment and count toward your debt-to-income ratio for mortgage qualification. Treat the fee as a permanent addition to your monthly payment and add a cushion for future increases and possible special assessments."
        }
      }
    ]
  }
];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA vs Condo vs Townhouse Fees Compared"
        description="Understanding the fee differences between single-family homes, condominiums, and townhouses."
        canonical="/compare"
        schema={comparePageSchema}
      />

      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">HOA Fee Comparison Matrix</h1>
            <p className="text-xl text-primary opacity-70 max-w-2xl mx-auto">
              Not all housing associations are created equal. See how fees vary across different property types in 2026.
            </p>
          </div>

          <div className="card p-0 overflow-hidden shadow-2xl border-none mb-16">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-6 font-serif text-xl border-r border-white/10">Feature</th>
                  <th className="px-8 py-6 font-serif text-xl border-r border-white/10">Single Family</th>
                  <th className="px-8 py-6 font-serif text-xl border-r border-white/10">Condominium</th>
                  <th className="px-8 py-6 font-serif text-xl">Townhouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-accent/5 transition-colors">
                    <td className="px-8 py-6 font-bold text-primary bg-bg-light border-r border-border">{row.feature}</td>
                    <td className="px-8 py-6 text-primary opacity-80 border-r border-border">{row.hoaSolo}</td>
                    <td className="px-8 py-6 text-accent font-bold border-r border-border">{row.condo}</td>
                    <td className="px-8 py-6 text-primary opacity-80">{row.townhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <h2 className="font-serif text-2xl mb-4">Why Condo Fees are Higher?</h2>
              <p className="text-sm opacity-80">Condos cover exterior siding, roofs, elevator maintenance, and central HVAC, which single-family HOAs do not.</p>
            </div>
            <div className="stat-card">
              <h2 className="font-serif text-2xl mb-4">Hidden Perks</h2>
              <p className="text-sm opacity-80">While fees are higher, your individual homeowners insurance is often 60% cheaper in a managed condo.</p>
            </div>
            <div className="stat-card">
              <h2 className="font-serif text-2xl mb-4">Transfer Fees</h2>
              <p className="text-sm opacity-80">Beware of "Capital Contribution" fees when buying, which can equal 2-3 months of dues upfront.</p>
            </div>
          </div>
        </div>
      
          {/* === ADDED 2026-10-11: expanded editorial content (AdSense value) === */}
          <div className="max-w-4xl mx-auto mt-20 space-y-14">

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                How Do You Compare HOA Fees Between States?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-4">
                Comparing HOA fees across states sounds simple — look at the monthly number and pick the lower one — but that shortcut almost always leads to the wrong conclusion. A $250 monthly fee in one state and a $250 fee in another can buy completely different things, and the "cheaper" fee sometimes hides the bigger bill.
              </p>
              <p className="text-primary/80 leading-relaxed mb-4">
                The right way to compare is to <strong className="text-primary">normalize what you are comparing</strong>. Start by matching property types: a single-family home HOA, a townhouse HOA, and a condominium HOA cover different responsibilities, so comparing their sticker prices is meaningless. Then look at what the fee actually includes — exterior maintenance, building insurance, water and trash, amenities — because two communities with the same monthly dues can leave you with very different out-of-pocket costs.
              </p>
              <p className="text-primary/80 leading-relaxed mb-4">
                Finally, compare the <strong className="text-primary">full annual picture</strong>, not just the monthly headline. Multiply dues by 12, then add the likelihood of special assessments based on the building's age and reserve fund health. A community with a $350 monthly fee and healthy reserves is often cheaper over five years than a community with a $220 fee that is about to assess every owner $15,000 for a roof replacement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                What Does an HOA Fee Comparison Actually Measure?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                A useful comparison goes beyond the monthly dues figure on a listing. There are three layers to what you are really paying, and every one of them matters when two states — or two communities — look similar on the surface.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">The Monthly Recurring Fee</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                This is the number everyone quotes: the regular dues you pay every month. It covers ongoing operations — landscaping, common-area maintenance, management, insurance on shared structures, amenities, and contributions to the reserve fund. For single-family HOAs, typical ranges tend to fall between $150 and $400 per month; condos often run $300 to $800 or more because the association maintains the building itself. These are general ranges, and actual fees vary widely by community, city, and building age.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Special Assessments</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Special assessments are one-time charges levied when the HOA needs money beyond regular dues — a roof replacement, elevator modernization, structural repairs, or storm damage. They can range from a few hundred dollars to tens of thousands per owner, and they are the most common budget surprise for buyers. When comparing, ask whether a community has issued assessments in the last five years and whether any are planned. Communities with older buildings and thin reserves tend to assess more often and for larger amounts.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Lifetime Cost of Ownership</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                The most honest comparison is the total cost over the time you plan to own the home. As an illustration: a $300 monthly fee equals $3,600 per year, or $36,000 over ten years — before any annual increases, which commonly run 3 to 8 percent depending on the community. Add probable special assessments and compare that total against the alternative. This is also where lower-fee communities sometimes lose: a community charging $220 a month but facing a known $20,000 special assessment for every owner costs more over five years than a well-funded community at $350 a month with no assessments on the horizon.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                What Should You Compare Besides the Monthly Fee?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                Two communities can charge the same monthly dues and deliver very different value — and risk. These six factors separate a genuinely affordable community from one that only looks affordable.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Does the Fee Cover Exterior Maintenance and Insurance?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                In a condo, the HOA typically maintains the roof, siding, and building structure and carries a master insurance policy — which is a big reason condo fees run higher. In a single-family HOA, you usually handle your own roof and carry your own full homeowners policy. Before comparing, list what you would pay out of pocket in each scenario. A $400 condo fee that includes building insurance and exterior maintenance can be cheaper overall than a $180 single-family HOA fee plus a $1,500 annual homeowners policy and a roof you maintain yourself.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">How Old Are the Building and Its Major Systems?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Roofs, elevators, plumbing, parking structures, and facades all have finite lifespans. A 30-year-old building with original systems and low dues is a classic setup for a large special assessment. A newer building — or an older one that recently completed major work — tends to carry less near-term assessment risk. Ask the HOA for the age of major components and the most recent reserve study, and compare that against the fee you are being quoted.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">How Healthy Is the Reserve Fund?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                The reserve fund is the HOA's savings account for future major repairs. Communities that contribute steadily to reserves tend to keep fees stable and assessments rare; communities that keep dues artificially low by skipping reserve contributions tend to make it up later with painful special assessments. A good rule of thumb: ask what percentage of the annual budget goes to reserves. Anything consistently underfunded should make you look twice at an otherwise attractive monthly fee.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">What Amenities Are You Actually Paying For?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Pools, fitness centers, clubhouses, gatehouses, concierge staff, and golf courses all cost money to run, and their costs are baked into your dues whether you use them or not. Compare the amenity package honestly against your lifestyle. If you never swim, a community with a $100-a-month amenity premium is costing you $1,200 a year for something you do not use. On the other hand, amenities you would otherwise pay for separately — like a gym membership — can make a higher fee the better deal.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">What Are the Community's Rules and Restrictions?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                CC&Rs (covenants, conditions, and restrictions) govern everything from paint colors to pet policies to rental caps. Some buyers discover after closing that they cannot rent out their unit, run a home business, or park a work vehicle on the property. Rules also affect enforcement costs — heavily restricted communities can spend more on compliance and legal fees, which shows up in dues. Always read the actual CC&Rs before comparing two communities on price alone.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">How Stable Has the Fee History Been?</h3>
              <p className="text-primary/80 leading-relaxed mb-6">
                Ask for five years of dues history. A community whose fees rose 3 to 4 percent a year is normal; one that jumped 15 percent twice in three years is telling you something about its budgeting. Also compare how the HOA handled past cost spikes — did it raise dues modestly, issue an assessment, or defer maintenance? Past behavior is the best predictor of what your costs will look like in five years.
              </p>
            </section>

            <section className="bg-bg-light border border-border/60 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                Where Does Our Comparison Data Come From?
              </h2>
              <p className="text-primary/80 leading-relaxed mb-4">
                The ranges and examples on this page are <strong className="text-primary">estimates based on typical HOA fee ranges</strong> seen across US communities — drawn from publicly listed community documents, property listings, and the fee patterns reported by homebuyers. They are intended to help you compare orders of magnitude, not to quote what any specific community charges.
              </p>
              <p className="text-primary/80 leading-relaxed mb-4">
                Actual fees vary dramatically by community, even within the same zip code. Two buildings on the same street can charge very different dues because of their age, amenities, insurance situation, and reserve funding. Nothing on this page should be treated as a quote or a guarantee of what you will pay.
              </p>
              <p className="text-primary/80 leading-relaxed">
                For an accurate number, always verify with the community's own documents: the resale certificate, the most recent budget, and the reserve study. Our <Link to="/" className="text-accent underline font-semibold hover:text-primary transition-colors">HOA fee calculator</Link> can help you model the full cost — monthly dues, special assessments, and long-term ownership costs — once you have the real figures from the HOA.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                HOA Fee Comparison FAQs
              </h2>
              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Is a lower HOA fee always better?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    No — and this is the single most expensive misunderstanding in HOA homebuying. A low fee can mean the community is well-run and lean, but it can also mean the HOA is deferring maintenance, underfunding reserves, or about to issue a large special assessment. The better question is what the fee covers and whether the community is financially healthy. A $350 fee with strong reserves and no assessment history is usually safer than a $200 fee in a 25-year-old building that has never funded its reserves.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Why are condo HOA fees higher than single-family HOA fees?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Condo associations are responsible for far more of the building: the roof, exterior walls, elevators, hallways, plumbing systems, and often a master insurance policy covering the structure. Single-family HOAs typically cover only common areas like landscaping, parks, and gates — you maintain and insure your own home. So while the condo fee looks higher, part of what you are comparing is costs you would pay separately anyway as a single-family homeowner. Compare the total cost of ownership, not the fee in isolation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">What is a special assessment, and how do I compare them?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    A special assessment is a one-time charge the HOA levies on owners to cover expenses beyond regular dues — typically major repairs like roof replacement, structural work, or storm damage. To compare assessment risk between communities, ask three questions: how old are the major building systems, what does the most recent reserve study say about upcoming work, and has the HOA issued assessments in the last five years? A community with newer systems and healthy reserves carries less assessment risk than an older one with thin reserves, regardless of the monthly fee.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">How do I compare HOA fees between two states?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Start by comparing the same property type — condo to condo, single-family to single-family — since fee structures differ by housing type. Then adjust for what the fee includes in each state: insurance costs, reserve requirements, and labor costs all vary by state. Our <Link to="/states" className="text-accent underline font-semibold hover:text-primary transition-colors">state-by-state HOA fee guide</Link> covers average ranges and legal differences for all 50 states. Remember that state averages hide huge local variation, so use them as a starting point and verify with specific communities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">What is a healthy HOA reserve fund?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    A commonly cited benchmark is that an HOA should be funding at least 70 percent of what its reserve study recommends, with steady annual contributions rather than one-time catch-ups. Fully funded reserves are ideal but uncommon. The red flags are communities that contribute little or nothing to reserves year after year, especially in buildings over 15 years old — that is usually where the next special assessment comes from. Ask for the reserve study and the percentage funded before you buy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Can HOA fees increase after I buy?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Yes. HOA boards can raise dues, and in most states there is no legal cap on how much — only a few states limit annual increases by statute. In practice, increases of 3 to 8 percent per year are common as insurance, labor, and maintenance costs rise. When budgeting, assume your fee will grow over time, and check the community's fee history: steady, modest increases suggest disciplined budgeting, while sudden large jumps suggest the HOA has been deferring costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Should I include HOA fees when calculating what I can afford?</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Absolutely — and lenders do. HOA dues are part of your monthly housing payment alongside principal, interest, taxes, and insurance, and they count toward your debt-to-income ratio when you qualify for a mortgage. A useful rule of thumb: treat the HOA fee like a permanent addition to your monthly payment, then add a cushion of 10 to 20 percent for future increases and possible special assessments. If the total still fits your budget comfortably, the fee is affordable for you — regardless of how it compares to the state average.
                  </p>
                </div>

              </div>
            </section>

            <div className="bg-primary rounded-3xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Model the Full Cost Before You Decide</h2>
              <p className="opacity-80 leading-relaxed mb-6 max-w-2xl mx-auto">
                The monthly fee is only the beginning. Use our free calculator to model monthly dues, special assessments, and long-term ownership costs side by side.
              </p>
              <Link to="/" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors">
                Try the HOA Fee Calculator
              </Link>
            </div>

          </div>
          {/* === END added content === */}
</main>

      <footer className="bg-primary py-20 px-6 text-white/75">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <SocialIcons />
          <p>© 2026 HOAFeeCalculator.com — Empowering US Homebuyers.</p>
        </div>
      </footer>
    </div>
  );
}
