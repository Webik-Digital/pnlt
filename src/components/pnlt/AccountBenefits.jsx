import React from 'react';
import { MessageSquare, Layers, BookOpen, Download } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const benefits = [
  { icon: MessageSquare, title: 'Priority Support', text: 'Ask questions directly to our team and get personalized guidance.' },
  { icon: Layers, title: 'Access All Services', text: 'See full details of HomeSecure™, UpgradeSecure™, TransitionSecure™, and LandSecure™.' },
  { icon: BookOpen, title: 'Exclusive Guides & Resources', text: 'Get insider information about legally securing your home and navigating Philippine property laws.' },
  { icon: Download, title: 'Free E-Book Included', text: "Download 'Why Foreigners Miss Out on Philippine Homes — And How PNLT Changes That.'" },
];

export default function AccountBenefits() {
  const ref = useReveal();
  return (
    <section className="bg-secondary py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Membership"
          title="Why create a free account."
          align="center"
        />
        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-white p-8 border-b-2 border-b-transparent hover:border-b-accent hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}