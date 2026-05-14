import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <img
              src="https://media.base44.com/images/public/69f95de45f65220f9c4a6955/473c991e5_PNLT-Logo-scaled.jpg"
              alt="Philippine New Land Trust"
              className="h-16 w-auto object-contain"
            />
            <div className="gold-thread w-16 my-5" />
            <p className="text-white/70 leading-relaxed max-w-sm text-sm">Philippine New Land Trust provides qualified foreigners with legally structured, long-term residential pathway in the Philippines — fully compliant with Philippine law.

            </p>
          </div>

          <div className="md:col-span-4 space-y-4 text-sm text-white/80">
            <div className="text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Contact</div>
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Unit 1108, Park Centrale,<br />Cebu IT Park, Cebu City 6000</span>
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:info@pnlt.ph" className="hover:text-accent">info@pnlt.ph</a>
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <div>+1 919 395 6065 <span className="text-white/50">(WhatsApp)</span></div>
                <div>+63 32 380 2324 <span className="text-white/50">(PH Tel)</span></div>
              </div>
            </div>
          </div>

          




          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Philippine New Land Trust. All rights reserved.</div>
          <div>Website by <a href="https://webik.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Webik</a></div>
        </div>
      </div>
    </footer>);

}