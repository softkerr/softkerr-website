import React from 'react';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaPalette,
  FaFigma,
  FaCheckCircle,
  FaRocket,
  FaDocker,
  FaAws,
} from '@/components/icons';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiLaravel,
  SiSketch,
  SiJest,
  SiCypress,
  SiVercel,
  SiKubernetes,
  SiMui,
  SiGitlab,
  SiJenkins,
} from '@/components/icons';

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type TechItem = {
  icon: IconComponent;
  iconClassName?: string;
  name: string;
  description: string;
  use: string;
};

export type TechCategory = {
  id: string;
  label: string;
  icon: IconComponent;
  iconClassName?: string;
  color: string;
  description: string;
  technologies: TechItem[];
};

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: FaReact,
    iconClassName: 'text-brand-blue',
    color: 'slate',
    description: 'Modern, responsive user interfaces built with cutting-edge frameworks',
    technologies: [
      {
        icon: FaReact,
        iconClassName: 'text-brand-blue',
        name: 'React',
        description: 'Component-based library for building dynamic UIs',
        use: 'Single Page Applications, Complex UI States',
      },
      {
        icon: SiNextdotjs,
        iconClassName: 'text-brand-blue',
        name: 'Next.js',
        description: 'React framework with SSR and SSG capabilities',
        use: 'SEO-optimized websites, Full-stack applications',
      },
      {
        icon: FaVuejs,
        iconClassName: 'text-brand-green',
        name: 'Vue.js',
        description: 'Progressive framework for building user interfaces',
        use: 'Progressive web apps, Interactive dashboards',
      },
      {
        icon: SiTypescript,
        iconClassName: 'text-brand-blue',
        name: 'TypeScript',
        description: 'Typed superset of JavaScript for safer code',
        use: 'Enterprise applications, Large codebases',
      },
      {
        icon: SiTailwindcss,
        iconClassName: 'text-brand-cyan',
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development',
        use: 'Custom designs, Responsive layouts',
      },
      {
        icon: SiMui,
        iconClassName: 'text-brand-violet',
        name: 'Material-UI',
        description: 'React component library implementing Material Design',
        use: 'Enterprise applications, Dashboard interfaces',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: FaNodeJs,
    iconClassName: 'text-brand-green',
    color: 'slate',
    description: 'Scalable server-side architectures and robust APIs',
    technologies: [
      {
        icon: FaNodeJs,
        iconClassName: 'text-brand-green',
        name: 'Node.js',
        description: 'JavaScript runtime for building fast server applications',
        use: 'RESTful APIs, Real-time applications',
      },
      {
        icon: SiNestjs,
        iconClassName: 'text-brand-pink',
        name: 'Nest.js',
        description: 'Progressive Node.js framework with TypeScript',
        use: 'Enterprise backends, Microservices',
      },
      {
        icon: SiLaravel,
        iconClassName: 'text-brand-red',
        name: 'Laravel',
        description: 'PHP framework for elegant web applications',
        use: 'Content management, E-commerce platforms',
      },
      {
        icon: SiPostgresql,
        iconClassName: 'text-brand-blue',
        name: 'PostgreSQL',
        description: 'Advanced open-source relational database',
        use: 'Complex queries, Data integrity',
      },
      {
        icon: SiMongodb,
        iconClassName: 'text-brand-green',
        name: 'MongoDB',
        description: 'NoSQL database for flexible data models',
        use: 'Scalable applications, Real-time data',
      },
      {
        icon: SiRedis,
        iconClassName: 'text-brand-red',
        name: 'Redis',
        description: 'In-memory data structure store for caching',
        use: 'Session management, Real-time analytics',
      },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: FaPalette,
    iconClassName: 'text-brand-pink',
    color: 'slate',
    description: 'User-centered design tools for creating exceptional experiences',
    technologies: [
      {
        icon: FaFigma,
        iconClassName: 'text-brand-pink',
        name: 'Figma',
        description: 'Collaborative interface design tool',
        use: 'UI/UX design, Prototyping, Design systems',
      },
      {
        icon: SiSketch,
        iconClassName: 'text-brand-gold',
        name: 'Sketch',
        description: 'Digital design toolkit for macOS',
        use: 'UI design, Vector graphics',
      },
      {
        icon: FaPalette,
        iconClassName: 'text-brand-violet',
        name: 'Design Systems',
        description: 'Comprehensive component libraries and guidelines',
        use: 'Brand consistency, Scalable design',
      },
    ],
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    icon: FaCheckCircle,
    iconClassName: 'text-brand-cyan',
    color: 'slate',
    description: 'Comprehensive testing strategies ensuring quality and reliability',
    technologies: [
      {
        icon: SiJest,
        iconClassName: 'text-brand-pink',
        name: 'Jest',
        description: 'JavaScript testing framework with zero config',
        use: 'Unit testing, Snapshot testing',
      },
      {
        icon: SiCypress,
        iconClassName: 'text-brand-green',
        name: 'Cypress',
        description: 'Fast, reliable end-to-end testing',
        use: 'E2E testing, Integration tests',
      },
      {
        icon: FaCheckCircle,
        iconClassName: 'text-brand-cyan',
        name: 'Manual Testing',
        description: 'Thorough manual QA processes',
        use: 'User experience, Edge cases',
      },
    ],
  },
  {
    id: 'deploy',
    label: 'Deploy & DevOps',
    icon: FaRocket,
    iconClassName: 'text-brand-violet',
    color: 'slate',
    description: 'Modern deployment pipelines and infrastructure management',
    technologies: [
      {
        icon: FaDocker,
        iconClassName: 'text-brand-cyan',
        name: 'Docker',
        description: 'Containerization platform for consistent deployments',
        use: 'Development environments, Microservices',
      },
      {
        icon: SiKubernetes,
        iconClassName: 'text-brand-blue',
        name: 'Kubernetes',
        description: 'Container orchestration for scalable applications',
        use: 'Auto-scaling, Load balancing',
      },
      {
        icon: FaAws,
        iconClassName: 'text-brand-gold',
        name: 'AWS',
        description: 'Comprehensive cloud computing platform',
        use: 'Cloud hosting, Serverless functions',
      },
      {
        icon: SiVercel,
        iconClassName: 'text-brand-blue',
        name: 'Vercel',
        description: 'Platform for frontend deployment',
        use: 'Next.js hosting, Edge functions',
      },
      {
        icon: SiGitlab,
        iconClassName: 'text-brand-red',
        name: 'CI/CD Pipelines',
        description: 'Automated deployment across multiple platforms',
        use: 'GitLab CI, Jenkins, CircleCI, Travis CI',
      },
    ],
  },
];

export default techCategories;
