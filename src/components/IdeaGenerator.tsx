import React, { useState } from 'react';
import { Sparkles, Send, Lightbulb, RefreshCw, Copy, Check, MessageCircle, Wand2 } from 'lucide-react';
import { CREATIVE_IDEA_TEMPLATES, STUDIO_INFO } from '../data/portfolioData';

export const IdeaGenerator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('business');
  const [userCustomDetail, setUserCustomDetail] = useState<string>('');
  const [generatedIdea, setGeneratedIdea] = useState<typeof CREATIVE_IDEA_TEMPLATES[0] | null>(
    CREATIVE_IDEA_TEMPLATES[0]
  );
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'business', label: 'Бизнес & Өнім' },
    { id: 'wedding', label: 'Ұзату & Той' },
    { id: 'birthday', label: 'Туған күн & Мерейтой' },
    { id: 'memory', label: 'Естелік фото жандандыру' },
    { id: 'portrait', label: 'AI-Фотосессия' },
  ];

  const quickExamples: Record<string, string[]> = {
    business: ['Косметика мен крем', 'Ұлттық киім дүкені', 'Кофехана жарнамасы', 'Зергерлік бұйымдар'],
    wedding: ['Екі жастың танысу хикаясы', 'Қыз ұзатуға сыңсу видеосы', 'Махаббат хикаясы Алматыда'],
    birthday: ['Анама 60 жас құттықтау', 'Әкеме мерейтойлық бейне', 'Баланың 1 жас тұсаукесері'],
    memory: ['Атамның 1960 жылғы фотосы', 'Әжемнің жас кезіндегі күлкісі', 'Ата-анамның жастық шағы'],
    portrait: ['Vogue сән апталығы', 'Қазақ даласының ханшайымы', 'Киберпанк Астана стилі'],
  };

  const handleGenerate = () => {
    const base = CREATIVE_IDEA_TEMPLATES.find((t) => t.category === selectedCategory) || CREATIVE_IDEA_TEMPLATES[0];
    
    // Customize based on user input
    let customScenario = base.scenario;
    let customDesc = base.description;
    let customPrompt = base.promptIdea;

    if (userCustomDetail.trim()) {
      customScenario = `${userCustomDetail.trim()} — авторлық концепт`;
      customDesc = `Тапсырыс берушінің қалауы: "${userCustomDetail.trim()}". ${base.description}`;
      customPrompt = base.promptIdea.replace(/\[өнім атауы\]/g, userCustomDetail.trim());
    }

    setGeneratedIdea({
      ...base,
      scenario: customScenario,
      description: customDesc,
      promptIdea: customPrompt,
    });
  };

  const handleCopyPrompt = () => {
    if (!generatedIdea) return;
    navigator.clipboard.writeText(generatedIdea.promptIdea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppIdeaLink = () => {
    if (!generatedIdea) return '#';
    const text = `Сәлеметсіз бе, Мөлдір! Мен сайттағы Идея генераторынан мынадай концепт ойластырдым:
📌 Бағыт: ${generatedIdea.label}
💡 Сюжет: ${generatedIdea.scenario}
📝 Толығырақ: ${generatedIdea.description}

Осы идеяны жүзеге асыру үшін бағасы мен мерзімін келіссек бола ма?`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="ideator" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Wand2 className="w-4 h-4" />
            <span>Шығармашылық идея лабораториясы</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Идеяңыз дайын болмаса да, бірге ойластырамыз!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Бағытты таңдап, бірнеше сөзбен қалауыңызды жазыңыз. Интеллектуалды генератор дайын сюжет пен визуал концептін ұсынады.
          </p>
        </div>

        {/* Generator Workspace */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6">
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-2">
                1. Бағытты таңдаңыз:
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setUserCustomDetail('');
                      const match = CREATIVE_IDEA_TEMPLATES.find((t) => t.category === cat.id);
                      if (match) setGeneratedIdea(match);
                    }}
                    className={`px-3.5 py-2.5 text-xs text-left font-medium rounded-xl border transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold shadow-sm'
                        : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-2">
                2. Өз ойыңыз немесе өнім атауы (міндетті емес):
              </label>
              <input
                type="text"
                value={userCustomDetail}
                onChange={(e) => setUserCustomDetail(e.target.value)}
                placeholder="Мысалы: Зергерлік сырға, анамның 65 жасы..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />

              {/* Quick suggestions */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {(quickExamples[selectedCategory] || []).map((ex, eIdx) => (
                  <button
                    key={eIdx}
                    onClick={() => setUserCustomDetail(ex)}
                    className="text-[11px] px-2 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
                  >
                    + {ex}
                  </button>
                ))}
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={handleGenerate}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 fill-neutral-950" />
              <span>Керемет AI-идея құрастыру</span>
            </button>
          </div>

          {/* Generated Result Preview */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between min-h-[360px]">
            {generatedIdea ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Lightbulb className="w-4 h-4" />
                    <span>Ұсынылған концепт ({generatedIdea.label})</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Дайын сценарий
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {generatedIdea.scenario}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {generatedIdea.description}
                  </p>
                </div>

                {/* Prompt Blueprint */}
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-neutral-400">
                      Техникалық AI промпты:
                    </span>
                    <button
                      onClick={handleCopyPrompt}
                      className="text-[11px] text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Көшірілді</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Көшіру</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 select-all leading-relaxed">
                    {generatedIdea.promptIdea}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppIdeaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                    <span>WhatsApp-қа осы идеямен жазу</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-neutral-500">
                <Lightbulb className="w-8 h-8 text-neutral-600 mb-2" />
                <p className="text-xs">Идея құрастыру үшін сол жақтағы батырманы басыңыз</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
