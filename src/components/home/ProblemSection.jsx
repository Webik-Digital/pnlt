import React from 'react';
import useReveal from '@/components/pnlt/useReveal';

export default function ProblemSection() {
  const ref = useReveal();
  return (
    <section className="bg-light-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-4xl mx-auto text-center">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">The Reality</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-10">
            Why So Many Expats Struggle to Secure a Home
          </h2>
          <div className="space-y-6 text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many foreigners have been taken advantage of when trying to secure a home in the Philippines. What should have been a fresh start or a dream retirement often turned into stress, broken trust, or financial loss. Sadly, it has become so common that many expats simply accept it as the norm.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Foreigners cannot own land in the Philippines — yet because of the country's natural beauty, rich culture, affordability, and welcoming lifestyle, many still pursue a home here. The problem is, too often they get trapped in shaky arrangements — relying on personal favors, verbal promises, or risky structures that leave them vulnerable. PNLT exists to change that story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}