import React from 'react';
import { MessageCircle, Instagram, Send, Heart, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const getWhatsAppLink = () => {
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent('Сәлеметсіз бе, Мөлдір! Muleka AI Studio қызметтері бойынша жазып тұрмын.')}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={STUDIO_INFO.photoUrl}
                alt={STUDIO_INFO.creatorName}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-amber-400/60"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display flex items-center gap-1.5">
                  <span>{STUDIO_INFO.name}</span>
                  <span className="text-amber-400 text-sm">✨</span>
                </span>
                <p className="text-xs text-amber-300 font-semibold">
                  {STUDIO_INFO.officialMotto}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {STUDIO_INFO.bio}
            </p>
            <div className="pt-1 text-xs text-neutral-400">
              AI-креатор & Визуал арт-директор: <strong className="text-white">{STUDIO_INFO.creatorName}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Бөлімдер
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Тапсырысқа не жасаймын? (8 бағыт)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Жұмыстарымды көру (Портфолио)
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-amber-400 transition-colors">
                  Before & After салыстыру
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  AI курстары (4 999 ₸ / 9 990 ₸)
                </a>
              </li>
              <li>
                <a href="#ideator" className="hover:text-amber-400 transition-colors">
                  Идея генераторы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Мөлдірге тікелей жазу
                </a>
              </li>
            </ul>
          </div>

          {/* Social Networks & Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Байланыс & Әлеуметтік желілер
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={STUDIO_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>WhatsApp: +7 707 888 9900</span>
              </a>

              <a
                href={STUDIO_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: {STUDIO_INFO.instagramHandle}</span>
              </a>

              <a
                href={STUDIO_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                <span className="w-4 h-4 rounded bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-cyan-400">
                  TT
                </span>
                <span>TikTok: {STUDIO_INFO.tiktokHandle}</span>
              </a>

              <a
                href={STUDIO_INFO.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-sky-400 transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: {STUDIO_INFO.telegramHandle}</span>
              </a>

              <p className="text-[11px] text-neutral-500 pt-1">
                Жұмыс уақыты: {STUDIO_INFO.workingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. Барлық құқықтар қорғалған.</p>
          <div className="flex items-center gap-4">
            <span>Мөлдірдің авторлық AI студиясы 💛</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="Жоғарыға оралу"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
