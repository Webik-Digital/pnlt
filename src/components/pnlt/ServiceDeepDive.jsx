import React, { useState, useEffect } from 'react';
import { Check, Shield, Home } from 'lucide-react';
import useReveal from './useReveal';

const services = [
  {
    id: 'homesecure',
    icon: Shield,
    tag: 'HomeSecure™',
    title: 'Long-term residential rights with full legal protection.',
    what: 'HomeSecure™ is PNLT\'s core offering. It provides foreign nationals with secure, long-term residential rights in a single-family home in the Philippines — without relying on informal arrangements, partner names, or corporate workarounds. PNLT is a non-profit corporation registered with the Philippine SEC, 100% Filipino-owned, and fully aligned with the Philippine Constitution. HomeSecure™ is not a substitute for land ownership and does not grant foreigners any ownership rights. What it provides is residential security — a legally structured agreement that protects your right to live in the home you have chosen, backed by PNLT\'s Articles of Incorporation and By-Laws.',
    how: [
      'Free consultation to assess eligibility and understand your housing goals',
      'Property search — you choose the home you want, anywhere in the Philippines. PNLT is not a developer or broker. You are not limited to a catalog.',
      'PNLT conducts full legal due diligence on the property you have selected',
      'A legally structured residential agreement is executed and registered — fully compliant with Philippine law',
      'You move in. PNLT administers the agreement on an ongoing basis with a licensed attorney overseeing all legal aspects',
      'Beneficiary nomination — you designate a qualified Filipino nominee who will receive the property upon cancellation or expiry of the agreement, in accordance with Philippine law',
    ],
    who: 'Retirees who want a stable, long-term home instead of an endless cycle of rentals. Expat families needing security and continuity. SRRV holders. Long-stay visa holders. Anyone committed to living in the Philippines who wants a legally sound, compliant foundation.',
    benefits: [
      'Full constitutional compliance — no workarounds, no dummy setups, no ownership claims',
      'You are not dependent on any personal relationship or another person\'s name on a title',
      'Freedom to choose any single-family home, anywhere in the Philippines',
      'PNLT\'s charter prevents the structure from being repurposed or exploited',
      'Licensed attorney on board overseeing all legal and structural aspects',
      'Beneficiary nomination ensures the home goes to a qualified Filipino you trust',
      'If personal circumstances change, your residential agreement remains intact',
      'Built to withstand legal scrutiny — unlike informal arrangements that courts have consistently ruled against',
    ],
    extra: {
      title: 'What Happens When the Agreement Ends?',
      text: 'Upon cancellation or expiration of your HomeSecure™ agreement, PNLT is institutionally obligated to fulfill the transfer of the property to your nominated beneficiary — provided that person is a Filipino citizen legally qualified to hold real estate in the Philippines. This is not discretionary. It is written into PNLT\'s Articles of Incorporation as part of its non-profit mission: to help qualified Filipinos advance into homeownership. This structure ensures the property ultimately benefits a Filipino citizen, while giving you peace of mind that the home goes to someone you trust.',
    },
  },
  {
    id: 'transitionsecure',
    icon: Home,
    tag: 'TransitionSecure™',
    title: 'A secure, comfortable base while your permanent home is being arranged.',
    what: 'TransitionSecure™ is a short-term housing coordination service designed for expats who are new to the Philippines or in the process of finalising their HomeSecure™ home. Rather than rushing a major decision, TransitionSecure™ gives you a stable, vetted place to live — typically 3 to 6 months — while PNLT conducts due diligence on the long-term property you have in mind.',
    how: [
      'Discovery call to understand your arrival timeline and location preferences',
      'Sourcing of a vetted serviced apartment or short-term rental home in Cebu (other areas on request)',
      'Licensed agent support through Go Relocation Philippines',
      'Concurrent HomeSecure™ process begins — no pressure to rush your long-term decision',
      'Smooth handover into your permanent PNLT home when it is ready',
    ],
    who: 'Expats newly arriving in the Philippines. Anyone who needs time to find the right long-term home without the pressure of deciding immediately.',
    benefits: [
      'Only professionally sourced, reliable short-term residences',
      'No pressure to make a permanent decision before you are ready',
      'Transparent pricing — no hidden fees',
      'Priority access to HomeSecure™ properties during your stay',
      'Continuity — the same team supports you from arrival to permanent home',
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
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {current.extra && (
                  <div className="bg-secondary border-l-2 border-accent p-8">
                    <h4 className="font-display text-xl text-primary mb-3">{current.extra.title}</h4>
                    <p className="text-slate-700 leading-relaxed font-light">{current.extra.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}