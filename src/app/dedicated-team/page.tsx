import type { Metadata } from 'next';
import DedicatedTeamHero from '@/components/sections/dedicatedTeam/DedicatedTeamHero';
import HowWeWork from '@/components/sections/dedicatedTeam/HowWeWork';
import SprintTimelineCircular from '@/components/sections/dedicatedTeam/SprintTimelineCircular';
import TeamMembers from '@/components/sections/dedicatedTeam/TeamMembers';
import HomeCTA from '@/components/sections/HomeCTA';
import { pageMetadata } from '@/lib/metadata';
import { lazyLoadFAQ } from '@/lib/lazyLoad';

// Lazy load FAQ - below the fold, saves ~10 KiB on initial load
const FAQ = lazyLoadFAQ();

// SEO metadata for dedicated team page
export const metadata: Metadata = pageMetadata.dedicatedTeam;

export default function TeamPage() {
  return (
    <>
      <DedicatedTeamHero />
      <TeamMembers />
      <HowWeWork />
      <SprintTimelineCircular />
      <FAQ page="dedicated-team" />
      <HomeCTA />
    </>
  );
}
