import { FaPalette, FaCode, FaMobile, FaShoppingCart, FaDatabase, FaRocket } from 'react-icons/fa';

// Forward type declarations to avoid circular dependency
type ServiceType = 'design' | 'webDev' | 'mobileDev' | 'ecommerce' | 'backend' | 'consulting';

type CalculatorData = {
  services: ServiceType[];
  designPages?: string;
  designComplexity?: string;
  hasContent?: string;
  platformType?: string;
  backendComplexity?: string;
  ecommerceProducts?: string;
  additionalFeatures: string[];
};

type CalculatorStepType = {
  id: string;
  question: string;
  type: 'multiselect' | 'select' | 'number' | 'radio';
  options?: { value: string; label: string; days?: number; icon?: any }[];
  dependsOn?: string;
  shouldShow?: (data: CalculatorData) => boolean;
};

// Service options with min/max days estimation
export const serviceOptions = [
  { value: 'design', label: 'UI/UX Design', icon: FaPalette, minDays: 10, maxDays: 20 },
  { value: 'webDev', label: 'Web Development', icon: FaCode, minDays: 12, maxDays: 25 },
  { value: 'mobileDev', label: 'Mobile App', icon: FaMobile, minDays: 20, maxDays: 40 },
  { value: 'ecommerce', label: 'E-commerce', icon: FaShoppingCart, minDays: 15, maxDays: 30 },
  { value: 'backend', label: 'Backend/API', icon: FaDatabase, minDays: 15, maxDays: 35 },
  { value: 'consulting', label: 'Consulting', icon: FaRocket, minDays: 5, maxDays: 10 },
];

// Development stages that will be shown with progress
export const developmentStages = [
  {
    id: 'requirements',
    name: 'Requirements Gathering',
    description: 'Define project scope & goals',
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    description: 'Create visual designs & prototypes',
    dependsOn: ['design'],
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Build & code your solution',
    dependsOn: ['webDev', 'mobileDev', 'backend', 'ecommerce'],
  },
  {
    id: 'testing',
    name: 'Testing & QA',
    description: 'Ensure quality & performance',
    dependsOn: ['webDev', 'mobileDev', 'backend', 'ecommerce'],
  },
  {
    id: 'deployment',
    name: 'Deployment',
    description: 'Launch to production',
    dependsOn: ['webDev', 'mobileDev', 'backend', 'ecommerce'],
  },
  {
    id: 'support',
    name: 'Support & Maintenance',
    description: 'Ongoing optimization',
    dependsOn: ['webDev', 'mobileDev', 'backend', 'ecommerce'],
  },
];

// Calculator steps configuration
export const calculatorSteps: CalculatorStepType[] = [
  {
    id: 'services',
    question: 'What services do you need?',
    type: 'multiselect',
    options: serviceOptions,
  },
  {
    id: 'designPages',
    question: 'How many pages need design?',
    type: 'select',
    options: [
      { value: '1-5', label: '1-5 pages', days: 5 },
      { value: '6-10', label: '6-10 pages', days: 10 },
      { value: '11-20', label: '11-20 pages', days: 15 },
      { value: '20+', label: '20+ pages', days: 20 },
    ],
    shouldShow: (data: CalculatorData) => data.services.includes('design'),
  },
  {
    id: 'platformType',
    question: 'What type of website?',
    type: 'select',
    options: [
      { value: 'landing', label: 'Landing Page', days: 0 },
      { value: 'corporate', label: 'Corporate Website', days: 5 },
      { value: 'webapp', label: 'Web Application', days: 15 },
      { value: 'portal', label: 'Complex Portal', days: 25 },
    ],
    shouldShow: (data: CalculatorData) => data.services.includes('webDev'),
  },
  {
    id: 'designComplexity',
    question: 'Design complexity level?',
    type: 'radio',
    options: [
      { value: 'simple', label: 'Simple & Clean', days: 0 },
      { value: 'moderate', label: 'Moderate Custom', days: 5 },
      { value: 'complex', label: 'Highly Custom', days: 10 },
    ],
    shouldShow: (data: CalculatorData) => data.services.includes('design'),
  },
  {
    id: 'hasContent',
    question: 'Do you have content ready?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes, all content ready', days: 0 },
      { value: 'partial', label: 'Partially ready', days: 3 },
      { value: 'no', label: 'Need content creation', days: 7 },
    ],
    shouldShow: (data: CalculatorData) =>
      data.services.includes('design') || data.services.includes('webDev'),
  },
  {
    id: 'backendComplexity',
    question: 'Backend complexity?',
    type: 'radio',
    options: [
      { value: 'simple', label: 'Simple API', days: 0 },
      { value: 'moderate', label: 'Moderate Logic', days: 10 },
      { value: 'complex', label: 'Complex System', days: 20 },
    ],
    shouldShow: (data: CalculatorData) => data.services.includes('backend'),
  },
  {
    id: 'ecommerceProducts',
    question: 'Number of products?',
    type: 'select',
    options: [
      { value: '1-50', label: '1-50 products', days: 0 },
      { value: '51-200', label: '51-200 products', days: 5 },
      { value: '201-500', label: '201-500 products', days: 10 },
      { value: '500+', label: '500+ products', days: 15 },
    ],
    shouldShow: (data: CalculatorData) => data.services.includes('ecommerce'),
  },
  {
    id: 'additionalFeatures',
    question: 'Additional features needed?',
    type: 'multiselect',
    options: [
      { value: 'auth', label: 'User Authentication', days: 5 },
      { value: 'payment', label: 'Payment Integration', days: 7 },
      { value: 'multilang', label: 'Multi-language', days: 5 },
      { value: 'analytics', label: 'Analytics Dashboard', days: 8 },
      { value: 'seo', label: 'Advanced SEO', days: 3 },
      { value: 'api', label: 'Third-party APIs', days: 5 },
    ],
    shouldShow: (data: CalculatorData) => {
      const hasDevServices = data.services.some((service: ServiceType) =>
        ['webDev', 'mobileDev', 'ecommerce', 'backend'].includes(service)
      );
      return hasDevServices;
    },
  },
];

// Helper function to format days into human-readable time
export const formatTimeEstimate = (days: number): string => {
  if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  } else if (days < 30) {
    const weeks = (days / 7).toFixed(1);
    return `${weeks} ${weeks === '1.0' ? 'week' : 'weeks'}`;
  } else {
    const months = (days / 30).toFixed(1);
    return `${months} ${months === '1.0' ? 'month' : 'months'}`;
  }
};

// Helper function to get country flag emoji
export const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
