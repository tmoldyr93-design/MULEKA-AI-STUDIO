import React from 'react';
import { 
  Sparkles, Camera, Gift, Heart, History, Film, Share2, Layers, 
  ArrowUpRight, CheckCircle2, MessageCircle, HelpCircle
} from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceForCalculator?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForCalculator }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-amber-400" />;
      case 'Gift': return <Gift className="w-5 h-5 text-amber-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-amber-400" />;
      case 'History': return <History className="w-5 h-5 text-amber-400" />;
      case 'Film': return <Film className="w-5 h-5 text-amber-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getWhatsAppForService = (service: ServiceItem) => {
    const text = `Сәлеметсіз бе, Мөлдір! Мені мына қызмет қызықтырады: "${service.title}". Бағасы мен дайын болу мерзімін білгім келеді.`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Қызметтер каталогы</span>
              <span aria-hidden="true">·</span>
              <span>8 бағыт</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Тапсырысқа не жасаймын?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              Жеке естеліктерден бастап ірі бизнес жарнамасына дейін: заманауи жасанды интеллект қуатымен кез келген визуалды шындыққа айналдырамыз.
            </p>
          </div>

          {/* Quick Idea Callout Banner */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3 max-w-md">
            <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-white">
                Идеяңыз әлі нақты емес пе?
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                Ештеңе етпейді! Жазыңыз немесе идея генераторымен бірге ойластырамыз.
              </p>
              <a 
                href="#ideator" 
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 mt-1.5"
              >
                <span>Идея генераторын ашу</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200 group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-1">
                  {service.title}
                </h3>
                <p className="text-[11px] font-medium text-neutral-400 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-neutral-800/80">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-neutral-400 block">Бастапқы құны</span>
                  <span className="text-sm font-bold text-white tabular-nums">
                    {service.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {onSelectServiceForCalculator && (
                    <button
                      onClick={() => onSelectServiceForCalculator(service.id)}
                      title="Бағасын есептеу"
                      className="px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                      Есептеу
                    </button>
                  )}
                  <a
                    href={getWhatsAppForService(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center"
                    title="WhatsApp арқылы тапсырыс"
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
