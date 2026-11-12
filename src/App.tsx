import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CoursesSection } from './components/CoursesSection';
import { IdeaGenerator } from './components/IdeaGenerator';
import { HowItWorks } from './components/HowItWorks';
import { OrderCalculator } from './components/OrderCalculator';
import { ContactForm } from './components/ContactForm';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { STUDIO_INFO } from './data/portfolioData';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedServiceIdForCalc, setSelectedServiceIdForCalc] = useState<string>('business_ad');
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);

  const handleSelectServiceForCalculator = (serviceId: string) => {
    setSelectedServiceIdForCalc(serviceId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppFloatingLink = () => {
    const text = 'Сәлеметсіз бе, Мөлдір! Muleka AI Studio сайтынан жазып тұрмын, сұрақтарым бар еді.';
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero Section with Moldir's real photo & social links */}
        <HeroSection
          onSelectCourse={() => {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />

        {/* 2. Services: "Тапсырысқа не жасаймын?" (8 directions) */}
        <ServicesSection onSelectServiceForCalculator={handleSelectServiceForCalculator} />

        {/* 3. Before & After Interactive Comparison */}
        <BeforeAfterSlider />

        {/* 4. Portfolio Works Showcase */}
        <PortfolioGallery />

        {/* 5. Courses: 4 999 ₸ & 9 990 ₸ packages */}
        <CoursesSection />

        {/* 6. Creative Idea Generator */}
        <IdeaGenerator />

        {/* 7. 4 Easy Steps to Order */}
        <HowItWorks />

        {/* 8. Interactive Price Calculator */}
        <OrderCalculator initialServiceId={selectedServiceIdForCalc} />

        {/* 9. Direct Contact & Social Media Links Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Drawer & Floating Trigger */}
      <AiAssistant
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Floating WhatsApp Action Button for Easy Access */}
      <aside aria-label="Жедел байланыс" className="fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppFloatingLink()}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp арқылы жазу"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-neutral-950 font-bold rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5 fill-neutral-950" />
          <span className="hidden sm:inline text-xs font-bold tracking-tight">
            WhatsApp-та кеңес алу
          </span>
        </a>
      </aside>
    </div>
  );
}
