import type { Metadata } from 'next';
import DedicatedTeamContent from '@/components/sections/dedicatedTeam/DedicatedTeamContent';

// SEO metadata for partnership models page
export const metadata: Metadata = {
  title: 'Partnership Models | SoftKerr - Engineering Team Extensions',
  description:
    'Embedded teams, co-development partnerships, and technical acceleration. Choose the collaboration model that fits your engineering needs.',
  keywords:
    'engineering partnership, team augmentation, embedded developers, co-development, technical partner',
  openGraph: {
    title: 'Partnership Models | SoftKerr',
    description:
      'Embedded teams, co-development partnerships, and technical acceleration. Choose the collaboration model that fits your engineering needs.',
    type: 'website',
  },
};

export default function TeamPage() {
  return <DedicatedTeamContent />;
}
