import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

const steps = [
  { n: '01', title: 'Free Consultation', desc: "Book a free video call or in-person meeting. We'll learn about your situation, answer your questions, and determine if HomeSecure is right for you." },
  { n: '02', title: 'Qualification & Onboarding', desc: "Once qualified, we'll explain the legal structure, documentation, and your rights and protections." },
  { n: '03', title: 'Home Selection', desc: "Choose from available properties, or let us help match you based on location, budget, and lifestyle." },
  { n: '04', title: 'Legal Structuring & Documentation', desc: "Our legal team sets up your HomeSecure arrangement with full, transparent documentation." },
  { n: '05', title: 'Move In & Live With Confidence', desc: "Move into your home with long-term security, legal documentation, and ongoing PNLT support." },
];

const benefits = [
  { title: 'Legally Compliant', desc: 'No law circumvention. No gray areas. Fully within Philippine law.' },
  { title: 'Long-Term Security', desc: 'Not a rental. Structured, long-term residential rights.' },
  { title: 'Full Documentation', desc: 'Every arrangement backed by clear legal docs — not handshakes.' },
  { title: 'Freedom to Choose', desc: 'Access residential homes in locations you choose.' },
  { title: 'Ongoing Support', desc: 'PNLT provides guidance for the duration of your arrangement.' },
];

const tableRows = [
  { feature: 'Legally compliant', hs: { val: '✅ Yes', ok: true }, partner: { val: '❌ Risky', ok: false }, corp: { val: '❌ Questionable', ok: false }, rent: { val: '✅ Yes', ok: true } },
  { feature: 'Long-term security', hs: { val: '✅ Yes', ok: true }, partner: { val: '❌ Depends on relationship', ok: false }, corp: { val: '⚠️ Complex', ok: null }, rent: { val: '❌ No', ok: false } },
  { feature: 'Foreigner protected', hs: { val: '✅ Yes', ok: true }, partner: { val: '❌ No legal claim', ok: false }, corp: { val: '⚠️ Limited', ok: null }, rent: { val: '❌ No', ok: false } },
  { feature: 'Full documentation', hs: { val: '✅ Yes', ok: true }, partner: { val: '❌ Often informal', ok: false }, corp: { val: '⚠️ Varies', ok: null }, rent: { val: '⚠️ Basic lease', ok: null } },
  { feature: 'No third-party risk', hs: { val: '✅ Yes', ok: true }, partner: { val: '❌ High risk', ok: false }, corp: { val: '❌ High risk', ok: false }, rent: { val: '✅ Low risk', ok: true } },
  { feature: 'Access to houses', hs: { val: '✅ Yes', ok: true }, partner: { val: '⚠️ Depends', ok: null }, corp: { val: '⚠️ Depends', ok: null }, rent: { val: '❌ Limited', ok: false } },
];

function Cell({ val, ok }) {
  const cls = ok === true ? 'text-green-600 font-semibold' : ok === false ? 'text-red-500' : 'text-amber-600';
  return <td className={`px-4 py-3 text-sm ${cls}`}>{val}</td>;
}

export default function HomeSecureSection() {
  const ref = useReveal();
  return (
    <section id="homesecure" className="bg-light-gray py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Our Flagship Program</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-5">
            HomeSecure — Your Legal Residential Pathway to a Real Home in the Philippines
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The flagship program of Philippine New Land Trust. Designed specifically for foreigners who want long-term residential security — legally, safely, and with full protection.
          </p>
        </div>

        {/* What is HomeSecure */}
        <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm mb-12">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-3">What is HomeSecure?</div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            HomeSecure is PNLT's core residential program that provides qualified foreigners with long-term rights to live in a home in the Philippines. It is built on a legally compliant structure that protects the expat's residential pathway without violating Philippine land ownership laws. Unlike risky workarounds or informal arrangements, HomeSecure is transparent, documented, and designed to stand the test of time.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="reveal mb-14">
          <h3 className="font-display text-2xl text-navy mb-8 text-center">How HomeSecure Works</h3>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm items-start">
                <div className="w-12 h-12 bg-gold/15 text-gold rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {s.n}
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-lg mb-1">{s.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-navy mb-8 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
                <div className="w-8 h-8 bg-gold/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{b.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-10">
          <h3 className="font-display text-2xl text-navy mb-6 text-center">How Does It Compare?</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-navy">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gold">HomeSecure</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-navy">Partner's Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-navy">Dummy Corp</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-navy">Renting</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-navy">{row.feature}</td>
                    <Cell {...row.hs} />
                    <Cell {...row.partner} />
                    <Cell {...row.corp} />
                    <Cell {...row.rent} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="https://calendly.com/pnlt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded font-semibold hover:bg-gold/90 transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/resources?category=homesecure-explained"
            className="text-gold font-semibold hover:underline text-sm"
          >
            Read More About HomeSecure →
          </Link>
        </div>
      </div>
    </section>
  );
}