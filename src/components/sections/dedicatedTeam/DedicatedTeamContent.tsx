'use client';

import { useState } from 'react';
import ModelsGrid from '@/components/sections/partnershipModels/ModelsGrid';
import ComparisonTable from '@/components/sections/partnershipModels/ComparisonTable';
import TeamMembers from '@/components/sections/dedicatedTeam/TeamMembers';
import SprintTimelineCircular from '@/components/sections/dedicatedTeam/SprintTimelineCircular';
import { lazyLoadFAQ } from '@/lib/lazyLoad';
import DedicatedTeamHero from './DedicatedTeamHero';

const FAQ = lazyLoadFAQ();

export default function DedicatedTeamContent() {
  const [activeModel, setActiveModel] = useState('embedded-team');

  return (
    <>
      <DedicatedTeamHero onModelSelect={setActiveModel} />
      <ModelsGrid activeModel={activeModel} onModelChange={setActiveModel} />
      <ComparisonTable />
      <TeamMembers />
      <SprintTimelineCircular />
      <FAQ page="partnership" />
    </>
  );
}
