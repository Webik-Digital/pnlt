import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-primary text-white py-28 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-thread" />
      <div className="absolute bottom-0 left-0 right-0 gold-thread" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Ready to take the <span className="italic text-accent">next step?</span>
            </h2>
            <p className="text-white/70 text-lg font-light mt-6 max-w-xl">
              Book a free consultation or contact us today — our team is ready to guide you through every question.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href="https://calendly.com/pnlt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between h-14 px-6 bg-accent text-primary font-medium tracking-wide hover:bg-accent/90 transition-all"
            >
              <span className="flex items-center gap-3">
                <Calendar className="w-4 h-4" /> Book a Consultation
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/#contact"
              className="group flex items-center justify-between h-14 px-6 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all"
            >
              <span className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" /> Contact Us
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}