import type { ComponentType } from 'react';

export type ServiceType = 'design' | 'webDev' | 'backend' | 'ecommerce';

export type CalculatorOptionValue = string;

export type CalculatorOption = {
  value: CalculatorOptionValue;
  label: string;
  days?: number;
  icon?: ComponentType<{ className?: string }>;
};

export type CalculatorStep = {
  id: keyof CalculatorData;
  question: string;
  type: 'multiselect' | 'select' | 'radio';
  options?: CalculatorOption[];
  shouldShow?: (data: CalculatorData) => boolean;
};

export type CalculatorData = {
  services: ServiceType[];
  designPages?: string;
  designComplexity?: string;
  platformType?: string;
  backendComplexity?: string;
  ecommerceProducts?: string;
  hasContent?: 'yes' | 'no';
  additionalFeatures: string[];
};

export type TimeEstimate = {
  minDays: number;
  maxDays: number;
  breakdown: Array<{ service: string; minDays: number; maxDays: number }>;
};

export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
};

export type DevelopmentStage = {
  id: string;
  name: string;
  description: string;
  dependsOn?: ServiceType[];
};
