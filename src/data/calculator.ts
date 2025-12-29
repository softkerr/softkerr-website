import type { ComponentType } from 'react';
import type {
  CalculatorStep,
  DevelopmentStage,
  ServiceType,
} from '@/components/SmartCalculator/types';
import { FaAws, FaBrain, FaBullhorn, FaChartLine, FaCode, FaPaintBrush } from '@/components/icons';

export type ServiceOption = {
  value: ServiceType;
  label: string;
  minDays: number;
  maxDays: number;
  icon?: ComponentType<{ className?: string }>;
};

export const serviceOptions: ServiceOption[] = [
  {
    value: 'design',
    label: 'UI/UX Design',
    minDays: 7,
    maxDays: 14,
    icon: FaPaintBrush,
  },
  {
    value: 'webDev',
    label: 'Web Development',
    minDays: 14,
    maxDays: 28,
    icon: FaCode,
  },
  {
    value: 'backend',
    label: 'Backend Development',
    minDays: 10,
    maxDays: 21,
    icon: FaBrain,
  },
  {
    value: 'ecommerce',
    label: 'E-commerce',
    minDays: 12,
    maxDays: 24,
    icon: FaAws,
  },
];

export const calculatorSteps: CalculatorStep[] = [
  {
    id: 'services',
    question: 'Which services do you need?',
    type: 'multiselect',
    options: serviceOptions.map(option => ({
      value: option.value,
      label: option.label,
      days: 0,
      icon: option.icon,
    })),
  },
  {
    id: 'designPages',
    question: 'How many unique pages do you need designed?',
    type: 'select',
    shouldShow: data => data.services.includes('design'),
    options: [
      { value: '1-3', label: '1-3 pages', days: 3 },
      { value: '4-7', label: '4-7 pages', days: 6 },
      { value: '8-12', label: '8-12 pages', days: 10 },
      { value: '12+', label: '12+ pages', days: 14 },
    ],
  },
  {
    id: 'designComplexity',
    question: 'What level of design complexity do you expect?',
    type: 'select',
    shouldShow: data => data.services.includes('design'),
    options: [
      { value: 'simple', label: 'Simple and clean', days: 3 },
      { value: 'standard', label: 'Standard product UI', days: 5 },
      { value: 'premium', label: 'Premium, highly custom UI', days: 8 },
    ],
  },
  {
    id: 'platformType',
    question: 'What are we building?',
    type: 'select',
    shouldShow: data => data.services.includes('webDev'),
    options: [
      { value: 'marketing', label: 'Marketing website', days: 5 },
      { value: 'webapp', label: 'Web application / SaaS', days: 10 },
      { value: 'landing', label: 'Landing page campaign', days: 3 },
    ],
  },
  {
    id: 'backendComplexity',
    question: 'Backend requirements',
    type: 'select',
    shouldShow: data => data.services.includes('backend'),
    options: [
      { value: 'api', label: 'API and integrations', days: 5 },
      { value: 'data', label: 'Data processing & queues', days: 8 },
      { value: 'realtime', label: 'Real-time / streaming', days: 10 },
    ],
  },
  {
    id: 'ecommerceProducts',
    question: 'How many products will you manage?',
    type: 'select',
    shouldShow: data => data.services.includes('ecommerce'),
    options: [
      { value: '1-50', label: 'Up to 50 products', days: 4 },
      { value: '51-200', label: '51-200 products', days: 7 },
      { value: '200+', label: '200+ products', days: 10 },
    ],
  },
  {
    id: 'hasContent',
    question: 'Do you have content ready?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes, I will provide content', days: 0 },
      { value: 'no', label: 'No, need help with copywriting', days: 5 },
    ],
  },
  {
    id: 'additionalFeatures',
    question: 'Any additional features you need?',
    type: 'multiselect',
    options: [
      { value: 'seo', label: 'SEO & analytics setup', days: 2, icon: FaChartLine },
      { value: 'marketing', label: 'Marketing automation', days: 3, icon: FaBullhorn },
      { value: 'ai', label: 'AI/ML features', days: 6, icon: FaBrain },
      { value: 'cloud', label: 'Cloud infrastructure setup', days: 4, icon: FaAws },
    ],
  },
];

export const developmentStages: DevelopmentStage[] = [
  {
    id: 'requirements',
    name: 'Requirements & Scope',
    description: 'Gather requirements, define scope, success metrics and risks.',
  },
  {
    id: 'design',
    name: 'Product Design',
    description: 'UX flows, wireframes, UI design system, interactive prototypes.',
    dependsOn: ['design'],
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Front-end and back-end implementation with CI/CD.',
    dependsOn: ['webDev', 'backend', 'ecommerce'],
  },
  {
    id: 'testing',
    name: 'QA & UAT',
    description: 'Manual QA, automated checks, performance and accessibility.',
  },
  {
    id: 'deployment',
    name: 'Launch',
    description: 'Production release, observability, smoke checks.',
  },
  {
    id: 'support',
    name: 'Support & Growth',
    description: 'Post-launch monitoring, optimisation, growth experiments.',
  },
];

export const formatTimeEstimate = (days: number) => {
  if (days <= 14) return `${days} days`;
  const weeks = days / 7;
  return `≈${weeks.toFixed(1)} weeks`;
};

export const getCountryFlag = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
