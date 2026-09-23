import React from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Contact() {
  const email = "sarahmitchelltx18@gmail.com";

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Contact | HOAFeeCalculator.com"
        description="Contact HOAFeeCalculator.com with questions, corrections or partnership inquiries."
        canonical="/contact"
      />

      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Contact</h1>
            <p className="text-lg text-primary opacity-70">Have questions about HOA fee estimates, state data, or site methodology?</p>
          </div>

          <div className="card bg-white p-8 md:p-12 border border-border rounded-3xl shadow-sm text-center">
            <div className="mx-auto w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <Mail size={32} />
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-primary mb-3">
              Questions, corrections, or inquiries?
            </h2>
            
            <p className="text-primary/80 text-base md:text-lg mb-6 leading-relaxed">
              Users can contact the site directly by emailing{' '}
              <a 
                href={`mailto:${email}`} 
                className="text-accent font-bold underline hover:text-accent/80 transition-colors"
              >
                {email}
              </a>
              . Inquiries are generally reviewed within a few business days.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/75">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row gap-6">
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
              HOAFee<span className="text-accent">Calculator</span>.com
            </span>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-xs uppercase tracking-widest text-white/60 font-bold">&copy; 2026 HOAFeeCalculator.com</span>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
}
