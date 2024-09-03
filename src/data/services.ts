// Shared services data structure
export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  glowColor: string;
  category: 'design' | 'development' | 'support';
  subServices?: string[];
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
  colorClass: string;
  bgClass: string;
  borderClass: string;
  iconColor: string;
  glowColor: string;
}

// This data is used across ServicesPreview and detailed services pages
export const servicesData = {
  design: {
    id: 'design',
    title: 'Design',
    description: 'Creating beautiful, intuitive interfaces that users love',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    borderClass: 'border-brand-violet',
    iconColor: 'text-brand-violet',
    glowColor: '139, 92, 246',
    services: [
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        shortDescription:
          'User-centered design that creates meaningful and delightful experiences.',
        fullDescription:
          'We craft intuitive interfaces and seamless user experiences that put your users first. Our design process combines research, prototyping, and testing to create products that people love to use.',
        features: [
          'User Research & Personas',
          'Wireframing & Prototyping',
          'Visual Design Systems',
          'Usability Testing',
          'Accessibility Standards',
        ],
      },
      {
        id: 'web-design',
        title: 'Web Design',
        shortDescription: 'Modern, responsive websites that captivate and convert visitors.',
        fullDescription:
          'Beautiful, conversion-focused web designs that work flawlessly across all devices. We blend aesthetics with functionality to create websites that engage users and drive business results.',
        features: [
          'Responsive Design',
          'Brand Identity Integration',
          'Typography & Color Theory',
          'Interactive Elements',
          'Performance Optimization',
        ],
      },
      {
        id: 'landing-page-design',
        title: 'Landing Page Design',
        shortDescription: 'High-converting landing pages optimized for your campaigns.',
        fullDescription:
          'Focused, persuasive landing pages designed to maximize conversions. Every element is strategically placed to guide visitors toward taking action.',
        features: [
          'Conversion Rate Optimization',
          'A/B Testing Setup',
          'Clear Call-to-Actions',
          'Social Proof Integration',
          'Fast Loading Design',
        ],
      },
      {
        id: 'mobile-app-design',
        title: 'Mobile App Design',
        shortDescription: 'Native and cross-platform mobile app interfaces.',
        fullDescription:
          'Intuitive mobile app designs optimized for iOS and Android platforms. We follow platform-specific guidelines while maintaining your brand identity.',
        features: [
          'iOS & Android Guidelines',
          'Gesture-Based Navigation',
          'Micro-Interactions',
          'Dark Mode Support',
          'Tablet Optimization',
        ],
      },
    ],
  },
  development: {
    id: 'development',
    title: 'Development',
    description: 'Building robust, scalable solutions with cutting-edge technologies',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    borderClass: 'border-brand-gold',
    iconColor: 'text-brand-gold',
    glowColor: '240, 185, 11',
    services: [
      {
        id: 'web-development',
        title: 'Web Development',
        shortDescription:
          'Custom web applications built with modern technologies and best practices.',
        fullDescription:
          'Full-stack web development using the latest technologies. We build fast, secure, and scalable web applications tailored to your business needs.',
        features: [
          'React, Next.js, Vue.js',
          'Node.js, Python, PHP',
          'RESTful & GraphQL APIs',
          'Database Design & Optimization',
          'Cloud Deployment (AWS, Vercel)',
        ],
      },
      {
        id: 'software-development',
        title: 'Software Development',
        shortDescription: 'Enterprise-grade software solutions for complex business needs.',
        fullDescription:
          'Custom software development for businesses of all sizes. We create maintainable, well-documented code that scales with your growth.',
        features: [
          'Custom Business Logic',
          'Third-Party Integrations',
          'Microservices Architecture',
          'Testing & Quality Assurance',
          'Documentation & Training',
        ],
      },
      {
        id: 'mvp-development',
        title: 'MVP Development',
        shortDescription: 'Rapid development of minimum viable products to test your ideas.',
        fullDescription:
          'Launch your product quickly with an MVP. We focus on core features that validate your concept and gather user feedback fast.',
        features: [
          'Rapid Prototyping',
          'Core Feature Development',
          'User Feedback Integration',
          'Iterative Development',
          'Market Validation',
        ],
      },
      {
        id: 'chatbot-development',
        title: 'Chatbot Development',
        shortDescription: 'AI-powered chatbots for customer service and automation.',
        fullDescription:
          'Intelligent chatbots that handle customer inquiries, automate tasks, and provide 24/7 support using natural language processing.',
        features: [
          'Natural Language Processing',
          'Multi-Platform Integration',
          'Custom Conversation Flows',
          'Analytics & Reporting',
          'Human Handoff System',
        ],
      },
      {
        id: 'cms-development',
        title: 'CMS Development',
        shortDescription: 'Custom CMS built for speed and scale.',
        fullDescription:
          'Flexible content management systems that empower your team to manage content easily. Built with performance and SEO in mind.',
        features: [
          'Headless CMS Integration',
          'Custom Admin Panels',
          'Role-Based Access Control',
          'SEO Optimization',
          'Media Management',
        ],
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        shortDescription: 'Integrate AI and machine learning into your applications.',
        fullDescription:
          'Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance user experiences. We integrate cutting-edge AI technologies into your products.',
        features: [
          'GPT & LLM Integration',
          'Computer Vision Solutions',
          'Predictive Analytics',
          'Recommendation Systems',
          'Custom ML Models',
        ],
      },
    ],
  },
  support: {
    id: 'support',
    title: 'Support & Maintenance',
    description: 'Keeping your digital products running smoothly and up-to-date',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    borderClass: 'border-brand-blue',
    iconColor: 'text-brand-blue',
    glowColor: '37, 99, 235',
    services: [
      {
        id: 'ongoing-support',
        title: 'Ongoing Support',
        shortDescription: 'Continuous technical support and issue resolution.',
        fullDescription:
          '24/7 monitoring and support to keep your applications running smoothly. We respond quickly to issues and provide proactive maintenance.',
        features: [
          '24/7 Monitoring',
          'Bug Fixing & Updates',
          'Performance Monitoring',
          'Security Patches',
          'Priority Support',
        ],
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        shortDescription: 'Regular updates and optimizations for peak performance.',
        fullDescription:
          'Scheduled maintenance to keep your systems secure, fast, and up-to-date with the latest technologies and security standards.',
        features: [
          'Security Updates',
          'Performance Optimization',
          'Dependency Updates',
          'Backup & Recovery',
          'Uptime Guarantee',
        ],
      },
      {
        id: 'hosting',
        title: 'Hosting & Infrastructure',
        shortDescription: 'Reliable hosting solutions and infrastructure management.',
        fullDescription:
          'Managed hosting and infrastructure services ensuring high availability, security, and performance for your applications.',
        features: [
          'Cloud Infrastructure Setup',
          'SSL Certificates',
          'CDN Configuration',
          'Database Management',
          'Auto-Scaling Setup',
        ],
      },
    ],
  },
};

// Convert to array for easy mapping
export const servicesArray = [servicesData.development, servicesData.design, servicesData.support];

// Preview data for homepage (4 main services)
export const previewServices = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: 'FaRocket',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    link: '/services#web-development',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful and delightful experiences.',
    icon: 'FaPaintBrush',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    glowColor: '139, 92, 246',
    link: '/services#ui-ux-design',
  },
  {
    title: 'CMS Development',
    description: 'Custom CMS Built for Speed and Scale.',
    icon: 'FaCogs',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    glowColor: '37, 99, 235',
    link: '/services#cms-development',
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your digital products running smoothly.',
    icon: 'FaTools',
    colorClass: 'text-brand-cyan',
    bgClass: 'bg-brand-pink',
    glowColor: '236, 72, 153',
    link: '/services#support',
  },
];
