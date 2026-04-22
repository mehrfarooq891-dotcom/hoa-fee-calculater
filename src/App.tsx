import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import StateTemplate from './pages/StateTemplate';
import { PrivacyPolicy, Disclaimer } from './pages/Legal';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/states/:stateName" element={<StateTemplate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* Fallback for the specific texas path requested */}
          <Route path="/states/texas.html" element={<StateTemplate />} />
          {/* Add other routes as needed */}
          <Route path="/compare" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
