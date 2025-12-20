import type { Metadata } from 'next';
import DedicatedTeamHero from '@/components/sections/dedicatedTeam/DedicatedTeamHero';
import HowWeWork from '@/components/sections/dedicatedTeam/HowWeWork';
import SprintTimelineCircular from '@/components/sections/dedicatedTeam/SprintTimelineCircular';
import TeamMembers from '@/components/sections/dedicatedTeam/TeamMembers';
import FAQ from '@/components/sections/FAQ';
import HomeCTA from '@/components/sections/HomeCTA';
import { pageMetadata } from '@/lib/metadata';

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
