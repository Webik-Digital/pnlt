import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const faqs = [
  { q: 'Can foreigners really own a home in the Philippines?', a: 'Foreigners cannot directly own land in the Philippines, but through PNLT\'s legal structures they can secure long-term, enforceable residential rights — a true home, without breaking any laws.' },
  { q: 'Is PNLT an investment scheme?', a: 'No. PNLT is strictly a residential housing solution. We do not offer speculation, property flipping, or rental yield products. Our mandate is secure, long-term living — not profit.' },
  { q: "How is PNLT different from buying under a partner's name?", a: 'Purchasing under another person\'s name leaves you legally unprotected if circumstances change. PNLT provides a transparent, registered, enforceable structure that remains intact regardless of personal relationships.' },
  { q: 'What legal protections does HomeSecure™ provide?', a: 'HomeSecure™ is built on Philippine-compliant legal instruments that grant long-term, registered residential rights. Full details will be disclosed during your consultation.' },
  { q: 'How do I get started?', a: 'Create a free account or book a free consultation. Our team will guide you through eligibility, property matching, and the legal structuring process.' },
  { q: 'Is there a cost to create an account?', a: 'No. Creating a PNLT account is completely free and gives you access to our client resource center, guides, and our e-book.' },
  { q: 'Where is PNLT located?', a: 'Our main office is at Unit 1108, Park Centrale, Cebu IT Park, Cebu City 6000, Philippines.' },
  { q: 'Can I visit the PNLT office?', a: 'Yes — by appointment. Please book a consultation and choose an in-person meeting at our Cebu IT Park office.' },
];

function Item({ item, open, onToggle }) {
  return (
    <div className="border-t border-border last:border-b">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        <span className="font-display text-xl md:text-2xl text-primary group-hover:text-accent transition-colors pr-4">
          {item.q}
        </span>
        <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-8 pr-16 text-slate-600 leading-[1.7] font-light text-lg">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useReveal();
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Answers"
          title="Frequently asked questions."
          align="center"
        />
        <div ref={ref} className="reveal max-w-4xl mx-auto mt-20">
          {faqs.map((item, i) => (
            <Item
              key={i}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}