const translations = {
  en: {
    languageSelection: {
      title: 'Choose your language',
      description: 'Select the language you prefer to browse this portfolio.',
      english: 'English',
      arabic: 'العربية',
    },
    navbar: {
      home: 'Home',
      skills: 'Skills',
      learning: 'Currently Learning',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Abdalrahman Mater',
      titles: ['Frontend Developer', 'React Enthusiast', 'UI / UX Explorer'],
      description:
        "I'm a passionate frontend developer crafting engaging interfaces and seamless experiences. I love transforming ideas into reality using modern JavaScript frameworks and thoughtful design systems.",
      contactButton: 'Contact Me',
      availability: 'Available for freelance work',
      photoPlaceholder: 'Your Photo',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'What I Work With',
      description:
        'A toolkit of technologies that help me deliver resilient, accessible, and polished web experiences.',
      items: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Bootstrap', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Intermediate' },
      ],
    },
    learning: {
      eyebrow: 'Currently Learning',
      title: 'Leveling Up My Craft',
      description:
        'Exploring emerging tools and practices to stay ahead of the curve and deliver better experiences.',
      items: [
        'Next.js',
        'TypeScript',
        'Testing (Jest / React Testing Library)',
        'Performance Optimization',
        'Accessibility (a11y)',
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected Work',
      description:
        'A glimpse of the ideas I have transformed into experiences. Each project blends problem-solving with clean design.',
      liveDemo: 'Live Demo',
      githubRepo: 'GitHub Repo',
      items: [
        {
          title: 'Portfolio Website',
          description:
            'A responsive personal portfolio built with React and Tailwind CSS to highlight skills and projects.',
          tech: ['React', 'Tailwind CSS'],
        },
        {
          title: 'E-Commerce Dashboard',
          description:
            'A data-rich dashboard for monitoring product performance, sales metrics, and customer engagement.',
          tech: ['React', 'Chart.js', 'REST API'],
        },
        {
          title: 'Design System Starter',
          description:
            'Reusable UI components and tokens to ensure consistency across web applications and prototypes.',
          tech: ['Storybook', 'Tailwind CSS'],
        },
        {
          title: 'Team Collaboration App',
          description:
            'A lightweight task management tool with real-time updates and collaborative features for remote teams.',
          tech: ['React', 'Firebase', 'Tailwind CSS'],
        },
        {
          title: 'Travel Inspiration Blog',
          description:
            'A curated collection of travel stories with an immersive layout focused on readability and visuals.',
          tech: ['React', 'Contentful', 'Tailwind CSS'],
        },
        {
          title: 'Fitness Tracking Dashboard',
          description:
            'Visualizes workouts, goals, and progress with responsive charts and personalized insights.',
          tech: ['React', 'Recharts', 'Tailwind CSS'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact Me',
      title: "Let's Build Something Together",
      description:
        'Whether you have a project in mind, want to collaborate, or just say hi—my inbox is always open.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Jane Doe',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Tell me about your project or idea...',
      submitButton: 'Send Message',
      emailFallback: 'Prefer email?',
      emailAddressLabel: 'Prefer email? abdalrahmanmater65@gmail.com',
      mailSubjectPrefix: 'Portfolio Contact from',
      mailEmailLabel: 'Email',
      mailVisitorFallback: 'Visitor',
      mailNoMessage: 'No message provided.',
    },
    footer: {
      copyright: '© 2025 Abdalrahman Mater. All rights reserved.',
      madeWith: 'Made with ❤️ using React & Tailwind CSS.',
    },
  },
  ar: {
    languageSelection: {
      title: 'اختر اللغة',
      description: 'حدد اللغة التي تفضل تصفح هذا الموقع بها.',
      english: 'English',
      arabic: 'العربية',
    },
    navbar: {
      home: 'الرئيسية',
      skills: 'المهارات',
      learning: 'أتعلم حالياً',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'عبدالرحمن ماتر',
      titles: ['مطور واجهات أمامية', 'شغوف برياكت', 'مستكشف لتجارب المستخدم'],
      description:
        'أنا مطور واجهات أمامية شغوف بصناعة تجارب استخدام جذابة وسلسة. أستمتع بتحويل الأفكار إلى واقع باستخدام أطر جافاسكربت الحديثة وتصاميم مدروسة.',
      contactButton: 'تواصل معي',
      availability: 'متاح للعمل الحر',
      photoPlaceholder: 'صورتك',
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'الأدوات التي أعمل بها',
      description:
        'مجموعة من التقنيات التي تساعدني على تقديم تجارب ويب متينة وسهلة الوصول وذات مظهر متقن.',
      items: [
        { name: 'HTML', level: 'متقدم' },
        { name: 'CSS', level: 'متقدم' },
        { name: 'JavaScript', level: 'متقدم' },
        { name: 'React', level: 'متقدم' },
        { name: 'Tailwind CSS', level: 'متقدم' },
        { name: 'Bootstrap', level: 'متوسط' },
        { name: 'Git & GitHub', level: 'متوسط' },
      ],
    },
    learning: {
      eyebrow: 'أتعلم حالياً',
      title: 'أطور مهاراتي باستمرار',
      description:
        'أستكشف الأدوات والممارسات الحديثة لأبقى في المقدمة وأقدم تجارب أفضل.',
      items: [
        'Next.js',
        'TypeScript',
        'الاختبارات (Jest / React Testing Library)',
        'تحسين الأداء',
        'إمكانية الوصول (a11y)',
      ],
    },
    projects: {
      eyebrow: 'المشاريع',
      title: 'نماذج من أعمالي',
      description:
        'لمحة عن الأفكار التي حولتها إلى تجارب رقمية. كل مشروع يجمع بين حل المشكلات والتصميم الأنيق.',
      liveDemo: 'عرض مباشر',
      githubRepo: 'مستودع GitHub',
      items: [
        {
          title: 'موقع شخصي',
          description:
            'محفظة شخصية متجاوبة مبنية باستخدام React و Tailwind CSS لإبراز المهارات والمشاريع.',
          tech: ['React', 'Tailwind CSS'],
        },
        {
          title: 'لوحة تحكم للتجارة الإلكترونية',
          description:
            'لوحة بيانات غنية لمتابعة أداء المنتجات ومؤشرات المبيعات وتفاعل العملاء.',
          tech: ['React', 'Chart.js', 'REST API'],
        },
        {
          title: 'نظام تصميم مبدئي',
          description:
            'مكونات واجهة قابلة لإعادة الاستخدام وتوكنز لضمان الاتساق في التطبيقات والنماذج الأولية.',
          tech: ['Storybook', 'Tailwind CSS'],
        },
        {
          title: 'تطبيق للتعاون بين الفرق',
          description:
            'أداة خفيفة لإدارة المهام بتحديثات لحظية وخصائص تعاونية للفرق البعيدة.',
          tech: ['React', 'Firebase', 'Tailwind CSS'],
        },
        {
          title: 'مدونة لإلهام السفر',
          description:
            'مجموعة من قصص السفر بتصميم غامر يركز على قابلية القراءة والصور.',
          tech: ['React', 'Contentful', 'Tailwind CSS'],
        },
        {
          title: 'لوحة متابعة اللياقة',
          description:
            'تعرض التمارين والأهداف والتقدم برسوم بيانية متجاوبة ورؤى مخصصة.',
          tech: ['React', 'Recharts', 'Tailwind CSS'],
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل معي',
      title: 'لنصنع شيئاً معاً',
      description:
        'سواء كان لديك مشروع في ذهنك أو ترغب في التعاون أو حتى لإلقاء التحية، يسعدني تواصلك دائماً.',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      messageLabel: 'الرسالة',
      namePlaceholder: 'أدخل اسمك',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'أخبرني عن مشروعك أو فكرتك...',
      submitButton: 'إرسال الرسالة',
      emailFallback: 'تفضل البريد الإلكتروني؟',
      emailAddressLabel: 'تفضل البريد الإلكتروني؟ abdalrahmanmater65@gmail.com',
      mailSubjectPrefix: 'Portfolio Contact from',
      mailEmailLabel: 'البريد الإلكتروني',
      mailVisitorFallback: 'زائر',
      mailNoMessage: 'لم يتم إدخال رسالة.',
    },
    footer: {
      copyright: '© 2025 عبدالرحمن ماتر. جميع الحقوق محفوظة.',
      madeWith: 'صنع بحب باستخدام React و Tailwind CSS.',
    },
  },
};

export default translations;
