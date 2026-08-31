import React, { Suspense } from 'react';
import { Navigate, useParams, Outlet } from 'react-router-dom';
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
const HOASentToCollectionsArticle = React.lazy(() => import('./pages/HOASentToCollectionsArticle'));
const HOANotRespondingArticle = React.lazy(() => import('./pages/HOANotRespondingArticle'));
const EmergencyHOAMeetingCalledArticle = React.lazy(() => import('./pages/EmergencyHOAMeetingCalledArticle'));
const HOAInsuranceNotRenewedArticle = React.lazy(() => import('./pages/HOAInsuranceNotRenewedArticle'));
const CondoFailedStructuralInspectionArticle = React.lazy(() => import('./pages/CondoFailedStructuralInspectionArticle'));
const HOABoardResignedArticle = React.lazy(() => import('./pages/HOABoardResignedArticle'));
const HOAElevatorSpecialAssessmentArticle = React.lazy(() => import('./pages/HOAElevatorSpecialAssessmentArticle'));
const HOAFinedMeOvernightArticle = React.lazy(() => import('./pages/HOAFinedMeOvernightArticle'));
const AverageCondoFeesArticle = React.lazy(() => import('./pages/AverageCondoFeesArticle'));
const InheritedHouseUnpaidHOAFeesArticle = React.lazy(() => import('./pages/InheritedHouseUnpaidHOAFeesArticle'));

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
    case 'hoa-sent-to-collections':
      return <HOASentToCollectionsArticle />;
    case 'hoa-not-responding':
      return <HOANotRespondingArticle />;
    case 'emergency-hoa-meeting-called':
      return <EmergencyHOAMeetingCalledArticle />;
    case 'hoa-insurance-not-renewed':
      return <HOAInsuranceNotRenewedArticle />;
    case 'condo-failed-structural-inspection':
      return <CondoFailedStructuralInspectionArticle />;
    case 'hoa-board-resigned':
      return <HOABoardResignedArticle />;
    case 'hoa-elevator-special-assessment':
      return <HOAElevatorSpecialAssessmentArticle />;
    case 'hoa-fined-me-overnight':
      return <HOAFinedMeOvernightArticle />;
    case 'average-condo-fees':
      return <AverageCondoFeesArticle />;
    case 'inherited-house-unpaid-hoa-fees':
      return <InheritedHouseUnpaidHOAFeesArticle />;
    default:
      return <Navigate to="/blog" replace />;
  }
}

import { ErrorBoundary } from './components/ErrorBoundary';
import { getBlogArticleBySlug } from './data/blogArticles';

export function RootLayout() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

