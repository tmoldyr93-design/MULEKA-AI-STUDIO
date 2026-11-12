import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Sparkles, MessageCircle, ArrowLeftRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface CompareCase {
  id: string;
  title: string;
  badge: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImg: string;
  afterImg: string;
  serviceText: string;
}

const CASES: CompareCase[] = [
  {
    id: 'memory',
    title: 'Естелік фотоларды жандандыру және реставрация',
    badge: 'Көне мұрағатты тірілту',
    beforeLabel: 'Бастапқы күйі',
    afterLabel: 'AI Жанданған 4K нұсқа',
    beforeDesc: 'Ескі, ақ-қара, уақыт сызаты түскен және сапасы жоғалған отбасылық фото',
    afterDesc: 'Терең жылы түстер, бет-әлпеттегі табиғи жымиыс пен сезімге толы көзқарас',
    // We can use the restored image with filter simulation for before
    beforeImg: '/src/assets/images/showcase_memory_revival_1794481503075.jpg',
    afterImg: '/src/assets/images/showcase_memory_revival_1794481503075.jpg',
    serviceText: 'Сәлеметсіз бе, Мөлдір! Мен де ескі отбасылық фотоны жандандырып, видео жасағым келеді.',
  },
  {
    id: 'fashion',
    title: 'Өз бейнеңізбен люкс AI-фотосессия',
    badge: 'Студиясыз Vogue стилі',
    beforeLabel: 'Қарапайым селфи',
    afterLabel: 'Haute Couture AI Фотосессия',
    beforeDesc: 'Үйде немесе көшеде телефон камерасына түсірілген қарапайым портрет',
    afterDesc: 'Сәнді ұлттық күміс бұйымдар, дизайнерлік қара көйлек және мінсіз студиялық жарық',
    beforeImg: '/src/assets/images/showcase_fashion_photoshoot_1794481501109.jpg',
    afterImg: '/src/assets/images/showcase_fashion_photoshoot_1794481501109.jpg',
    serviceText: 'Сәлеметсіз бе, Мөлдір! Өз фотоларымнан AI-фотосессия жасатуға тапсырыс бергім келеді.',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="compare" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Нәтижені салыстыру</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Жасанды интеллект қандай ғажайып жасайды?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Слайдерді оңға-солға жылжытып, қарапайым түпнұсқаның кәсіби AI туындысына қалай айналатынын өз көзіңізбен көріңіз.
          </p>

          {/* Interactive Case Switcher Tabs */}
          <div className="inline-flex items-center gap-1 p-1 bg-neutral-900 rounded-xl border border-neutral-800 mt-6">
            {CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {c.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Main Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
            {/* Case Info bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-800 gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentCase.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-neutral-400 mt-0.5">
                  <span className="text-neutral-400">Алдында: {currentCase.beforeLabel}</span>
                  <span aria-hidden="true">→</span>
                  <span className="text-amber-400 font-medium">Кейін: {currentCase.afterLabel}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppLink(currentCase.serviceText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
                  <span>Осындай жасату</span>
                </a>
              </div>
            </div>

            {/* Draggable Slider Container */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] rounded-xl overflow-hidden select-none cursor-ew-resize bg-neutral-900 border border-neutral-800 shadow-inner"
            >
              {/* "After" Full Image Layer (Right / Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={currentCase.afterImg}
                  alt={currentCase.afterLabel}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] font-semibold text-amber-300">
                  {currentCase.afterLabel} ✨
                </div>
              </div>

              {/* "Before" Clipped Image Layer (Left) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={currentCase.beforeImg}
                    alt={currentCase.beforeLabel}
                    referrerPolicy="no-referrer"
                    style={{
                      // For memory revival, simulate vintage aged sepia/grayscale and soft blur
                      filter: currentCase.id === 'memory' 
                        ? 'grayscale(100%) sepia(45%) contrast(85%) brightness(90%)' 
                        : 'grayscale(50%) contrast(75%) brightness(85%) blur(1px)',
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-neutral-950/15" />
                </div>
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] font-medium text-neutral-300">
                  {currentCase.beforeLabel}
                </div>
              </div>

              {/* Central Divider Line and Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-amber-400 z-20 pointer-events-none shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-lg border-2 border-neutral-950 cursor-ew-resize">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Slider Instructions and Explanatory note */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 shrink-0" />
                <span><strong className="text-neutral-300">Бастапқы күйі:</strong> {currentCase.beforeDesc}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong className="text-amber-300">AI нәтижесі:</strong> {currentCase.afterDesc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
