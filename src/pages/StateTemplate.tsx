import React from 'react';
import Calculator from '@/src/components/Calculator';
import SEO from '@/src/components/SEO';
import { useParams, Link } from 'react-router-dom';

export default function StateTemplate() {
  const { stateName = 'Texas' } = useParams();
  
  // Mock data for the template
  const stateData = {
    name: stateName,
    avgFee: 300,
    cities: [
      { name: 'Austin', avgFee: 350 },
      { name: 'Dallas', avgFee: 320 },
      { name: 'Houston', avgFee: 280 },
      { name: 'San Antonio', avgFee: 250 },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SEO 
        title={`Average HOA Fees in ${stateData.name} (2026 Data) — HOACalculator.com`}
        description={`See the average HOA fees in ${stateData.name} by city. Use our free calculator to estimate your true lifetime cost in ${stateData.name}.`}
        schema={[{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `HOA Guide ${stateData.name}`,
          "description": `HOA fee data and laws for ${stateData.name}`
        }]}
      />

      <header className="mb-12">
        <Link to="/" className="text-gold font-bold hover:underline mb-4 inline-block">← Back to National Calculator</Link>
        <h1 className="text-4xl md:text-5xl font-black text-navy mb-4">
          Average HOA Fees in {stateData.name} (2026 Data)
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Thinking about buying in the Lone Star State? Here's what you need to know about {stateData.name} HOA laws, average costs, and how to avoid overpaying.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section className="card">
            <h2 className="text-2xl font-bold text-navy mb-6">HOA Fees by City in {stateData.name}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-3">City</th>
                    <th className="py-3">Avg. Monthly Fee</th>
                    <th className="py-3">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {stateData.cities.map((city) => (
                    <tr key={city.name} className="border-b last:border-0">
                      <td className="py-3 font-medium">{city.name}</td>
                      <td className="py-3">${city.avgFee}</td>
                      <td className="py-3 text-red-500">↑ 4.2%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <article className="prose prose-navy max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">{stateData.name} HOA Laws You Must Know</h2>
            <p>
              In {stateData.name}, HOAs are governed by specific state statutes that protect both the association and the homeowner. It's critical to understand your rights before you sign on the dotted line.
            </p>
            <p>
              One of the most important aspects of {stateData.name} law is the "Right to Redemption." If an HOA forecloses on your home for unpaid dues, you may have a limited window to pay the debt and reclaim your property. However, this is a complex legal process and you shouldn't rely on it as a safety net.
            </p>
            <p>
              Boards in {stateData.name} are also required to hold open meetings and provide access to financial records. If your board is being secretive about the budget, they might be violating state law.
            </p>
            <p>
              Always review the "Master Deed" and "Bylaws" specific to your {stateData.name} community. These documents override general state laws in many cases, especially regarding architectural controls and fine structures.
            </p>
          </article>

          <section>
            <h2 className="text-3xl font-bold text-navy mb-6">Calculate Your {stateData.name} HOA Cost</h2>
            <Calculator />
          </section>
        </div>

        <aside className="space-y-8">
          <div className="card bg-navy text-white">
            <h4 className="font-bold mb-4">Nearby State Guides</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/states/oklahoma" className="hover:text-gold">Oklahoma HOA Fees →</Link></li>
              <li><Link to="/states/louisiana" className="hover:text-gold">Louisiana HOA Fees →</Link></li>
              <li><Link to="/states/new-mexico" className="hover:text-gold">New Mexico HOA Fees →</Link></li>
            </ul>
          </div>

          <div className="card">
            <h4 className="font-bold mb-4 text-navy">Expert Tip</h4>
            <p className="text-sm text-gray-600 italic">
              "In {stateData.name}, property taxes are high, so adding a $400 HOA fee can significantly impact your DTI ratio. Always get a pre-approval that accounts for the specific HOA dues of the home you're eyeing."
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
