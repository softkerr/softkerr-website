import { FaLayerGroup, FaCog, FaThLarge, FaPaintBrush } from 'react-icons/fa';

export interface PricingFactorStep {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  glowClass: string;
  icon: React.ReactNode;
  keyPoints: string[];
  metrics?: string[];
}

export const pricingFactorsSteps: PricingFactorStep[] = [
  {
    title: 'Number of Platforms',
    description:
      'Whether your product is built for one platform or needs to work seamlessly across multiple platforms affects the overall complexity and cost.',
    colorClass: 'brand-blue',
    bgClass: 'bg-brand-blue/15 hover:bg-brand-blue/25',
    borderClass: 'border-brand-blue/40',
    textClass: 'text-brand-blue',
    glowClass: 'shadow-brand-blue/30',
    icon: <FaLayerGroup />,
    keyPoints: [
      'Web application development',
      'iOS native app development',
      'Android native app development',
      'Desktop application',
      'Cross-platform compatibility',
      'Platform-specific optimizations',
    ],
    metrics: ['Web', 'iOS', 'Android', 'Desktop'],
  },
  {
    title: 'Technical Complexity',
    description:
      'Advanced features such as custom interactions, complex data visualizations, or integrations with third-party systems require extra attention.',
    colorClass: 'brand-violet',
    bgClass: 'bg-brand-violet/15 hover:bg-brand-violet/25',
    borderClass: 'border-brand-violet/40',
    textClass: 'text-brand-violet',
    glowClass: 'shadow-brand-violet/30',
    icon: <FaCog />,
    keyPoints: [
      'Custom API development',
      'Real-time data processing',
      'Complex business logic',
      'Third-party integrations',
      'Advanced security features',
      'Performance optimization',
    ],
    metrics: ['Custom APIs', 'Real-time Data', 'Complex Logic', 'Integrations'],
  },
  {
    title: 'Number of Features',
    description:
      'The volume of features impacts the scope of the project. More features mean more time ensuring each one is intuitive and valuable.',
    colorClass: 'brand-pink',
    bgClass: 'bg-brand-pink/15 hover:bg-brand-pink/25',
    borderClass: 'border-brand-pink/40',
    textClass: 'text-brand-pink',
    glowClass: 'shadow-brand-pink/30',
    icon: <FaThLarge />,
    keyPoints: [
      'User dashboards & analytics',
      'Profile management system',
      'Messaging & notifications',
      'Search & filtering',
      'Payment processing',
      'Reporting & exports',
    ],
    metrics: ['Dashboards', 'Profiles', 'Messaging', 'Analytics'],
  },
  {
    title: 'Custom Design',
    description:
      'A fully custom design tailored to your brand requires a deeper level of creativity and technical work to align with your business goals.',
    colorClass: 'brand-gold',
    bgClass: 'bg-brand-gold/15 hover:bg-brand-gold/25',
    borderClass: 'border-brand-gold/40',
    textClass: 'text-brand-gold',
    glowClass: 'shadow-brand-gold/30',
    icon: <FaPaintBrush />,
    keyPoints: [
      'Brand identity integration',
      'Unique user experience design',
      'Custom UI components',
      'Advanced animations',
      'Responsive design system',
      'Accessibility compliance',
    ],
    metrics: ['Brand Identity', 'Unique UX', 'Custom Components', 'Animations'],
  },
];

export const pricingFactorsConfig = {
  heading: 'Key Factors',
  subheading: 'What Affects the Price?',
  description:
    'Our pricing is driven by complexity, speed, and quality. Understanding these key factors helps us provide accurate estimates for your project.',
  showMetrics: true,
};
