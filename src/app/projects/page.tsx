'use client';

import ProjectHero from '@/components/sections/projects/ProjectHero';
import HomeCTA from '@/components/sections/HomeCTA';
import Projects from '@/components/sections/projects/Projects';
import FAQSection from '@/components/sections/FAQ';

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
