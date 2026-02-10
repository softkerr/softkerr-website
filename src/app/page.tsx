import type { Metadata } from 'next';
import ServicesPreview from '@/components/sections/homePage/ServicesPreview';
import OurProceses from '@/components/sections/homePage/OurProceses';
import HomeCTA from '@/components/sections/HomeCTA';
import Hero from '@/components/sections/homePage/Hero';
import WhyPartnerWithSoftKerr from '@/components/sections/homePage/WhyPartnerWithSoftKerr';
import { pageMetadata } from '@/lib/metadata';
import { lazyLoadFAQ, lazyLoadBelowFold } from '@/lib/lazyLoad';
// Lazy load below-the-fold components
const FeaturedProjectsShowcase = lazyLoadBelowFold(
  () => import('@/components/sections/homePage/FeaturedProjectsShowcase')
);

const FAQSection = lazyLoadFAQ();

// SEO metadata for homepage
export const metadata: Metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <>
      <Hero />

      <WhyPartnerWithSoftKerr />

      <ServicesPreview />
      <OurProceses />

      <FeaturedProjectsShowcase />
      <FAQSection page="home" />
      <HomeCTA />
    </>
  );
}
