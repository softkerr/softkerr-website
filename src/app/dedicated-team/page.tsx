'use client';

import DedicatedTeamHero from '@/components/sections/dedicatedTeam/DedicatedTeamHero';
import HowWeWork from '@/components/sections/dedicatedTeam/HowWeWork';
import SprintTimelineCircular from '@/components/sections/dedicatedTeam/SprintTimelineCircular';
import TeamMembers from '@/components/sections/dedicatedTeam/TeamMembers';
import FAQ from '@/components/sections/FAQ';
import HomeCTA from '@/components/sections/HomeCTA';

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
