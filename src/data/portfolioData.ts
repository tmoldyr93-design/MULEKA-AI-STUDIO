export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
  recommendedFormat: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'business' | 'portrait' | 'wedding' | 'memory' | 'social';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  promptSample: string;
  tags: string[];
  durationOrPhotos: string;
  resolution: string;
}

export interface CoursePackage {
  id: string;
  title: string;
  badge: string;
  price: number;
  originalPrice: number;
  period: string;
  tagline: string;
  description: string;
  modules: {
    title: string;
    description: string;
    lessons: string[];
  }[];
  features: string[];
  bonus: string;
  targetAudience: string[];
  popular?: boolean;
}

export const STUDIO_INFO = {
  name: 'MULEKA AI STUDIO',
  creatorName: 'Мөлдір',
  role: 'AI-креатор & Визуал дизайнер',
  tagline: 'Сіздің идеяңыз — ерекше фото мен видео!',
  officialMotto: 'Жасанды интеллект. Шығармашылық. Нәтиже.',
  officialSubMotto: 'AI фото • Видео • Курстар',
  bio: 'Мен — Мөлдір, AI-креатормын. Жасанды интеллект арқылы жеке өзіңізге, бизнесіңізге және ерекше күндеріңізге арналған фото мен видео жасаймын. Өзім үйренген біліммен бөлісіп, AI үйренгісі келетіндерге курстар ұсынамын 💛',
  whatsappNumber: '77078889900', // standard Kazakh format
  instagramHandle: '@muleka.ai.studio',
  tiktokHandle: '@muleka.ai.studio',
  telegramHandle: '@muleka_ai',
  socialLinks: {
    whatsapp: 'https://wa.me/77078889900',
    instagram: 'https://instagram.com/muleka.ai.studio',
    tiktok: 'https://tiktok.com/@muleka.ai.studio',
    telegram: 'https://t.me/muleka_ai',
  },
  photoUrl: '/assets/aistudio/A3D2AB2C-00FA-479D-AFC6-45A8F1EFC4F7_82577cac.png',
  workingHours: '10:00 – 21:00 (күн сайын)',
  stats: [
    { value: '500+', label: 'Дайын AI жоба' },
    { value: '1-2 күн', label: 'Жылдам әзірлеу' },
    { value: '250+', label: 'Курс түлегі' },
    { value: '100%', label: 'Шынайы сапа' },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'business_ad',
    title: 'Бизнес пен өнімге арналған жарнамалық видео',
    subtitle: 'Commercial Ads & Product Motion',
    description: 'Өніміңізді кино деңгейіндегі 3D және AI эффектілерімен жарнамалаңыз. Қымбат түсірілім тобын жалдамай-ақ, халықаралық брендтер деңгейіндегі визуал алыңыз.',
    deliverables: ['15-30 сек жарнамалық ролик', 'Өнімді динамикалық 3D көрсету', 'Музыка & титрлер', 'Instagram & TikTok форматтары (9:16)'],
    startingPrice: '14 990 ₸',
    recommendedFormat: '9:16 (Reels/TikTok) және 16:9',
    iconName: 'Sparkles',
  },
  {
    id: 'ai_photoshoot',
    title: 'Өз бейнеңізбен AI-фотосессия',
    subtitle: 'Personal Lookbook & Editorial',
    description: 'Студияға бармай-ақ, кез келген образда (Vogue, Paris Fashion Week, қазақи ұлттық стиль, киберпанк) 10-20 кәсіби фотосессия топтамасын жасаңыз.',
    deliverables: ['10-15 дайын портреттік 4K фото', '3 түрлі стиль мен локация', 'Бет әлпеті мен табиғилығын 100% сақтау', 'Әлеуметтік желілерге дайын өлшем'],
    startingPrice: '7 990 ₸',
    recommendedFormat: '3:4 және 4:5 (Instagram)',
    iconName: 'Camera',
  },
  {
    id: 'birthday_greetings',
    title: 'Туған күн мен мерейтойға құттықтау роликтері',
    subtitle: 'Jubilee & Birthday Celebrations',
    description: 'Жақыныңызға көз жасын төгетіндей әсерлі, есте қалатын ерекше видео-құттықтау. Оның өмір жолын, армандары мен жарқын сәттерін көркем баяндаймыз.',
    deliverables: ['1-2 минуттық жүрек тебірентер ролик', 'Фотоларды хронологиялық реттеу', 'Қазақша мәнді диктор дауысы немесе ән', 'Жоғары Full HD/4K сапа'],
    startingPrice: '9 990 ₸',
    recommendedFormat: '9:16 немесе 16:9 экран үшін',
    iconName: 'Gift',
  },
  {
    id: 'wedding_lovestory',
    title: 'Ұзату, той және махаббат хикаясы',
    subtitle: 'Wedding, Uzatu & Love Story',
    description: 'Екі жастың танысу тарихы, балалық шағы мен ертегідей махаббат хикаясын кино сценарийі ретінде қайта жандандырамыз. Үлкен экранда көрсетуге дайын.',
    deliverables: ['Махаббат хикаясының анимациясы', 'Ұлттық нақыштағы көркем визуал', 'Романтикалық саундтрек', 'Банкет залының үлкен экранына арналған 4K видео'],
    startingPrice: '19 990 ₸',
    recommendedFormat: '16:9 (LED экрандарға арнайы)',
    iconName: 'Heart',
  },
  {
    id: 'memory_revival',
    title: 'Естелік фотоларды жандандыру',
    subtitle: 'Heritage & Vintage Animation',
    description: 'Ата-әжелеріңіздің, марқұм жақындарыңыздың немесе балалық шақтың көне ақ-қара суреттерін бояп, олардың көзін, жымиысын қайта жандандырып береміз.',
    deliverables: ['Ақ-қара фотоны түрлі-түсті ету', 'Бет әлпетіндегі қозғалыс пен жымиыс', 'Сапасын 4K деңгейіне көтеру', 'Сезімге толы әуенмен сүйемелдеу'],
    startingPrice: '5 990 ₸',
    recommendedFormat: '9:16 және 1:1',
    iconName: 'History',
  },
  {
    id: 'family_series',
    title: 'Отбасылық видео және AI-сериал',
    subtitle: 'Family Chronicles & Mini-Series',
    description: 'Отбасыңыздың тарихын көркем AI-кино немесе қысқа сериялар ретінде сақтаңыз. Ұрпақтан ұрпаққа жететін баға жетпес цифрлық мұрағат.',
    deliverables: ['3-5 қысқа сериялы шағын хикая', 'Отбасы мүшелерінің цифрлық аватарлары', 'Авторлық сценарий мен сюжет', 'Қазақша әдеби баяндау'],
    startingPrice: '24 990 ₸',
    recommendedFormat: '16:9 және 9:16',
    iconName: 'Film',
  },
  {
    id: 'social_content',
    title: 'Instagram, TikTok үшін контент',
    subtitle: 'Viral Reels & Shorts Production',
    description: 'Эксперттерге, блогерлерге және бизнес аккаунттарға қаралым жинайтын, вирустық өтуі жоғары трендті AI-бейнелер топтамасы.',
    deliverables: ['5-10 трендтегі дайын Reels/TikTok', 'Қызықты hook (ілгек) және субтитрлер', 'Динамикалық визуалды ауысулар', 'Идеялар мен сценарийлер тізімі'],
    startingPrice: '17 990 ₸',
    recommendedFormat: '9:16 тік формат',
    iconName: 'Share2',
  },
  {
    id: 'banners_covers',
    title: 'Баннер, обложка және жарнамалық суреттер',
    subtitle: 'Graphic Banners & Visual Covers',
    description: 'Таргетке арналған креативтер, YouTube обложкалары, курс бағдарламалары және әлеуметтік желілерді безендіруге арналған жарқын графика.',
    deliverables: ['Жоғары CTR жинайтын креативтер', 'Кез келген өлшем мен пропорция', 'Айқын маркетингтік мәтіндер', 'PSD/PNG түпнұсқа файлдар'],
    startingPrice: '4 990 ₸',
    recommendedFormat: '1:1, 4:5, 16:9, баннер өлшемдері',
    iconName: 'Layers',
  },
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'work_fashion',
    title: 'Қазақ ханымдарының заманауи Haute Couture образы',
    category: 'portrait',
    categoryLabel: 'AI-фотосессия',
    description: 'Ұлттық күміс әшекейлер мен минималистік қара көйлектің үйлесімі. Студиялық жұмсақ жарық пен Vogue эстетикасы.',
    imageUrl: '/src/assets/images/showcase_fashion_photoshoot_1794481501109.jpg',
    aspectRatio: '3:4',
    promptSample: 'High-fashion editorial AI photoshoot portrait of a beautiful Kazakh model in modern minimalist haute couture, Kazakh silver and turquoise jewelry, studio diffused lighting.',
    tags: ['Vogue Style', 'Қазақи нақыш', 'Портрет', '4K Ultra HD'],
    durationOrPhotos: '15 дайын фото',
    resolution: '3840 x 5120 px',
  },
  {
    id: 'work_business',
    title: 'Люкс парфюм мен сарысу өнімінің жарнамалық концепті',
    category: 'business',
    categoryLabel: 'Жарнамалық видео',
    description: 'Мрамор үстіндегі алтын реңкті флакон, су толқындарының динамикалық шағылысы және табиғи күн сәулесі.',
    imageUrl: '/src/assets/images/showcase_business_ad_1794481501099.jpg',
    aspectRatio: '4:3',
    promptSample: 'Cinematic commercial product advertisement photography of a luxury perfume and cosmetic bottle on polished marble surface with delicate floating liquid ripples and golden sunlight.',
    tags: ['Бизнеске жарнама', '3D Water Ripple', 'Премиум өнім', 'Reels дайын'],
    durationOrPhotos: '20 сек ролик + 5 креатив',
    resolution: '4K Commercial Grade',
  },
  {
    id: 'work_memory',
    title: '1957 жылғы отбасылық мұрағат фотосын жандандыру',
    category: 'memory',
    categoryLabel: 'Естелік жандандыру',
    description: 'Ескі әрі сызат түскен отбасылық фотосуретті бояп, жылы түстермен көркемдеп, әр адамның жылы жымиысын қозғалысқа келтіру.',
    imageUrl: '/src/assets/images/showcase_memory_revival_1794481503075.jpg',
    aspectRatio: '4:3',
    promptSample: 'Touching photo restoration: nostalgic vintage family portrait photograph revitalized into vivid lifelike colors and gentle atmospheric depth.',
    tags: ['Ұрпақтар сабақтастығы', 'Ата-анаға сыйлық', 'Эмоционалды', 'Түсті реставрация'],
    durationOrPhotos: '1 мин жанданған видео',
    resolution: 'Ultra Clarity AI',
  },
  {
    id: 'work_creator',
    title: 'Мөлдірдің креативті AI шеберханасы мен визуал процесі',
    category: 'social',
    categoryLabel: 'TikTok & Reels',
    description: 'AI құралдарының (Midjourney, Runway, Kling) күнделікті қолданысы және шығармашылық идеяларды жүзеге асыру процесі.',
    imageUrl: '/src/assets/images/muleka_hero_creator_1794481501320.jpg',
    aspectRatio: '16:9',
    promptSample: 'Cinematic warm editorial portrait of a stylish modern young Kazakh woman AI digital creator named Moldir in her creative design studio, warm ambient amber light.',
    tags: ['AI шеберханасы', 'Курстар', 'Креатив', 'Backstage'],
    durationOrPhotos: 'Курс материалы',
    resolution: '4K Studio Quality',
  },
];

