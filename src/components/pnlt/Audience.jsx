import React from 'react';
import { Check, X, Compass, Users, Sprout, TrendingUp, Plane, HelpCircle } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const forGroups = [
  { icon: Compass, title: 'Retirees', text: 'Enjoy your golden years with comfort, peace, and true stability.' },
  { icon: Users, title: 'Expat Families', text: "Build stable homes and secure your family's lasting future." },
  { icon: Sprout, title: 'Young Expats', text: 'Start early and secure long-term living in the Philippines.' },
];

const notForGroups = [
  { icon: TrendingUp, title: 'Property Investors', text: 'Focused on profit, flipping, or rental income.' },
  { icon: Plane, title: 'Short-Term Visitors', text: 'Seeking vacations or temporary stays.' },
  { icon: HelpCircle, title: 'Undecided Expats', text: 'Unsure about long-term living in the Philippines.' },
];

function Card({ icon: Icon, title, text, positive }) {
  return (
    <div className="group bg-white border border-border p-8 hover:border-accent transition-all duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 flex items-center justify-center ${positive ? 'bg-accent/15 text-accent' : 'bg-slate-100 text-slate-400'}`}>
          <Icon className="w-5 h-5" />
        </div>
        {positive ? <Check className="w-4 h-4 text-accent" /> : <X className="w-4 h-4 text-slate-400" />}
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