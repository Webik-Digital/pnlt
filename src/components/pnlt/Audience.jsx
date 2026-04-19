import React from 'react';
import { Check, X, Compass, Users, Sprout, TrendingUp, Plane, HelpCircle } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const forGroups = [
  { icon: Compass, title: 'Retirees', text: 'You chose the Philippines for your golden years and want a real home — not just another rental with rising costs and no permanence.' },
  { icon: Users, title: 'Expat Families', text: 'You are building a life here and need a stable, secure base for your household — long-term, without relying on someone else\'s name.' },
  { icon: Sprout, title: 'Long-Term Residents', text: 'Digital nomads, SRRV holders, and long-stay visa holders who treat the Philippines as their permanent base.' },
];

const notForGroups = [
  { icon: TrendingUp, title: 'Property Investors', text: 'PNLT is not a vehicle for profit, flipping, or rental income. It exists for housing — not speculation.' },
  { icon: Plane, title: 'Short-Term Visitors', text: 'If you\'re here for a vacation or a temporary stay, this is not the right fit.' },
  { icon: HelpCircle, title: 'People Seeking a Workaround', text: 'PNLT is not a workaround to own land. It is a structured, legal, residential rights model — nothing more.' },
];

function Card({ icon: Icon, title, text, positive }) {
  return (
    <div className={`group bg-white border p-8 transition-all duration-500 hover:-translate-y-1 ${positive ? 'border-green-200 hover:border-green-400' : 'border-red-200 hover:border-red-400'}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 flex items-center justify-center ${positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
          <Icon className="w-5 h-5" />
        </div>
        {positive
          ? <Check className="w-4 h-4 text-green-500" />
          : <X className="w-4 h-4 text-red-500" />
        }
      </div>
      <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Audience() {
  const ref = useReveal();
  return (
    <section className="bg-secondary py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Who It's For"
          title="Built for the ones who stay."
          align="center"
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10 mt-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-xl text-primary">Who We Are For</span>
              <div className="flex-1 gold-thread" />
            </div>
            <div className="space-y-4">
              {forGroups.map((g) => <Card key={g.title} {...g} positive />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-xl text-slate-500">Who We Are NOT For</span>
              <div className="flex-1 h-px bg-slate-300" />
            </div>
            <div className="space-y-4">
              {notForGroups.map((g) => <Card key={g.title} {...g} positive={false} />)}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center p-8 border border-accent/40 bg-white">
          <p className="text-slate-700 leading-relaxed">
            <span className="text-accent font-medium">Important:</span> PNLT is <span className="font-semibold text-primary">NOT</span> an investment pathway or financial tool. It exists to provide foreigners secure, long-term residential rights — not for speculation, profit-making, or quick returns.
          </p>
        </div>
      </div>
    </section>
  );
}