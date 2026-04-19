import React from 'react';
import { Scale, FileWarning, Home, Heart, AlertCircle } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const problems = [
  { icon: Scale, title: 'Law Circumvention', text: "Foreigners can't own land, yet many still risk illegal setups using a Filipino's name — leaving them legally unprotected." },
  { icon: FileWarning, title: 'Informal Arrangements', text: 'Some agents push foreigners to form corporations at 40% share just to buy a home — often costly, complex, or considered a dummy setup under Philippine law.' },
  { icon: Home, title: 'Limited Housing Options', text: 'Most expats are limited to short-term rentals, often with rising rates and no freedom to settle.' },
  { icon: Heart, title: 'Pressured to Purchase', text: "Many foreigners feel pressured to buy under a partner's name. If the relationship ends, the foreigner legally owns nothing." },
  { icon: AlertCircle, title: 'Misleading Information', text: 'Foreigners often rely on vague advice, forums, or hearsay — leading to costly mistakes or legal trouble.' },
];

export default function CommonProblems() {
  const ref = useReveal();
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Landscape"
          title="Common Problems Expats Face"
          align="center"
        />
        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-white border-b-2 border-b-primary/10 border-l border-l-border p-8 hover:border-b-accent transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-[11px] tracking-[0.2em] text-slate-400">
                0{i + 1}
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}