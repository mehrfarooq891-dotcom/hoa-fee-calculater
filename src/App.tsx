import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { HelmetProvider } from 'react-helmet-async';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const WhatIsHOAFeeArticle = React.lazy(() => import('./pages/WhatIsHOAFeeArticle'));
const AverageHOAFeesByStateArticle = React.lazy(() => import('./pages/AverageHOAFeesByStateArticle'));
const HighestHOAFeesByStateArticle = React.lazy(() => import('./pages/HighestHOAFeesByStateArticle'));
const HOAFeeIncreaseLimitsArticle = React.lazy(() => import('./pages/HOAFeeIncreaseLimitsArticle'));
const FloridaHOAFeesArticle = React.lazy(() => import('./pages/FloridaHOAFeesArticle'));
const CaliforniaHOAFeesArticle = React.lazy(() => import('./pages/CaliforniaHOAFeesArticle'));
const TexasHOAFeesArticle = React.lazy(() => import('./pages/TexasHOAFeesArticle'));
const GeorgiaHOAFeesArticle = React.lazy(() => import('./pages/GeorgiaHOAFeesArticle'));
const NorthCarolinaHOAFeesArticle = React.lazy(() => import('./pages/NorthCarolinaHOAFeesArticle'));
const IllinoisHOAFeesArticle = React.lazy(() => import('./pages/IllinoisHOAFeesArticle'));
const NevadaHOAFeesArticle = React.lazy(() => import('./pages/NevadaHOAFeesArticle'));
const ColoradoHOAFeesArticle = React.lazy(() => import('./pages/ColoradoHOAFeesArticle'));
const WashingtonStateHOAFeesArticle = React.lazy(() => import('./pages/WashingtonStateHOAFeesArticle'));
const VirginiaHOAFeesArticle = React.lazy(() => import('./pages/VirginiaHOAFeesArticle'));
const NewJerseyHOAFeesArticle = React.lazy(() => import('./pages/NewJerseyHOAFeesArticle'));
const TennesseeHOAFeesArticle = React.lazy(() => import('./pages/TennesseeHOAFeesArticle'));
const HOAVsNoHOAArticle = React.lazy(() => import('./pages/HOAVsNoHOAArticle'));
const HOAVsCondoFeeArticle = React.lazy(() => import('./pages/HOAVsCondoFeeArticle'));
const Compare = React.lazy(() => import('./pages/Compare'));
const Contact = React.lazy(() => import('./pages/Contact'));
const States = React.lazy(() => import('./pages/States'));
const StateTemplate = React.lazy(() => import('./pages/StateTemplate'));
const Cities = React.lazy(() => import('./pages/Cities'));
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
const HOALienNoticeArticle = React.lazy(() => import('./pages/HOALienNoticeArticle'));
const SelfManagedHOAArticle = React.lazy(() => import('./pages/SelfManagedHOAArticle'));
const HOARulesEnforcementArticle = React.lazy(() => import('./pages/HOARulesEnforcementArticle'));
const QuestionsBeforeBuyingHOAArticle = React.lazy(() => import('./pages/QuestionsBeforeBuyingHOAArticle'));
const TownhouseHOAFeesArticle = React.lazy(() => import('./pages/TownhouseHOAFeesArticle'));
const WhatDoHOAFeesCoverArticle = React.lazy(() => import('./pages/WhatDoHOAFeesCoverArticle'));
const HOAAnnualBudgetArticle = React.lazy(() => import('./pages/HOAAnnualBudgetArticle'));
const StatesNoHOALawsArticle = React.lazy(() => import('./pages/StatesNoHOALawsArticle'));
const HOAFeeCalculatorGuideArticle = React.lazy(() => import('./pages/HOAFeeCalculatorGuideArticle'));
const HOAFeesTexasGuideArticle = React.lazy(() => import('./pages/HOAFeesTexasGuideArticle'));
const AverageHOAFeesNewYorkArticle = React.lazy(() => import('./pages/AverageHOAFeesNewYorkArticle'));
const HOAThreateningForeclosureGuideArticle = React.lazy(() => import('./pages/HOAThreateningForeclosureGuideArticle'));
const CantAffordSpecialAssessmentArticle = React.lazy(() => import('./pages/CantAffordSpecialAssessmentArticle'));
const HOADuesExplainedArticle = React.lazy(() => import('./pages/HOADuesExplainedArticle'));
const CondoFeesVsHOAFeesArticle = React.lazy(() => import('./pages/CondoFeesVsHOAFeesArticle'));
const HOALawsByStateArticle = React.lazy(() => import('./pages/HOALawsByStateArticle'));

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
    case 'hoa-fees-georgia':
      return <GeorgiaHOAFeesArticle />;
    case 'hoa-fees-north-carolina':
      return <NorthCarolinaHOAFeesArticle />;
    case 'hoa-fees-illinois':
      return <IllinoisHOAFeesArticle />;
    case 'hoa-fees-nevada':
      return <NevadaHOAFeesArticle />;
    case 'hoa-fees-colorado':
      return <ColoradoHOAFeesArticle />;
    case 'hoa-fees-washington-state':
      return <WashingtonStateHOAFeesArticle />;
    case 'hoa-fees-virginia':
      return <VirginiaHOAFeesArticle />;
    case 'hoa-fees-new-jersey':
      return <NewJerseyHOAFeesArticle />;
    case 'hoa-fees-tennessee':
      return <TennesseeHOAFeesArticle />;
    case 'hoa-vs-no-hoa':
      return <HOAVsNoHOAArticle />;
    case 'hoa-vs-condo-fee':
      return <HOAVsCondoFeeArticle />;
    // 23 New Slug Cases
    case 'hoa-fees-tax-deductible':
      return <HOAFeesTaxDeductibleArticle />;
    case 'dont-pay-hoa-fees':
      return <DontPayHOAFeesArticle />;
    case 'hoa-lien-notice-what-to-do':
      return <HOALienNoticeArticle />;
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
    case 'average-hoa-fees-new-york':
      return <AverageHOAFeesNewYorkArticle />;
    case 'highest-hoa-fees-by-state':
      return <HighestHOAFeesByStateArticle />;
    case 'hoa-fee-increase-limits':
      return <HOAFeeIncreaseLimitsArticle />;
    case 'hoa-threatening-foreclosure-guide':
      return <HOAThreateningForeclosureGuideArticle />;
    case 'cant-afford-special-assessment':
      return <CantAffordSpecialAssessmentArticle />;
    case 'hoa-dues-explained':
      return <HOADuesExplainedArticle />;
    case 'condo-fees-vs-hoa-fees':
      return <CondoFeesVsHOAFeesArticle />;
    case 'hoa-laws-by-state':
      return <HOALawsByStateArticle />;
    default:
      return <Navigate to="/blog" replace />;
  }
}

