export interface TranslationContent {
  nav: {
    home: string;
    solutions: string;
    features: string;
    howItWorks: string;
    whyLogiq: string;
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
    trustedBy: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
  };
  solutions: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      tagline: string;
      description: string;
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
    }>;
  };
  whyLogiq: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    btnPrimary: string;
    btnSecondary: string;
    badge: string;
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
    noAccount: string;
    registerLink: string;
    orContinueWith: string;
  };
}

export const translations: Record<'ar' | 'en', TranslationContent> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      solutions: 'الأنشطة والحلول',
      features: 'المميزات',
      howItWorks: 'كيف يعمل',
      whyLogiq: 'لماذا لوجيك',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      getStarted: 'ابدأ الآن',
    },
    hero: {
      badge: 'الجيل الجديد من برامج إدارة الأعمال',
      titlePart1: 'حلول ذكية متكاملة',
      titleHighlight: 'لكل نشاط تجاري',
      titlePart2: '',
      subtitle: 'منظومة سحابية ومحلية حديثة مصممة لتبسيط إدارة المبيعات، المخازن، الحسابات، ونقاط البيع بدقة متناهية وسرعة فائقة.',
      ctaPrimary: 'ابدأ الآن مجاناً',
      ctaSecondary: 'استكشف الحلول',
      trustedBy: 'يثق بنا أكثر من 2,500 نشاط تجاري في مصر والشرق الأوسط',
      stat1Number: '99.9%',
      stat1Label: 'استقرار النظام والبيانات',
      stat2Number: '3x',
      stat2Label: 'تسريع دورة المبيعات والكاشير',
      stat3Number: '24/7',
      stat3Label: 'دعم فني متواصل واحترافي',
    },
    solutions: {
      badge: 'حلول مخصصة لقطاعك',
      title: 'مهما كان',
      titleHighlight: 'نشاطك',
      subtitle: 'تمت صياغة كل نظام داخل لوجيك ليلائم طبيعة عملك واحتياجاتك اليومية بدقة واحترافية.',
      items: [
        {
          id: 'pharmacy',
          title: 'صيدلية',
          tagline: 'إدارة شاملة للأدوية والروشتات',
          description: 'نظام متخصص يتابع تواريخ الصلاحية، تراكيب الأدوية، والبدائل المتاحة بدقة، مع تقارير فورية للنواقص.',
          features: ['تنبيهات الصلاحية المبكرة', 'دليل الأدوية والبدائل', 'ربط مع شركات الأدوية والتوزيع'],
        },
        {
          id: 'warehouse',
          title: 'مخزن',
          tagline: 'تحكم مطلق في حركة المخزون',
          description: 'تتبع لحظي للوارد والصادر، إذن صرف وتوريد، تحويلات بين الفروع، وجرد دوري بالباركود دون إيقاف العمل.',
          features: ['جرد دوري سريع بالباركود', 'إدارة الموردين والمدفوعات', 'تتبع دقيق للهالك والتحويلات'],
        },
        {
          id: 'retail',
          title: 'محل تجاري',
          tagline: 'كاشير سريع ومبيعات مرنة',
          description: 'واجهة كاشير بلمسة واحدة، دعم كامل لموازين الباركود، حساب الوردية وتقفيل اليومية بدقة خالية من الأخطاء.',
          features: ['نقاط بيع سريعة تعمل أوفلاين', 'إدارة العروض والخصومات', 'فواتير ضريبية وإيصالات حرارية'],
        },
        {
          id: 'cafe',
          title: 'كافيه ومطعم',
          tagline: 'إدارة الطاولات وطلبات المطبخ',
          description: 'توزيع الطاولات، شاشات المطبخ المباشرة (KDS)، تعديلات الوجبات (Modifiers)، وتقارير الأرباح لكل صنف.',
          features: ['خريطة طاولات تفاعلية', 'إدارة التيك أواي والدليفري', 'مراقبة تكلفة المواد الخام (Recipe)'],
        },
        {
          id: 'gaming',
          title: 'بلايستيشن وترفيه',
          tagline: 'حساب دقيق لزمن الألعاب والمشروبات',
          description: 'عدادات تلقائية للأجهزة والغرف (Single / Multi / VIP)، دمج طلبات المشروبات في نفس الفاتورة تلقائياً.',
          features: ['مؤقتات دقيقة بالساعة والدقيقة', 'تسعير تلقائي للأجهزة وVIP', 'ربط مباشر مع بوفيه الكافيه'],
        },
        {
          id: 'center',
          title: 'سنتر وخدمات',
          tagline: 'إدارة القاعات والمجموعات والاشتراكات',
          description: 'حضور وغياب بالباركود، جداول المحاضرين، حجوزات القاعات بالساعة، وإصدار اشتراكات الطلاب بسهولة.',
          features: ['كروت حضور ذكية للطلاب', 'تسوية حسابات المحاضرين', 'إدارة القاعات والمواعيد'],
        },
      ],
    },
    features: {
      badge: 'إمكانيات فائقة',
      title: 'أدوات قوية بُنيت لراحتك',
      titleHighlight: 'ونجاح مشروعك',
      subtitle: 'صممنا كل أداة لتمنحك السيطرة الكاملة على تفاصيل مشروعك دون تعقيد أو ضياع للوقت.',
      items: [
        {
          id: 'easy',
          title: 'سهولة الاستخدام',
          description: 'واجهات مريحة للعين وتصميم بديهي يمكن لأي موظف إتقانه خلال دقائق معدودة دون الحاجة لخبرات محاسبية سابقة.',
        },
        {
          id: 'management',
          title: 'إدارة متكاملة وشاملة',
          description: 'المبيعات، المشتريات، المخازن، حسابات العملاء والموردين، والورديات متصلة معاً بسلاسة وتناغم تام.',
        },
        {
          id: 'insights',
          title: 'تقارير ورؤى لحظية',
          description: 'لوحة مؤشرات تفاعلية توضح لك مبيعات اليوم، صافي الأرباح، الأصناف الأكثر طلباً، والأرصدة بضغطة زر واحدة.',
        },
        {
          id: 'security',
          title: 'أمان وموثوقية فائقة',
          description: 'تشفير كامل للبيانات، صلاحيات متعددة للمستخدمين، وسجل تدقيق شامل يحفظ كل عملية وتعديل لمنع التلاعب.',
        },
        {
          id: 'scalable',
          title: 'قابلية غير محدودة للتوسع',
          description: 'سواء كنت تدير متجراً واحداً أو سلسلة فروع منتشرة، يتوسع لوجيك معك بسهولة وبدون أي بطء في النظام.',
        },
        {
          id: 'offline',
          title: 'يعمل دون توقف (Offline First)',
          description: 'انقطاع الإنترنت لن يوقف كاشيرك أبداً. تابع عملك بشكل طبيعي وسيقوم النظام بالمزامنة التلقائية فور عودة الاتصال.',
        },
      ],
    },
    howItWorks: {
      badge: 'خطوات بسيطة',
      title: 'كيف تبدأ مع',
      titleHighlight: 'لوجيك؟',
      subtitle: '3 خطوات سريعة تفصلك عن امتلاك أحدث نظام تشغيلي لنشاطك التجاري.',
      steps: [
        {
          number: '01',
          title: 'اختر باقة نشاطك',
          description: 'حدد نوع عملك (محل، صيدلية، مطعم، سنتر...) لنجهز لك الواجهة والإعدادات المناسبة لطبيعة مجالك فوراً.',
        },
        {
          number: '02',
          title: 'ضبط الأصناف والبيانات',
          description: 'استورد منتجاتك بنقرة زر واحدة أو بمساعدة فريق الدعم الفني، وحدد صلاحيات موظفيك بسهولة.',
        },
        {
          number: '03',
          title: 'انطلق ونَمِّ أعمالك',
          description: 'ابدأ البيع واستمتع بتقارير دقيقة ومتابعة حية من هاتفك أو جهازك في أي وقت ومن أي مكان.',
        },
      ],
    },
    whyLogiq: {
      badge: 'الفارق الحقيقي',
      title: 'لماذا يختار أصحاب الأعمال',
      titleHighlight: 'منظومة لوجيك؟',
      subtitle: 'لأننا لا نقدم مجرد برنامج كاشير، بل شريكاً تقنياً يضمن لك النمو ويوفر مئات الساعات المهدورة.',
      pillars: [
        {
          title: 'بساطة استثنائية',
          description: 'تخلص من شاشات المحاسبة المعقدة والقوائم اللانهائية. كل ما تحتاجه في متناول يدك مباشرة.',
          metric: '5 دقائق',
          metricLabel: 'متوسط تدريب كاشير جديد',
        },
        {
          title: 'كفاءة تشغيلية مضاعفة',
          description: 'سرعة إنهاء الفاتورة في ثوانٍ معدودة، حتى في أوقات الذروة وازدحام العملاء.',
          metric: '1.2 ثانية',
          metricLabel: 'زمن إصدار الفاتورة',
        },
        {
          title: 'حماية وتأمين كامل',
          description: 'نسخ احتياطي محلي وسحابي مستمر يضمن عدم ضياع أي فاتورة أو حركة مالية مهما حدث.',
          metric: '100%',
          metricLabel: 'حماية البيانات واستعادتها',
        },
        {
          title: 'دعم فني وتحديثات مستمرة',
          description: 'فريق دعم متخصص متاح دائماً للرد على استفساراتك، مع تحديثات دورية مجانية تلبي احتياجات السوق.',
          metric: '24/7',
          metricLabel: 'دعم مباشر عبر الهاتف والواتساب',
        },
      ],
    },
    cta: {
      badge: 'انضم لمئات المشاريع الناجحة',
      title: 'جاهز لنقل أعمالك إلى المستوى التالي؟',
      subtitle: 'ابدأ اليوم مجاناً واكتشف كيف يمكن للوجيك أن يحدث فارقاً حقيقياً في أرباحك وتنظيم عملك.',
      btnPrimary: 'تحدث مع خبير مبيعات',
      btnSecondary: 'طلب عرض توضيحي (Demo)',
    },
    footer: {
      description: 'منظومة لوجيك الرقمية المتطورة — حلول ذكية ومتكاملة لإدارة المبيعات والمخازن ونقاط البيع لمختلف الأنشطة التجارية.',
      quickLinks: 'روابط سريعة',
      solutionsTitle: 'الحلول والأنشطة',
      contactTitle: 'تواصل معنا',
      copyright: 'جميع الحقوق محفوظة © 2026 لوجيك (Logiq). صُمم بكل فخر لدعم نمو الأعمال.',
      rightsReserved: 'جميع الحقوق محفوظة',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
    loginModal: {
      title: 'مرحباً بك مجدداً في لوجيك',
      subtitle: 'أدخل بيانات حسابك للوصول إلى لوحة التحكم',
      emailLabel: 'البريد الإلكتروني أو اسم المستخدم',
      emailPlaceholder: 'name@business.com',
      passwordLabel: 'كلمة المرور',
      passwordPlaceholder: '••••••••',
      rememberMe: 'تذكر هذا الجهاز',
      forgotPassword: 'نسيت كلمة المرور؟',
      submitBtn: 'تسجيل الدخول إلى لوجيك',
      noAccount: 'ليس لديك حساب حتى الآن؟',
      registerLink: 'تواصل لإنشاء حساب',
      orContinueWith: 'أو المتابعة السريعة عبر',
    },
  },
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      features: 'Features',
      howItWorks: 'How It Works',
      whyLogiq: 'Why Logiq',
      contact: 'Contact',
      login: 'Sign In',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Next-Generation Business Management',
      titlePart1: 'Smart Digital Solutions',
      titleHighlight: 'For Every Business',
      titlePart2: '',
      subtitle: 'A modern cloud and offline-first POS & ERP ecosystem engineered to streamline sales, inventory, accounting, and cashier operations with unmatched speed.',
      ctaPrimary: 'Get Started Free',
      ctaSecondary: 'Explore Solutions',
      trustedBy: 'Trusted by over 2,500 growing businesses across the region',
      stat1Number: '99.9%',
      stat1Label: 'System Uptime & Data Stability',
      stat2Number: '3x',
      stat2Label: 'Faster Checkout & Operations',
      stat3Number: '24/7',
      stat3Label: 'Dedicated Professional Support',
    },
    solutions: {
      badge: 'Tailored for Your Industry',
      title: 'Whatever Your',
      titleHighlight: 'Business',
      subtitle: 'Every module inside Logiq is calibrated specifically for the daily workflows and operational nuances of your specific industry.',
      items: [
        {
          id: 'pharmacy',
          title: 'Pharmacy',
          tagline: 'Comprehensive Medicine & Prescription Control',
          description: 'Specialized pharmaceutical inventory tracking expiry dates, active ingredients, alternatives, and supplier shortages in real time.',
          features: ['Early expiry date alerts', 'Alternative medication lookup', 'Automated supplier reorder lists'],
        },
        {
          id: 'warehouse',
          title: 'Warehouse',
          tagline: 'Precision Stock Control & Logistics',
          description: 'Real-time visibility over inbound and outbound freight, inter-branch transfers, supplier balances, and barcode stocktaking.',
          features: ['High-speed barcode auditing', 'Supplier purchase orders & credit', 'Transfer & write-off tracking'],
        },
        {
          id: 'retail',
          title: 'Retail & Stores',
          tagline: 'Lightning-Fast POS & Cashier Desk',
          description: 'Single-touch cashier screens, scale barcode integration, shift reconciliations, and bulletproof cash drawer accounting.',
          features: ['Offline-capable rapid checkout', 'Custom promotions & discount tiers', 'Tax invoices & thermal receipt print'],
        },
        {
          id: 'cafe',
          title: 'Café & Restaurant',
          tagline: 'Table Layout & Kitchen Operations',
          description: 'Interactive floor maps, Kitchen Display Systems (KDS), meal modifiers, recipe ingredient deductions, and shift reports.',
          features: ['Interactive table floor plan', 'Takeaway, delivery & dine-in sync', 'Recipe & ingredient cost tracking'],
        },
        {
          id: 'gaming',
          title: 'PlayStation & Gaming',
          tagline: 'Automated Session Timers & Amenities',
          description: 'Automatic console and room timers (Single / Multi / VIP), with instant billing integration for café drinks and snacks.',
          features: ['Minute-accurate room timers', 'Automated VIP & console rate cards', 'Unified buffet & console receipt'],
        },
        {
          id: 'center',
          title: 'Centers & Academies',
          tagline: 'Class Schedules, Attendance & Tuition',
          description: 'Barcode attendance tracking, instructor revenue splits, hourly hall rentals, and seamless student subscription management.',
          features: ['Smart student barcode IDs', 'Instructor payroll splits', 'Hall reservation & session scheduler'],
        },
      ],
    },
    features: {
      badge: 'Enterprise Capabilities',
      title: 'Powerful Tools Built for Your',
      titleHighlight: 'Peace of Mind',
      subtitle: 'Engineered from the ground up to give you total clarity and control over your business without friction.',
      items: [
        {
          id: 'easy',
          title: 'Intuitive & Easy to Use',
          description: 'Ergonomic, modern interfaces designed so any cashier or manager can master the system in minutes without accounting degrees.',
        },
        {
          id: 'management',
          title: 'Unified Management',
          description: 'Point of sale, purchasing, multi-location stock, customer accounts, and shifts communicate seamlessly in one dashboard.',
        },
        {
          id: 'insights',
          title: 'Real-Time Insights & Reports',
          description: 'Interactive live dashboards showcasing daily sales, net profits, best-selling SKUs, and inventory levels with a single click.',
        },
        {
          id: 'security',
          title: 'Enterprise Security & RBAC',
          description: 'End-to-end data encryption, granular role permissions, and tamper-proof audit trails logging every transaction.',
        },
        {
          id: 'scalable',
          title: 'Infinitely Scalable',
          description: 'Whether you operate a boutique corner shop or a multi-branch retail network, Logiq scales without performance degradation.',
        },
        {
          id: 'offline',
          title: 'Offline-First Reliability',
          description: 'Never worry about internet outages. Your cashiers keep selling seamlessly, and data synchronizes automatically when connection resumes.',
        },
      ],
    },
    howItWorks: {
      badge: 'Simple 3-Step Setup',
      title: 'How It Works with',
      titleHighlight: 'Logiq',
      subtitle: 'From onboarding to everyday management in three straightforward milestones.',
      steps: [
        {
          number: '01',
          title: 'Choose Your Solution',
          description: 'Select your sector (Retail, Pharmacy, Restaurant, Gaming, Center) to instantly initialize the ideal interface and workflow defaults.',
        },
        {
          number: '02',
          title: 'Configure Your Catalog',
          description: 'Import your product inventory via Excel or with our concierge setup team, and configure staff permission groups.',
        },
        {
          number: '03',
          title: 'Operate & Accelerate',
          description: 'Begin ringing up sales, monitoring cash flow, and viewing real-time executive reports from your phone or PC anywhere.',
        },
      ],
    },
    whyLogiq: {
      badge: 'The Logiq Advantage',
      title: 'Why Leading Businesses',
      titleHighlight: 'Choose Logiq',
      subtitle: 'More than just software — a dependable operational backbone that saves dozens of hours every week.',
      pillars: [
        {
          title: 'Radical Simplicity',
          description: 'Say goodbye to bloated legacy ERP screens. Everything your team needs is right where it belongs.',
          metric: '5 mins',
          metricLabel: 'Average staff onboarding time',
        },
        {
          title: 'Unrivaled Speed',
          description: 'Sub-second receipt generation keeps checkout lines moving swiftly even during peak rush hours.',
          metric: '1.2s',
          metricLabel: 'Average invoice creation time',
        },
        {
          title: 'Ironclad Data Integrity',
          description: 'Continuous local and cloud backups ensure you never lose a single transaction or inventory count.',
          metric: '100%',
          metricLabel: 'Data recovery and persistence',
        },
        {
          title: '24/7 Expert Support',
          description: 'Direct access to experienced product engineers ready to assist via WhatsApp, phone, or remote sessions.',
          metric: '24/7',
          metricLabel: 'Live bilingual assistance',
        },
      ],
    },
    cta: {
      badge: 'Join Thousands of Thriving Businesses',
      title: 'Ready to elevate your business operations?',
      subtitle: 'Get started today and discover how Logiq transforms efficiency, protects profits, and saves valuable time.',
      btnPrimary: 'Talk to an Expert',
      btnSecondary: 'Request Live Demo',
    },
    footer: {
      description: 'Logiq Digital Solutions — unified, modern cloud and offline-ready POS, inventory, and enterprise management software.',
      quickLinks: 'Quick Links',
      solutionsTitle: 'Solutions',
      contactTitle: 'Contact Us',
      copyright: 'All rights reserved © 2026 Logiq Inc. Built with pride for ambitious businesses.',
      rightsReserved: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    loginModal: {
      title: 'Welcome Back to Logiq',
      subtitle: 'Enter your credentials to access your management portal',
      emailLabel: 'Email address or username',
      emailPlaceholder: 'name@business.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      rememberMe: 'Remember this device',
      forgotPassword: 'Forgot password?',
      submitBtn: 'Sign In to Logiq',
      noAccount: "Don't have an account yet?",
      registerLink: 'Contact Sales',
      orContinueWith: 'or continue with',
    },
  },
};
