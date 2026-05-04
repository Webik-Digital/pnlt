import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (id) => {
    setOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkCls = "text-sm font-medium text-navy hover:text-gold transition-colors";

  return (
    <header className="fixed top-8 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-navy">PNLT</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
              Philippine New Land Trust
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkCls}>Home</Link>
            <button onClick={() => scrollTo('homesecure')} className={navLinkCls}>HomeSecure™</button>
            <Link to="/resources" className={navLinkCls}>Learn More</Link>
            <button onClick={() => scrollTo('contact')} className={navLinkCls}>Contact Us</button>
            <a
              href="https://calendly.com/pnlt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-10 px-5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold/90 transition-colors"
            >
              Book a Consultation
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-navy"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-2 space-y-3 border-t border-gray-100">
            <Link to="/" onClick={() => setOpen(false)} className="block text-navy font-medium py-2">Home</Link>
            <button onClick={() => scrollTo('homesecure')} className="block text-navy font-medium py-2 w-full text-left">HomeSecure™</button>
            <Link to="/resources" onClick={() => setOpen(false)} className="block text-navy font-medium py-2">Learn More</Link>
            <button onClick={() => scrollTo('contact')} className="block text-navy font-medium py-2 w-full text-left">Contact Us</button>
            <a
              href="https://calendly.com/pnlt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-10 px-5 bg-gold text-navy text-sm font-semibold rounded"
            >
              Book a Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}