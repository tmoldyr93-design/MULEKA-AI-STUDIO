import React, { useState } from 'react';
import { 
  GraduationCap, Check, Sparkles, BookOpen, ChevronDown, ChevronUp, 
  MessageCircle, Users, Award, ShieldAlert, ArrowRight 
} from 'lucide-react';
import { COURSE_PACKAGES, CoursePackage, STUDIO_INFO } from '../data/portfolioData';

export const CoursesSection: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course_pro');
  const [expandedModule, setExpandedModule] = useState<string | null>('1-Блок: Бастапқы деңгей толық кіреді');

  const activeCourse = COURSE_PACKAGES.find((c) => c.id === selectedCourseId) || COURSE_PACKAGES[1];

  const getWhatsAppForCourse = (pkg: CoursePackage) => {
    const text = `Сәлеметсіз бе, Мөлдір! Мен "${pkg.title}" (${pkg.price.toLocaleString()} ₸) AI-курс пакетіне жазылғым келеді. Бағдарламасы мен төлем жайын білсем бола ма?`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="courses" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>AI Оқыту & Шеберлік сабақтары</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Өзіңіз фото мен видео жасауды үйренгіңіз келе ме?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            AI курстарымның бірін таңдап, шығармашылыққа алғашқы қадамыңызды жасаңыз! Мөлдірден тікелей үйреніп, смартфон арқылы кез келген шедеврді жасаңыз.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {COURSE_PACKAGES.map((pkg) => {
            const isSelected = selectedCourseId === pkg.id;
            const isPro = pkg.id === 'course_pro';

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedCourseId(pkg.id)}
                className={`cursor-pointer relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-200 ${
                  isPro
                    ? 'bg-neutral-900 border-2 border-amber-400/90 shadow-xl shadow-amber-500/10'
                    : 'bg-neutral-950 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular badge */}
                {isPro && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-bold shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-amber-400">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-neutral-400 line-through tabular-nums">
                      {pkg.originalPrice.toLocaleString()} ₸
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
                      {pkg.price.toLocaleString()} ₸
                    </span>
                    <span className="text-xs text-neutral-400">
                      / бір реттік төлем
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus callout */}
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300 mb-6">
                    {pkg.bonus}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppForCourse(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isPro
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-md shadow-amber-500/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Осы пакетті таңдау (WhatsApp)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Curriculum Explorer */}
        <div className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold text-amber-400 mb-1">
                Курс бағдарламасын толық көру
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                «{activeCourse.title}» сабақтарының мазмұны
              </h3>
            </div>

            {/* Quick Switcher */}
            <div className="flex items-center gap-2">
              {COURSE_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedCourseId(pkg.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    selectedCourseId === pkg.id
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-white bg-neutral-900'
                  }`}
                >
                  {pkg.price.toLocaleString()} ₸ пакеті
                </button>
              ))}
            </div>
          </div>

          {/* Module Accordion */}
          <div className="space-y-3 mb-8">
            {activeCourse.modules.map((mod) => {
              const isOpen = expandedModule === mod.title;
              return (
                <div
                  key={mod.title}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedModule(isOpen ? null : mod.title)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-900 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {mod.description}
                      </p>
                    </div>
                    <div className="text-neutral-400 pl-4">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-1 bg-neutral-950/40 border-t border-neutral-800/80">
                      <ul className="space-y-2">
                        {mod.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Target Audience & Guarantee note */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-800 text-xs">
            <div>
              <h5 className="font-semibold text-white mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Бұл курс кімдерге арналған?</span>
              </h5>
              <ul className="space-y-1.5 text-neutral-400">
                {activeCourse.targetAudience.map((aud, aIdx) => (
                  <li key={aIdx}>• {aud}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Оқу форматы & Мүмкіндіктер</span>
              </h5>
              <p className="text-neutral-400 leading-relaxed">
                Сабақтар алдын-ала жазылған бейне форматта + практикалық тапсырмалар. Өзіңізге ыңғайлы кез келген уақытта телефоннан немесе компьютерден көре аласыз.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