export function RootLayout() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/what-is-hoa-fee', element: <WhatIsHOAFeeArticle /> },
      { path: 'blog/average-hoa-fees-by-state', element: <AverageHOAFeesByStateArticle /> },
      { path: 'blog/hoa-fees-florida', element: <FloridaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-california', element: <CaliforniaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-texas', element: <TexasHOAFeesArticle /> },
      { path: 'blog/hoa-fees-georgia', element: <GeorgiaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-north-carolina', element: <NorthCarolinaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-illinois', element: <IllinoisHOAFeesArticle /> },
      { path: 'blog/hoa-fees-nevada', element: <NevadaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-colorado', element: <ColoradoHOAFeesArticle /> },
      { path: 'blog/hoa-fees-washington-state', element: <WashingtonStateHOAFeesArticle /> },
      { path: 'blog/hoa-fees-virginia', element: <VirginiaHOAFeesArticle /> },
      { path: 'blog/hoa-fees-new-jersey', element: <NewJerseyHOAFeesArticle /> },
      { path: 'blog/hoa-fees-tennessee', element: <TennesseeHOAFeesArticle /> },
      { path: 'blog/hoa-vs-no-hoa', element: <HOAVsNoHOAArticle /> },
      { path: 'blog/hoa-vs-condo-fee', element: <HOAVsCondoFeeArticle /> },
      
      { path: 'blog/hoa-fees-tax-deductible', element: <HOAFeesTaxDeductibleArticle /> },
      { path: 'blog/dont-pay-hoa-fees', element: <DontPayHOAFeesArticle /> },
      { path: 'blog/hoa-lien-notice-what-to-do', element: <HOALienNoticeArticle /> },
      { path: 'blog/hoa-foreclosure', element: <HOAForeclosureArticle /> },
      { path: 'blog/fight-hoa-fee-increase', element: <FightHOAFeeIncreaseArticle /> },
      { path: 'blog/hoa-special-assessment', element: <HOASpecialAssessmentArticle /> },
      { path: 'blog/read-hoa-financial-statements', element: <ReadHOAFinancialStatementsArticle /> },
      { path: 'blog/hoa-document-red-flags', element: <HOADocumentRedFlagsArticle /> },
      { path: 'blog/hoa-reserve-fund', element: <HOAReserveFundArticle /> },
      { path: 'blog/how-much-hoa-fee-too-much', element: <HowMuchHOAFeeTooMuchArticle /> },
      { path: 'blog/hoa-fees-mortgage-approval', element: <HOAFeesMortgageApprovalArticle /> },
      { path: 'blog/new-construction-hoa-fees', element: <NewConstructionHOAFeesArticle /> },
      { path: 'blog/condo-hoa-fees-nyc', element: <CondoHOAFeesNYCArticle /> },
      { path: 'blog/hoa-fees-arizona', element: <HOAFeesArizonaArticle /> },
      { path: 'blog/lower-hoa-fees', element: <LowerHOAFeesArticle /> },
      { path: 'blog/hoa-management-companies', element: <HOAManagementCompaniesArticle /> },
      { path: 'blog/self-managed-hoa', element: <SelfManagedHOAArticle /> },
      { path: 'blog/hoa-rules-enforcement', element: <HOARulesEnforcementArticle /> },
      { path: 'blog/questions-before-buying-hoa', element: <QuestionsBeforeBuyingHOAArticle /> },
      { path: 'blog/townhouse-hoa-fees', element: <TownhouseHOAFeesArticle /> },
      { path: 'blog/what-do-hoa-fees-cover', element: <WhatDoHOAFeesCoverArticle /> },
      { path: 'blog/hoa-annual-budget', element: <HOAAnnualBudgetArticle /> },
      { path: 'blog/states-no-hoa-laws', element: <StatesNoHOALawsArticle /> },
      { path: 'blog/hoa-fee-calculator-guide', element: <HOAFeeCalculatorGuideArticle /> },
      { path: 'blog/hoa-fees-texas-guide', element: <HOAFeesTexasGuideArticle /> },
      { path: 'blog/average-hoa-fees-new-york', element: <AverageHOAFeesNewYorkArticle /> },
      { path: 'blog/highest-hoa-fees-by-state', element: <HighestHOAFeesByStateArticle /> },
      { path: 'blog/hoa-fee-increase-limits', element: <HOAFeeIncreaseLimitsArticle /> },
      { path: 'blog/hoa-threatening-foreclosure-guide', element: <HOAThreateningForeclosureGuideArticle /> },
      { path: 'blog/cant-afford-special-assessment', element: <CantAffordSpecialAssessmentArticle /> },
      { path: 'blog/hoa-dues-explained', element: <HOADuesExplainedArticle /> },
      { path: 'blog/condo-fees-vs-hoa-fees', element: <CondoFeesVsHOAFeesArticle /> },
      { path: 'blog/hoa-laws-by-state', element: <HOALawsByStateArticle /> },

      { path: 'blog/:articleSlug', element: <DynamicBlogArticle /> },
      { path: 'compare', element: <Compare /> },
      { path: 'contact', element: <Contact /> },
      { path: 'states', element: <States /> },
      { path: 'states/:stateName', element: <StateTemplate /> },
      { path: 'cities', element: <Cities /> },
      { path: 'cities/:cityName', element: <CityTemplate /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfService /> },
      { path: 'disclaimer', element: <Disclaimer /> },
      { path: 'states/texas.html', element: <StateTemplate /> }
    ]
  }
];

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
            <Route path="/blog/hoa-fees-georgia" element={<GeorgiaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-north-carolina" element={<NorthCarolinaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-illinois" element={<IllinoisHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-nevada" element={<NevadaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-colorado" element={<ColoradoHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-washington-state" element={<WashingtonStateHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-virginia" element={<VirginiaHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-new-jersey" element={<NewJerseyHOAFeesArticle />} />
            <Route path="/blog/hoa-fees-tennessee" element={<TennesseeHOAFeesArticle />} />
            <Route path="/blog/hoa-vs-no-hoa" element={<HOAVsNoHOAArticle />} />
            <Route path="/blog/hoa-vs-condo-fee" element={<HOAVsCondoFeeArticle />} />
            
            {/* 23 New Explicit Routes */}
            <Route path="/blog/hoa-fees-tax-deductible" element={<HOAFeesTaxDeductibleArticle />} />
            <Route path="/blog/dont-pay-hoa-fees" element={<DontPayHOAFeesArticle />} />
            <Route path="/blog/hoa-lien-notice-what-to-do" element={<HOALienNoticeArticle />} />
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
            <Route path="/blog/average-hoa-fees-new-york" element={<AverageHOAFeesNewYorkArticle />} />
            <Route path="/blog/highest-hoa-fees-by-state" element={<HighestHOAFeesByStateArticle />} />
            <Route path="/blog/hoa-fee-increase-limits" element={<HOAFeeIncreaseLimitsArticle />} />
            <Route path="/blog/hoa-threatening-foreclosure-guide" element={<HOAThreateningForeclosureGuideArticle />} />
            <Route path="/blog/cant-afford-special-assessment" element={<CantAffordSpecialAssessmentArticle />} />
            <Route path="/blog/hoa-dues-explained" element={<HOADuesExplainedArticle />} />
            <Route path="/blog/condo-fees-vs-hoa-fees" element={<CondoFeesVsHOAFeesArticle />} />
            <Route path="/blog/hoa-laws-by-state" element={<HOALawsByStateArticle />} />

            <Route path="/blog/:articleSlug" element={<DynamicBlogArticle />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/states" element={<States />} />
            <Route path="/states/:stateName" element={<StateTemplate />} />
            <Route path="/cities" element={<Cities />} />
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
