import React, { useEffect } from 'react';
import AnnouncementBar from '@/components/pnlt/AnnouncementBar';
import Header from '@/components/pnlt/Header';
import ResourceHeader from '@/components/pnlt/ResourceHeader';
import ServiceDeepDive from '@/components/pnlt/ServiceDeepDive';
import AccountBenefits from '@/components/pnlt/AccountBenefits';
import FAQ from '@/components/pnlt/FAQ';
import CTABanner from '@/components/pnlt/CTABanner';
import Footer from '@/components/pnlt/Footer';

export default function Resources() {
  useEffect(() => {
    document.title = 'PNLT Services — HomeSecure, LandSecure, TransitionSecure';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = "Explore PNLT's services: HomeSecure, LandSecure, and TransitionSecure. Legal, long-term housing solutions for foreigners and expats in the Philippines.";
    if (!meta.parentNode) document.head.appendChild(meta);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <AnnouncementBar />
      <div className="pt-8">
        <Header />
        <ResourceHeader />
        <ServiceDeepDive />
        <AccountBenefits />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}