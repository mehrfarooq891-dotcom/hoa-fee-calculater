import React from 'react';
import SEO from '@/src/components/SEO';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-navy">
      <SEO title="Privacy Policy — HOACalculator.com" description="Our commitment to your privacy. Read how we handle your data." />
      <h1>Privacy Policy</h1>
      <p>Last Updated: April 16, 2026</p>
      <p>At HOACalculator.com, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.</p>
      
      <h2>1. Data Collection</h2>
      <p>We do not sell your personal data. We collect minimal information required to provide our services, including:</p>
      <ul>
        <li>Usage data via Google Analytics (cookies)</li>
        <li>Zip code and email if provided via our lead capture forms</li>
        <li>Calculator inputs (stored locally in your browser session only)</li>
      </ul>

      <h2>2. CCPA Compliance</h2>
      <p>For our California residents, we comply with the CCPA. You have the right to request deletion of any data we may have collected. Since we do not sell data, "Opt-Out" is our default state.</p>

      <h2>3. Cookies</h2>
      <p>We use cookies to analyze traffic and optimize your experience. You can disable cookies in your browser settings at any time.</p>

      <h2>4. Contact Us</h2>
      <p>If you have questions about this policy, contact us at privacy@hoacalculator.com.</p>
    </div>
  );
}

export function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-navy">
      <SEO title="Financial Disclaimer — HOACalculator.com" description="Important legal information about our calculator and data." />
      <h1>Financial Disclaimer</h1>
      <p>The information provided by HOACalculator.com is for educational and informational purposes only.</p>
      
      <h2>1. Not Professional Advice</h2>
      <p>We are not financial advisors, real estate attorneys, or tax professionals. The results from our calculator are estimates and should not be used as the sole basis for any financial decision.</p>

      <h2>2. Accuracy of Data</h2>
      <p>While we strive for accuracy, HOA fees and state laws change frequently. Always verify the specific HOA dues and rules with the association's official documents (CC&Rs) before purchasing a property.</p>

      <h2>3. No Guarantees</h2>
      <p>We do not guarantee that your actual HOA costs will match our projections. Factors like special assessments, board mismanagement, and extreme inflation can significantly alter real-world costs.</p>
    </div>
  );
}
