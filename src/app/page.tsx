import type { Metadata } from 'next';
import FeaturedProjectsShowcase from '@/components/sections/homePage/FeaturedProjectsShowcase';
import ServicesPreview from '@/components/sections/homePage/ServicesPreview';
import OurProceses from '@/components/sections/homePage/OurProceses';
import HomeCTA from '@/components/sections/HomeCTA';
import Hero from '@/components/sections/homePage/Hero';
import FAQSection from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

// SEO metadata for homepage
export const metadata: Metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <>
      <Hero />

      <ServicesPreview />
      <OurProceses />

      <FeaturedProjectsShowcase />

      <FAQSection page="home" />
      <HomeCTA />
    </>
  );
}
