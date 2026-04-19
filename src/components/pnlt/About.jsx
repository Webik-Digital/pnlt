import React from 'react';
import { ArrowRight } from 'lucide-react';
import useReveal from './useReveal';

export default function About() {
  const ref = useReveal();
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="bg-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-accent">About PNLT</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-primary">
              A legacy, not a <span className="italic text-accent">temporary stay.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg md:text-xl leading-[1.7] text-slate-600 font-light">
              Philippine New Land Trust (PNLT) helps foreign nationals secure a stable, long-term home in the Philippines through a fully compliant, legally structured residential agreement. We are not a substitute for land ownership — we exist because the law restricts it, and we believe foreigners who choose to build their lives here deserve a secure, honest solution.
            </p>
            <button
              onClick={scrollToContact}
              className="group mt-10 inline-flex items-center gap-3 text-primary font-medium border-b border-accent pb-2 hover:gap-4 transition-all"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}