const createArticleLoader = (slug: string) => {
  return async () => {
    const article = getBlogArticleBySlug(slug);
    return article || { slug, title: slug, category: 'Blog', date: '2026', excerpt: '' };
  };
};

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    loader: async () => ({ site: 'HOACalculator.com', timestamp: '2026' }),
    children: [
      { index: true, element: <Home />, loader: async () => ({ page: 'home' }) },
      { path: 'about', element: <About />, loader: async () => ({ page: 'about' }) },
      { path: 'blog', element: <Blog />, loader: async () => ({ page: 'blog' }) },
      { path: 'blog/what-is-hoa-fee', element: <WhatIsHOAFeeArticle />, loader: createArticleLoader('what-is-hoa-fee') },
      { path: 'blog/average-hoa-fees-by-state', element: <AverageHOAFeesByStateArticle />, loader: createArticleLoader('average-hoa-fees-by-state') },
      { path: 'blog/hoa-fees-florida', element: <FloridaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-florida') },
      { path: 'blog/hoa-fees-california', element: <CaliforniaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-california') },
      { path: 'blog/hoa-fees-texas', element: <TexasHOAFeesArticle />, loader: createArticleLoader('hoa-fees-texas') },
      { path: 'blog/hoa-fees-georgia', element: <GeorgiaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-georgia') },
      { path: 'blog/hoa-fees-north-carolina', element: <NorthCarolinaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-north-carolina') },
      { path: 'blog/hoa-fees-illinois', element: <IllinoisHOAFeesArticle />, loader: createArticleLoader('hoa-fees-illinois') },
      { path: 'blog/hoa-fees-nevada', element: <NevadaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-nevada') },
      { path: 'blog/hoa-fees-colorado', element: <ColoradoHOAFeesArticle />, loader: createArticleLoader('hoa-fees-colorado') },
      { path: 'blog/hoa-fees-washington-state', element: <WashingtonStateHOAFeesArticle />, loader: createArticleLoader('hoa-fees-washington-state') },
      { path: 'blog/hoa-fees-virginia', element: <VirginiaHOAFeesArticle />, loader: createArticleLoader('hoa-fees-virginia') },
      { path: 'blog/hoa-fees-new-jersey', element: <NewJerseyHOAFeesArticle />, loader: createArticleLoader('hoa-fees-new-jersey') },
      { path: 'blog/hoa-fees-tennessee', element: <TennesseeHOAFeesArticle />, loader: createArticleLoader('hoa-fees-tennessee') },
      { path: 'blog/hoa-vs-no-hoa', element: <HOAVsNoHOAArticle />, loader: createArticleLoader('hoa-vs-no-hoa') },
      { path: 'blog/hoa-vs-condo-fee', element: <HOAVsCondoFeeArticle />, loader: createArticleLoader('hoa-vs-condo-fee') },
      
      { path: 'blog/hoa-fees-tax-deductible', element: <HOAFeesTaxDeductibleArticle />, loader: createArticleLoader('hoa-fees-tax-deductible') },
      { path: 'blog/dont-pay-hoa-fees', element: <DontPayHOAFeesArticle />, loader: createArticleLoader('dont-pay-hoa-fees') },
      { path: 'blog/hoa-lien-notice-what-to-do', element: <HOALienNoticeArticle />, loader: createArticleLoader('hoa-lien-notice-what-to-do') },
      { path: 'blog/hoa-foreclosure', element: <HOAForeclosureArticle />, loader: createArticleLoader('hoa-foreclosure') },
      { path: 'blog/fight-hoa-fee-increase', element: <FightHOAFeeIncreaseArticle />, loader: createArticleLoader('fight-hoa-fee-increase') },
      { path: 'blog/hoa-special-assessment', element: <HOASpecialAssessmentArticle />, loader: createArticleLoader('hoa-special-assessment') },
      { path: 'blog/read-hoa-financial-statements', element: <ReadHOAFinancialStatementsArticle />, loader: createArticleLoader('read-hoa-financial-statements') },
      { path: 'blog/hoa-document-red-flags', element: <HOADocumentRedFlagsArticle />, loader: createArticleLoader('hoa-document-red-flags') },
      { path: 'blog/hoa-reserve-fund', element: <HOAReserveFundArticle />, loader: createArticleLoader('hoa-reserve-fund') },
      { path: 'blog/how-much-hoa-fee-too-much', element: <HowMuchHOAFeeTooMuchArticle />, loader: createArticleLoader('how-much-hoa-fee-too-much') },
      { path: 'blog/hoa-fees-mortgage-approval', element: <HOAFeesMortgageApprovalArticle />, loader: createArticleLoader('hoa-fees-mortgage-approval') },
      { path: 'blog/new-construction-hoa-fees', element: <NewConstructionHOAFeesArticle />, loader: createArticleLoader('new-construction-hoa-fees') },
      { path: 'blog/condo-hoa-fees-nyc', element: <CondoHOAFeesNYCArticle />, loader: createArticleLoader('condo-hoa-fees-nyc') },
      { path: 'blog/hoa-fees-arizona', element: <HOAFeesArizonaArticle />, loader: createArticleLoader('hoa-fees-arizona') },
      { path: 'blog/lower-hoa-fees', element: <LowerHOAFeesArticle />, loader: createArticleLoader('lower-hoa-fees') },
      { path: 'blog/hoa-management-companies', element: <HOAManagementCompaniesArticle />, loader: createArticleLoader('hoa-management-companies') },
      { path: 'blog/self-managed-hoa', element: <SelfManagedHOAArticle />, loader: createArticleLoader('self-managed-hoa') },
      { path: 'blog/hoa-rules-enforcement', element: <HOARulesEnforcementArticle />, loader: createArticleLoader('hoa-rules-enforcement') },
      { path: 'blog/questions-before-buying-hoa', element: <QuestionsBeforeBuyingHOAArticle />, loader: createArticleLoader('questions-before-buying-hoa') },
      { path: 'blog/townhouse-hoa-fees', element: <TownhouseHOAFeesArticle />, loader: createArticleLoader('townhouse-hoa-fees') },
      { path: 'blog/what-do-hoa-fees-cover', element: <WhatDoHOAFeesCoverArticle />, loader: createArticleLoader('what-do-hoa-fees-cover') },
      { path: 'blog/hoa-annual-budget', element: <HOAAnnualBudgetArticle />, loader: createArticleLoader('hoa-annual-budget') },
      { path: 'blog/states-no-hoa-laws', element: <StatesNoHOALawsArticle />, loader: createArticleLoader('states-no-hoa-laws') },
      { path: 'blog/hoa-fee-calculator-guide', element: <HOAFeeCalculatorGuideArticle />, loader: createArticleLoader('hoa-fee-calculator-guide') },
      { path: 'blog/hoa-fees-texas-guide', element: <HOAFeesTexasGuideArticle />, loader: createArticleLoader('hoa-fees-texas-guide') },
      { path: 'blog/average-hoa-fees-new-york', element: <AverageHOAFeesNewYorkArticle />, loader: createArticleLoader('average-hoa-fees-new-york') },
      { path: 'blog/highest-hoa-fees-by-state', element: <HighestHOAFeesByStateArticle />, loader: createArticleLoader('highest-hoa-fees-by-state') },
      { path: 'blog/hoa-fee-increase-limits', element: <HOAFeeIncreaseLimitsArticle />, loader: createArticleLoader('hoa-fee-increase-limits') },
      { path: 'blog/hoa-threatening-foreclosure-guide', element: <HOAThreateningForeclosureGuideArticle />, loader: createArticleLoader('hoa-threatening-foreclosure-guide') },
      { path: 'blog/cant-afford-special-assessment', element: <CantAffordSpecialAssessmentArticle />, loader: createArticleLoader('cant-afford-special-assessment') },
      { path: 'blog/hoa-dues-explained', element: <HOADuesExplainedArticle />, loader: createArticleLoader('hoa-dues-explained') },
      { path: 'blog/condo-fees-vs-hoa-fees', element: <CondoFeesVsHOAFeesArticle />, loader: createArticleLoader('condo-fees-vs-hoa-fees') },
      { path: 'blog/hoa-laws-by-state', element: <HOALawsByStateArticle />, loader: createArticleLoader('hoa-laws-by-state') },
      { path: 'blog/hoa-sent-to-collections', element: <HOASentToCollectionsArticle />, loader: createArticleLoader('hoa-sent-to-collections') },
      { path: 'blog/hoa-not-responding', element: <HOANotRespondingArticle />, loader: createArticleLoader('hoa-not-responding') },
      { path: 'blog/emergency-hoa-meeting-called', element: <EmergencyHOAMeetingCalledArticle />, loader: createArticleLoader('emergency-hoa-meeting-called') },
      { path: 'blog/hoa-insurance-not-renewed', element: <HOAInsuranceNotRenewedArticle />, loader: createArticleLoader('hoa-insurance-not-renewed') },
      { path: 'blog/condo-failed-structural-inspection', element: <CondoFailedStructuralInspectionArticle />, loader: createArticleLoader('condo-failed-structural-inspection') },
      { path: 'blog/hoa-board-resigned', element: <HOABoardResignedArticle />, loader: createArticleLoader('hoa-board-resigned') },
      { path: 'blog/hoa-elevator-special-assessment', element: <HOAElevatorSpecialAssessmentArticle />, loader: createArticleLoader('hoa-elevator-special-assessment') },
      { path: 'blog/hoa-fined-me-overnight', element: <HOAFinedMeOvernightArticle />, loader: createArticleLoader('hoa-fined-me-overnight') },
      { path: 'blog/average-condo-fees', element: <AverageCondoFeesArticle />, loader: createArticleLoader('average-condo-fees') },
      { path: 'blog/inherited-house-unpaid-hoa-fees', element: <InheritedHouseUnpaidHOAFeesArticle />, loader: createArticleLoader('inherited-house-unpaid-hoa-fees') },

      {
        path: 'blog/:articleSlug',
        element: <DynamicBlogArticle />,
        loader: async ({ params }: any) => {
          const article = getBlogArticleBySlug(params?.articleSlug || '');
          return article || { slug: params?.articleSlug, title: params?.articleSlug };
        }
      },
      { path: 'compare', element: <Compare />, loader: async () => ({ page: 'compare' }) },
      { path: 'contact', element: <Contact />, loader: async () => ({ page: 'contact' }) },
      { path: 'states', element: <States />, loader: async () => ({ page: 'states' }) },
      { path: 'states/:stateName', element: <StateTemplate />, loader: async ({ params }: any) => ({ state: params?.stateName }) },
      { path: 'cities', element: <Cities />, loader: async () => ({ page: 'cities' }) },
      { path: 'cities/:cityName', element: <CityTemplate />, loader: async ({ params }: any) => ({ city: params?.cityName }) },
      { path: 'privacy-policy', element: <PrivacyPolicy />, loader: async () => ({ page: 'privacy-policy' }) },
      { path: 'terms-of-service', element: <TermsOfService />, loader: async () => ({ page: 'terms-of-service' }) },
      { path: 'terms', element: <TermsOfService />, loader: async () => ({ page: 'terms' }) },
      { path: 'disclaimer', element: <Disclaimer />, loader: async () => ({ page: 'disclaimer' }) },
      { path: 'states/texas.html', element: <StateTemplate />, loader: async () => ({ state: 'texas' }) }
    ]
  }
];
