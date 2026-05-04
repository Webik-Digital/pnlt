import React, { useEffect } from 'react';
import AnnouncementBar from '@/components/pnlt/AnnouncementBar';
import Header from '@/components/pnlt/Header';
import Footer from '@/components/pnlt/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProblemSection from '@/components/home/ProblemSection';
import CommonProblemsSection from '@/components/home/CommonProblemsSection';
import HomeSecureSection from '@/components/home/HomeSecureSection';
import AudienceSection from '@/components/home/AudienceSection';
import TrustSection from '@/components/home/TrustSection';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import InquiryFormSection from '@/components/home/InquiryFormSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Philippine New Land Trust — HomeSecure™ | Secure Housing for Expats in the Philippines';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = 'PNLT helps foreigners secure legally protected, long-term housing in the Philippines through HomeSecure™. Expat housing solutions for retirees and expat families.';
    if (!meta.parentNode) document.head.appendChild(meta);
    if (window.location.hash === '#contact') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
    if (window.location.hash === '#homesecure') {
      setTimeout(() => document.getElementById('homesecure')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  return (
    <div className="bg-white">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <CommonProblemsSection />
      <HomeSecureSection />
      <AudienceSection />
      <TrustSection />
      <ConsultationCTA />
      <InquiryFormSection />
      <Footer />
    </div>
  );
}