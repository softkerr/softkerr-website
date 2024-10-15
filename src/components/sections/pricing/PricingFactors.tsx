'use client';

import ExpandableCardList from '@/components/ExpandableCardList';
import { Section } from '@/components/ui';
import { pricingFactorsSteps, pricingFactorsConfig } from '@/data/pricingFactors';

export default function PricingFactors() {
  return (
    <Section padding="lg">
      <ExpandableCardList
        heading={pricingFactorsConfig.heading}
        subheading={pricingFactorsConfig.subheading}
        description={pricingFactorsConfig.description}
        steps={pricingFactorsSteps}
        showMetrics={pricingFactorsConfig.showMetrics}
        showBottomCTA={false}
      />
    </Section>
  );
}
