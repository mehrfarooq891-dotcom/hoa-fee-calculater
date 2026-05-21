import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const Home = React.lazy(() => import('./pages/Home'));
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

function AppLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header Loading State */}
      <header className="border-b border-border py-4 px-6 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-primary">
            HOA<span className="text-accent">Calculator</span>.com
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <div className="w-12 h-2.5 bg-slate-100 rounded-full"></div>
            <div className="w-12 h-2.5 bg-slate-100 rounded-full"></div>
            <div className="w-12 h-2.5 bg-slate-100 rounded-full"></div>
            <div className="w-24 h-9 bg-accent/10 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Spinner Container */}
      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin"></div>
        </div>
        <div className="text-primary font-medium text-lg mb-2">Loading HOA Calculator...</div>
        <div className="text-slate-400 text-sm">Preparing your 2026 interest rates and calculations</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<AppLoading />}>
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
