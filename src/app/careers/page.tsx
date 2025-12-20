import { Metadata } from 'next';
import CareersHero from '@/components/sections/careers/CareersHero';
import OpenPositions from '@/components/sections/careers/OpenPositions';
import CareersCTA from '@/components/sections/careers/CareersCTA';
import { pageMetadata } from '@/lib/metadata';

// SEO metadata for careers page
export const metadata: Metadata = pageMetadata.careers;

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions />
      <CareersCTA />
    </>
  );
}
