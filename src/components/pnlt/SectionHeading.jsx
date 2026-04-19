import React from 'react';
import useReveal from './useReveal';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="h-px w-10 bg-accent" />
          <span className={`text-[11px] tracking-[0.3em] uppercase ${light ? 'text-accent' : 'text-accent'}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg leading-relaxed font-light ${light ? 'text-white/70' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}