import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContact = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  const navLink = "text-sm tracking-wide transition-colors hover:text-accent";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-primary/90 backdrop-blur-[15px] border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight text-white">
              PNLT
            </span>
            <span className="hidden sm:block h-4 w-px bg-accent/60" />
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-white/70">
              Philippine New Land Trust
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={cn(navLink, "text-white/90")}>Home</Link>
            <Link to="/resources" className={cn(navLink, "text-white/90")}>Learn More</Link>
            <Link
              to="/#contact"
              onClick={handleContact}
              className="inline-flex items-center h-11 px-6 bg-accent text-primary text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-11 h-11 flex items-center justify-center text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-white/10">
            <Link to="/" onClick={() => setOpen(false)} className="block text-white/90 py-2">Home</Link>
            <Link to="/resources" onClick={() => setOpen(false)} className="block text-white/90 py-2">Learn More</Link>
            <Link
              to="/#contact"
              onClick={handleContact}
              className="inline-flex items-center h-11 px-6 bg-accent text-primary text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}