import { Metadata } from 'next';
import CareersHero from '@/components/sections/careers/CareersHero';
import OpenPositions from '@/components/sections/careers/OpenPositions';
import CareersCTA from '@/components/sections/careers/CareersCTA';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | SoftKerr',
  description:
    'Join our team of talented designers and developers. Explore open positions and grow your career with SoftKerr.',
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions />
      <CareersCTA />
    </>
  );
}
