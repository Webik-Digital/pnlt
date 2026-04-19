import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

export default function Services({ images }) {
  const ref = useReveal();

  const services = [
    {
      tag: 'HomeSecure™',
      title: 'Long-term residential rights with full protection.',
      image: images.home,
      anchor: 'homesecure',
    },
    {
      tag: 'LandSecure™',
      title: 'Secure land use backed by legal structure.',
      image: images.land,
      anchor: 'landsecure',
    },
    {
      tag: 'TransitionSecure™',
      title: 'Vetted short-term rentals while finding your home.',
      image: images.transition,
      anchor: 'transitionsecure',
    },
  ];

  return (
    <section className="bg-secondary py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services & Strategies"
          title="Flexible solutions, ironclad foundations."
          subtitle="Flexible solutions designed to give foreigners secure, long-term housing options in the Philippines."
        />

        <div ref={ref} className="reveal grid md:grid-cols-3 gap-6 mt-20">
          {services.map((s) => (
            <Link
              key={s.tag}
              to={`/resources#${s.anchor}`}
              className="group block bg-white overflow-hidden border border-transparent hover:border-accent transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-primary">
                <img
                  src={s.image}
                  alt={s.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms]"
                />
              </div>
              <div className="p-8 border-b-2 border-b-transparent group-hover:border-b-accent transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
                      {s.tag}
                    </div>
                    <h3 className="font-display text-2xl text-primary leading-tight">{s.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/60 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}