import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function InquiryFormSection() {
  const [form, setForm] = useState({
    full_name: '', nationality: '', phone: '', email: '', message: '',
    privacy_consent: false, website: ''
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
    if (!form.privacy_consent) e.privacy_consent = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (form.website) { setSuccess(true); return; }
    if (!validate()) return;
    setSubmitting(true);
    const { full_name, nationality, phone, email, message, privacy_consent } = form;
    await base44.entities.Inquiry.create({ full_name, nationality, phone, email, message, privacy_consent });
    await base44.integrations.Core.SendEmail({
      to: 'info@pnlt.ph',
      subject: `[PNLT] New Inquiry — ${full_name}`,
      body: `New inquiry from the PNLT website:\n\nName: ${full_name}\nNationality: ${nationality}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message || '(no message)'}\n\nPlease respond within 1 business day.`
    });
    setSubmitting(false);
    setSuccess(true);
  };

  const inputCls = (k) =>
    `w-full border rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition ${errors[k] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`;

  return (
    <section id="contact" className="bg-light-gray py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">Send Us a Message</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have specific questions? Leave us a message and we will get back to you within 1 business day.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-10">
          {success ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-display text-2xl text-navy mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Full Name *</label>
                  <input value={form.full_name} onChange={(e) => update('full_name', e.target.value)} className={inputCls('full_name')} placeholder="Your full name" />
                  {errors.full_name && <p className="text-xs text-red-500 mt-1">{errors.full_name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Nationality *</label>
                  <input value={form.nationality} onChange={(e) => update('nationality', e.target.value)} className={inputCls('nationality')} placeholder="e.g. American" />
                  {errors.nationality && <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Phone Number *</label>
                  <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls('phone')} placeholder="+1 234 567 8900" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Email Address *</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls('email')} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Your Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className={`${inputCls('message')} resize-none`} placeholder="Tell us about your situation..." />
              </div>
              <input type="text" className="honeypot" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
              <label className="flex gap-3 items-start cursor-pointer">
                <input type="checkbox" checked={form.privacy_consent} onChange={(e) => update('privacy_consent', e.target.checked)} className="mt-1 w-4 h-4 accent-gold" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I agree to the collection and use of my personal data by PNLT in accordance with its Privacy Policy.
                </span>
              </label>
              {errors.privacy_consent && <p className="text-xs text-red-500">{errors.privacy_consent}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3.5 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-60"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}