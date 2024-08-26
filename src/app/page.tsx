'use client';
import FeaturedProjectsShowcase from '@/components/sections/homePage/FeaturedProjectsShowcase';
import ServicesPreview from '@/components/sections/homePage/ServicesPreview';
import OurProceses from '@/components/sections/homePage/OurProceses';
import HomeCTA from '@/components/sections/HomeCTA';
import Hero from '@/components/sections/homePage/Hero';
import FAQSection from '@/components/sections/FAQ';

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
