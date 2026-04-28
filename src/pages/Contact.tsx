import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const address = "701 Brazos St, Suite 1600, Austin, TX 78701";
  const phone = "+1 (512) 555-0198";
  const email = "support@hoacalculator.com";
  
  // Google Maps embed URL for the dummy address
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8943960167575!2d-97.7424623234907!3d30.2685794748231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b508f7f2b60b%3A0xc3f14986b2b45e7f!2s701%20Brazos%20St%20%231600%2C%20Austin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1714322400000!5m2!1sen!2sus";

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="Contact Us | HOACalculator.com"
        description="Get in touch with the HOA financial experts. Support, data requests, and partnership inquiries."
      />

      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            HOA<span className="text-accent">Calculator</span>.com
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors font-bold text-primary">Home</Link>
            <Link to="/blog" className="hover:text-accent transition-colors font-bold text-primary">Blog</Link>
            <Link to="/about" className="hover:text-accent transition-colors font-bold text-primary">About</Link>
            <Link to="/contact" className="text-accent font-bold">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">Get In Touch</h1>
            <p className="text-lg text-primary opacity-70">Have a question about HOA fees or our data? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="card flex items-start gap-6 border-none shadow-lg">
                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Our Austin HQ</h3>
                  <p className="text-primary opacity-70 leading-relaxed">
                    {address}
                  </p>
                  <p className="text-accent text-sm font-bold mt-2 tracking-widest uppercase">Verified GMB Location</p>
                </div>
              </div>

              <div className="card flex items-start gap-6 border-none shadow-lg">
                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Call Support</h3>
                  <p className="text-primary opacity-70 leading-relaxed">
                    {phone}
                  </p>
                  <p className="text-xs opacity-50 mt-1">Mon - Fri, 9am - 5pm CST</p>
                </div>
              </div>

              <div className="card flex items-start gap-6 border-none shadow-lg">
                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Email Us</h3>
                  <p className="text-primary opacity-70 leading-relaxed hover:text-accent transition-colors">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-6 border-none shadow-lg">
                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Office Hours</h3>
                  <p className="text-primary opacity-70">Our team is available 24/7 for automated calculator support, and human experts are available during business hours.</p>
                </div>
              </div>
            </div>

            {/* Map and Form */}
            <div className="space-y-6">
              <div className="card p-0 overflow-hidden shadow-2xl border-none h-[400px]">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HOACalculator.com Austin Office"
                />
              </div>
              
              <div className="card border-none shadow-lg">
                <h3 className="font-serif text-2xl mb-6">Send a Quick Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="input-field" />
                    <input type="email" placeholder="Email Address" className="input-field" />
                  </div>
                  <textarea placeholder="How can we help you?" className="input-field h-32 resize-none pt-4"></textarea>
                  <button type="button" className="btn-primary w-full py-4 text-lg">Send Message →</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row gap-6">
          <div className="font-serif text-xl font-bold text-white">HOA<span className="text-accent">Calculator</span>.com</div>
          <div className="text-xs uppercase tracking-widest">Austin • Miami • Los Angeles</div>
        </div>
      </footer>
    </div>
  );
}
