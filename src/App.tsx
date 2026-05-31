import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';

const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const WhatIsHOAFeeArticle = React.lazy(() => import('./pages/WhatIsHOAFeeArticle'));
const AverageHOAFeesByStateArticle = React.lazy(() => import('./pages/AverageHOAFeesByStateArticle'));
const FloridaHOAFeesArticle = React.lazy(() => import('./pages/FloridaHOAFeesArticle'));
const CaliforniaHOAFeesArticle = React.lazy(() => import('./pages/CaliforniaHOAFeesArticle'));
const TexasHOAFeesArticle = React.lazy(() => import('./pages/TexasHOAFeesArticle'));
const HOAVsNoHOAArticle = React.lazy(() => import('./pages/HOAVsNoHOAArticle'));
const HOAVsCondoFeeArticle = React.lazy(() => import('./pages/HOAVsCondoFeeArticle'));
const Compare = React.lazy(() => import('./pages/Compare'));
const Contact = React.lazy(() => import('./pages/Contact'));
const States = React.lazy(() => import('./pages/States'));
const StateTemplate = React.lazy(() => import('./pages/StateTemplate'));
const CityTemplate = React.lazy(() => import('./pages/CityTemplate'));
const PrivacyPolicy = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.PrivacyPolicy })));
const Disclaimer = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Disclaimer })));
const TermsOfService = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.TermsOfService })));

// 23 New Blog Posts Lazy Imports
const HOAFeesTaxDeductibleArticle = React.lazy(() => import('./pages/HOAFeesTaxDeductibleArticle'));
const DontPayHOAFeesArticle = React.lazy(() => import('./pages/DontPayHOAFeesArticle'));
const HOAForeclosureArticle = React.lazy(() => import('./pages/HOAForeclosureArticle'));
const FightHOAFeeIncreaseArticle = React.lazy(() => import('./pages/FightHOAFeeIncreaseArticle'));
const HOASpecialAssessmentArticle = React.lazy(() => import('./pages/HOASpecialAssessmentArticle'));
const ReadHOAFinancialStatementsArticle = React.lazy(() => import('./pages/ReadHOAFinancialStatementsArticle'));
const HOADocumentRedFlagsArticle = React.lazy(() => import('./pages/HOADocumentRedFlagsArticle'));
const HOAReserveFundArticle = React.lazy(() => import('./pages/HOAReserveFundArticle'));
const HowMuchHOAFeeTooMuchArticle = React.lazy(() => import('./pages/HowMuchHOAFeeTooMuchArticle'));
const HOAFeesMortgageApprovalArticle = React.lazy(() => import('./pages/HOAFeesMortgageApprovalArticle'));
const NewConstructionHOAFeesArticle = React.lazy(() => import('./pages/NewConstructionHOAFeesArticle'));
const CondoHOAFeesNYCArticle = React.lazy(() => import('./pages/CondoHOAFeesNYCArticle'));
const HOAFeesArizonaArticle = React.lazy(() => import('./pages/HOAFeesArizonaArticle'));
const LowerHOAFeesArticle = React.lazy(() => import('./pages/LowerHOAFeesArticle'));
const HOAManagementCompaniesArticle = React.lazy(() => import('./pages/HOAManagementCompaniesArticle'));
const SelfManagedHOAArticle = React.lazy(() => import('./pages/SelfManagedHOAArticle'));
const HOARulesEnforcementArticle = React.lazy(() => import('./pages/HOARulesEnforcementArticle'));
const QuestionsBeforeBuyingHOAArticle = React.lazy(() => import('./pages/QuestionsBeforeBuyingHOAArticle'));
const TownhouseHOAFeesArticle = React.lazy(() => import('./pages/TownhouseHOAFeesArticle'));
const WhatDoHOAFeesCoverArticle = React.lazy(() => import('./pages/WhatDoHOAFeesCoverArticle'));
const HOAAnnualBudgetArticle = React.lazy(() => import('./pages/HOAAnnualBudgetArticle'));
const StatesNoHOALawsArticle = React.lazy(() => import('./pages/StatesNoHOALawsArticle'));
const HOAFeeCalculatorGuideArticle = React.lazy(() => import('./pages/HOAFeeCalculatorGuideArticle'));
const HOAFeesTexasGuideArticle = React.lazy(() => import('./pages/HOAFeesTexasGuideArticle'));

