import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import { Link } from 'react-router-dom';

function LegalHeader() {
  return <Header />;
}

function LegalFooter() {
  return (
    <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
           <Link to="/" className="inline-flex items-center mb-6">
             <img 
               src="/hoa_calculator_logo.svg" 
               alt="HOA Fee Calculator" 
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
               style={{ display: 'none' }}
             >
               HOA<span className="text-accent">Calculator</span>.com
             </span>
           </Link>
           <p className="max-w-sm text-sm opacity-80 leading-relaxed">Providing financial transparency for US residents and homebuyers.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
            <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Privacy Policy — HOACalculator.com" 
        description="Our commitment to your privacy. Read how we handle, process, and protect your data." 
        canonical="/privacy-policy"
      />
      <LegalHeader />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: April 16, 2026</p>
          
          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              At HOACalculator.com, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Data Collection</h2>
            <p>We do not sell your personal data. We collect minimal information required to provide our services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage data and metrics via Google Analytics (cookies) for optimization</li>
              <li>Zip code and email details if provided voluntarily via our lead capture or consultation forms</li>
              <li>Interactive calculator inputs (processed and stored locally inside your browser session only)</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. CCPA Compliance</h2>
            <p>For our California residents, we fully comply with California Consumer Privacy Act (CCPA) standards. You possess the legal right to request the deletion of any data we might have collected. Since we do not sell or trade any user data, "Opt-Out" is our permanent, default platform state.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Cookies & Analytical Tags</h2>
            <p>We leverage web cookies to evaluate site traffic and streamline your computational experience. You have entire authority to terminate or clear cookies in your standard web browser settings at any point.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">4. Reach Support</h2>
            <p>If you have any questions, security concerns, or delete requests regarding our privacy policy, contact our compliance team directly at <a href="mailto:privacy@hoacalculator.com" className="text-accent underline hover:text-accent/80">privacy@hoacalculator.com</a>.</p>
          </div>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

export function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Financial Disclaimer — HOACalculator.com" 
        description="Important legal information, limits of liability, and state data estimations regarding our calculator." 
        canonical="/disclaimer"
      />
      <LegalHeader />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Financial Disclaimer</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: April 16, 2026</p>

          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              The information and mathematical projections provided by HOACalculator.com are strictly for educational and general informational purposes only.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Not Professional Asset Advice</h2>
            <p>We are not licensed financial advisors, certified public accountants, real estate brokers, or association attorneys. The predictive charts and estimates produced by our digital calculators are basic mathematical models and must not be used as the definitive or sole baseline for any home purchasing or mortgage financing decision.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. Accuracy & Dynamic Changes of Data</h2>
            <p>While we make extreme efforts to maintain valid state averages and legal data, local bylaws and HOA dues fluctuate constantly without regulatory warning. Always inspect, audit, and verify specific homeowners association disclosures and official governing documents (CC&Rs) directly with the listing block or builder before completing escrow.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Absolute No Guarantees</h2>
            <p>Under no circumstances do we guarantee that your actual personal housing maintenance dues or assessment cycles will align with our projected outputs. Exogenous variables like emergency structures, unpredicted special assessments, board mismanagement, and general real estate hyperinflation will significantly alter real-world requirements.</p>
          </div>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

export function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Terms of Service — HOACalculator.com" 
        description="Read the terms of service and usage conditions of HOACalculator.com." 
        canonical="/terms"
      />
      <LegalHeader />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Terms of Service</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: April 16, 2026</p>

          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              Welcome to HOACalculator.com. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Acceptance of Terms</h2>
            <p>By executing searches, using our mathematical calculators, or viewing content on HOACalculator.com, you declare your total agreement with these terms. If you do not accept these conditions, you are prohibited from utilizing this platform.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. Intellectual Property</h2>
            <p>All algorithms, calculator designs, database compilations, and authored articles on HOACalculator.com are property of our research team and partners. Unauthorized scraping, replication, or distribution without explicit credit is strictly forbidden.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Limitation of Liability</h2>
            <p>Our calculators provide estimations and mathematical analyses only. HOACalculator.com and its creators shall not be liable for any direct, indirect, or consequential damages resulting from residential real estate choices or home purchases.</p>
          </div>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

