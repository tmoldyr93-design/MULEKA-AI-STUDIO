import React from 'react';
import { MessageCircle, GraduationCap, Play, Sparkles, ArrowRight, ShieldCheck, Instagram, Send } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onSelectCourse?: () => void;
  onOpenAssistant?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectCourse, onOpenAssistant }) => {
  const getWhatsAppLink = (message = 'Сәлеметсіз бе, Мөлдір! WhatsApp арқылы тапсырыс бергім келеді.') => {
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left typography & Right visual container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3 tracking-wide">
              <span>{STUDIO_INFO.name}</span>
              <span aria-hidden="true">·</span>
              <span>{STUDIO_INFO.creatorName} — AI-Креатор</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Алматы</span>
            </div>

            {/* Official Motto from User's Banner */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-amber-300 bg-amber-950/60 border border-amber-500/30 rounded-lg">
                {STUDIO_INFO.officialMotto}
              </span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 [text-wrap:balance]">
              Сіздің идеяңыз —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                ерекше фото мен видео!
              </span>
            </h1>

            {/* Sub-motto badge */}
            <div className="text-sm font-semibold text-neutral-300 mb-4 tracking-wide flex items-center gap-3">
              <span>AI фото</span>
              <span className="text-amber-400">•</span>
              <span>Видео</span>
              <span className="text-amber-400">•</span>
              <span>Курстар</span>
              <span className="text-neutral-500">|</span>
              <span className="text-amber-400 font-bold tabular-nums">4 999 ₸ / 9 990 ₸</span>
            </div>

            {/* Moldir's warm introduction */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-3">
              Мен — <strong className="text-white font-semibold">{STUDIO_INFO.creatorName}</strong>, AI-креатормын. Жасанды интеллект арқылы жеке өзіңізге, бизнесіңізге және ерекше күндеріңізге арналған фото мен видео жасаймын. Өзім үйренген біліммен бөлісіп, AI үйренгісі келетіндерге курстар ұсынамын 💛.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
              Идеяңыз дайын болмаса да, жазыңыз — бірге ойластырамыз!
            </p>

            {/* 3 Core Action Buttons + AI Assistant */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* 1. WhatsApp Order */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-amber-500/20 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-neutral-950 fill-neutral-950" />
                <span>WhatsApp арқылы тапсырыс беру</span>
              </a>

              {/* 2. View Works */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 rounded-xl transition-all whitespace-nowrap"
              >
                <Play className="w-4 h-4 text-amber-400" />
                <span>Жұмыстарымды көру</span>
              </a>

              {/* 3. Learn about courses */}
              <a
                href="#courses"
                onClick={onSelectCourse}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 rounded-xl transition-all whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Курс пакеттерін білу</span>
              </a>

              {/* 4. AI Assistant Trigger */}
              {onOpenAssistant && (
                <button
                  onClick={onOpenAssistant}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-purple-300 hover:text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/60 rounded-xl transition-all whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>AI Ассистентпен сөйлесу</span>
                </button>
              )}
            </div>

            {/* Social Media Links Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-3 pb-3 border-t border-neutral-800/80">
              <span className="text-xs text-neutral-400 font-medium">Әлеуметтік желілер:</span>
              <div className="flex items-center gap-2">
                <a
                  href={STUDIO_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-pink-400 hover:text-pink-300 bg-pink-950/40 border border-pink-800/50 rounded-lg transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded-lg transition-colors"
                >
                  <span className="font-bold text-xs">TT</span>
                  <span>TikTok</span>
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-sky-400 hover:text-sky-300 bg-sky-950/40 border border-sky-800/50 rounded-lg transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Micro trust point */}
            <div className="flex items-center gap-6 text-xs text-neutral-400 pt-2 border-t border-neutral-800/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% шынайы нәтиже & 4K сапа</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Жеке стиль мен бейнені сақтау</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container with User's Uploaded Photo */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl flex flex-col justify-end group min-h-[420px] sm:min-h-[480px]">
              {/* Real Photo of Moldir from user upload */}
              <img
                src={STUDIO_INFO.photoUrl}
                alt="Мөлдір — Muleka AI Studio негізін қалаушы және AI креатор"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-transparent pointer-events-none" />

              {/* Official Banner Badge on top */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] font-bold text-amber-400 shadow-lg">
                MULEKA AI STUDIO ✨
              </div>

              {/* Floating Information Glass Card */}
              <div className="relative z-10 p-5 sm:p-6 backdrop-blur-md bg-neutral-950/80 border-t border-neutral-800/90 m-3 sm:m-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>Мөлдір</span>
                      <span className="text-amber-400 text-xs">✨</span>
                    </h3>
                    <p className="text-xs text-neutral-400">AI-креатор & Визуал дизайнер</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Ресми фото
                  </span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 mb-3">
                  «Жасанды интеллект. Шығармашылық. Нәтиже. Өзіңізге естелік, бизнесіңізге әсерлі жарнама жасатайық!»
                </p>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
                  <span>Тікелей байланыс</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>WhatsApp-қа жазу</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Stats Strip Below Split (§2.B) */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STUDIO_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
