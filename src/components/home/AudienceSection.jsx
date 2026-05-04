import React from 'react';
import { Check, X, Sunset, Users, TrendingUp, Plane, HelpCircle, UserCheck } from 'lucide-react';
import useReveal from '@/components/pnlt/useReveal';

const forItems = [
  { icon: Sunset, title: 'Retirees', desc: 'Enjoy your golden years with comfort, peace, and true stability.' },
  { icon: Users, title: 'Expat Families', desc: "Build a stable home and secure your family's future." },
  { icon: UserCheck, title: 'Young Expats', desc: 'Start early and secure long-term living in the Philippines.' },
];

const notForItems = [
  { icon: TrendingUp, title: 'Property Investors', desc: 'Focused on profit, flipping, or rental income.' },
  { icon: Plane, title: 'Short-Term Visitors', desc: 'Seeking vacations or temporary stays.' },
  { icon: HelpCircle, title: 'Undecided Expats', desc: 'Not yet sure about committing to the Philippines.' },
];

export default function AudienceSection() {
  const ref = useReveal();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Who It's For</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            Is HomeSecure™ Right for You?
          </h2>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="font-semibold text-navy text-lg">PNLT Is For</h3>
            </div>
            <div className="space-y-4">
              {forItems.map((item) => (
                <div key={item.title} className="flex gap-4 bg-white border border-l-4 border-l-gold border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-semibold text-navy text-lg">PNLT Is NOT For</h3>
            </div>
            <div className="space-y-4">
              {notForItems.map((item) => (
                <div key={item.title} className="flex gap-4 bg-white border border-l-4 border-l-gray-200 border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-light-gray rounded-xl p-6 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-navy">Important:</span> PNLT is NOT an investment pathway. It exists solely to provide foreigners with secure, long-term residential rights in the Philippines.
          </p>
        </div>
      </div>
    </section>
  );
}