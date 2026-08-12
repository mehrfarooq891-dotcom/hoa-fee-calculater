import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Compare HOA vs. Condo vs. Townhouse Fees | HOACalculator.com"
        description="Understanding the fee differences between single-family homes, condominiums, and townhouses."
        canonical="/compare"
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
      </main>

      <footer className="bg-primary py-20 px-6 text-white/75">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 HOACalculator.com — Empowering US Homebuyers.</p>
        </div>
      </footer>
    </div>
  );
}
