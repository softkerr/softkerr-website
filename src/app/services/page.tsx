import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesDetailed from '@/components/sections/services/ServicesDetailed';
import WhyChooseUs from '@/components/sections/services/WhyChooseUs';

import TechStack from '@/components/sections/services/TechStack';
import HomeCTA from '@/components/sections/HomeCTA';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

// SEO metadata for services page
export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Suspense fallback={<div className="py-20" />}>
        <ServicesDetailed />
      </Suspense>

      <TechStack />
      <WhyChooseUs />
      <FAQ page="services" />
      <HomeCTA />
    </>
  );
}
