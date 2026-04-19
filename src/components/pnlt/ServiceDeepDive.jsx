import React, { useState, useEffect } from 'react';
import { Check, Shield, Compass, Home } from 'lucide-react';
import useReveal from './useReveal';

const services = [
  {
    id: 'homesecure',
    icon: Shield,
    tag: 'HomeSecure™',
    title: 'Long-term residential rights with full legal protection.',
    what: 'A structured pathway that gives foreigners enforceable, long-term rights to reside in a private home — without circumventing Philippine ownership laws or relying on informal arrangements.',
    how: [
      'Initial eligibility consultation with the PNLT legal team',
      'Property matching based on your lifestyle & location preferences',
      'Transparent legal structuring with registered documentation',
      'Onboarding, handover, and ongoing trust administration',
    ],
    who: 'Retirees, expat families, and long-term residents seeking a permanent home they can truly call their own.',
    benefits: [
      'Full legal protection under Philippine law',
      'No reliance on a Filipino partner or nominee',
      'Transferable rights aligned with your estate plans',
      'Direct support from PNLT throughout your tenure',
    ],
  },
  {
    id: 'landsecure',
    icon: Compass,
    tag: 'LandSecure™',
    title: 'Secure land use backed by legal structure.',
    what: 'A compliant framework that grants foreigners long-term, protected access to land use in the Philippines — designed for those who want more than a residential home.',
    how: [
      'Needs assessment & land-use planning session',
      'Identification of qualifying parcels with PNLT partners',
      'Structured land-use agreement registered under Philippine law',
      'Documentation, succession planning, and annual review',
    ],
    who: 'Expats planning to build, develop a private estate, or secure land for multi-generational family use.',
    benefits: [
      'Transparent, compliant land-use rights',
      'Long-tenure security without ownership workarounds',
      'Clear succession and handover pathways',
      'Ongoing legal & administrative support',
    ],
  },
  {
    id: 'transitionsecure',
    icon: Home,
    tag: 'TransitionSecure™',
    title: 'Vetted short-term rentals while finding your home.',
    what: 'A curated bridge program of short-term residences — professionally managed and vetted — designed to give you a comfortable base while PNLT helps you transition to HomeSecure™ or LandSecure™.',
    how: [
      'Discovery call and residency goals briefing',
      'Placement in a vetted PNLT-managed property',
      'Concurrent search for your long-term HomeSecure™ home',
      'Smooth transition into permanent residency',
    ],
    who: 'Expats arriving in the Philippines who want a secure, stable place to stay while committing to a long-term solution.',
    benefits: [
      'Only professionally vetted, reliable residences',
      'Fair, transparent pricing — no surprises',
      'Priority access to HomeSecure™ properties',
      'Dedicated PNLT relationship manager',
    ],
  },
];

export default function ServiceDeepDive() {
  const [active, setActive] = useState('homesecure');
  const ref = useReveal();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      if (services.find((s) => s.id === id)) {
        setActive(id);
        setTimeout(() => {
          document.getElementById('services-deep')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const current = services.find((s) => s.id === active);

  return (
    <section id="services-deep" className="bg-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-accent" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-accent">Services in Depth</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-primary mb-16 max-w-3xl">
          A closer look at the PNLT solution stack.
        </h2>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky nav */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-2">
              {services.map((s) => {
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full text-left group p-6 border-l-2 transition-all ${
                      isActive
                        ? 'border-accent bg-secondary'
                        : 'border-transparent hover:border-accent/40 hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <s.icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-slate-400'}`} />
                      <span className={`text-[11px] tracking-[0.2em] uppercase ${isActive ? 'text-accent' : 'text-slate-500'}`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className={`font-display text-lg leading-tight ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Content */}
          <div ref={ref} className="reveal lg:col-span-8" key={active}>
            <div id={current.id} className="scroll-mt-28">
              <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{current.tag}</div>
              <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight mb-8">{current.title}</h3>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">What it is</h4>
                  <p className="text-lg leading-[1.7] text-slate-700 font-light">{current.what}</p>
                </div>

                <div>
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5">How it works</h4>
                  <ol className="space-y-4">
                    {current.how.map((step, i) => (
                      <li key={i} className="flex gap-5 pb-4 border-b border-border/60 last:border-0">
                        <span className="font-display text-accent text-xl shrink-0">0{i + 1}</span>
                        <span className="text-slate-700 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">Who it's for</h4>
                  <p className="text-lg leading-[1.7] text-slate-700 font-light">{current.who}</p>
                </div>

                <div>
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5">Key benefits & protections</h4>
                  <ul className="space-y-3">
                    {current.benefits.map((b, i) => (
                      <li key={i} className="flex gap-4">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}