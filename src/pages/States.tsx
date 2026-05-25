import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export default function States() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="HOA Fees by State — 2026 Comparison Guide | HOACalculator.com"
        description="Browse HOA fee data, averages, and homeowners association laws for all 50 US states. Find your state's true cost of living."
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="HOA Fee Calculator" 
              style={{height: '45px', width: 'auto'}}
            />
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/states" className="text-accent">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              HOA Fees by State
            </h1>
            <p className="text-xl text-primary opacity-70 max-w-2xl mx-auto">
              Select your state to view average monthly fees, legal requirements, and lifetime cost projections updated for 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.map((state) => (
              <Link 
                key={state}
                to={`/states/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="card border border-border hover:border-accent hover:shadow-lg transition-all p-6 group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary group-hover:text-accent">{state}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-24 bg-primary rounded-3xl p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-16"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-serif font-bold mb-4">Why do state averages matter?</h2>
              <p className="opacity-80 leading-relaxed mb-6">
                HOA fees vary wildly across the US. While the national average is roughly $250, states like Hawaii and Florida see significantly higher costs due to insurance mandates and high-density amenities.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-accent font-bold text-xl mb-1">Highest Average</div>
                  <div className="text-sm opacity-60">Hawaii ($800+)</div>
                </div>
                <div>
                  <div className="text-accent font-bold text-xl mb-1">Lowest Average</div>
                  <div className="text-sm opacity-60">Mississippi (~$150)</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/60 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="inline-block mb-6">
               <img 
                 src="/logo.svg" 
                 alt="HOA Fee Calculator" 
                 style={{height: '45px', width: 'auto'}}
               />
             </Link>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">The most comprehensive HOA fee calculation tool for US homebuyers.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-accent transition-colors">Calculator Home</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
