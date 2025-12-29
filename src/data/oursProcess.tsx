import type React from 'react';
import {
  FaLayerGroup,
  FaCog,
  FaThLarge,
  FaPaintBrush,
  FaTools,
  FaSearchPlus,
  FaBullseye,
  FaCode,
  FaRocket,
} from '@/components/icons';

export interface OursProcessStep {
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
}

export const oursProcessSteps: OursProcessStep[] = [
  {
    title: 'Definition of Objectives',
    description:
      'We start by identifying your business goals, audience needs, and project vision to ensure every decision aligns with measurable outcomes and long-term success.',
    colorClass: 'brand-gold',
    bgClass: 'bg-brand-gold/15 hover:bg-brand-gold/25',
    borderClass: 'border-brand-gold/40',
    textClass: 'text-brand-gold',
    glowClass: 'shadow-brand-gold/30',
    icon: FaBullseye,
    keyPoints: [
      'In-depth stakeholder interviews',
      'Business goals alignment',
      'Target audience profiling',
      'Success metrics definition',
      'Project scope & timeline',
      'Risk assessment planning',
    ],
    metrics: ['Project Vision', 'KPIs Defined', 'Roadmap Created'],
  },
  {
    title: 'Analysis & Exploration',
    description:
      "We research your market, competitors, and user behavior to uncover insights that shape the project's direction and reveal opportunities for innovation.",
    colorClass: 'brand-blue',
    bgClass: 'bg-brand-blue/15 hover:bg-brand-blue/25',
    borderClass: 'border-brand-blue/40',
    textClass: 'text-brand-blue',
    glowClass: 'shadow-brand-blue/30',
    icon: FaSearchPlus,
    keyPoints: [
      'Competitive landscape analysis',
      'Market trends research',
      'User behavior analytics',
      'Technical requirements audit',
      'Gap & opportunity identification',
      'Data-driven insights report',
    ],
    metrics: ['Market Research', 'User Insights', 'Strategic Plan'],
  },
  {
    title: 'Selection of Technologies',
    description:
      "We choose the most effective tools, frameworks, and platforms to ensure optimal performance, scalability, and future-ready solutions tailored to your project's needs.",
    colorClass: 'brand-violet',
    bgClass: 'bg-brand-violet/15 hover:bg-brand-violet/25',
    borderClass: 'border-brand-violet/40',
    textClass: 'text-brand-violet',
    glowClass: 'shadow-brand-violet/30',
    icon: FaTools,
    keyPoints: [
      'Tech stack evaluation',
      'Performance benchmarking',
      'Scalability planning',
      'Security considerations',
      'Integration capabilities',
      'Future-proofing strategy',
    ],
    metrics: ['Architecture Design', 'Tech Stack', 'Infrastructure'],
  },
  {
    title: 'Imaginative Design',
    description:
      "We transform ideas into engaging visual experiences, combining creativity and usability to craft intuitive interfaces that captivate users and reflect your brand's personality.",
    colorClass: 'brand-pink',
    bgClass: 'bg-brand-pink/15 hover:bg-brand-pink/25',
    borderClass: 'border-brand-pink/40',
    textClass: 'text-brand-pink',
    glowClass: 'shadow-brand-pink/30',
    icon: FaPaintBrush,
    keyPoints: [
      'Brand identity integration',
      'User journey mapping',
      'Wireframes & prototypes',
      'Visual design systems',
      'Accessibility standards',
      'Interactive animations',
    ],
    metrics: ['UI/UX Design', 'Prototypes', 'Design System'],
  },
  {
    title: 'Robust Development',
    description:
      'We turn designs into high-performance, secure, and scalable code, following best practices to ensure every feature works seamlessly across devices and platforms.',
    colorClass: 'brand-cyan',
    bgClass: 'bg-brand-cyan/15 hover:bg-brand-cyan/25',
    borderClass: 'border-brand-cyan/40',
    textClass: 'text-brand-cyan',
    glowClass: 'shadow-brand-cyan/30',
    icon: FaCode,
    keyPoints: [
      'Clean code architecture',
      'Responsive implementation',
      'API integration',
      'Security hardening',
      'Performance optimization',
      'Cross-platform testing',
    ],
    metrics: ['Code Quality', 'Test Coverage', 'Performance'],
  },
  {
    title: 'Launch & Expansion',
    description:
      'We deploy your project with precision, monitor its performance, and continuously refine and scale it to support growth, new features, and evolving business goals.',
    colorClass: 'brand-green',
    bgClass: 'bg-brand-green/15 hover:bg-brand-green/25',
    borderClass: 'border-brand-green/40',
    textClass: 'text-brand-green',
    glowClass: 'shadow-brand-green/30',
    icon: FaRocket,
    keyPoints: [
      'Strategic deployment',
      'Performance monitoring',
      'User feedback analysis',
      'Continuous optimization',
      'Feature expansion',
      'Growth scaling support',
    ],
    metrics: ['Live Deployment', 'Monitoring', 'Iteration'],
  },
];

export const oursProcessConfig = {
  heading: 'Our Process',
  subheading: 'From Vision to Reality',
  description:
    'A comprehensive 6-step journey that transforms your ideas into powerful digital solutions. Each phase is carefully crafted to deliver exceptional results and sustainable growth.',
  showMetrics: true,
  showBottomCTA: true,
  bottomCTAText: 'Each step is tailored to your unique project requirements',
};
