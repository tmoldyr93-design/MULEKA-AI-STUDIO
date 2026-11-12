import React, { useState } from 'react';
import { Calculator, MessageCircle, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO } from '../data/portfolioData';

interface OrderCalculatorProps {
  initialServiceId?: string;
}

export const OrderCalculator: React.FC<OrderCalculatorProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES_LIST[0].id
  );
  const [volumeIndex, setVolumeIndex] = useState<number>(1); // 0 = basic, 1 = standard, 2 = premium
  const [isUrgent, setIsUrgent] = useState<boolean>(false); // 24-hour fast delivery
  const [withVoiceover, setWithVoiceover] = useState<boolean>(false); // AI voice cloning/music

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  // Base pricing logic (in KZT)
  const basePrices: Record<string, number> = {
    business_ad: 14990,
    ai_photoshoot: 7990,
    birthday_greetings: 9990,
    wedding_lovestory: 19990,
    memory_revival: 5990,
    family_series: 24990,
    social_content: 17990,
    banners_covers: 4990,
  };

  const volumeMultipliers = [0.8, 1.2, 1.8];
  const volumeLabels: Record<string, string[]> = {
    ai_photoshoot: ['5 фото (1 образ)', '12 фото (2-3 образ)', '25 фото (5 образдар топтамасы)'],
    business_ad: ['15 сек (Reels)', '30 сек (Толық ролик + субтитр)', '60 сек (Кеңейтілген промо)'],
    birthday_greetings: ['1 минуттық құттықтау', '2-3 минуттық естелік', '5 минуттық мини-фильм'],
    wedding_lovestory: ['1.5 мин (Махаббат хикаясы)', '3 мин (Толық үйлену тарихы)', '5 мин (Банкет экранына арналған кино)'],
    memory_revival: ['1 фотоны бояу & жандандыру', '3 фото топтамасы', '5+ фотодан тұратын естелік клип'],
    family_series: ['2 сериялы шағын хикая', '4 сериялы отбасы эпосы', 'Толық хроника (6 серия)'],
    social_content: ['3 Reels / TikTok', '7 Reels / TikTok', '15 Reels айлық контент'],
    banners_covers: ['2 баннер / обложка', '5 креативтер топтамасы', '10 таргет-креатив'],
  };

  const currentVolumeLabels = volumeLabels[selectedServiceId] || ['Шағын көлем', 'Орташа стандарт', 'Толық топтама'];

  const base = basePrices[selectedServiceId] || 10000;
  let totalPrice = Math.round(base * volumeMultipliers[volumeIndex]);

  if (isUrgent) totalPrice += 3000;
  if (withVoiceover) totalPrice += 2500;

  const getWhatsAppMessage = () => {
    const text = `Сәлеметсіз бе, Мөлдір! Мен сайттағы калькулятормен мына тапсырысты есептедім:
📌 Қызмет: ${selectedService.title}
📦 Көлемі: ${currentVolumeLabels[volumeIndex]}
⚡ Мерзімі: ${isUrgent ? 'Шұғыл (24 сағат ішінде)' : 'Стандартты (1-2 күн)'}
${withVoiceover ? '🎙 Қазақша дауыс / саундтрек: Қосылған' : ''}
💰 Есептелген шамамен баға: ${totalPrice.toLocaleString()} ₸

Осы тапсырысты нақтылап, фотоларды қайда жіберейін?`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Интерактивті баға есептеу</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Тапсырыс құнын онлайн есептеңіз
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Қызметті және қажетті көлемді таңдаңыз — нақты құнын бірден көріп, дайын өтінімді бір кликпен WhatsApp-қа жіберіңіз.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Side */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Select Service */}
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-2">
                  1. Қызмет түрі:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Select Volume / Duration */}
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-2">
                  2. Жұмыс көлемі немесе ұзақтығы:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {currentVolumeLabels.map((label, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setVolumeIndex(idx)}
                      className={`px-4 py-2.5 text-xs text-left rounded-xl border transition-all flex items-center justify-between ${
                        volumeIndex === idx
                          ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span>{label}</span>
                      {volumeIndex === idx && <CheckCircle className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Add-ons & Urgency */}
              <div className="pt-2 border-t border-neutral-800 space-y-3">
                <label className="text-xs font-semibold text-neutral-300 block">
                  3. Қосымша мүмкіндіктер:
                </label>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUrgent(!isUrgent)}
                    className={`flex-1 p-3 text-xs rounded-xl border transition-all text-left flex items-start gap-2.5 ${
                      isUrgent
                        ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-medium'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <Clock className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <div>
                      <span className="block font-semibold text-white">Шұғыл әзірлеу</span>
                      <span className="text-[11px] text-neutral-400">24 сағат ішінде (+3 000 ₸)</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setWithVoiceover(!withVoiceover)}
                    className={`flex-1 p-3 text-xs rounded-xl border transition-all text-left flex items-start gap-2.5 ${
                      withVoiceover
                        ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-medium'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <div>
                      <span className="block font-semibold text-white">Қазақша дауыс / Lipsync</span>
                      <span className="text-[11px] text-neutral-400">Диктор және әуен (+2 500 ₸)</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Price Result Side */}
            <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                  Есептелген құны
                </span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                    {totalPrice.toLocaleString()} ₸
                  </span>
                  <span className="text-xs text-neutral-400">шамамен</span>
                </div>

                <div className="space-y-2 text-xs text-neutral-300 py-3 border-y border-neutral-800/80 mb-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Таңдалған қызмет:</span>
                    <span className="font-medium text-white text-right max-w-[180px] truncate">
                      {selectedService.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Көлемі:</span>
                    <span className="font-medium text-white">
                      {currentVolumeLabels[volumeIndex]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Әзірлеу уақыты:</span>
                    <span className="font-medium text-amber-300">
                      {isUrgent ? '24 сағат' : '1-2 күн'}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-400 leading-relaxed mb-4">
                  * Нақты баға фото мен талаптардың күрделілігіне қарай WhatsApp-та жеке бекітіледі. Мөлдірмен тікелей сөйлесу арқылы жеңілдіктер қарастырылған.
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>WhatsApp арқылы тапсырыс беру</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
