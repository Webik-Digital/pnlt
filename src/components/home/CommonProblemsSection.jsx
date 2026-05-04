import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Building2, Home, Heart, MessageCircleWarning, ArrowRight } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

const problems = [
  { icon: AlertTriangle, title: 'Illegal Land Arrangements', text: "Using a Filipino's name to buy property may seem like a solution, but it leaves the foreigner with zero legal protection if anything goes wrong." },
  { icon: Building2, title: 'Dummy Corporations', text: 'Some agents push foreigners into forming 60/40 corporations just to buy a home — often costly, legally questionable, and flagged as dummy setups under Philippine law.' },
  { icon: Home, title: 'Rental-Only Existence', text: 'Most expats get stuck in short-term rentals with rising rates, no modification rights, and no sense of permanence or stability.' },
  { icon: Heart, title: "Buying Under a Partner's Name", text: "Many foreigners buy property under a Filipino partner's name. If the relationship ends, the foreigner legally owns nothing — even if they paid for everything." },
  { icon: MessageCircleWarning, title: 'Bad Advice & Misinformation', text: 'Relying on forums, Facebook groups, or hearsay leads to costly mistakes, false confidence, and legal trouble down the line.' },
];

export default function CommonProblemsSection() {
  const ref = useReveal();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Common Pitfalls</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            The 5 Most Common Traps Expats Fall Into
          </h2>
        </div>
        <div ref={ref} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={p.title} className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-display text-xl text-navy font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
          <div className="md:col-span-2 lg:col-span-3 pt-4">
            <Link
              to="/resources?category=court-cases"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:underline text-sm"
            >
              Read real court cases where foreigners lost →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}