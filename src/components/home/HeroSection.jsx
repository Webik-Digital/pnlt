import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="bg-white pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
              Established 2025 · Cebu, Philippines
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              A Legal Way for Foreigners to Secure a Home in the Philippines
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Philippine New Land Trust provides expats with long-term residential housing rights through HomeSecure — a legally structured, transparent, and fully compliant program. No shortcuts. No legal gray areas. Just real security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.id/carl-foster/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 bg-gold text-navy text-base font-semibold rounded hover:bg-gold/90 transition-colors"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollTo('homesecure')}
                className="inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 border-2 border-navy text-navy text-base font-semibold rounded hover:bg-navy hover:text-white transition-colors"
              >
                How HomeSecure Works
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&q=80"
                alt="Beautiful Philippine tropical home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">HomeSecure Active</span>
              </div>
              <p className="text-sm text-muted-foreground">Legally structured residential agreements for qualified foreigners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}