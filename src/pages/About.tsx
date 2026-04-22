import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="About HOACalculator.com — Our Mission & Story"
        description="Learn about Michael Torres and the mission behind HOACalculator.com. Providing financial transparency for US homebuyers."
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            HOA<span className="text-accent">Calculator</span>.com
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/states" className="hover:text-accent transition-colors">States</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link to="/about" className="text-accent">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero / Intro */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              About HOACalculator.com
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>

          {/* Expert / Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-3xl rotate-3 transform"></div>
              <img 
                src="https://randomuser.me/api/portraits/men/52.jpg" 
                alt="Michael Torres" 
                className="relative z-10 w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Meet Michael Torres</h2>
              <p className="text-xl text-primary opacity-80 leading-relaxed mb-6">
                Michael Torres is a certified real estate financial analyst with 14 years 
                of experience in US residential markets. Having worked with homebuyers across 
                California, Florida, and Texas, he built HOACalculator.com to help buyers 
                understand the true lifetime cost of HOA fees before signing anything.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary font-bold">
                  <span className="text-accent">✓</span> No real estate agent commissions
                </div>
                <div className="flex items-center gap-3 text-primary font-bold">
                  <span className="text-accent">✓</span> Data updated for 2026
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-border py-12">
            {[
              { label: "Experience", value: "14 Years" },
              { label: "Coverage", value: "All 50 States" },
              { label: "Trust", value: "100k+ Users" },
              { label: "Cost", value: "Free Forever" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-primary opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-bg-light rounded-3xl p-12 text-center mb-24">
            <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-6 border-b border-accent/20 pb-2 inline-block">Our Mission</h3>
            <p className="text-3xl md:text-4xl font-serif text-primary italic leading-relaxed max-w-3xl mx-auto">
              "We believe homebuyers deserve 
              complete financial transparency 
              before the biggest purchase 
              of their lives."
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-white border border-border p-8 rounded-2xl text-center">
            <p className="text-sm text-primary opacity-50 leading-relaxed max-w-2xl mx-auto">
              <strong>Disclaimer:</strong> HOACalculator.com provides estimates
              for informational purposes only. HOA fee data and projections are 
              modeled from national averages and historical trends. 
              Not financial or legal advice.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <div className="font-serif text-2xl font-bold text-white mb-6">HOA<span className="text-accent">Calculator</span>.com</div>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">Providing financial transparency for US residents and homebuyers.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
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
