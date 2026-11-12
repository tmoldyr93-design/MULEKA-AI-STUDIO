import React, { useState } from 'react';
import { MessageCircle, Menu, X, Instagram, Send, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenAssistant?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssistant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getWhatsAppLink = (text = 'Сәлеметсіз бе, Мөлдір! AI-студия қызметтері мен курстары туралы білгім келеді.') => {
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Real Photo Thumbnail */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <img
            src={STUDIO_INFO.photoUrl}
            alt={STUDIO_INFO.creatorName}
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-full object-cover object-top border border-amber-400/50"
          />
          <span>MULEKA AI STUDIO</span>
          <span className="text-amber-400 text-sm">✨</span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Қызметтер
          </a>
          <a href="#portfolio" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Жұмыстар
          </a>
          <a href="#compare" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Салыстыру
          </a>
          <a href="#courses" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Курстар
          </a>
          <a href="#ideator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Идея табу
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Байланыс
          </a>
        </nav>

        {/* Zone 3: Social Icons & 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Social Quick Links */}
          <div className="flex items-center gap-1.5 text-neutral-400 border-r border-neutral-800 pr-3 mr-1">
            <a
              href={STUDIO_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 hover:text-pink-400 hover:bg-neutral-900 rounded-lg transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={STUDIO_INFO.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-1.5 hover:text-cyan-400 hover:bg-neutral-900 rounded-lg transition-colors text-xs font-bold"
            >
              TT
            </a>
            <a
              href={STUDIO_INFO.socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-1.5 hover:text-sky-400 hover:bg-neutral-900 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* AI Assistant button */}
          {onOpenAssistant && (
            <button
              onClick={onOpenAssistant}
              className="px-3 py-2 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/60 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Көмекші</span>
            </button>
          )}

          {/* WhatsApp Primary CTA */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-sm shadow-amber-500/20 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-neutral-950 fill-neutral-950" />
            <span>WhatsApp-қа жазу</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenAssistant && (
            <button
              onClick={onOpenAssistant}
              aria-label="AI Ассистент"
              className="p-2 text-amber-400 hover:bg-neutral-900 rounded-lg transition-colors"
            >
              <Sparkles className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Навигациялық мәзір"
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Қызметтер (Тапсырысқа не жасаймын?)
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Жұмыстарымды көру
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Before & After салыстыру
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Курстар (4 999 ₸ / 9 990 ₸)
            </a>
            <a
              href="#ideator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Идея генераторы
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              Мөлдірге жазу & Байланыс
            </a>
          </nav>

          {/* Social Links inside Mobile menu */}
          <div className="flex items-center gap-3 px-3 py-2 border-t border-neutral-800">
            <span className="text-xs text-neutral-400">Желілер:</span>
            <a
              href={STUDIO_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-pink-400 hover:underline flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>
            <a
              href={STUDIO_INFO.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              TikTok
            </a>
            <a
              href={STUDIO_INFO.socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:underline flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5" /> Telegram
            </a>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 rounded-xl hover:bg-amber-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-neutral-950 fill-neutral-950" />
              <span>WhatsApp арқылы тапсырыс беру</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
