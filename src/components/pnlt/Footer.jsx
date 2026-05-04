import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-semibold text-white mb-4">PNLT</div>
            <p className="text-white/70 leading-relaxed max-w-sm text-sm">
              Philippine New Land Trust provides qualified foreigners with legally structured, long-term residential agreements in the Philippines — fully compliant with Philippine law.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4 text-sm text-white/75">
            <div className="text-[11px] uppercase tracking-widest text-gold mb-4 font-semibold">Contact</div>
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>Unit 1108, Park Centrale,<br />Cebu IT Park, Cebu City 6000</span>
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <a href="mailto:info@pnlt.ph" className="hover:text-gold transition-colors">info@pnlt.ph</a>
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <div>
                <div>+1 919 395 6065 <span className="text-white/40">(WhatsApp)</span></div>
                <div>+63 32 380 2324 <span className="text-white/40">(PH Tel)</span></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm">
            <div className="text-[11px] uppercase tracking-widest text-gold mb-4 font-semibold">Resources</div>
            <Link to="/resources" className="block text-white/75 hover:text-gold transition-colors">Learn More</Link>
            <a href="#" className="block text-white/75 hover:text-gold transition-colors">Press Release and Media</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-8 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Philippine New Land Trust. All rights reserved.</div>
          <div className="tracking-widest uppercase text-[10px]">HomeSecure™ · Legal Residential Security</div>
        </div>
      </div>
    </footer>
  );
}