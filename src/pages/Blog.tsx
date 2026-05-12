import React from 'react';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: "Average HOA Fees by State in 2026 — Full 50-State Breakdown",
      excerpt: "Discover the average monthly HOA fees across all 50 US states in 2026. Review high-density master policies, legislative updates, and complete financial data.",
      date: "May 12, 2026",
      category: "Data",
      slug: "/blog/average-hoa-fees-by-state"
    },
    {
      title: "What Is an HOA Fee? Complete Guide for First-Time Buyers",
      excerpt: "Unpack the reality of mandatory association dues, understand what they cover, and calculate their long-term impact on your dream budget.",
      date: "May 10, 2026",
      category: "Guides",
      slug: "/blog/what-is-hoa-fee"
    },
    {
      title: "How to Avoid UNEXPECTED HOA Special Assessments",
      excerpt: "Special assessments can cost homeowners thousands. Learn how to read the reserve study before buying.",
      date: "April 20, 2026",
      category: "Finance",
      slug: "#"
    },
    {
      title: "HOA vs. Condo Fees: What's the Real Difference?",
      excerpt: "Many people use these terms interchangeably, but they cover very different maintenance items.",
      date: "April 15, 2026",
      category: "Guides",
      slug: "#"
    },
    {
      title: "Top 5 States with the Highest HOA Fees in 2026",
      excerpt: "Surprising data shows Florida isn't the only state where fees are skyrocketing.",
      date: "April 10, 2026",
      category: "Data",
      slug: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <SEO 
        title="HOA Insights & News Blog | HOACalculator.com"
        description="Expert advice on Homeowners Associations, fee management, and US real estate trends."
      />

      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            HOA<span className="text-accent">Calculator</span>.com
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-accent transition-colors text-primary font-bold">Home</Link>
            <Link to="/about" className="hover:text-accent transition-colors text-primary font-bold">About</Link>
            <Link to="/blog" className="text-accent font-bold">Blog</Link>
            <Link to="/contact" className="hover:text-accent transition-colors text-primary font-bold">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">The HOA Insights Blog</h1>
            <p className="text-lg text-primary opacity-70">Expert guides and latest data for American homeowners.</p>
          </div>

          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={i} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent/10 text-accent text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-primary opacity-50 uppercase font-bold tracking-wider">{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4 hover:text-accent transition-colors">
                  <Link to={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-primary opacity-70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={post.slug} className="text-accent font-bold text-sm uppercase tracking-widest flex items-center gap-2 group">
                  Read Full Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/60">
        <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-12">
          <div className="font-serif text-2xl font-bold text-white mb-4">HOA<span className="text-accent">Calculator</span>.com</div>
          <p className="text-sm">© 2026 HOACalculator.com — Expert Analysis for All 50 States.</p>
        </div>
      </footer>
    </div>
  );
}
