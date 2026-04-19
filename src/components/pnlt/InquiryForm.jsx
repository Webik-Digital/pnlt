import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

export default function InquiryForm() {
  const ref = useReveal();
  const [form, setForm] = useState({
    full_name: '', nationality: '', phone: '', email: '', message: '',
    consent: false, website: '' // honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k, v) => {
    setForm({ ...form, [k]: v });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const e = {};
    if (!form.full_name.trim()) e.full_name = 'Required';
    if (!form.nationality.trim()) e.nationality = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.consent) e.consent = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (form.website) { setSuccess(true); return; }
    if (!validate()) return;

    setSubmitting(true);
    const { full_name, nationality, phone, email, message } = form;
    await base44.entities.Inquiry.create({ full_name, nationality, phone, email, message });

    await base44.integrations.Core.SendEmail({
      to: 'info@pnlt.ph',
      subject: `[PNLT] New Inquiry — ${full_name}`,
      body: `New inquiry received from the PNLT website:\n\nName: ${full_name}\nNationality: ${nationality}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message || '(no message)'}\n\nPlease respond within 1 business day.`
    });

    setSubmitting(false);
    setSuccess(true);
  };

  const inputCls = (k) =>
    `w-full bg-transparent border-0 border-b px-0 pt-6 pb-2 text-primary placeholder-transparent focus:outline-none focus:ring-0 peer ${errors[k] ? 'border-destructive' : 'border-slate-300 focus:border-accent'}`;
  const labelCls = "absolute left-0 top-2 text-[11px] tracking-[0.15em] uppercase text-slate-500 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[11px] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-accent transition-all pointer-events-none";

  return (
    <section id="message" className="bg-secondary py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Send us a message."
          subtitle="If you have specific questions, please leave us a message and we will get back to you within 1 business day."
          align="center"
        />

        <div ref={ref} className="reveal mt-20 max-w-2xl mx-auto">
          {success ? (
            <div className="bg-white border-l-2 border-accent p-10 text-center">
              <div className="w-12 h-12 bg-accent/15 text-accent mx-auto mb-6 flex items-center justify-center rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-3">Thank you!</h3>
              <p className="text-slate-600 leading-relaxed">
                We'll get back to you within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-10 md:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input id="iname" value={form.full_name} onChange={(e) => update('full_name', e.target.value)} placeholder="Full Name" className={inputCls('full_name')} />
                  <label htmlFor="iname" className={labelCls}>Full Name *</label>
                  {errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}
                </div>
                <div className="relative">
                  <input id="inat" value={form.nationality} onChange={(e) => update('nationality', e.target.value)} placeholder="Nationality" className={inputCls('nationality')} />
                  <label htmlFor="inat" className={labelCls}>Nationality *</label>
                  {errors.nationality && <p className="text-xs text-destructive mt-1">{errors.nationality}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input id="iph" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Phone" className={inputCls('phone')} />
                  <label htmlFor="iph" className={labelCls}>Phone Number *</label>
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div className="relative">
                  <input id="iem" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email" className={inputCls('email')} />
                  <label htmlFor="iem" className={labelCls}>Email Address *</label>
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="relative">
                <textarea id="imsg" rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Your Message" className={`${inputCls('message')} resize-none`} />
                <label htmlFor="imsg" className={labelCls}>Your Message</label>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                className="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => update('website', e.target.value)}
              />

              <label className="flex gap-3 items-start cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 accent-accent w-4 h-4"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I agree to the collection and use of my personal data by PNLT in accordance with its Privacy Policy.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="group w-full h-14 bg-primary text-white font-medium tracking-wide hover:bg-accent hover:text-primary transition-all inline-flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}