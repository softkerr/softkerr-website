'use client';

import React from 'react';
import { Section } from '@/components/ui';
import { oursProcessSteps, oursProcessConfig } from '@/data/oursProcess';

import ExpandableCardList from '../../ExpandableCardList';

export default function OurProcess({}) {
  return (
    <Section padding="xl" className="bg-background relative overflow-hidden">
      <ExpandableCardList
        heading={oursProcessConfig.heading}
        subheading={oursProcessConfig.subheading}
        description={oursProcessConfig.description}
        steps={oursProcessSteps}
        showMetrics={oursProcessConfig.showMetrics}
        showBottomCTA={oursProcessConfig.showBottomCTA}
        bottomCTAText={oursProcessConfig.bottomCTAText}
      />
    </Section>
  );
}
