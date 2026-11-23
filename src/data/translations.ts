export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    solutions: string;
    features: string;
    howItWorks: string;
    whyLogiq: string;
    testimonials: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watchDemo: string;
    trustedBy: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    mockup: {
      terminalTitle: string;
      onlineStatus: string;
      todaySales: string;
      currency: string;
      txCountSuffix: string;
      cashier: string;
      avgSpeed: string;
      recentTransactions: string;
      paid: string;
      sampleItem1: string;
      sampleItem2: string;
      sampleItem3: string;
      liveIndicator: string;
    };
  };
  socialProof: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    clientsCount: string;
    clientsLabel: string;
    transactionsVolume: string;
    volumeLabel: string;
    uptime: string;
    uptimeLabel: string;
    testimonials: Array<{
      name: string;
      role: string;
      business: string;
      city: string;
      quote: string;
      rating: number;
    }>;
  };
  solutions: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cardCta: string;
    items: Array<{
      id: string;
      title: string;
      tagline: string;
      description: string;
      accentColor: string;
      features: string[];
    }>;
  };
  features: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      badge?: string;
    }>;
  };
  howItWorks: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  whyLogiq: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    architectureBadge: string;
    pillars: Array<{
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
    }>;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    btnPrimary: string;
    btnWhatsapp: string;
    whatsappNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    solutionsTitle: string;
    contactTitle: string;
    copyright: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
    phone: string;
    email: string;
    address: string;
  };
  loginModal: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    rememberMe: string;
    forgotPassword: string;
    submitBtn: string;
    loggingIn: string;
    noAccount: string;
    contactSales: string;
    errorRequired: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    activityLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    closeBtn: string;
  };
  videoModal: {
    title: string;
    subtitle: string;
    close: string;
  };
}

