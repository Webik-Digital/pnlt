import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, UserPlus, Check, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

export default function LeadCapture() {
  const ref = useReveal();
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', nationality: '', phone: '',
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
    if (!form.first_name.trim()) e.first_name = 'Required';
    if (!form.last_name.trim()) e.last_name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.nationality.trim()) e.nationality = 'Required';
    if (!form.consent) e.consent = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // Honeypot — silently discard
    if (form.website) { setSuccess(true); return; }
    if (!validate()) return;

    setSubmitting(true);
    const { first_name, last_name, email, nationality, phone, consent } = form;
    await base44.entities.AccountRegistration.create({
      first_name, last_name, email, nationality, phone, consent
    });

    const fullName = `${first_name} ${last_name}`;
    await base44.integrations.Core.SendEmail({
      to: 'info@pnlt.ph',
      subject: `[PNLT] New Account Registration — ${fullName}`,
      body: `New free account registration on PNLT website:\n\nName: ${fullName}\nEmail: ${email}\nNationality: ${nationality}\nPhone/WhatsApp: ${phone || '—'}\nConsent: ${consent ? 'Yes' : 'No'}\n\nPlease follow up with login/access details.`
    });

    await base44.integrations.Core.SendEmail({
      to: email,
      from_name: 'Philippine New Land Trust',
      subject: 'Welcome to PNLT — Your Free Account',
      body: `Dear ${first_name},\n\nThank you for creating a free account with Philippine New Land Trust.\n\nOur team will follow up shortly with your personal access details and the link to our Client Resource Center — including our free e-book, "Why Foreigners Miss Out on Philippine Homes — And How PNLT Changes That."\n\nIn the meantime, you can explore our services page: https://pnlt.ph/resources\n\nWarmly,\nThe PNLT Team\ninfo@pnlt.ph`
    });

    setSubmitting(false);
    setSuccess(true);
  };

  const inputCls = (k) =>
    `w-full bg-transparent border-0 border-b px-0 pt-6 pb-2 text-primary placeholder-transparent focus:outline-none focus:ring-0 peer ${errors[k] ? 'border-destructive' : 'border-slate-300 focus:border-accent'}`;
  const labelCls = "absolute left-0 top-2 text-[11px] tracking-[0.15em] uppercase text-slate-500 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[11px] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-accent transition-all pointer-events-none";

  return (
    <section id="contact" className="bg-white py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Begin"
          title="Take the first step toward your dream home."
          align="center"
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-6 mt-20 max-w-5xl mx-auto">
          {/* Card A — Consultation */}
          <div className="bg-primary text-white p-10 md:p-12 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-accent">Consultation</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5">
              Book a Free Consultation
            </h3>
            <p className="text-white/70 leading-relaxed mb-10 flex-1">
              Speak directly with our team to ask questions and explore your options. Video call or in-person.
            </p>
            <a
              href="https://calendly.com/pnlt"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 w-full h-14 px-6 bg-accent text-primary font-medium tracking-wide hover:bg-accent/90 transition-all"
            >
              Book a Meeting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card B — Account */}
          <div className="bg-white border border-accent/60 p-10 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <UserPlus className="w-5 h-5 text-accent" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-accent">Free Account</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-primary mb-5">
              Create a Free Account
            </h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Sign up to access our exclusive client page with full details on PNLT services, legal structure, guides, and a free e-book.
            </p>

            {success ? (
              <div className="bg-secondary border-l-2 border-accent p-6">
                <div className="flex items-center gap-2 mb-3 text-accent">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Account created</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Your account has been created! Check your email for access details. You can also explore our services page now.
                </p>
                <Link to="/resources" className="inline-flex items-center gap-2 mt-4 text-primary font-medium border-b border-accent pb-1 hover:gap-3 transition-all">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <input id="fn" value={form.first_name} onChange={(e) => update('first_name', e.target.value)} placeholder="First Name" className={inputCls('first_name')} />
                    <label htmlFor="fn" className={labelCls}>First Name *</label>
                    {errors.first_name && <p className="text-xs text-destructive mt-1">{errors.first_name}</p>}
                  </div>
                  <div className="relative">
                    <input id="ln" value={form.last_name} onChange={(e) => update('last_name', e.target.value)} placeholder="Last Name" className={inputCls('last_name')} />
                    <label htmlFor="ln" className={labelCls}>Last Name *</label>
                    {errors.last_name && <p className="text-xs text-destructive mt-1">{errors.last_name}</p>}
                  </div>
                </div>
                <div className="relative">
                  <input id="em" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email" className={inputCls('email')} />
                  <label htmlFor="em" className={labelCls}>Email Address *</label>
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div className="relative">
                  <input id="nt" value={form.nationality} onChange={(e) => update('nationality', e.target.value)} placeholder="Nationality" className={inputCls('nationality')} />
                  <label htmlFor="nt" className={labelCls}>Nationality *</label>
                  {errors.nationality && <p className="text-xs text-destructive mt-1">{errors.nationality}</p>}
                </div>
                <div className="relative">
                  <input id="ph" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Phone" className={inputCls('phone')} />
                  <label htmlFor="ph" className={labelCls}>Phone / WhatsApp</label>
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
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Create My Free Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}