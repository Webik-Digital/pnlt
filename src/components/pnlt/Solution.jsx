import React from 'react';
import { Check } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const items = [
  { title: 'A Legal, Transparent Residential Path', text: 'PNLT gives expats a fully structured, compliant way to secure long-term residential stability — without skirting the law, without workarounds, and without relying on anyone else\'s name.' },
  { title: 'No Circumvention. No Shortcuts. Just Real Support.', text: "We don't push corporations, nominees, or legal tricks. We acknowledge the law as it stands and operate entirely within it." },
  { title: 'More Options Beyond Short-Term Rentals', text: 'HomeSecure™ opens a path to long-term residential stability in a home you choose — with the legal structure to back it up.' },
  { title: 'Housing Without Pressure or Emotional Risk', text: 'No need to put a home under a partner\'s name just to feel settled. Your residential agreement is independent of personal relationships.' },
  { title: 'Clear Guidance From People Who Know', text: 'We guide you from day one — no guesswork, no vague forum advice, and no surprises.' },
];

export default function Solution() {
  const ref = useReveal();
  return (
    <section className="bg-primary text-white py-32 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-thread" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="The PNLT Way"
          title="How PNLT solves the expat housing problem."
          light
        />
        <div ref={ref} className="reveal mt-20 max-w-4xl">
          {items.map((item, i) => (
            <div
              key={i}
              className="group grid grid-cols-[auto_1fr] gap-8 py-8 border-t border-white/10 last:border-b"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-accent text-2xl">0{i + 1}</span>
                <Check className="w-5 h-5 text-accent mt-2" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg font-light">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}