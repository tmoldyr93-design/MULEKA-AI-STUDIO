import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // Initialize Gemini AI Client on server-side
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // System instructions for Muleka AI Studio Assistant
  const SYSTEM_INSTRUCTION = `
Сіз — MULEKA AI STUDIO студиясының (негізін қалаушы — Мөлдір, AI-креатор) ресми қазақтілді ассистентісіз.
Студия туралы мәлімет:
- Негізін қалаушы: Мөлдір, AI-креатор, Алматы.
- Басты ұран: "Жасанды интеллект. Шығармашылық. Нәтиже."
- Бағыттар: 
  1. Өз бейнеңізбен AI-фотосессия (7 990 ₸ басталады, 10-15 дайын 4K фото, 3 стиль, бет әлпеті 100% сақталады)
  2. Бизнес пен өнімге арналған жарнамалық видео (14 990 ₸ басталады, 3D өнім эффектілері, Reels/TikTok)
  3. Туған күн мен мерейтойға құттықтау роликтері (9 990 ₸ басталады, жүрек тебірентерлік видео)
  4. Ұзату, той және махаббат хикаясы (19 990 ₸ басталады, үлкен LED экранға арналған 4K видео)
  5. Естелік фотоларды жандандыру & бояу (5 990 ₸ басталады, ақ-қара көне фотоларды қозғалту, жымиту)
  6. Отбасылық видео және AI-сериал (24 990 ₸ басталады)
  7. Instagram, TikTok үшін контент (17 990 ₸ басталады)
  8. Баннер, обложка және таргет суреттер (4 990 ₸ басталады)
- Курстар:
  - 📚 4 999 ₸ пакеті: "Бастапқы AI-Креатор" (Midjourney базасы, фотогенерация, промптинг, смартфонда өңдеу, Telegram чат, сертификат)
  - 🎓 9 990 ₸ пакеті: "Кәсіби AI-Про & Монетизация" (видео жандандыру Kling/Runway, қазақша дауыс клондау, жарнама жасау, клиент табу, Мөлдірден жеке кері байланыс)
- Тапсырыс беру процесі:
  1. WhatsApp-қа қандай жұмыс қажет екенін жазасыз.
  2. Фотоңызды және үлгіні жібересіз.
  3. Бағасы мен мерзімін келісеміз (1-2 күнде дайын).
  4. Дайын 4K фото немесе видеоңызды аласыз!
- Тікелей байланыс: WhatsApp +7 (707) 888-99-00, Instagram @muleka.ai.studio.

Міндетіңіз: Пайдаланушыларға қазақ тілінде жылы, сыпайы, нақты және шабыттандыратын жауап беріңіз. Бағалар мен бағдарламаларды түсіндіріп, тапсырысты бекіту үшін Мөлдірдің WhatsApp-ына жазуға шақырыңыз.
`;

  // Assistant Chat API endpoint
  app.post('/api/assistant', async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Хабарлама мәтіні қажет' });
        return;
      }

      // If Gemini client is configured
      if (ai) {
        try {
          const contents = [
            ...(history && Array.isArray(history)
              ? history.map((h: { role: string; text: string }) => ({
                  role: h.role === 'user' ? 'user' : 'model',
                  parts: [{ text: h.text }],
                }))
              : []),
            { role: 'user', parts: [{ text: message }] },
          ];

          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
            },
          });

          const replyText = response.text || 'Сұрағыңызды қабылдадым. Мөлдірмен WhatsApp арқылы тікелей байланысып, толығырақ талқылай аласыз!';
          res.json({ reply: replyText });
          return;
        } catch (genError) {
          console.error('Gemini generation error, using fallback:', genError);
        }
      }

      // Intelligent Fallback Knowledge Engine (Kazakh)
      const lower = message.toLowerCase();
      let fallbackReply = 'Сәлеметсіз бе! Мен Muleka AI Studio ассистентімін. ';

      if (lower.includes('курс') || lower.includes('оқу') || lower.includes('пакет') || lower.includes('үйрен')) {
        fallbackReply += `Бізде екі негізгі курс пакеті бар:\n\n📚 **4 999 ₸ пакеті:** Смартфон арқылы Midjourney мен нейрожүйелерді нөлден меңгеру, өз селфиіңізден керемет AI-фотосессия жасау және өңдеу құпиялары.\n\n🎓 **9 990 ₸ пакеті:** Кәсіби деңгей! Видео генерациялау (Kling, Runway), қазақша дауыс клондау, ескі фотоларды жандандыру және тапсырыс қабылдап ақша табу жүйесі.\n\nМөлдірдің WhatsApp-ына жазып, бүгін бастауға болады!`;
      } else if (lower.includes('баға') || lower.includes('қанша') || lower.includes('прайс') || lower.includes('құн')) {
        fallbackReply += `Қызметтердің бастапқы бағалары:\n• AI-фотосессия — 7 990 ₸ басталады\n• Жарнамалық видео — 14 990 ₸ басталады\n• Ескі фотоны жандандыру — 5 990 ₸ басталады\n• Құттықтау роликтері — 9 990 ₸ басталады\n• Той & Ұзату — 19 990 ₸ басталады.\n\nДәл қазір сайттағы калькулятормен бағаны есептеп, WhatsApp-қа өтінім жібере аласыз!`;
      } else if (lower.includes('ватсап') || lower.includes('whatsapp') || lower.includes('номер') || lower.includes('телефон') || lower.includes('байланыс')) {
        fallbackReply += `Мөлдірдің тікелей WhatsApp нөмірі: +7 707 888 9900. Төмендегі немесе экрандағы жасыл «WhatsApp-қа жазу» батырмасын бассаңыз, дайын хабарлама бірден ашылады!`;
      } else if (lower.includes('ескі фото') || lower.includes('жандандыру') || lower.includes('бояу') || lower.includes('ата') || lower.includes('әже')) {
        fallbackReply += `Иә, біз көне ақ-қара, сызат түскен немесе бұлыңғыр суреттерді 4K сапада бояп, бет-әлпетіндегі жымиыс пен сезімді қозғалысқа келтіреміз (жандандырамыз). WhatsApp-қа фотоны жіберсеңіз, Мөлдір 1-2 күнде дайындап береді!`;
      } else {
        fallbackReply += `Мөлдір жасанды интеллект арқылы жеке өзіңізге, бизнесіңізге және ерекше күндеріңізге арналған фото мен видео жасайды, сондай-ақ AI курстарын оқытады. Сұрағыңыз бойынша нақты кеңес алу үшін Мөлдірдің WhatsApp-ына тікелей жаза аласыз!`;
      }

      res.json({ reply: fallbackReply });
    } catch (err: any) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Серверде қате орын алды' });
    }
  });

  // Setup Vite middleware in dev or static files in prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Muleka AI Studio server running on port ${port}`);
  });
}

startServer();
