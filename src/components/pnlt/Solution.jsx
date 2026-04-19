import React from 'react';
import { Check } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const items = [
  { title: 'A Legal, Transparent Housing Path', text: 'PNLT gives expats a fully structured way to secure a home — without skirting the law or risking ownership disputes.' },
  { title: 'No Circumvention. No Shortcuts. Just Real Support.', text: "We don't push corporations or legal tricks. Instead, we provide a clean, compliant system." },
  { title: 'Access to More Homes, Not Just Rentals', text: 'With HomeSecure, expats can now choose from homes previously off-limits.' },
  { title: 'Housing Without Pressure or Emotional Risk', text: 'No need to rush into buying through a partner just to feel secure.' },
  { title: 'Clear Guidance From People Who Know', text: 'We guide you from day one — no guesswork, no vague advice.' },
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