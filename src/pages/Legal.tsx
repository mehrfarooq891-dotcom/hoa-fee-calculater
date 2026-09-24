import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
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
               style={{ display: 'none' }}
             >
               HOAFee<span className="text-accent">Calculator</span>.com
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
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
        <span>&copy; 2026 HOAFeeCalculator.com — Free HOA Cost Data for All 50 States.</span>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Privacy Policy — HOAFeeCalculator.com" 
        description="Privacy policy and data disclosure for HOAFeeCalculator.com. Learn how user data, cookies, and advertising partners are handled." 
        canonical="/privacy-policy"
      />
      <LegalHeader />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: September 23, 2026</p>
          
          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              HOAFeeCalculator.com values consumer privacy. This Privacy Policy details how the site collects, uses, maintains, and discloses information collected from visitors of HOAFeeCalculator.com.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Information Collection &amp; Usage</h2>
            <p>
              HOAFeeCalculator.com does not sell, rent, or trade personal data to third parties. The site collects minimal information necessary to deliver and improve informational tools, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Interactive Calculator Data:</strong> Financial figures, property values, and fee estimates entered into on-page calculators are processed entirely on the client side in the user&apos;s browser session. They are not stored on any remote database or server.</li>
              <li><strong>Voluntary Correspondence:</strong> Information provided directly when contacting the site via email is used exclusively to respond to inquiries and feedback.</li>
              <li><strong>Automated Usage Data:</strong> Standard server logs and analytics tools collect aggregated, non-personally identifiable technical information (such as browser type, operating system, referring URL, and pages visited) to optimize site performance and content structure.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. Cookies, Advertising &amp; Google AdSense Disclosure</h2>
            <p>
              HOAFeeCalculator.com may display advertisements served by third-party advertising networks, including Google AdSense. In compliance with Google&apos;s publisher policies, visitors are notified of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites across the Internet.</li>
              <li>Google&apos;s use of advertising cookies enables it and its partners to serve targeted ads to users based on their visits to HOAFeeCalculator.com and other destinations on the web.</li>
              <li>
                Users may opt out of personalized advertising by visiting{' '}
                <a 
                  href="https://adssettings.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent underline font-semibold hover:text-accent/80"
                >
                  Google Ads Settings
                </a>.
              </li>
              <li>
                Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
                <a 
                  href="https://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent underline font-semibold hover:text-accent/80"
                >
                  www.aboutads.info
                </a>.
              </li>
              <li>
                For further details on how Google manages and protects data in its advertising products, please consult{' '}
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent underline font-semibold hover:text-accent/80"
                >
                  How Google uses information from sites or apps that use our services
                </a>.
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Web Analytics &amp; Cookie Management</h2>
            <p>
              Cookies are small files stored on a user&apos;s device to enhance navigation, analyze aggregate traffic trends, and administer the website. Users can configure their web browser settings to refuse cookies or to alert when cookies are being sent. Disabling cookies will not hinder access to the calculator or informational guides on HOAFeeCalculator.com.
            </p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">4. California Consumer Privacy Rights (CCPA / CPRA)</h2>
            <p>
              For California residents, HOAFeeCalculator.com adheres to the standards of the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA). Under California law, residents have specific rights regarding their personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Know:</strong> The right to request disclosure of the categories and specific pieces of personal information collected.</li>
              <li><strong>Right to Deletion:</strong> The right to request the deletion of personal information held by the site, subject to statutory exceptions.</li>
              <li><strong>Right to Opt-Out:</strong> HOAFeeCalculator.com does not sell or share personal information with third parties for monetary or commercial consideration.</li>
              <li><strong>Right to Non-Discrimination:</strong> The site will not discriminate against any user for exercising their privacy rights under California law.</li>
            </ul>
            <p>
              California residents wishing to submit a verified consumer request may contact the site using the email address provided below.
            </p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">5. Third-Party Links &amp; External Resources</h2>
            <p>
              HOAFeeCalculator.com contains hyperlinks to third-party websites, including statutory databases, public records, and housing resources. HOAFeeCalculator.com is not responsible for the privacy practices, policies, or content of third-party platforms. Visitors are encouraged to review the respective privacy statements of any external site they visit.
            </p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">6. Contact Information</h2>
            <p>
              For privacy-related inquiries, data requests, or questions regarding this policy, contact HOAFeeCalculator.com directly by email at{' '}
              <a 
                href="mailto:sarahmitchelltx18@gmail.com" 
                className="text-accent underline font-semibold hover:text-accent/80"
              >
                sarahmitchelltx18@gmail.com
              </a>.
            </p>
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
        title="Financial Disclaimer — HOAFeeCalculator.com" 
        description="Important legal information, limits of liability, and state data estimations regarding our calculator." 
        canonical="/disclaimer"
      />
      <LegalHeader />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Financial Disclaimer</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: September 23, 2026</p>

          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              The information and mathematical projections provided by HOAFeeCalculator.com are strictly for educational and general informational purposes only.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Not Professional Asset Advice</h2>
            <p>HOAFeeCalculator.com is not a licensed financial advisory service, certified public accounting firm, real estate brokerage, or association law practice. The predictive charts and estimates produced by the site&apos;s digital calculators are mathematical models and must not be used as the definitive or sole baseline for any home purchasing or mortgage financing decision.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. Accuracy &amp; Dynamic Changes of Data</h2>
            <p>While HOAFeeCalculator.com makes ongoing efforts to maintain valid state averages and statutory overviews, local bylaws and HOA dues fluctuate constantly without regulatory warning. Always inspect, audit, and verify specific homeowners association disclosures and official governing documents (CC&amp;Rs) directly with the listing agent or builder before completing escrow.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Absolute No Guarantees</h2>
            <p>Under no circumstances does HOAFeeCalculator.com guarantee that actual personal housing maintenance dues or assessment cycles will align with projected outputs. Exogenous variables like emergency structural repairs, unpredicted special assessments, board mismanagement, and general real estate market inflation will significantly alter real-world requirements.</p>
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
        title="Terms of Service — HOAFeeCalculator.com" 
        description="Read the terms of service and usage conditions of HOAFeeCalculator.com." 
        canonical="/terms-of-service"
      />
      <LegalHeader />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto card bg-white p-8 md:p-12 shadow-md">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Terms of Service</h1>
          <p className="text-sm text-primary opacity-80 mb-8 pb-4 border-b border-border">Last Updated: September 23, 2026</p>

          <div className="prose prose-slate max-w-none text-primary opacity-80 space-y-6">
            <p className="lead text-lg opacity-90">
              Welcome to HOAFeeCalculator.com. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-primary pt-4">1. Acceptance of Terms</h2>
            <p>By executing calculations, using mathematical tools, or viewing content on HOAFeeCalculator.com, you declare agreement with these terms. If you do not accept these conditions, do not utilize this platform.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">2. Intellectual Property</h2>
            <p>All algorithms, calculator designs, database compilations, and authored articles on HOAFeeCalculator.com are the property of HOAFeeCalculator.com. Unauthorized scraping, automated harvesting, or bulk replication without explicit credit and written consent is strictly prohibited.</p>

            <h2 className="text-2xl font-serif font-bold text-primary pt-4">3. Limitation of Liability</h2>
            <p>The site&apos;s calculators provide estimations and mathematical analyses only. HOAFeeCalculator.com and its operators shall not be liable for any direct, indirect, or consequential damages resulting from residential real estate choices or home purchases.</p>
          </div>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