function DynamicBlogArticle() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  if (!articleSlug) return <Navigate to="/blog" replace />;

  switch (articleSlug) {
    case 'what-is-hoa-fee':
      return <WhatIsHOAFeeArticle />;
    case 'average-hoa-fees-by-state':
      return <AverageHOAFeesByStateArticle />;
    case 'hoa-fees-florida':
      return <FloridaHOAFeesArticle />;
    case 'hoa-fees-california':
      return <CaliforniaHOAFeesArticle />;
    case 'hoa-fees-texas':
      return <TexasHOAFeesArticle />;
    case 'hoa-vs-no-hoa':
      return <HOAVsNoHOAArticle />;
    case 'hoa-vs-condo-fee':
      return <HOAVsCondoFeeArticle />;
    // 23 New Slug Cases
    case 'hoa-fees-tax-deductible':
      return <HOAFeesTaxDeductibleArticle />;
    case 'dont-pay-hoa-fees':
      return <DontPayHOAFeesArticle />;
    case 'hoa-foreclosure':
      return <HOAForeclosureArticle />;
    case 'fight-hoa-fee-increase':
      return <FightHOAFeeIncreaseArticle />;
    case 'hoa-special-assessment':
      return <HOASpecialAssessmentArticle />;
    case 'read-hoa-financial-statements':
      return <ReadHOAFinancialStatementsArticle />;
    case 'hoa-document-red-flags':
      return <HOADocumentRedFlagsArticle />;
    case 'hoa-reserve-fund':
      return <HOAReserveFundArticle />;
    case 'how-much-hoa-fee-too-much':
      return <HowMuchHOAFeeTooMuchArticle />;
    case 'hoa-fees-mortgage-approval':
      return <HOAFeesMortgageApprovalArticle />;
    case 'new-construction-hoa-fees':
      return <NewConstructionHOAFeesArticle />;
    case 'condo-hoa-fees-nyc':
      return <CondoHOAFeesNYCArticle />;
    case 'hoa-fees-arizona':
      return <HOAFeesArizonaArticle />;
    case 'lower-hoa-fees':
      return <LowerHOAFeesArticle />;
    case 'hoa-management-companies':
      return <HOAManagementCompaniesArticle />;
    case 'self-managed-hoa':
      return <SelfManagedHOAArticle />;
    case 'hoa-rules-enforcement':
      return <HOARulesEnforcementArticle />;
    case 'questions-before-buying-hoa':
      return <QuestionsBeforeBuyingHOAArticle />;
    case 'townhouse-hoa-fees':
      return <TownhouseHOAFeesArticle />;
    case 'what-do-hoa-fees-cover':
      return <WhatDoHOAFeesCoverArticle />;
    case 'hoa-annual-budget':
      return <HOAAnnualBudgetArticle />;
    case 'states-no-hoa-laws':
      return <StatesNoHOALawsArticle />;
    case 'hoa-fee-calculator-guide':
      return <HOAFeeCalculatorGuideArticle />;
    case 'hoa-fees-texas-guide':
      return <HOAFeesTexasGuideArticle />;
    default:
      return <Navigate to="/blog" replace />;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div style={{minHeight:'100vh'}} />} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/what-is-hoa-fee" element={<WhatIsHOAFeeArticle />} />
            <Route path="/blog/average-hoa-fees-by-state" element={<AverageHOAFeesByStateArticle />} />
            <Route path="/blog/hoa-fees-florida" element={<FloridaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-california" element={<CaliforniaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-texas" element={<TexasHOAFeesArticle />} />
            <Route path="/blog/hoa-vs-no-hoa" element={<HOAVsNoHOAArticle />} />
            <Route path="/blog/hoa-vs-condo-fee" element={<HOAVsCondoFeeArticle />} />
            
            {/* 23 New Explicit Routes */}
            <Route path="/blog/hoa-fees-tax-deductible" element={<HOAFeesTaxDeductibleArticle />} />
            <Route path="/blog/dont-pay-hoa-fees" element={<DontPayHOAFeesArticle />} />
            <Route path="/blog/hoa-foreclosure" element={<HOAForeclosureArticle />} />
            <Route path="/blog/fight-hoa-fee-increase" element={<FightHOAFeeIncreaseArticle />} />
            <Route path="/blog/hoa-special-assessment" element={<HOASpecialAssessmentArticle />} />
            <Route path="/blog/read-hoa-financial-statements" element={<ReadHOAFinancialStatementsArticle />} />
            <Route path="/blog/hoa-document-red-flags" element={<HOADocumentRedFlagsArticle />} />
            <Route path="/blog/hoa-reserve-fund" element={<HOAReserveFundArticle />} />
            <Route path="/blog/how-much-hoa-fee-too-much" element={<HowMuchHOAFeeTooMuchArticle />} />
            <Route path="/blog/hoa-fees-mortgage-approval" element={<HOAFeesMortgageApprovalArticle />} />
            <Route path="/blog/new-construction-hoa-fees" element={<NewConstructionHOAFeesArticle />} />
            <Route path="/blog/condo-hoa-fees-nyc" element={<CondoHOAFeesNYCArticle />} />
            <Route path="/blog/hoa-fees-arizona" element={<HOAFeesArizonaArticle />} />
            <Route path="/blog/lower-hoa-fees" element={<LowerHOAFeesArticle />} />
            <Route path="/blog/hoa-management-companies" element={<HOAManagementCompaniesArticle />} />
            <Route path="/blog/self-managed-hoa" element={<SelfManagedHOAArticle />} />
            <Route path="/blog/hoa-rules-enforcement" element={<HOARulesEnforcementArticle />} />
            <Route path="/blog/questions-before-buying-hoa" element={<QuestionsBeforeBuyingHOAArticle />} />
            <Route path="/blog/townhouse-hoa-fees" element={<TownhouseHOAFeesArticle />} />
            <Route path="/blog/what-do-hoa-fees-cover" element={<WhatDoHOAFeesCoverArticle />} />
            <Route path="/blog/hoa-annual-budget" element={<HOAAnnualBudgetArticle />} />
            <Route path="/blog/states-no-hoa-laws" element={<StatesNoHOALawsArticle />} />
            <Route path="/blog/hoa-fee-calculator-guide" element={<HOAFeeCalculatorGuideArticle />} />
            <Route path="/blog/hoa-fees-texas-guide" element={<HOAFeesTexasGuideArticle />} />

            <Route path="/blog/:articleSlug" element={<DynamicBlogArticle />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/states" element={<States />} />
            <Route path="/states/:stateName" element={<StateTemplate />} />
            <Route path="/cities/:cityName" element={<CityTemplate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* Fallback for the specific texas path requested */}
            <Route path="/states/texas.html" element={<StateTemplate />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
