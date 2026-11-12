import React, { useState } from 'react';
import { MessageCircle, Instagram, Send, CheckCircle2, Phone, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, COURSE_PACKAGES, STUDIO_INFO } from '../data/portfolioData';

export const ContactForm: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('AI-фотосессия жасату');
  const [userMessage, setUserMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const topicOptions = [
    'Өз бейнеңізбен AI-фотосессия',
    'Бизнес пен өнімге арналған жарнамалық видео',
    'Туған күн мен мерейтойға құттықтау роликтері',
    'Ұзату, той және махаббат хикаясы',
    'Естелік фотоларды жандандыру & бояу',
    'Отбасылық видео және AI-сериал',
    'Instagram, TikTok үшін контент (Reels)',
    'Баннер, обложка және жарнамалық суреттер',
    '📚 4 999 ₸ курс пакетіне жазылу',
    '🎓 9 990 ₸ VIP курс пакетіне жазылу',
    'Жеке кеңес алу / Басқа сұрақ',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Сәлеметсіз бе, Мөлдір! Мен сайт арқылы тапсырыс өтінімін толтырдым:
👤 Аты-жөнім: ${userName || 'Тапсырыс беруші'}
📞 Байланыс нөмірім: ${userPhone || 'Көрсетілмеген'}
🎯 Қызықтырған бағыт: ${selectedTopic}
📝 Қосымша мәлімет: ${userMessage || 'Толығырақ WhatsApp-та талқылайық'}

Жұмысты бастау немесе кеңес алу үшін жазып тұрмын! ✨`;

    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct WhatsApp Lead Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <MessageCircle className="w-4 h-4" />
              <span>Тікелей байланыс формасы</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Мөлдірге тікелей тапсырыс жіберу
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 mb-6">
              Мәліметтерді толтырыңыз — «WhatsApp-қа жіберу» батырмасын басқанда, дайын сұраныс бірден Мөлдірдің WhatsApp чатына жолданады!
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-neutral-900 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Өтінішіңіз WhatsApp-қа бағытталды!
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                  Егер WhatsApp автоматты түрде ашылмаса, төмендегі батырманы қайта басуыңызға болады:
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-neutral-400 hover:text-white underline mr-4"
                  >
                    Жаңа өтінім толтыру
                  </button>
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
                    <span>WhatsApp-ты қайта ашу</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Аты-жөніңіз:
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Мысалы: Арайлым, Дәурен..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    WhatsApp немесе телефон нөміріңіз:
                  </label>
                  <input
                    type="tel"
                    required
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="+7 (707) 000-00-00"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Қандай қызмет немесе курс қажет?
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {topicOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Қосымша сұрағыңыз немесе идеяңыз (міндетті емес):
                  </label>
                  <textarea
                    rows={3}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Қашанға дейін дайын болу керек, қандай стиль қалайсыз..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all shadow-md shadow-amber-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-neutral-950" />
                  <span>WhatsApp-қа өтінім жіберу</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Social Networks & Official Profile */}
          <div className="lg:col-span-5 space-y-6">
            {/* Creator Photo Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-neutral-700 shrink-0">
                <img
                  src={STUDIO_INFO.photoUrl}
                  alt={STUDIO_INFO.creatorName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{STUDIO_INFO.creatorName}</span>
                  <span className="text-amber-400 text-xs">✨</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  {STUDIO_INFO.role} · {STUDIO_INFO.name}
                </p>
                <p className="text-[11px] text-amber-300 mt-1">
                  {STUDIO_INFO.officialMotto}
                </p>
              </div>
            </div>

            {/* Social Media Links Cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                Ресми әлеуметтік желілер
              </h4>

              {/* WhatsApp Card */}
              <a
                href={STUDIO_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5 fill-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp
                    </h5>
                    <p className="text-xs text-neutral-400">+7 707 888 9900 · Жылдам жауап</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Instagram Card */}
              <a
                href={STUDIO_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      Instagram
                    </h5>
                    <p className="text-xs text-neutral-400">{STUDIO_INFO.instagramHandle} · Жұмыстар & Stories</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-pink-400 transition-colors" />
              </a>

              {/* TikTok Card */}
              <a
                href={STUDIO_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    TT
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      TikTok
                    </h5>
                    <p className="text-xs text-neutral-400">{STUDIO_INFO.tiktokHandle} · Вирустық AI трендтер</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Telegram Card */}
              <a
                href={STUDIO_INFO.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-sky-500/50 hover:bg-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      Telegram
                    </h5>
                    <p className="text-xs text-neutral-400">{STUDIO_INFO.telegramHandle} · AI Жаңалықтар & Промпттар</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-sky-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
