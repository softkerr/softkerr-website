import type { Metadata } from 'next';
import ProjectHero from '@/components/sections/projects/ProjectHero';
import HomeCTA from '@/components/sections/HomeCTA';
import Projects from '@/components/sections/projects/Projects';
import FAQSection from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

// SEO metadata for projects page
export const metadata: Metadata = pageMetadata.projects;

export default function ProjectsPage() {
  return (
    <>
      <ProjectHero />
      <Projects />
      <FAQSection page="projects" />
      <HomeCTA />
    </>
  );
}
