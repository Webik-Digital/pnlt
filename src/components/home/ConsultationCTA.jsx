import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

export default function ConsultationCTA() {
  const ref = useReveal();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Get Started</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            Take The First Step Towards Your Dream Home
          </h2>
        </div>

        <div ref={ref} className="reveal max-w-2xl mx-auto">
          <div className="bg-navy rounded-2xl p-10 md:p-14 text-center shadow-xl">
            <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-3xl text-white mb-4">Book a Free Consultation</h3>
            <p className="text-white/70 leading-relaxed mb-8 max-w-md mx-auto">
              Speak directly with our team to ask questions and explore your options. Video call or in-person — no pressure, no obligation.
            </p>
            <a
              href="https://cal.id/carl-foster/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-lg hover:bg-gold/90 transition-colors mb-6"
            >
              Book a Meeting
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/50 text-sm">
              Or explore our{' '}
              <Link to="/resources" className="text-gold hover:underline">Learn More page</Link>
              {' '}for detailed guides, court cases, and FAQs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}