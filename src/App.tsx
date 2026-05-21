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
const PrivacyPolicy = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.PrivacyPolicy })));
const Disclaimer = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Disclaimer })));

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
    default:
      return <Navigate to="/blog" replace />;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div style={{minHeight:'100vh'}} />}>
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
            <Route path="/blog/:articleSlug" element={<DynamicBlogArticle />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/states" element={<States />} />
            <Route path="/states/:stateName" element={<StateTemplate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* Fallback for the specific texas path requested */}
            <Route path="/states/texas.html" element={<StateTemplate />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
