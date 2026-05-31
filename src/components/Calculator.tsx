import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { CalculatorInputs, CalculatorOutputs } from '@/src/types';

declare global {
  interface Window {
    Chart: any;
  }
}

export default function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    propertyValue: 450000,
    monthlyHOA: 350,
    annualIncrease: 3,
    yearsOfOwnership: 10,
    annualIncome: 120000,
  });

  const [outputs, setOutputs] = useState<CalculatorOutputs>({
    totalLifetimeCost: 0,
    averageMonthlyCost: 0,
    yearlyData: [],
    hoaToIncomeRatio: 0,
    affordabilityScore: 'A',
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    calculate();
  }, [inputs]);

  const calculate = () => {
    const { monthlyHOA, annualIncrease, yearsOfOwnership, annualIncome } = inputs;
    let total = 0;
    let currentMonthly = monthlyHOA;
    const yearlyData = [];

    for (let i = 1; i <= yearsOfOwnership; i++) {
      const annualCost = currentMonthly * 12;
      total += annualCost;
      yearlyData.push({
        year: i,
        fee: Math.round(currentMonthly),
        cumulative: Math.round(total),
      });
      currentMonthly *= (1 + annualIncrease / 100);
    }

    const avgMonthly = total / (yearsOfOwnership * 12);
    const ratio = (monthlyHOA * 12 / annualIncome) * 100;

    let score: 'A' | 'B' | 'C' | 'D' = 'A';
    if (ratio > 25) score = 'D';
    else if (ratio > 15) score = 'C';
    else if (ratio > 5) score = 'B';

    setOutputs({
      totalLifetimeCost: Math.round(total),
      averageMonthlyCost: Math.round(avgMonthly),
      yearlyData,
      hoaToIncomeRatio: parseFloat(ratio.toFixed(2)),
      affordabilityScore: score,
    });
  };

  const handleCalculateClick = () => {
    calculate();
    setHasCalculated(true);
  };

  useEffect(() => {
    if (chartRef.current && window.Chart) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: outputs.yearlyData.map(d => `Year ${d.year}`),
          datasets: [{
            label: 'Monthly HOA Fee ($)',
            data: outputs.yearlyData.map(d => d.fee),
            borderColor: '#1a2e4a',
            backgroundColor: 'rgba(13, 148, 136, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#0d9488',
            pointRadius: 4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              },
              ticks: {
                callback: (value: any) => '$' + value
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }, [outputs.yearlyData, hasCalculated]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
      {/* Tool Section: Inputs */}
      <aside className="card border-none shadow-xl">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          Enter Your Details
        </h2>

        <div className="space-y-6">
          <div className="input-group">
            <label className="input-label">Property Value</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-40">$</span>
              <input 
                type="number"
                value={inputs.propertyValue || ""}
                placeholder="$400,000"
                onChange={(e) => setInputs({...inputs, propertyValue: parseInt(e.target.value) || 0})}
                className="input-field border-[#374151] pl-8"
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Monthly HOA Fee</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-40">$</span>
              <input 
                type="number"
                value={inputs.monthlyHOA || ""}
                placeholder="$250"
                onChange={(e) => setInputs({...inputs, monthlyHOA: parseInt(e.target.value) || 0})}
                className="input-field border-[#374151] pl-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="input-group">
              <label className="input-label">Annual Increase (%)</label>
              <input 
                type="number"
                step="0.5"
                value={inputs.annualIncrease || ""}
                placeholder="3%"
                onChange={(e) => setInputs({...inputs, annualIncrease: parseFloat(e.target.value) || 0})}
                className="input-field border-[#374151]"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Years of Ownership</label>
              <div className="relative">
                <input 
                  type="number"
                  value={inputs.yearsOfOwnership || ""}
                  placeholder="10"
                  onChange={(e) => setInputs({...inputs, yearsOfOwnership: parseInt(e.target.value) || 1})}
                  className="input-field border-[#374151] pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-40">yrs</span>
              </div>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Annual Income ($) <span className="text-[10px] uppercase tracking-wider opacity-40 ml-1 font-normal">(optional)</span></label>
            <input 
              type="number"
              value={inputs.annualIncome || ""}
              placeholder="$120,000"
              onChange={(e) => setInputs({...inputs, annualIncome: parseInt(e.target.value) || 0})}
              className="input-field border-[#374151]"
            />
          </div>

          <button 
            onClick={handleCalculateClick}
            className="btn-primary w-full text-lg mt-4"
          >
            Calculate My Cost →
          </button>
          <p className="text-xs text-center text-primary mt-2">
            Results update instantly. No signup required.
          </p>
        </div>
      </aside>

      {/* Results Dashboard */}
      <section className="space-y-8">
        {hasCalculated ? (
          <div className="bg-[#EFF6FF] border-2 border-[#2563EB] rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Your Lifetime Costs Analysis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Total Lifetime Cost Card */}
              <div className="bg-white rounded-xl p-5 border border-blue-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 -mr-10 -mt-10 rounded-full"></div>
                <div className="stat-label text-primary/60 mb-1 font-bold uppercase tracking-wider text-xs">Total Lifetime Cost</div>
                <div className="text-3xl font-serif font-bold text-accent">${outputs.totalLifetimeCost.toLocaleString()}</div>
              </div>

              {/* Monthly Avg Cost Card */}
              <div className="bg-white rounded-xl p-5 border border-blue-200/60 shadow-sm">
                <div className="stat-label text-primary/60 mb-1 font-bold uppercase tracking-wider text-xs">Monthly Avg. Cost</div>
                <div className="text-3xl font-serif font-bold text-primary">${outputs.averageMonthlyCost.toLocaleString()}</div>
              </div>

              {/* Income Ratio Card */}
              <div className="bg-white rounded-xl p-5 border border-blue-200/60 shadow-sm">
                <div className="stat-label text-primary/60 mb-1 font-bold uppercase tracking-wider text-xs">Income Ratio</div>
                <div className="text-3xl font-serif font-bold text-primary">{outputs.hoaToIncomeRatio}%</div>
              </div>

              {/* Affordability Grade Card */}
              <div className="bg-white rounded-xl p-5 border border-blue-200/60 shadow-sm">
                <div className="stat-label text-primary/60 mb-1 font-bold uppercase tracking-wider text-xs">Affordability Grade</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-serif font-bold text-primary">{outputs.affordabilityScore}</span>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold",
                    outputs.affordabilityScore === 'A' ? 'bg-green-100 text-green-700' :
                    outputs.affordabilityScore === 'B' ? 'bg-blue-100 text-blue-700' :
                    outputs.affordabilityScore === 'C' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  )}>
                    ({
                      outputs.affordabilityScore === 'A' ? 'Excellent' : 
                      outputs.affordabilityScore === 'B' ? 'Good' : 
                      outputs.affordabilityScore === 'C' ? 'Tight' : 'Risky'
                    })
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card p-8 border-dashed border-2 border-border/80 flex flex-col items-center justify-center text-center py-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-serif text-primary mb-3">Your Lifetime Costs Await</h3>
            <p className="text-primary/70 max-w-sm mb-6 leading-relaxed">
              Adjust the assumptions such as property value and HOA fees, then click the <strong>Calculate My Cost</strong> button above to reveal your detailed projection and affordability score.
            </p>
          </div>
        )}

        {hasCalculated && (
          <>
            <div className="card border-none shadow-xl pb-0">
              <h3 className="text-xl font-bold mb-6">HOA Fee Growth Projection</h3>
              <div className="h-[300px] w-full">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>

            <div className="card border-none shadow-xl p-0 overflow-hidden">
              <div className="px-8 py-6 border-b border-border">
                <h3 className="text-xl font-bold italic">Year-by-Year Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-bg-light">
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary opacity-60">Year</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary opacity-60">Monthly Fee</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary opacity-60">Total Paid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {outputs.yearlyData.slice(0, 10).map((d) => (
                      <tr key={d.year} className="hover:bg-bg-light transition-colors">
                        <td className="px-8 py-4 font-bold text-primary">Year {d.year}</td>
                        <td className="px-8 py-4 font-medium">${d.fee.toLocaleString()}</td>
                        <td className="px-8 py-4 text-primary opacity-60 font-medium">${d.cumulative.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        <div style={{ fontSize: '12px', color: '#6B7280' }} className="pt-4 leading-relaxed">
          This calculator is for informational purposes only. Actual HOA fees vary based on location, community type, and association rules. Consult a real estate professional before making financial decisions.
        </div>
      </section>
    </div>
  );
}
