import React, { useState } from 'react';
import { Sparkles, Maximize2, X, MessageCircle, Check, Copy } from 'lucide-react';
import { PORTFOLIO_GALLERY, PortfolioItem, STUDIO_INFO } from '../data/portfolioData';

type FilterCategory = 'all' | 'portrait' | 'business' | 'memory' | 'social';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'Барлығы' },
    { id: 'portrait', label: 'AI-фотосессия' },
    { id: 'business', label: 'Жарнамалық видео' },
    { id: 'memory', label: 'Естелік жандандыру' },
    { id: 'social', label: 'Reels & TikTok' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_GALLERY
    : PORTFOLIO_GALLERY.filter((item) => item.category === activeFilter);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const getWhatsAppForWork = (item: PortfolioItem) => {
    const text = `Сәлеметсіз бе, Мөлдір! Портфолиоңыздағы мына жұмыс маған өте ұнады: "${item.title}". Осындай стильде тапсырыс бергім келеді.`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Портфолио & Креативтер</span>
              <span aria-hidden="true">·</span>
              <span>4K Ultra HD сапа</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Жұмыстарымды көріңіз
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Әрбір туынды — тапсырыс берушінің жеке ерекшелігі мен бренд мәнін ескере отырып жасалған эксклюзивті визуал.
            </p>
          </div>

          {/* Interactive Filter Controls (§1.A: segmented functional buttons allowed) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              {/* Media Container */}
              <div
                onClick={() => setSelectedItem(item)}
                className="relative cursor-pointer overflow-hidden aspect-[16/10] bg-neutral-900"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Quick inspect button */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-950/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Inline info inside image preview */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-1">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.durationOrPhotos}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags without pills (§1.A) */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400 mb-4 pt-3 border-t border-neutral-800/80">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="hover:text-neutral-200">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs text-neutral-400 hover:text-white font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Промпт пен мәліметті көру</span>
                  </button>

                  <a
                    href={getWhatsAppForWork(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
                    <span>Осындай тапсырыс</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Viewer (§2.A) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-amber-400 font-semibold">{selectedItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.resolution}</span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Жабу"
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Large Image Preview */}
              <div className="relative w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 max-h-[460px] flex items-center justify-center">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[460px] object-contain"
                />
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Prompt Sample Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Қолданылған AI-промпт үлгісі (English Studio Prompt):</span>
                  </span>
                  <button
                    onClick={() => handleCopyPrompt(selectedItem.promptSample)}
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Көшірілді!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Көшіру</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-neutral-300 leading-relaxed select-all bg-neutral-900/80 p-3 rounded-lg border border-neutral-800/80">
                  {selectedItem.promptSample}
                </p>
              </div>

              {/* Modal CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400">
                  Мөлдірден дәл осындай немесе жеке талғамыңызға сай туынды жасату:
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppForWork(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                    <span>WhatsApp-қа осы үлгімен жазу</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
