import { FaUsers, FaCode, FaRocket } from '@/components/icons';

export type PartnershipModel = {
  id: string;
  icon: typeof FaUsers;
  title: string;
  tagline: string;
  whenItMakesSense: {
    title: string;
    points: string[];
  };
  howItWorks: {
    title: string;
    points: string[];
  };
  outcomes: {
    title: string;
    points: string[];
  };
  color: string;
};

export const partnershipModels: PartnershipModel[] = [
  {
    id: 'embedded-team',
    icon: FaUsers,
    title: 'Embedded Team',
    tagline: 'Extension of your engineering org',
    whenItMakesSense: {
      title: 'When It Makes Sense',
      points: [
        "You have a backlog that exceeds your team's bandwidth",
        'Hiring is too slow or risky for your current needs',
        'You need consistent velocity over 6+ months',
        'Your product roadmap is clear, execution is the bottleneck',
      ],
    },
    howItWorks: {
      title: 'How Collaboration Works',
      points: [
        'Engineers join your Slack, GitHub, and daily standups',
        'We follow your sprint planning, code review, and deployment process',
        'You assign work directly—no project manager intermediary',
        'Team scales up or down with 2-week notice',
      ],
    },
    outcomes: {
      title: 'Typical Outcomes',
      points: [
        'Backlog cleared 40-60% faster without adding headcount',
        'Knowledge stays in-house through documentation and pairing',
        'Your internal team focuses on architecture and strategic work',
        'Team members often transition to full-time hires',
      ],
    },
    color: 'brand-violet',
  },
  {
    id: 'co-development',
    icon: FaCode,
    title: 'Co-Development Partner',
    tagline: 'Shared ownership, shared responsibility',
    whenItMakesSense: {
      title: 'When It Makes Sense',
      points: [
        "You're building a new product or major feature",
        'You need architectural input, not just implementation',
        "Timeline is aggressive but quality can't slip",
        'You want a partner invested in the outcome, not just hours billed',
      ],
    },
    howItWorks: {
      title: 'How Collaboration Works',
      points: [
        'Joint architecture and tech stack decisions',
        'Weekly sync on progress, risks, and trade-offs',
        'We own specific modules or services end-to-end',
        'Continuous deployment with shared on-call rotation (optional)',
      ],
    },
    outcomes: {
      title: 'Typical Outcomes',
      points: [
        'Product shipped 2-3x faster than solo development',
        'Production-ready code with tests, docs, and monitoring',
        'Your team learns new patterns and tools from ours (and vice versa)',
        'Clean handoff or continued maintenance based on your needs',
      ],
    },
    color: 'brand-gold',
  },
  {
    id: 'technical-acceleration',
    icon: FaRocket,
    title: 'Technical Acceleration',
    tagline: 'Short bursts, specific goals',
    whenItMakesSense: {
      title: 'When It Makes Sense',
      points: [
        'You have a critical deadline (fundraise, launch, compliance)',
        'A key team member left and you need coverage',
        'You need to prove out a POC or MVP quickly',
        "You're migrating, refactoring, or upgrading something complex",
      ],
    },
    howItWorks: {
      title: 'How Collaboration Works',
      points: [
        'Fixed 4-12 week engagement with clear success criteria',
        'Daily async updates, weekly sync calls',
        'We own the outcome, you approve major decisions',
        'Handoff includes runbook, documentation, and knowledge transfer session',
      ],
    },
    outcomes: {
      title: 'Typical Outcomes',
      points: [
        'Critical milestone hit on time without burning out your team',
        'Technical debt addressed before it becomes an emergency',
        'POC validated or invalidated quickly with minimal sunk cost',
        'Your team equipped to maintain what we built',
      ],
    },
    color: 'brand-cyan',
  },
];
