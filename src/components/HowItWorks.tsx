import React from 'react';
import { FileText, ImagePlus, Handshake, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { ORDER_STEPS, STUDIO_INFO } from '../data/portfolioData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <FileText className="w-5 h-5 text-amber-400" />;
      case 1: return <ImagePlus className="w-5 h-5 text-amber-400" />;
      case 2: return <Handshake className="w-5 h-5 text-amber-400" />;
      case 3: return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
    }
  };

  const getWhatsAppLink = () => {
    const text = 'Сәлеметсіз бе, Мөлдір! Мен жұмысқа тапсырыс бергім келеді. Фотоларым мен үлгілерім дайын.';
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Қарапайым 4 қадам</span>
            <span aria-hidden="true">·</span>
            <span>1-2 күнде дайын</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Тапсырыс беру оңай!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Күрделі келісім-шарттарсыз және артық уақыт жоғалтпай, тікелей WhatsApp арқылы барлығын тез шешеміз.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ORDER_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-lg font-mono font-bold text-neutral-500 tabular-nums group-hover:text-amber-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="text-base font-bold text-white">
              Өзіңізге естелік, жақыныңызға ерекше сыйлық жасайық! ✨
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Бүгін тапсырыс берсеңіз, алғашқы нәтижені ертең көре аласыз.
            </p>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shadow-md shadow-amber-500/20"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950" />
            <span>WhatsApp-та бастау</span>
          </a>
        </div>
      </div>
    </section>
  );
};
