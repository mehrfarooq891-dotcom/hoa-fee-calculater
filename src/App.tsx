import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Compare from './pages/Compare';
import Contact from './pages/Contact';
import States from './pages/States';
import StateTemplate from './pages/StateTemplate';
import { PrivacyPolicy, Disclaimer } from './pages/Legal';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/states" element={<States />} />
          <Route path="/states/:stateName" element={<StateTemplate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* Fallback for the specific texas path requested */}
          <Route path="/states/texas.html" element={<StateTemplate />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