export const COURSE_PACKAGES: CoursePackage[] = [
  {
    id: 'course_starter',
    title: 'Бастапқы AI-Креатор',
    badge: '📚 Жылдам бастау',
    price: 4999,
    originalPrice: 12900,
    period: 'Бір реттік төлем / Толық қолжетімділік',
    tagline: 'Нөлден бастап өз фотоңыздан кәсіби AI-суреттер жасап үйреніңіз!',
    description: 'Жасанды интеллект әлеміне алғашқы сенімді қадам. Ешқандай бағдарламалау немесе күрделі дизайн дағдылары қажет емес — тек смартфон мен идеяңыз болса жеткілікті.',
    modules: [
      {
        title: '1-Модуль: Нейрожүйелерге кіріспе',
        description: 'AI құралдарын таңдау, тегін және ақылы мүмкіндіктер, телефонда баптау.',
        lessons: ['Midjourney және баламалары қалай жұмыс істейді?', 'Дұрыс промпт (сұраныс) құрастыру формуласы', 'Стильдер, жарық және камера бұрыштарын басқару'],
      },
      {
        title: '2-Модуль: Өз бейнеңізбен AI-фотосессия',
        description: 'Өз селфиіңізді пайдаланып, танымал журналдардың мұқабасындағыдай образдар жасау.',
        lessons: ['Бет әлпетін 100% дәл сақтау әдістері', 'Қазақи ұлттық стиль, классика және street style образдар', 'Фотоларды смартфонда өңдеу және ретушь'],
      },
      {
        title: '3-Модуль: Тәжірибе және алғашқы нәтиже',
        description: 'Өзіңіздің алғашқы портфолиоңызды жасап шығу.',
        lessons: ['Дайын 50+ промпт үлгілері', 'Қателіктермен жұмыс', 'Жабық сұрақ-жауап чатына қосылу'],
      },
    ],
    features: [
      '3 практикалық бейне модуль',
      '50+ дайын қазақша және ағылшынша промпттар жинағы',
      'Смартфонда өңдеуге арналған арнайы пресеттер',
      'Жабық Telegram қауымдастығына өмірлік қолжетімділік',
      'Курсты аяқтаған соң ресми электронды сертификат',
    ],
    bonus: '🎁 Бонус: "Instagram үшін визуалды лента құру" мини-нұсқаулығы',
    targetAudience: [
      'Өзіне әдемі фотолар жасағысы келетін қыз-келіншектерге',
      'Әлеуметтік желісін жандандырғысы келетін жандарға',
      'AI әлемімен жаңадан танысып жүргендерге',
    ],
  },
  {
    id: 'course_pro',
    title: 'Кәсіби AI-Про & Монетизация',
    badge: '🎓 Ең танымал таңдау',
    popular: true,
    price: 9990,
    originalPrice: 24900,
    period: 'Бір реттік төлем / Толық қолжетімділік + Кері байланыс',
    tagline: 'Видео жандандыру, қазақша дауыс клондау және тапсырыс қабылдап ақша табу!',
    description: 'Жай ғана фото емес, қозғалатын видео, жарнамалық роликтер, эмоциялы құттықтаулар жасап, AI-креатор ретінде табыс табудың толық жүйесі.',
    modules: [
      {
        title: '1-Блок: Бастапқы деңгей толық кіреді',
        description: '4 999 ₸ пакетінің барлық фото генерация сабақтары.',
        lessons: ['Нейрожүйелер базасы', 'Мінсіз промптинг', 'Аватарлар мен фотосессия'],
      },
      {
        title: '2-Блок: Фотоларды видеоға айналдыру & Анимация',
        description: 'Kling, Runway Gen-3, Luma Dream Machine құралдарымен жұмыс.',
        lessons: ['Суретті динамикалық киноға айналдыру құпиясы', 'Камера траекториясын (pan, zoom, tilt) дәл баптау', 'Ескі естелік фотоларды тірілту және жымиту'],
      },
      {
        title: '3-Блок: Дыбыс, Музыка & Қазақша Дауыс',
        description: 'AI арқылы сапалы диктор дауысын қою және сөйлету.',
        lessons: ['Дауысты клондау (Voice cloning) әдістері', 'Ерін қимылын дыбысқа сәйкестендіру (Lipsync)', 'Авторлық құқықсыз кинематографиялық әуен жазу'],
      },
      {
        title: '4-Блок: Бизнеске жарнама және Монетизация',
        description: 'Жарнамалық өнім видеоларын сату және алғашқы тапсырыстарды алу.',
        lessons: ['Тапсырыс берушіні табу (WhatsApp, Instagram, шағын бизнес)', 'Баға саясатын дұрыс қою және чекті көтеру', 'Клиентпен келісімшарт және уақытында тапсыру'],
      },
    ],
    features: [
      '4 999 ₸ пакетінің барлық мүмкіндіктері',
      'Видео генерациялаудың 4 заманауи құралы (Kling, Runway, т.б.)',
      'Қазақ тіліндегі дауыс клондау және аудио сабақтары',
      'Ескі фотоларды тірілтудің толық авторлық әдістемесі',
      '150+ премиум коммерциялық промпттар каталогы',
      'Мөлдірден үй тапсырмаларына жеке кері байланыс (Zoom/Telegram)',
      'Алғашқы тапсырысты табуға көмектесетін скрипттер мен прайс-шаблон',
    ],
    bonus: '🔥 VIP Бонус: 1 айлық VIP Mastermind чаты + Мөлдірдің жеке консультациясы',
    targetAudience: [
      'Фрилансерлер мен контент-мейкерлерге',
      'SMM-мамандар мен мобилографтарға',
      'Бизнесі бар және жарнамаға ақша үнемдегісі келетіндерге',
      'Қосымша табыс тапқысы келетін кез келген жанға',
    ],
  },
];

