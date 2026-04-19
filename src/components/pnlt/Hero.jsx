import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ heroImage }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Philippine tropical villa at dusk with infinity pool"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-center pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-[11px] tracking-[0.3em] uppercase">Since 2025 · Cebu, Philippines</span>
          </div>

          <h1 className="text-white font-display text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight mb-8">
            <span className="block">The Housing Solution</span>
            <span className="block italic font-light text-accent">for Global Expats</span>
            <span className="block">in the Philippines</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
            Housing for foreigners is now possible. Your retirement in paradise can finally be worry-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-accent text-primary font-medium tracking-wide hover:bg-accent/90 transition-all"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center justify-center gap-3 h-14 px-8 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}