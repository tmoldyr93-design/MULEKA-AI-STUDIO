import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, MessageCircle, User, RefreshCw, ChevronDown } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const PRESET_QUESTIONS = [
  'Курс пакеттері қандай? (4 999 ₸ / 9 990 ₸)',
  'AI-фотосессияға қалай тапсырыс беремін?',
  'Ескі фотоларды жандандыру бағасы қанша?',
  'Мөлдірмен WhatsApp арқылы қалай байланысамын?',
];

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_1',
      role: 'assistant',
      text: `Сәлеметсіз бе! Мен — Muleka AI Studio көмекшісімін ✨. 

Мөлдірдің AI-фотосессиялары, жарнамалық роликтері немесе 4 999 ₸ / 9 990 ₸ курс пакеттері туралы сұрағыңыз болса, жауап беруге дайынмын. Сізге қалай көмектесе аламын?`,
      timestamp: 'Дәл қазір',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-4).map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('API сұранысы қатемен аяқталды');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        text: data.reply || 'Сұрағыңыз қабылданды! Мөлдірдің WhatsApp нөміріне жазып, толығырақ талқылай аласыз.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Assistant error:', err);
      // Fallback response in Kazakh
      const fallbackMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        text: `Сұрағыңызды түсіндім! Мөлдірдің барлық қызметтері (AI фотосессия, жарнама, курстар) бойынша нақты мәліметті тікелей WhatsApp арқылы алу оңайырақ. Төмендегі «WhatsApp-қа жазу» батырмасын басып, хабарлама жібере аласыз 💛`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const getWhatsAppForAssistantChat = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
    const questionText = lastUserMsg ? lastUserMsg.text : 'Сәлеметсіз бе, Мөлдір! Сұрағым бар еді.';
    const text = `Сәлеметсіз бе, Мөлдір! Muleka AI сайтынан ассистентпен сөйлесіп едім, мына сұрақ бойынша нақтылағым келеді:
"${questionText}"`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Floating Trigger Button (when closed) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="AI Ассистентті ашу"
          className="fixed bottom-22 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-neutral-900 border border-amber-400/50 hover:border-amber-400 text-white shadow-xl hover:shadow-amber-500/15 transition-all group active:scale-95"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-300">
            AI Ассистент
          </span>
        </button>
      )}

      {/* Assistant Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[640px] h-[85vh] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="px-5 py-4 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Muleka AI Көмекшісі</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold">
                    Онлайн
                  </span>
                </h3>
                <p className="text-[11px] text-neutral-400">
                  Мөлдірдің студиясы мен курстары бойынша кеңесші
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Жабу"
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-amber-400 text-neutral-950 font-medium rounded-tr-sm'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1.5 ${
                      msg.role === 'user' ? 'text-neutral-800 text-right' : 'text-neutral-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-neutral-400 p-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                <span>Жауап дайындалуда...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Prompts */}
          <div className="p-2 border-t border-neutral-800/80 bg-neutral-900/40 overflow-x-auto">
            <div className="flex gap-1.5 no-scrollbar">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-300 hover:border-amber-400/40 whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Direct WhatsApp Bridge */}
          <div className="p-3 border-t border-neutral-800 bg-neutral-900/80 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Сұрағыңызды қазақша жазыңыз..."
                className="flex-1 px-3.5 py-2.5 text-xs rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                aria-label="Жіберу"
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-400">
              <span>Мөлдірге жеке жазу:</span>
              <a
                href={getWhatsAppForAssistantChat()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp-та жалғастыру</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
