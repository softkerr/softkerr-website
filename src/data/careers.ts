export interface JobPosition {
  id: string;
  title: string;
  department: 'design' | 'development';
  departmentTitle: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  applyLink?: string;
}

export const jobPositions: JobPosition[] = [
  // Design Positions
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'design',
    departmentTitle: 'Design',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We are looking for a creative and detail-oriented UI/UX Designer to join our design team. You will be responsible for creating intuitive and visually stunning user interfaces for web and mobile applications.',
    responsibilities: [
      'Design user-centered interfaces for web and mobile applications',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems and component libraries',
      'Present design concepts to clients and stakeholders',
    ],
    requirements: [
      'Upper-intermediate English level',
      '3+ years of experience in UI/UX design',
      'Strong portfolio demonstrating web and mobile design work',
      'Proficiency in Figma, Adobe XD, or Sketch',
      'Understanding of user-centered design principles',
      'Experience with responsive and mobile-first design',
      'Excellent communication and presentation skills',
    ],
    niceToHave: [
      'Experience with design systems and atomic design',
      'Knowledge of HTML/CSS basics',
      'Animation and micro-interaction design skills',
      'Experience with user research methodologies',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Health insurance coverage',
      'Modern design tools and equipment',
      'Collaborative and creative work environment',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'design',
    departmentTitle: 'Design',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Join our team as a Product Designer to shape the future of digital products. You will work on end-to-end product design, from research to final implementation.',
    responsibilities: [
      'Lead product design from concept to launch',
      'Conduct user research, interviews, and competitive analysis',
      'Create user flows, journey maps, and information architecture',
      'Design and iterate on prototypes based on user feedback',
      'Work closely with product managers and developers',
      'Define and maintain design standards across products',
    ],
    requirements: [
      'Upper-intermediate English level',
      '4+ years of product design experience',
      'Strong portfolio showing end-to-end product design',
      'Experience with user research and testing methodologies',
      'Proficiency in modern design tools (Figma preferred)',
      'Understanding of agile development processes',
      'Strategic thinking and problem-solving skills',
    ],
    niceToHave: [
      'Experience designing SaaS products',
      'Knowledge of accessibility standards (WCAG)',
      'Familiarity with analytics tools (Google Analytics, Mixpanel)',
      'Understanding of front-end technologies',
    ],
    benefits: [
      'Competitive salary with equity options',
      'Fully remote work environment',
      'Annual learning and development budget',
      'Premium health and dental insurance',
      'Unlimited PTO policy',
      'Regular team offsites and events',
    ],
  },

  // Development Positions
  {
    id: 'fullstack-developer',
    title: 'Fullstack Developer',
    department: 'development',
    departmentTitle: 'Development',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We are seeking a skilled Fullstack Developer to build and maintain cutting-edge web applications. You will work on both frontend and backend, delivering complete solutions for our clients.',
    responsibilities: [
      'Develop responsive web applications using React/Next.js',
      'Build and maintain RESTful APIs and backend services',
      'Design and implement database schemas and queries',
      'Write clean, maintainable, and well-tested code',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Optimize applications for performance and scalability',
      'Participate in code reviews and technical discussions',
    ],
    requirements: [
      'Upper-intermediate English level',
      '3+ years of fullstack development experience',
      'Strong proficiency in React and Node.js',
      'Experience with TypeScript',
      'Knowledge of SQL and NoSQL databases',
      'Understanding of RESTful API design principles',
      'Experience with Git and version control',
      'Strong problem-solving and debugging skills',
    ],
    niceToHave: [
      'Experience with Next.js and server-side rendering',
      'Knowledge of cloud platforms (AWS, GCP, Azure)',
      'Familiarity with Docker and containerization',
      'Experience with GraphQL',
      'Understanding of CI/CD pipelines',
      'Contributions to open-source projects',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Flexible work schedule and remote options',
      'Learning budget for courses and conferences',
      'Health and wellness benefits',
      'Latest development tools and hardware',
      'Career growth opportunities',
    ],
  },
  {
    id: 'senior-fullstack-developer',
    title: 'Senior Fullstack Developer',
    department: 'development',
    departmentTitle: 'Development',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We are looking for a Senior Fullstack Developer to lead technical projects and mentor junior developers. You will architect and build complex web applications while ensuring best practices.',
    responsibilities: [
      'Lead the architecture and development of web applications',
      'Mentor and guide junior developers through code reviews',
      'Make technical decisions on frameworks and tools',
      'Design scalable and maintainable system architectures',
      'Collaborate with stakeholders to define technical requirements',
      'Implement best practices for testing and deployment',
      'Troubleshoot and resolve complex technical issues',
    ],
    requirements: [
      'Upper-intermediate English level',
      '5+ years of fullstack development experience',
      'Expert knowledge of React, Next.js, and Node.js',
      'Strong TypeScript skills',
      'Experience with microservices architecture',
      'Proficiency in database design and optimization',
      'Leadership and mentoring experience',
      'Excellent communication skills',
    ],
    niceToHave: [
      'Experience with serverless architectures',
      'Knowledge of DevOps practices and tools',
      'Experience with real-time applications (WebSockets)',
      'Familiarity with AI/ML integration',
      'Previous experience in a tech lead role',
      'Active in the developer community',
    ],
    benefits: [
      'Premium salary with equity compensation',
      'Fully remote with flexible hours',
      'Generous learning and development budget',
      'Comprehensive health and retirement benefits',
      'Latest tech stack and development tools',
      'Leadership development opportunities',
    ],
  },
];
