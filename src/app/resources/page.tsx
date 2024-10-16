'use client';
import ResourcesHero from '@/components/sections/resources/ResourcesHero';
import ServicesArticles from '@/components/sections/resources/ServicesArticles';
import HomeCTA from '@/components/sections/HomeCTA';
import FAQSection from '@/components/sections/FAQ';

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ServicesArticles />
      <FAQSection page="home" />
      <HomeCTA />
    </>
  );
}