export const ORDER_STEPS = [
  {
    step: '01',
    title: 'Қандай жұмыс қажет екенін жазасыз',
    description: 'Қызмет түрін таңдап (фотосессия, видео, құттықтау, реставрация), қалауыңыз бен идеяңызды айтасыз.',
  },
  {
    step: '02',
    title: 'Фотоңызды және ұнаған үлгіңізді жібересіз',
    description: 'WhatsApp арқылы бірнеше сапалы фотоңызды немесе көне суретті, сондай-ақ үлгі референстерді жолдайсыз.',
  },
  {
    step: '03',
    title: 'Бағасы мен мерзімін келісеміз',
    description: 'Жұмыстың көлеміне қарай нақты баға мен дайын болатын уақытты (әдетте 1-2 күн) бекітеміз.',
  },
  {
    step: '04',
    title: 'Дайын фото немесе видеоңызды аласыз!',
    description: 'Нәтижені жоғары 4K сапада қабылдап, қажет болса ұсақ түзетулерді бірге реттейміз.',
  },
];

export const CREATIVE_IDEA_TEMPLATES = [
  {
    category: 'business',
    label: 'Бизнес & Өнім',
    scenario: 'Премиум өнімнің кинематографиялық 3D жарнамасы',
    description: 'Тауарыңыз (косметика, сағат, киім, тағам) футуристік табиғат немесе люкс студия аясында баяу қалқып шығып, жарық сәулелерімен жарқырайды. Соңында бренд логотипі мен ұран шығады.',
    promptIdea: 'Cinematic commercial video of [өнім атауы] rotating smoothly on obsidian stone, ambient golden backlight, microscopic splash particles, luxury aesthetics 4K.',
  },
  {
    category: 'wedding',
    label: 'Ұзату & Той',
    scenario: 'Махаббат хикаясы: Көне қазақ даласынан қазіргі заманға дейін',
    description: 'Жас жұбайлар алдымен ерте замандағы батыр мен ару кейпінде, содан соң заманауи Алматы көшелерінде кездесіп, махаббаттарының мәңгілік екені суреттеледі.',
    promptIdea: 'Romantic cinematic love story of young Kazakh couple, ethereal sunset over Almaty mountains, transitioning from traditional nomadic attire to modern black-tie romance.',
  },
  {
    category: 'birthday',
    label: 'Туған күн & Мерейтой',
    scenario: 'Өмір белестері: "Бақытты ана мен аяулы әже"',
    description: 'Мерейтой иесінің балалық шағынан бүгінгі күнге дейінгі ең маңызды сәттері, балалары мен немерелерінің құшағындағы бақыты жылы қазақша монологпен көрсетіледі.',
    promptIdea: 'Touching emotional family tribute video celebrating 60th jubilee of beloved Kazakh mother, warm golden nostalgic atmosphere, gentle smile, heartwarming music.',
  },
  {
    category: 'memory',
    label: 'Естелік фото жандандыру',
    scenario: 'Бабалар аманаты: Көне фотоның жандануы',
    description: 'Үйдегі 50 жылдық ескі фото сурет біртіндеп түске толып, атамыз бен әжеміз камераға қарап жымиып, басын изейді. Сезімге толы әсерлі естелік.',
    promptIdea: 'Revival of 1960s black and white vintage Kazakh family photo, turning into rich natural colors, gentle breathing motion and affectionate smile, studio lighting.',
  },
  {
    category: 'portrait',
    label: 'AI-Фотосессия',
    scenario: 'Париждегі қазақ ханшайымы (High-Fashion Lookbook)',
    description: 'Қазақтың сәукелесі немесе күміс білезігі заманауи Dior немесе Chanel стиліндегі сән апталығының басты назарына айналады.',
    promptIdea: 'High-fashion editorial portrait of Kazakh woman in Paris Fashion Week, haute couture cape with traditional silver filigree ornament, soft twilight illumination.',
  },
];
