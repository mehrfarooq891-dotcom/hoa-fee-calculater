import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: 'States', path: '/states' },
    { label: 'Compare', path: '/compare' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" onClick={handleLinkClick}>
          <img 
            src="/hoa_calculator_logo.svg" 
            alt="HOA Fee Calculator" 
            width="220" 
            height="45" 
            className="h-[45px] w-auto max-w-[220px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'inline-flex';
              }
            }}
          />
          <span 
            className="hidden font-serif text-2xl font-bold text-primary tracking-tight whitespace-nowrap"
          >
            HOA <span className="text-accent">Calculator</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 items-center text-xs lg:text-sm font-bold uppercase tracking-wider text-primary">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors whitespace-nowrap ${
                isActive(link.path)
                  ? 'text-accent font-bold'
                  : 'hover:text-accent font-bold text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="/#calculator" 
            className="bg-primary hover:bg-accent text-white py-2 px-5 rounded-full font-bold transition-all active:scale-95 inline-flex items-center justify-center text-xs lg:text-sm shrink-0 ml-1 shadow-xs"
          >
            Calculate
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-primary hover:bg-bg-light focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg px-6 py-6 mt-4 flex flex-col gap-4 text-sm font-bold uppercase tracking-wider animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`py-2 transition-colors border-b border-border/40 ${
                isActive(link.path)
                  ? 'text-accent font-bold'
                  : 'text-primary hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#calculator"
            onClick={handleLinkClick}
            className="mt-2 bg-primary hover:bg-accent text-white py-3 px-6 rounded-full text-center font-bold transition-all active:scale-95 shadow-sm"
          >
            Calculate Dues
          </a>
        </div>
      )}
    </header>
  );
}
