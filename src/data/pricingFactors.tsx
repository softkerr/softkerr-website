import { FaBolt, FaChartLine, FaCheckCircle, FaGlobeAmericas, FaLock } from '@/components/icons';

type Step = {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  glowClass: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  keyPoints: string[];
  metrics?: string[];
};

export const pricingFactorsConfig = {
  heading: 'Pricing Factors',
  subheading: 'What shapes your project investment',
  description:
    'We scope work around outcomes, not hours. Here are the levers that most influence timelines and budget.',
  showMetrics: true,
};

export const pricingFactorsSteps: Step[] = [
  {
    title: 'Discovery & Strategy',
    description: 'Workshops to align goals, audiences, success metrics, and technical constraints.',
    colorClass: 'brand-gold',
    bgClass: 'bg-brand-gold/10',
    borderClass: 'border-brand-gold/40',
    textClass: 'text-brand-gold',
    glowClass: 'shadow-[0_0_25px_rgba(255,198,82,0.35)]',
    icon: FaChartLine,
    keyPoints: [
      'Stakeholder interviews & requirements',
      'Success metrics and KPIs definition',
      'Tech stack and risk assessment',
      'Roadmap and phasing plan',
    ],
    metrics: ['1-2 weeks', 'Strategy deck', 'Risk register'],
  },
  {
    title: 'UX/UI Design Depth',
    description:
      'From lean wireframes to premium visual systems with motion and accessibility baked in.',
    colorClass: 'brand-violet',
    bgClass: 'bg-brand-violet/10',
    borderClass: 'border-brand-violet/40',
    textClass: 'text-brand-violet',
    glowClass: 'shadow-[0_0_25px_rgba(129,140,248,0.35)]',
    icon: FaCheckCircle,
    keyPoints: [
      'User journeys & wireframes',
      'Design system & tokens',
      'Interactive prototypes',
      'Accessibility & usability reviews',
    ],
    metrics: ['3-6 weeks', 'AA accessibility', 'Design system tokens'],
  },
  {
    title: 'Engineering Scope',
    description: 'Feature surface area, integrations, data workflows, and performance targets.',
    colorClass: 'brand-blue',
    bgClass: 'bg-brand-blue/10',
    borderClass: 'border-brand-blue/40',
    textClass: 'text-brand-blue',
    glowClass: 'shadow-[0_0_25px_rgba(59,130,246,0.35)]',
    icon: FaBolt,
    keyPoints: [
      'Core feature set & edge cases',
      'API contracts & integrations',
      'Data models and migrations',
      'Performance & scalability targets',
    ],
    metrics: ['Sprint plan', 'Integration map', 'Perf budget'],
  },
  {
    title: 'Security & Compliance',
    description: 'Authentication, data protection, and compliance needs (GDPR/PII/PCI).',
    colorClass: 'brand-cyan',
    bgClass: 'bg-brand-cyan/10',
    borderClass: 'border-brand-cyan/40',
    textClass: 'text-brand-cyan',
    glowClass: 'shadow-[0_0_25px_rgba(34,211,238,0.35)]',
    icon: FaLock,
    keyPoints: [
      'Auth flows & roles',
      'Data residency & retention',
      'Vulnerability & dependency checks',
      'Compliance requirements mapping',
    ],
    metrics: ['SSO/2FA', 'Security checklist', 'Compliance scope'],
  },
  {
    title: 'Launch & Ops',
    description:
      'Environments, observability, SLAs, and handover for smooth launches and maintenance.',
    colorClass: 'brand-pink',
    bgClass: 'bg-brand-pink/10',
    borderClass: 'border-brand-pink/40',
    textClass: 'text-brand-pink',
    glowClass: 'shadow-[0_0_25px_rgba(236,72,153,0.35)]',
    icon: FaGlobeAmericas,
    keyPoints: [
      'CI/CD and release strategy',
      'Observability & alerts',
      'Load tests & rollback plans',
      'Handover & runbooks',
    ],
    metrics: ['SLOs & SLAs', 'Runbooks', 'Go-live checklist'],
  },
];
