import { CaseStudy } from '@/components/sections/partnershipModels/CaseStudyCard';

/**
 * Case study examples for different partnership models
 * These showcase successful technical partnerships with real metrics
 */

export const caseStudies: CaseStudy[] = [
  {
    // DreamHost Panel - Embedded Team
    clientName: 'DreamHost',
    clientIndustry: 'Web Hosting',
    clientSize: 'Enterprise, 2M+ customers',

    challenge: {
      title: 'Modernize control panel for 2M+ users without disrupting service',
      description:
        'Legacy control panel struggled with performance at scale. Internal team focused on infrastructure while customer-facing tools lagged behind competitors.',
      techStack: ['React', 'Redux', 'Node.js', 'AWS'],
    },

    collaborationModel: 'Embedded Team',
    duration: '18 months',
    teamSize: '4 engineers',

    solution: {
      brief:
        'Embedded team rebuilt entire control panel using modern React stack while maintaining 99.99% uptime.',
      keyActions: [
        'Integrated with DreamHost engineering workflows and AWS infrastructure',
        'Built real-time resource monitoring dashboard with sub-second response',
        'Implemented one-click installs for WordPress, Joomla, and 50+ applications',
        'Created advanced DNS management interface with validation layer',
        'Deployed progressive rollout strategy to minimize customer impact',
      ],
    },

    results: [
      { metric: 'User satisfaction', value: '+45%' },
      { metric: 'Response time', value: '<1s' },
      { metric: 'Support tickets', value: '-35%' },
      { metric: 'System uptime', value: '99.99%' },
    ],

    testimonial: {
      quote:
        'The new DreamHost Panel has transformed how our customers interact with their hosting services. The intuitive design and powerful features have significantly reduced support requests while increasing customer satisfaction.',
      author: 'John H.',
      role: 'Customer Experience Manager',
    },

    glowColor: 'rgba(139, 92, 246, 0.3)',
    borderColor: 'border-brand-violet/30',
  },

  {
    // TürkiyeDental - Co-Development Partner
    clientName: 'TürkiyeDental',
    clientIndustry: 'Healthcare / Medical Tourism',
    clientSize: 'Startup, 15-person team',

    challenge: {
      title: 'Build multilingual healthcare platform connecting patients with clinics',
      description:
        'Needed complete platform from scratch with payment processing, booking system, and multilingual support. Required GDPR compliance and secure patient data handling.',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    },

    collaborationModel: 'Co-Development Partner',
    duration: '10 months',
    teamSize: '3 engineers + 1 designer',

    solution: {
      brief:
        'Joint product decisions, we owned full-stack development while client provided domain expertise and clinic partnerships.',
      keyActions: [
        'Weekly product sync to align features with market needs',
        'Built smart clinic matching algorithm based on treatment requirements',
        'Integrated Stripe for secure international payment processing',
        'Implemented virtual consultation platform with video capabilities',
        'Created treatment cost calculator with real-time pricing from 70+ clinics',
      ],
    },

    results: [
      { metric: 'Treatments booked', value: '15K+' },
      { metric: 'Countries served', value: '70+' },
      { metric: 'Patient rating', value: '4.9/5' },
      { metric: 'Transaction value', value: '€5M+' },
    ],

    testimonial: {
      quote:
        'SoftKerr built us an exceptional platform that has revolutionized how we connect with international patients. The user experience is seamless, and our booking rates have increased dramatically.',
      author: 'Dr. Mehmet Yılmaz',
      role: 'Medical Director',
    },

    glowColor: 'rgba(240, 185, 11, 0.3)',
    borderColor: 'border-brand-gold/30',
  },

  {
    // DreamHost Website - Technical Acceleration
    clientName: 'DreamHost',
    clientIndustry: 'Web Hosting',
    clientSize: 'Enterprise, 400+ employees',

    challenge: {
      title: 'Rebuild marketing website to drive customer acquisition at scale',
      description:
        'Existing site had poor performance scores and low conversion rates. Needed complete rebuild on tight timeline to launch before peak season.',
      techStack: ['Gatsby.js', 'GraphQL', 'Tailwind CSS', 'AWS'],
    },

    collaborationModel: 'Technical Acceleration',
    duration: '12 weeks',
    teamSize: '3 engineers + 1 designer',

    solution: {
      brief:
        'Fixed-scope engagement to rebuild entire website with performance and conversion optimization.',
      keyActions: [
        'Migrated from WordPress to Gatsby.js for static site generation',
        'Implemented advanced SEO with structured data and meta optimization',
        'Built optimized conversion funnels with A/B testing framework',
        'Deployed on AWS CloudFront for global edge performance',
        'Created comprehensive style guide and component library for marketing team',
      ],
    },

    results: [
      { metric: 'Performance score', value: '95+' },
      { metric: 'Conversion rate', value: '+200%' },
      { metric: 'Page load time', value: '-65%' },
      { metric: 'New customers', value: '50K/mo' },
    ],

    testimonial: {
      quote:
        "The new DreamHost website has been a game-changer for our business. We're seeing record numbers of new customers, and our conversion rates have skyrocketed. The team at SoftKerr delivered beyond our wildest expectations.",
      author: 'Brian Glassman',
      role: 'Director of SEO',
    },

    glowColor: 'rgba(236, 72, 153, 0.3)',
    borderColor: 'border-brand-pink/30',
  },
];

/**
 * Usage example:
 *
 * import CaseStudyCard from '@/components/sections/partnershipModels/CaseStudyCard';
 * import { caseStudies } from '@/data/caseStudies';
 *
 * <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 *   {caseStudies.map((study, index) => (
 *     <CaseStudyCard key={study.clientName} caseStudy={study} index={index} />
 *   ))}
 * </div>
 */
