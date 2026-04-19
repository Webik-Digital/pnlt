import React from 'react';
import useReveal from './useReveal';

export default function Problem() {
  const ref = useReveal();
  return (
    <section className="bg-primary text-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-accent">The Reality</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight">
              The Challenges <br />Foreigners Face
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-lg leading-[1.7] text-white/80 font-light border-l-2 border-accent/50 pl-6">
              Many times, foreigners have been taken advantage of when trying to secure a home in the Philippines. What should have been a fresh start or a dream retirement often turned into stress, broken trust, or even financial loss.
            </p>
            <p className="text-lg leading-[1.7] text-white/80 font-light border-l-2 border-accent/50 pl-6">
              Foreigners cannot own land in the Philippines, yet because of the country's natural beauty, rich culture, affordability, and welcoming lifestyle, many still pursue a home here. The problem is, too often they get trapped in shaky arrangements — relying on personal favors, verbal promises, or risky ownership structures that leave them vulnerable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}