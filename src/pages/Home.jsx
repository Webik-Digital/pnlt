import React, { useEffect } from 'react';
import AnnouncementBar from '@/components/pnlt/AnnouncementBar';
import Header from '@/components/pnlt/Header';
import Hero from '@/components/pnlt/Hero';
import About from '@/components/pnlt/About';
import Problem from '@/components/pnlt/Problem';
import Audience from '@/components/pnlt/Audience';
import CommonProblems from '@/components/pnlt/CommonProblems';
import Services from '@/components/pnlt/Services';
import Solution from '@/components/pnlt/Solution';
import LeadCapture from '@/components/pnlt/LeadCapture';
import InquiryForm from '@/components/pnlt/InquiryForm';
import Footer from '@/components/pnlt/Footer';

// Static image URLs (generated at build time)
const HERO_IMG = 'https://media.base44.com/images/public/69e423c71289ad6d0bce991e/75711ce03_generated_ea12bb1a.png';
const SERVICE_IMGS = {
  home: 'https://media.base44.com/images/public/69e423c71289ad6d0bce991e/f4ae5ebee_generated_8b0b60dc.png',
  land: 'https://media.base44.com/images/public/69e423c71289ad6d0bce991e/333594532_generated_cf816f31.png',
  transition: 'https://media.base44.com/images/public/69e423c71289ad6d0bce991e/5bd9e9b01_generated_8cbaf98f.png',
};

export default function Home() {
  useEffect(() => {
    document.title = 'Philippine New Land Trust — Secure Housing for Expats in the Philippines';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = 'PNLT helps foreigners secure legally protected, long-term housing in the Philippines. Expat housing solutions, HomeSecure, LandSecure, TransitionSecure.';
    if (!meta.parentNode) document.head.appendChild(meta);

    // Scroll to hash target after mount (e.g., /#contact)
    if (window.location.hash === '#contact') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  return (
    <div className="bg-white">
      <AnnouncementBar />
      <div className="pt-8">
        <Header />
        <Hero heroImage={HERO_IMG} />
        <About />
        <Problem />
        <Audience />
        <CommonProblems />
        <Services images={SERVICE_IMGS} />
        <Solution />
        <LeadCapture />
        <InquiryForm />
        <Footer />
      </div>
    </div>
  );
}