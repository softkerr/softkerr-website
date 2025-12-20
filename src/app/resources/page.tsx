import type { Metadata } from 'next';
import ResourcesHero from '@/components/sections/resources/ResourcesHero';
import ServicesArticles from '@/components/sections/resources/ServicesArticles';
import HomeCTA from '@/components/sections/HomeCTA';
import FAQSection from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

// SEO metadata for resources page
export const metadata: Metadata = pageMetadata.resources;

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