export const translations: Record<'ar' | 'en', TranslationContent> = {
  ar: {
    meta: {
      title: 'لوجيك | Logiq — حلول ذكية متكاملة لكل نشاط تجاري',
      description: 'منظومة لوجيك الرقمية المتطورة — حلول ذكية متكاملة لإدارة المبيعات ونقاط البيع والمخازن للصيدليات، المحلات، الكافيهات، المخازن، والبلايستيشن.',
    },
    nav: {
      home: 'الرئيسية',
      solutions: 'الأنشطة والحلول',
      features: 'المميزات',
      howItWorks: 'كيف يعمل',
      whyLogiq: 'لماذا لوجيك',
      testimonials: 'آراء العملاء',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      getStarted: 'ابدأ الآن',
    },
    hero: {
      badge: 'الجيل الجديد من برامج إدارة الأعمال ونقاط البيع',
      titlePart1: 'حلول ذكية متكاملة',
      titleHighlight: 'لكل نشاط تجاري',
      titlePart2: 'بأعلى كفاءة وسرعة',
      subtitle: 'منظومة سحابية ومحلية حديثة مصممة لتبسيط إدارة المبيعات، المخازن، الفواتير الإلكترونية، والحسابات بدقة متناهية وسرعة فائقة.',
      ctaPrimary: 'ابدأ الآن مجاناً',
      ctaSecondary: 'استكشف الحلول',
      watchDemo: 'شاهد فيديو تعريفي (60 ثانية)',
      trustedBy: 'يثق بنا أكثر من 2,500 نشاط تجاري في مصر والشرق الأوسط',
      stat1Number: '99.9%',
      stat1Label: 'استقرار النظام وموثوقية البيانات',
      stat2Number: '3x',
      stat2Label: 'تسريع دورة المبيعات والكاشير',
      stat3Number: '24/7',
      stat3Label: 'دعم فني متواصل واحترافي',
      mockup: {
        terminalTitle: 'نظام نقاط البيع والكاشير المباشر',
        onlineStatus: 'متصل ومزامن لحظياً',
        todaySales: 'مبيعات اليوم',
        currency: 'ج.م',
        txCountSuffix: 'عملية بيع مكتملة',
        cashier: 'الكاشير: أحمد ر.',
        avgSpeed: 'متوسط 1.2 ثانية لكل فاتورة',
        recentTransactions: 'أحدث العمليات اللحظية',
        paid: 'مدفوع',
        sampleItem1: 'مستلزمات وعلاجات صيدلية',
        sampleItem2: 'طلب كافيه وضيافة فاخرة',
        sampleItem3: 'مشتريات تجزئة وملابس',
        liveIndicator: 'تحديث حي',
      },
    },
    socialProof: {
      badge: 'قصص نجاح وموثوقية مثبتة',
      title: 'يثق بنا رواد الأعمال',
      titleHighlight: 'في كافة المحافظات',
      subtitle: 'انضم لآلاف المتاجر والمؤسسات التي طوّرت أداءها ورفعت أرباحها مع منظومة Logiq.',
      clientsCount: '+2,500',
      clientsLabel: 'نشاط تجاري ومؤسسة نشطة',
      transactionsVolume: '+15M',
      volumeLabel: 'فاتورة ومعاملة سنوياً',
      uptime: '99.99%',
      uptimeLabel: 'جاهزية وسلاسة تشغيل',
      testimonials: [
        {
          name: 'د. طارق عبد الحميد',
          role: 'المدير العام',
          business: 'مجموعة صيدليات الأمل',
          city: 'القاهرة',
          quote: 'منظومة لوجيك حلت لنا تحدي جرد الأدوية وتواريخ الصلاحية تماماً. سرعة إصدار الروشتات والكاشير زادت بنسبة 300% والدعم الفني ممتاز.',
          rating: 5,
        },
        {
          name: 'م. كريم ممدوح',
          role: 'مؤسس ومدير العمليات',
          business: 'سلسلة كافيهات أورورا',
          city: 'الإسكندرية',
          quote: 'إدارة الطاولات والطلبات والربط بين المطبخ ونقاط الكاشير أصبحت في غاية السهولة. تقارير الأرباح والمخازن تظهر بضغطة زر وبدون أي تعقيد.',
          rating: 5,
        },
        {
          name: 'أ. محمود الشناوي',
          role: 'مدير المشتريات والتوزيع',
          business: 'مخازن الشروق للتجارة والتوزيع',
          city: 'طنطا',
          quote: 'الربط السحابي بين فروعنا ومخازننا المركزية منع أي عجز في البضائع أو تضارب في الأسعار. أفضل استثمار رقمي قمنا به لشركتنا.',
          rating: 5,
        },
      ],
    },
    solutions: {
      badge: 'مهما كان نشاطك التجاري',
      title: 'حلول مخصصة مصممة خصيصاً',
      titleHighlight: 'لطبيعة عملك',
      subtitle: 'سواء كنت تدير متجراً صغيراً أو سلسلة فروع كبرى، نوفر لك الأدوات الدقيقة التي يحتاجها قطاعك لتحقيق أقصى ربحية.',
      cardCta: 'طلب استشارة مخصصة للنشاط',
      items: [
        {
          id: 'pharmacy',
          title: 'صيدلية',
          tagline: 'إدارة أدوية وصلاحيات متكاملة',
          description: 'نظام متخصص للصيدليات يدعم باركود الأدوية، تواريخ الصلاحية، الجرد التلقائي، والربط مع شركات الأدوية وقوائم الأسعار الرسمية.',
          accentColor: '#34D6BA',
          features: ['تتبع تواريخ الصلاحية والبدائل', 'قراءة باركود الأدوية والروشتات', 'حسابات موردين ومطالبات تأمين'],
        },
        {
          id: 'warehouse',
          title: 'مخزن وتجارة جملة',
          tagline: 'تحكم مطلق في المخزون والتوريد',
          description: 'إدارة دقيقة لمستويات المخزون، أوامر التوريد، التنبيه بالنواقص، وأذونات الصرف والإضافة مع تقارير التكلفة اللحظية.',
          accentColor: '#F59E0B',
          features: ['تعدد المخازن ومواقع التخزين', 'جرد سريع بالباركود اللاسلكي', 'تنبيهات حد الطلب وحساب الأرباح'],
        },
        {
          id: 'retail',
          title: 'محل وتجارة تجزئة',
          tagline: 'سرعة كاشير وسلاسة في البيع',
          description: 'واجهة مبيعات فائقة السرعة للمحلات والسوبر ماركت ومتاجر الملابس مع دعم الميزان الإلكتروني وباركود الأوزان والعروض الترويجية.',
          accentColor: '#2BB8B3',
          features: ['نقاط بيع سريعة مع فواتير فورية', 'دعم الموازين وباركود الملابس', 'برامج ولاء وخصومات للعملاء'],
        },
        {
          id: 'cafe',
          title: 'كافيه ومطعم',
          tagline: 'إدارة طاولات ومطبخ احترافية',
          description: 'نظام تشغيل مرن للكافيهات والمطاعم يشمل إدارة الطاولات، شاشات المطبخ، الدليفري، وحساب تكلفة الوجبات وتتبع المكونات بدقة.',
          accentColor: '#F43F5E',
          features: ['خريطة طاولات وشاشات مطبخ KDS', 'إدارة الدليفري وتيك أواي والصالة', 'خصم تلقائي للمكونات من المخزن'],
        },
        {
          id: 'gaming',
          title: 'بلايستيشن ولاونج',
          tagline: 'حساب وقت وغرف بالدقيقة',
          description: 'حساب دقيق لوقت الأجهزة والغرف (Single / Multi)، ربط استهلاك البوفيه بكل جهاز تلقائياً، وإغلاق الجلسات بحسابات فورية.',
          accentColor: '#A855F7',
          features: ['عدادات وقت دقيقة بالدقيقة والثانية', 'دمج طلبات المشروبات مع الفاتورة', 'تحكم في أجهزة وشاشات الغرف'],
        },
        {
          id: 'center',
          title: 'سنتر تعليمي وأكاديمية',
          tagline: 'متابعة طلاب وحصص واشتراكات',
          description: 'إدارة المجموعات والمواعيد، تسجيل الحضور والانصراف بكروت الباركود، تحصيل الاشتراكات، وتقارير أرباح المدرسين والسنتر.',
          accentColor: '#10B981',
          features: ['حضور وانصراف الطلاب بالباركود', 'متابعة الاشتراكات والملازم والكتب', 'كشوف حساب دقيقة للمدرسين'],
        },
      ],
    },
    features: {
      badge: 'إمكانيات فائقة وموثوقة',
      title: 'كل ما تحتاجه لإدارة وتوسيع عملك',
      titleHighlight: 'في منصة واحدة',
      subtitle: 'صممت منظومة Logiq بمواصفات تقنية عالية لتضمن استقراراً كاملاً وسرعة تنفيذ حتى في أوقات الذروة.',
      items: [
        {
          id: 'easy-to-use',
          title: 'سهولة فائقة في الاستخدام',
          description: 'واجهات عصرية وواضحة تناسب أي مستخدم دون الحاجة لخبرة تقنية سابقة، مع تدريب سريع وسلس لفريق عملك.',
          badge: 'سريعة التعلم',
        },
        {
          id: 'powerful-management',
          title: 'إدارة شاملة وموحدة',
          description: 'إدارة المبيعات، المشتريات، المخازن، العملاء، والموردين في نظام واحد متكامل بدون الحاجة لعدة برامج متفرقة.',
          badge: 'كل شيء متصل',
        },
        {
          id: 'real-time-insights',
          title: 'تقارير وتحليلات لحظية',
          description: 'لوحات تحكم ذكية تعرض لك أرقام المبيعات، هوامش الربح، والمنتجات الأكثر طلباً في ثوانٍ معدودة من أي مكان.',
          badge: 'قرارات مبنية على أرقام',
        },
        {
          id: 'secure-reliable',
          title: 'أمان وموثوقية فائقة',
          description: 'حماية متقدمة للبيانات مع نسخ احتياطي دوري وتشفير كامل، والعمل في وضع عدم الاتصال (Offline) دون توقف.',
          badge: 'نسخ احتياطي فوري',
        },
        {
          id: 'scalable',
          title: 'قابلية غير محدودة للتوسع',
          description: 'سواء كنت تملك فرعاً واحداً أو خمسين فرعاً، يتوسع النظام معك بسلاسة تامة ويدعم تعدد نقاط البيع والمخازن.',
          badge: 'ينمو معك',
        },
        {
          id: 'modern-tech',
          title: 'تكنولوجيا عصرية متطورة',
          description: 'بناء تقني متين يتوافق مع الفاتورة الإلكترونية والربط مع الطابعات الحرارية وماكينات الدفع والباركود الحديث.',
          badge: 'متوافق مع الفاتورة الإلكترونية',
        },
      ],
    },
    howItWorks: {
      badge: 'خطوات بسيطة وسريعة',
      title: 'ابدأ إدارة مشروعك بنجاح',
      titleHighlight: 'خلال دقائق معدودة',
      subtitle: 'طريقك نحو تنظيم عملك وزيادة أرباحك أسهل مما تتوقع مع دعم ومتابعة كاملة من خبرائنا.',
      steps: [
        {
          number: '01',
          title: 'اختر باقتك ونشاطك',
          description: 'حدد نوع نشاطك التجاري من بين حلولنا المتخصصة لنقوم بتهيئة النظام المناسب لطبيعة متجرك.',
          detail: 'تهيئة مخصصة لكل قطاع',
        },
        {
          number: '02',
          title: 'اضبط إعداداتك ومخزونك',
          description: 'ارفع أصنافك بسهولة من خلال ملفات Excel أو استخدم قواعد بيانات الأصناف الجاهزة لدينا.',
          detail: 'استيراد سريع لقوائم الأصناف',
        },
        {
          number: '03',
          title: 'انطلق وضاعف أرباحك',
          description: 'ابدأ بالبيع وإصدار الفواتير فوراً وتابع نمو أعمالك وتقاريرك المالية من هاتفك أو جهازك.',
          detail: 'متابعة لحظية للأرباح',
        },
      ],
    },
    whyLogiq: {
      badge: 'القيمة المضافة لمشروعك',
      title: 'لماذا تختار منظومة',
      titleHighlight: 'Logiq لإدارة أعمالك؟',
      subtitle: 'لأننا لا نقدم مجرد برنامج كاشير، بل نبني لك شريكاً تكنولوجياً حقيقياً يحمي أرباحك ويوفر وقتك.',
      architectureBadge: 'بنية معمارية متطورة مصممة لتحمل الضغط العالي',
      pillars: [
        {
          title: 'إعداد فوري وتشغيل خلال دقائق',
          description: 'وفر أياماً من التعطيل؛ يبدأ نظامك في العمل بكامل كفاءته دون أي إجراءات معقدة أو تأخير.',
          metric: '5 دقائق',
          metricLabel: 'متوسط وقت تشغيل الكاشير',
        },
        {
          title: 'سرعة استجابة فائقة',
          description: 'استجابة لحظية لأوامر البحث والباركود وطباعة الفاتورة لتفادي أي طوابير انتظار أمام الكاشير.',
          metric: '1.2 ثانية',
          metricLabel: 'سرعة إنهاء وإصدار الفاتورة',
        },
        {
          title: 'دقة حسابات وجرد 100%',
          description: 'تطابق كامل بين حركة المخزن والمبيعات النقدية والإلكترونية للقضاء على أي عجز أو أخطاء حسابية.',
          metric: '100%',
          metricLabel: 'دقة الحسابات والتقارير',
        },
        {
          title: 'دعم فني وتدريب متواصل',
          description: 'فريق دعم هندسي محترف بجانبك دائماً لحل أي استفسار وضمان استمرارية نشاطك التجاري على مدار الساعة.',
          metric: '24/7',
          metricLabel: 'تغطية دعم فني واستجابة',
        },
      ],
    },
    cta: {
      badge: 'انضم إلى جيل الأعمال الجديد',
      title: 'جاهز لنقل مشروعك إلى مستوى جديد من الاحترافية؟',
      subtitle: 'تواصل معنا الآن لتجربة مجانية كاملة وتدريب مجاني على النظام مع فريق متخصص.',
      btnPrimary: 'طلب نسخة تجريبية مجانية',
      btnWhatsapp: 'تواصل واتساب مباشرة',
      whatsappNote: 'فريق المبيعات متاح الآن للرد السريع وتقديم العروض',
    },
    footer: {
      description: 'منظومة Logiq الرقمية — شريكك الموثوق في إدارة المبيعات والمخازن ونقاط البيع السحابية والمحلية بأحدث المعايير التكنولوجية.',
      quickLinks: 'روابط سريعة',
      solutionsTitle: 'الأنشطة المدعومة',
      contactTitle: 'تواصل معنا',
      copyright: 'جميع الحقوق محفوظة © 2026 منظومة Logiq الرقمية.',
      rightsReserved: 'تم التطوير لتوفير أعلى معايير الاستقرار والأداء.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      phone: '+20 100 000 0000',
      email: 'sales@logiq-eg.com',
      address: 'القاهرة، جمهورية مصر العربية',
    },
    loginModal: {
      title: 'تسجيل الدخول إلى حسابك',
      subtitle: 'أدخل بياناتك للوصول إلى لوحة تحكم Logiq',
      emailLabel: 'البريد الإلكتروني أو اسم المستخدم',
      emailPlaceholder: 'name@business.com',
      passwordLabel: 'كلمة المرور',
      passwordPlaceholder: '••••••••',
      rememberMe: 'تذكرني على هذا الجهاز',
      forgotPassword: 'نسيت كلمة المرور؟',
      submitBtn: 'دخول إلى النظام',
      loggingIn: 'جاري التحقق والدخول...',
      noAccount: 'ليس لديك حساب بعد؟',
      contactSales: 'تواصل مع المبيعات لفتح حساب',
      errorRequired: 'يرجى إدخال اسم المستخدم وكلمة المرور',
    },
    contactModal: {
      title: 'طلب تجربة مجانية أو استشارة',
      subtitle: 'سيتواصل معك مستشار حلول Logiq خلال أقل من ساعتين لمساعدتك في تهيئة النظام المناسب.',
      nameLabel: 'الاسم بالكامل',
      namePlaceholder: 'أحمد محمود',
      phoneLabel: 'رقم الهاتف / الواتساب',
      phonePlaceholder: '01012345678',
      activityLabel: 'نوع النشاط التجاري',
      notesLabel: 'ملاحظات أو استفسار إضافي (اختياري)',
      notesPlaceholder: 'أود الاستفسار عن عدد الفروع أو الأجهزة المطلوبة...',
      submitBtn: 'إرسال طلب التجربة المجانية',
      submitting: 'جاري إرسال طلبك...',
      successTitle: 'تم استلام طلبك بنجاح!',
      successMessage: 'شكراً لاهتمامك بمنظومة Logiq. سيتواصل معك أحد خبرائنا فوراً عبر الواتساب أو الهاتف.',
      closeBtn: 'إغلاق',
    },
    videoModal: {
      title: 'فيديو تعريفي عن منظومة Logiq',
      subtitle: 'تعرف في دقيقة واحدة على كيفية تنظيم مبيعاتك وحساباتك بأسهل الطرق',
      close: 'إغلاق الفيديو',
    },
  },
  en: {
    meta: {
      title: 'Logiq | Smart Integrated Solutions for Every Business',
      description: 'Advanced SaaS and On-Premise Business Management & POS System for pharmacies, retail stores, cafes, warehouses, and lounges.',
    },
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      features: 'Features',
      howItWorks: 'How It Works',
      whyLogiq: 'Why Logiq',
      testimonials: 'Testimonials',
      contact: 'Contact',
      login: 'Sign In',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Next-Generation POS & Business Management Platform',
      titlePart1: 'Smart Solutions for',
      titleHighlight: 'Every Business',
      titlePart2: 'Engineered for Performance',
      subtitle: 'Modern cloud & hybrid platform designed to simplify sales operations, inventory control, electronic invoicing, and real-time accounting with effortless speed.',
      ctaPrimary: 'Start Free Trial',
      ctaSecondary: 'Explore Solutions',
      watchDemo: 'Watch 60s Demo',
      trustedBy: 'Trusted by 2,500+ businesses across Egypt and the Middle East',
      stat1Number: '99.9%',
      stat1Label: 'Uptime & Data Integrity',
      stat2Number: '3x',
      stat2Label: 'Faster Checkout & Operations',
      stat3Number: '24/7',
      stat3Label: 'Continuous Enterprise Support',
      mockup: {
        terminalTitle: 'Live POS & Checkout Terminal',
        onlineStatus: 'Online & Real-time Synced',
        todaySales: "Today's Revenue",
        currency: 'EGP',
        txCountSuffix: 'completed sales',
        cashier: 'Cashier: Ahmed R.',
        avgSpeed: 'Avg 1.2s per ticket',
        recentTransactions: 'Live Transactions',
        paid: 'PAID',
        sampleItem1: 'Medical Supplies & Rx Order',
        sampleItem2: 'Artisan Café & Bakery Order',
        sampleItem3: 'Retail Apparel & Accessories',
        liveIndicator: 'Live Feed',
      },
    },
    socialProof: {
      badge: 'Proven Reliability & Track Record',
      title: 'Trusted by Ambitious Business Owners',
      titleHighlight: 'Nationwide',
      subtitle: 'Join thousands of retail stores, pharmacies, and enterprises scaling their business with Logiq.',
      clientsCount: '2,500+',
      clientsLabel: 'Active Commercial Locations',
      transactionsVolume: '15M+',
      volumeLabel: 'Annual Invoices & Transactions',
      uptime: '99.99%',
      uptimeLabel: 'System Availability & Stability',
      testimonials: [
        {
          name: 'Dr. Tarek Abdelhamid',
          role: 'Managing Director',
          business: 'Al-Amal Pharmacy Group',
          city: 'Cairo',
          quote: 'Logiq completely solved our inventory audits and expiry date tracking. Prescription processing and customer checkout is now 3x faster with remarkable support.',
          rating: 5,
        },
        {
          name: 'Eng. Karim Mamdouh',
          role: 'Founder & Head of Operations',
          business: 'Aurora Specialty Coffee',
          city: 'Alexandria',
          quote: 'Table management, kitchen display integration, and profit reporting are now totally effortless. Everything syncs instantly with zero lag.',
          rating: 5,
        },
        {
          name: 'Mr. Mahmoud El-Shenawy',
          role: 'Logistics & Supply Director',
          business: 'Al-Shorouk Wholesale & Distribution',
          city: 'Tanta',
          quote: 'Real-time synchronization between our central warehouses and branches stopped stock shortages and pricing discrepancies. Truly our best digital investment.',
          rating: 5,
        },
      ],
    },
    solutions: {
      badge: 'Whatever Your Business',
      title: 'Tailored Solutions Built for',
      titleHighlight: 'Your Industry',
      subtitle: 'Whether you run a single boutique or a multi-location enterprise, Logiq provides the exact specialized tools your industry requires.',
      cardCta: 'Request Tailored Consultation',
      items: [
        {
          id: 'pharmacy',
          title: 'Pharmacy',
          tagline: 'Precision Medication & Expiry Management',
          description: 'Comprehensive pharmacy management with barcode lookups, expiry alerts, active ingredient alternatives, and direct distributor integrations.',
          accentColor: '#34D6BA',
          features: ['Drug expiry tracking & alternative suggestions', 'Direct barcode & prescription processing', 'Insurance billing and supplier accounts'],
        },
        {
          id: 'warehouse',
          title: 'Warehouse & Wholesale',
          tagline: 'Absolute Control Over Stock & Supply',
          description: 'Real-time inventory levels, reorder threshold alerts, multi-warehouse transfers, and live valuation analytics with barcode scanning.',
          accentColor: '#F59E0B',
          features: ['Multi-location and warehouse management', 'Fast barcode audit and stock-taking', 'Automated purchase orders & profit tracking'],
        },
        {
          id: 'retail',
          title: 'Retail & Supermarkets',
          tagline: 'Rapid POS & Effortless Checkout',
          description: 'Ultra-fast retail POS interface with weight barcode integration, barcode scanners, price checking, and dynamic discount campaigns.',
          accentColor: '#2BB8B3',
          features: ['Sub-second cashier checkout with thermal receipts', 'Electronic scale barcode compatibility', 'Customer loyalty and promotional bundles'],
        },
        {
          id: 'cafe',
          title: 'Cafés & Restaurants',
          tagline: 'Seamless Floor & Kitchen Management',
          description: 'Interactive table maps, kitchen display systems (KDS), delivery management, and recipe-based ingredient deduction from stock.',
          accentColor: '#F43F5E',
          features: ['Interactive table layout & KDS kitchen routing', 'Dine-in, takeaway, and delivery coordination', 'Automatic ingredient depletion per order'],
        },
        {
          id: 'gaming',
          title: 'PlayStation & Gaming Lounge',
          tagline: 'Minute-by-Minute Session Billing',
          description: 'Accurate time tracking for single/multi sessions, room reservations, integrated snack bar billing, and instant checkouts.',
          accentColor: '#A855F7',
          features: ['Exact minute-level timer and device tracking', 'Merged café & snack bar invoices', 'Room and television hardware controllers'],
        },
        {
          id: 'center',
          title: 'Educational Centers & Academies',
          tagline: 'Student Attendance & Batch Management',
          description: 'Student registration, barcode attendance cards, subscription billing, study material sales, and automated instructor commissions.',
          accentColor: '#10B981',
          features: ['Barcode student check-in & attendance', 'Subscription and educational material fees', 'Instructor payout and revenue splits'],
        },
      ],
    },
    features: {
      badge: 'Enterprise Performance',
      title: 'Everything You Need to Scale',
      titleHighlight: 'In One Platform',
      subtitle: 'Engineered with modern architecture to guarantee total data security, instant responsiveness, and zero downtime.',
      items: [
        {
          id: 'easy-to-use',
          title: 'Intuitive & Easy to Learn',
          description: 'Clean, modern interfaces designed for everyday business operations. Your team can master it in minutes with minimal training.',
          badge: 'Zero Learning Curve',
        },
        {
          id: 'powerful-management',
          title: 'Unified Central Management',
          description: 'Manage sales, inventory, purchases, suppliers, and customer relationships in one single, fully-synchronized dashboard.',
          badge: 'All-in-One',
        },
        {
          id: 'real-time-insights',
          title: 'Real-Time Insights & Reports',
          description: 'Get deep visibility into sales trends, high-margin products, and cashier performance anytime, from any connected device.',
          badge: 'Data-Driven',
        },
        {
          id: 'secure-reliable',
          title: 'Enterprise Security & Offline Mode',
          description: 'Role-based access controls, automatic cloud backups, and offline resilience so your business never stops during network drops.',
          badge: 'Offline Resilient',
        },
        {
          id: 'scalable',
          title: 'Scalable for Growing Chains',
          description: 'Designed to expand seamlessly from a single terminal to dozens of interconnected branches with central administration.',
          badge: 'Grows With You',
        },
        {
          id: 'modern-tech',
          title: 'Modern Architecture & E-Invoicing',
          description: 'Built with cutting-edge tech, supporting electronic tax invoicing (ETA / ZATCA), thermal printers, and barcode hardware.',
          badge: 'E-Invoice Ready',
        },
      ],
    },
    howItWorks: {
      badge: 'Simple 3-Step Process',
      title: 'Start Optimizing Your Business',
      titleHighlight: 'In Just Minutes',
      subtitle: 'Transitioning to Logiq is fast and effortless, backed by full on-boarding support from our specialized deployment engineers.',
      steps: [
        {
          number: '01',
          title: 'Select Your Solution',
          description: 'Pick the tailored module matching your specific business type so we can calibrate the optimal workflow for your team.',
          detail: 'Sector-specific presets',
        },
        {
          number: '02',
          title: 'Configure & Import Data',
          description: 'Quickly import your inventory from Excel spreadsheets or choose from our extensive pre-loaded product catalog.',
          detail: 'Instant catalog migration',
        },
        {
          number: '03',
          title: 'Go Live & Accelerate',
          description: 'Start processing transactions immediately, track live daily margins, and supervise all operations in real-time.',
          detail: 'Live margin analytics',
        },
      ],
    },
    whyLogiq: {
      badge: 'Measurable Value',
      title: 'Why Growing Businesses',
      titleHighlight: 'Rely on Logiq',
      subtitle: 'More than just a point-of-sale tool: a dependable digital infrastructure that accelerates operations and protects profitability.',
      architectureBadge: 'High-Throughput Distributed Architecture',
      pillars: [
        {
          title: '5-Minute Rapid Onboarding',
          description: 'Avoid lengthy disruptions. Deploy your complete terminal system in minutes without complicated manual setup.',
          metric: '5 Mins',
          metricLabel: 'Average Terminal Setup Time',
        },
        {
          title: 'Sub-Second Ticket Execution',
          description: 'Instant barcode scanning and receipt dispatch eliminates checkout queues and keeps customers satisfied.',
          metric: '1.2s',
          metricLabel: 'Average Transaction Speed',
        },
        {
          title: '100% Reconciliation Accuracy',
          description: 'Eliminate human accounting discrepancies with automated stock-to-cash reconciliation and detailed audit logs.',
          metric: '100%',
          metricLabel: 'Financial & Inventory Precision',
        },
        {
          title: 'Always-On Technical Support',
          description: 'Our certified technical support engineers are available round the clock to ensure your business runs uninterrupted.',
          metric: '24/7',
          metricLabel: 'Dedicated SLA Support',
        },
      ],
    },
    cta: {
      badge: 'Elevate Your Enterprise Today',
      title: 'Ready to Transform Your Business Operations?',
      subtitle: 'Join leading businesses and experience the full power of Logiq with a comprehensive free trial and live onboarding demo.',
      btnPrimary: 'Request Free Trial Demo',
      btnWhatsapp: 'Chat on WhatsApp',
      whatsappNote: 'Sales engineers are online now for instant consultation',
    },
    footer: {
      description: 'Logiq Business Solutions — Your trusted partner for modern retail, pharmacy, and enterprise point-of-sale systems.',
      quickLinks: 'Quick Links',
      solutionsTitle: 'Solutions',
      contactTitle: 'Contact Us',
      copyright: 'All Rights Reserved © 2026 Logiq Digital Solutions.',
      rightsReserved: 'Engineered for exceptional stability, reliability, and speed.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      phone: '+20 100 000 0000',
      email: 'sales@logiq-eg.com',
      address: 'Cairo, Arab Republic of Egypt',
    },
    loginModal: {
      title: 'Sign In to Your Workspace',
      subtitle: 'Enter your credentials to access the Logiq business console',
      emailLabel: 'Email or Username',
      emailPlaceholder: 'name@business.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      rememberMe: 'Keep me signed in on this device',
      forgotPassword: 'Forgot password?',
      submitBtn: 'Sign In to System',
      loggingIn: 'Authenticating...',
      noAccount: "Don't have an account yet?",
      contactSales: 'Contact sales to create an account',
      errorRequired: 'Please enter both username and password',
    },
    contactModal: {
      title: 'Request a Free Demo & Consultation',
      subtitle: 'Our solution specialists will contact you within 2 hours to calibrate the optimal configuration for your business.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Ahmed Mahmoud',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: '01012345678',
      activityLabel: 'Business Category',
      notesLabel: 'Additional Inquiries (Optional)',
      notesPlaceholder: 'Number of branches, desired devices, or custom requirements...',
      submitBtn: 'Submit Request',
      submitting: 'Submitting request...',
      successTitle: 'Request Received Successfully!',
      successMessage: 'Thank you for choosing Logiq. One of our specialists will reach out via WhatsApp or phone shortly.',
      closeBtn: 'Close',
    },
    videoModal: {
      title: 'Logiq System Product Tour',
      subtitle: 'Watch how Logiq organizes your sales, inventory, and operations in under 60 seconds',
      close: 'Close Video',
    },
  },
};
