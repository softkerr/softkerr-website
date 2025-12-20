'use client';

import { useState } from 'react';
import SmartCalculator from './SmartCalculator';
import BudgetChallenges from './BudgetChallenges';
import PricingFactors from './PricingFactors';
import CalculatorCTA from './CalculatorCTA';
import ProcessSteps from '../ProcessSteps';
import HomeCTA from '../HomeCTA';
import { budgetTrackingSteps, budgetTrackingConfig } from '@/data/budgetTracking';
import { lazyLoadFAQ } from '@/lib/lazyLoad';

// Lazy load FAQ - below the fold, saves ~10 KiB on initial load
const FAQ = lazyLoadFAQ();

export default function PricingContent() {
  const [isOpen, setIsOpen] = useState(false);

  const openCalculator = () => setIsOpen(true);
  const closeCalculator = () => setIsOpen(false);

  return (
    <>
      <SmartCalculator
        isOpen={isOpen}
        openCalculator={openCalculator}
        closeCalculator={closeCalculator}
      />
      <BudgetChallenges />
      <PricingFactors />
      <ProcessSteps
        heading={budgetTrackingConfig.heading}
        subheading={budgetTrackingConfig.subheading}
        steps={budgetTrackingSteps}
        variant="muted"
      />
      <CalculatorCTA openCalculator={openCalculator} />
      <FAQ page="pricing" />
      <HomeCTA />
    </>
  );
}
