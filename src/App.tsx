import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { WhyLogiq } from './components/WhyLogiq';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { ContactModal } from './components/ContactModal';

const MainLayout: React.FC = () => {
  const { dir } = useLanguage();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string | undefined>(undefined);

  const handleOpenContact = (sector?: string) => {
    setSelectedSector(sector);
    setIsContactOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-[#07151E] text-slate-100 selection:bg-[#2BB8B3] selection:text-white"
      dir={dir}
    >
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenContact={() => handleOpenContact()}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Business Solutions ("مهما كان نشاطك") */}
        <Solutions onSelectSector={(sectorId) => handleOpenContact(sectorId)} />

        {/* Enterprise SaaS Features */}
        <Features />

        {/* 3-Step Journey */}
        <HowItWorks />

        {/* Value Drivers & Proof */}
        <WhyLogiq />

        {/* Bottom Call to Action */}
        <CTASection onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultSector={selectedSector}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
};

export default App;
