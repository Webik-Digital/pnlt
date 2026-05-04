import React from 'react';
import { ArrowRight } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

export default function AboutSection() {
  const ref = useReveal();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">About PNLT</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-6">
              About Philippine New Land Trust
            </h2>
            <div className="w-16 h-1 bg-gold rounded mb-8"></div>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Philippine New Land Trust (PNLT) helps expats turn their dream of living in the Philippines into reality by making long-term housing legally possible. We provide secure residential opportunities for foreigners who want to enjoy their golden years, raise a family, or build a life here — with peace of mind and full legal protection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              PNLT was created to solve one of the biggest frustrations foreigners face in the Philippines: the inability to own land, and the risky workarounds that leave them vulnerable. Our flagship program, HomeSecure™, gives expats a legitimate, legally sound path to long-term residential security.
            </p>
            <button
              onClick={() => document.getElementById('homesecure')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-gold/90 transition-colors"
            >
              Learn About HomeSecure™
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}