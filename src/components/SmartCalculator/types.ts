import { IconType } from 'react-icons';

export type ServiceType =
  | 'design'
  | 'webDev'
  | 'mobileDev'
  | 'ecommerce'
  | 'backend'
  | 'consulting';

export type CalculatorData = {
  services: ServiceType[];
  designPages?: string;
  designComplexity?: string;
  hasContent?: string;
  platformType?: string;
  backendComplexity?: string;
  ecommerceProducts?: string;
  additionalFeatures: string[];
};

export type CalculatorStep = {
  id: string;
  question: string;
  type: 'multiselect' | 'select' | 'number' | 'radio';
  options?: { value: string; label: string; days?: number; icon?: IconType }[];
  dependsOn?: string;
  shouldShow?: (data: CalculatorData) => boolean;
};

export type ContactFormData = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
};

export type TimeEstimate = {
  minDays: number;
  maxDays: number;
  breakdown: { service: string; minDays: number; maxDays: number }[];
};
