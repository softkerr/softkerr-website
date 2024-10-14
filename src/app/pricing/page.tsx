'use client';

import { useState } from 'react';

import SmartCalculator from '@/components/sections/pricing/SmartCalculator';
import BudgetChallenges from '@/components/sections/pricing/BudgetChallenges';
import ProcessSteps from '@/components/sections/ProcessSteps';
import { budgetTrackingSteps, budgetTrackingConfig } from '@/data/budgetTracking';
import PricingFactors from '@/components/sections/pricing/PricingFactors';
import CalculatorCTA from '@/components/sections/pricing/CalculatorCTA';
import FAQ from '@/components/sections/FAQ';
import HomeCTA from '@/components/sections/HomeCTA';
export default function PricingPage() {
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
