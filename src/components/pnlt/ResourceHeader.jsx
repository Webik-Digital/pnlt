import React from 'react';

export default function ResourceHeader() {
  return (
    <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute bottom-0 left-0 right-0 gold-thread" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-accent">Client Resource Center</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8">
            Welcome to the PNLT <span className="italic text-accent">Resource</span> Center
          </h1>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl">
            Everything you need to know about securing your dream home in the Philippines — legally, safely, and with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}