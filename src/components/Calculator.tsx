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
            borderColor: '#1B3A6B',
            backgroundColor: 'rgba(27, 58, 107, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#E8A020',
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
  }, [outputs.yearlyData]);

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A': return 'text-green-600 bg-green-50';
      case 'B': return 'text-blue-600 bg-blue-50';
      case 'C': return 'text-yellow-600 bg-yellow-50';
      case 'D': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRatioColor = (ratio: number) => {
    if (ratio <= 15) return 'text-green-600';
    if (ratio <= 25) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
      {/* Left Panel: Inputs */}
      <aside className="card h-fit sticky top-20">
        <h2 className="text-xl font-bold border-b border-bg-section pb-3 mb-6">Enter Your Details</h2>

        <div className="input-group">
          <label className="input-label">
            Property Value <span className="input-value">${inputs.propertyValue.toLocaleString()}</span>
          </label>
          <input 
            type="range" 
            min="50000" 
            max="2000000" 
            step="5000"
            value={inputs.propertyValue}
            onChange={(e) => setInputs({...inputs, propertyValue: parseInt(e.target.value)})}
            className="w-full"
          />
          <input 
            type="number"
            value={inputs.propertyValue}
            onChange={(e) => setInputs({...inputs, propertyValue: parseInt(e.target.value) || 0})}
            className="input-field mt-2"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            Monthly HOA Fee <span className="input-value">${inputs.monthlyHOA}</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            step="10"
            value={inputs.monthlyHOA}
            onChange={(e) => setInputs({...inputs, monthlyHOA: parseInt(e.target.value)})}
            className="w-full"
          />
          <input 
            type="number"
            value={inputs.monthlyHOA}
            onChange={(e) => setInputs({...inputs, monthlyHOA: parseInt(e.target.value) || 0})}
            className="input-field mt-2"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            Annual Increase (%) <span className="input-value">{inputs.annualIncrease}%</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="15" 
            step="0.5"
            value={inputs.annualIncrease}
            onChange={(e) => setInputs({...inputs, annualIncrease: parseFloat(e.target.value)})}
            className="w-full"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            Years of Ownership <span className="input-value">{inputs.yearsOfOwnership} yrs</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1"
            value={inputs.yearsOfOwnership}
            onChange={(e) => setInputs({...inputs, yearsOfOwnership: parseInt(e.target.value)})}
            className="w-full"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Annual Income ($)</label>
          <input 
            type="number"
            value={inputs.annualIncome}
            onChange={(e) => setInputs({...inputs, annualIncome: parseInt(e.target.value) || 0})}
            className="input-field"
          />
        </div>

        <div className="adsense-mock h-[200px] mt-6 bg-bg-section border border-dashed border-border-light flex items-center justify-center text-text-light text-[11px] uppercase tracking-widest">
          AdSense: Side Widget
        </div>
      </aside>

      {/* Right Panel: Outputs */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="stat-card">
            <div className="stat-label">Total Lifetime Cost</div>
            <div className="stat-value">${outputs.totalLifetimeCost.toLocaleString()}</div>
          </div>
          <div className="stat-card border-accent">
            <div className="stat-label">Monthly Avg. Cost</div>
            <div className="stat-value text-accent">${outputs.averageMonthlyCost.toLocaleString()}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Income Ratio</div>
            <div className="stat-value">{outputs.hoaToIncomeRatio}%</div>
          </div>
          <div className="stat-card border-accent">
            <div className="stat-label">Affordability</div>
            <div className={cn("affordability-badge", 
              outputs.affordabilityScore === 'A' ? 'grade-a' : 
              outputs.affordabilityScore === 'B' ? 'grade-b' : 
              outputs.affordabilityScore === 'C' ? 'grade-c' : 'grade-d'
            )}>
              Grade {outputs.affordabilityScore} ({
                outputs.affordabilityScore === 'A' ? 'Excellent' : 
                outputs.affordabilityScore === 'B' ? 'Good' : 
                outputs.affordabilityScore === 'C' ? 'Tight' : 'Risky'
              })
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold text-primary mb-4">HOA Fee Growth Projection</h3>
          <div className="h-[240px] relative">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b border-border-light">
            <h3 className="text-lg font-bold text-primary">Year-by-Year Breakdown</h3>
          </div>
          <table className="w-full text-left text-[14px]">
            <thead className="bg-primary text-accent-light">
              <tr>
                <th className="p-4 uppercase text-[11px] tracking-wider">Year</th>
                <th className="p-4 uppercase text-[11px] tracking-wider">Monthly Fee</th>
                <th className="p-4 uppercase text-[11px] tracking-wider">Total Paid</th>
              </tr>
            </thead>
            <tbody>
              {outputs.yearlyData.slice(0, 5).map((d) => (
                <tr key={d.year} className="border-b border-border-light last:border-0 even:bg-bg-section/30">
                  <td className="p-4 font-bold text-primary">Year {d.year}</td>
                  <td className="p-4 font-medium text-text-medium">${d.fee}</td>
                  <td className="p-4 text-text-light">${d.cumulative.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-primary-dark rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            <strong className="text-accent-light">Don't let HOA fees sink your budget.</strong> Compare mortgage lenders and home insurance to offset your costs.
          </p>
          <div className="flex gap-3">
            <a href="#" rel="nofollow sponsored" className="bg-accent text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-accent-hover transition-colors whitespace-nowrap">
              Compare Rates →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
