import React from 'react';
import { Check } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

const items = [
  'A Legal, Transparent Path',
  'No Circumvention. No Shortcuts.',
  'More Than Just Rentals',
  'No Emotional or Relationship Risk',
  'Expert Guidance From Day One',
];

export default function TrustSection() {
  const ref = useReveal();
  return (
    <section className="bg-light-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">The PNLT Way</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Why Expats Trust PNLT
            </h2>
          </div>
          <div ref={ref} className="reveal space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm">
                <div className="w-8 h-8 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}