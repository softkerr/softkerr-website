'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';
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
} from 'react-icons/fa';
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
} from 'react-icons/si';

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FaReact />,
    color: 'slate',
    description: 'Modern, responsive user interfaces built with cutting-edge frameworks',
    technologies: [
      {
        icon: <FaReact className="text-[#61DAFB]" />,
        name: 'React',
        description: 'Component-based library for building dynamic UIs',
        use: 'Single Page Applications, Complex UI States',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
        description: 'React framework with SSR and SSG capabilities',
        use: 'SEO-optimized websites, Full-stack applications',
      },
      {
        icon: <FaVuejs className="text-[#4FC08D]" />,
        name: 'Vue.js',
        description: 'Progressive framework for building user interfaces',
        use: 'Progressive web apps, Interactive dashboards',
      },
      {
        icon: <SiTypescript className="text-[#3178C6]" />,
        name: 'TypeScript',
        description: 'Typed superset of JavaScript for safer code',
        use: 'Enterprise applications, Large codebases',
      },
      {
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development',
        use: 'Custom designs, Responsive layouts',
      },
      {
        icon: <SiMui className="text-[#007FFF]" />,
        name: 'Material-UI',
        description: 'React component library implementing Material Design',
        use: 'Enterprise applications, Dashboard interfaces',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <FaNodeJs />,
    color: 'slate',
    description: 'Scalable server-side architectures and robust APIs',
    technologies: [
      {
        icon: <FaNodeJs className="text-[#339933]" />,
        name: 'Node.js',
        description: 'JavaScript runtime for building fast server applications',
        use: 'RESTful APIs, Real-time applications',
      },
      {
        icon: <SiNestjs className="text-[#E0234E]" />,
        name: 'Nest.js',
        description: 'Progressive Node.js framework with TypeScript',
        use: 'Enterprise backends, Microservices',
      },
      {
        icon: <SiLaravel className="text-[#FF2D20]" />,
        name: 'Laravel',
        description: 'PHP framework for elegant web applications',
        use: 'Content management, E-commerce platforms',
      },
      {
        icon: <SiPostgresql className="text-[#4169E1]" />,
        name: 'PostgreSQL',
        description: 'Advanced open-source relational database',
        use: 'Complex queries, Data integrity',
      },
      {
        icon: <SiMongodb className="text-[#47A248]" />,
        name: 'MongoDB',
        description: 'NoSQL database for flexible data models',
        use: 'Scalable applications, Real-time data',
      },
      {
        icon: <SiRedis className="text-[#DC382D]" />,
        name: 'Redis',
        description: 'In-memory data structure store for caching',
        use: 'Session management, Real-time analytics',
      },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: <FaPalette />,
    color: 'slate',
    description: 'User-centered design tools for creating exceptional experiences',
    technologies: [
      {
        icon: <FaFigma className="text-[#F24E1E]" />,
        name: 'Figma',
        description: 'Collaborative interface design tool',
        use: 'UI/UX design, Prototyping, Design systems',
      },
      {
        icon: <SiSketch className="text-[#F7B500]" />,
        name: 'Sketch',
        description: 'Digital design toolkit for macOS',
        use: 'UI design, Vector graphics',
      },
      {
        icon: <FaPalette className="text-slate-600" />,
        name: 'Design Systems',
        description: 'Comprehensive component libraries and guidelines',
        use: 'Brand consistency, Scalable design',
      },
    ],
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    icon: <FaCheckCircle />,
    color: 'slate',
    description: 'Comprehensive testing strategies ensuring quality and reliability',
    technologies: [
      {
        icon: <SiJest className="text-[#C21325]" />,
        name: 'Jest',
        description: 'JavaScript testing framework with zero config',
        use: 'Unit testing, Snapshot testing',
      },
      {
        icon: <SiCypress className="text-[#17202C]" />,
        name: 'Cypress',
        description: 'Fast, reliable end-to-end testing',
        use: 'E2E testing, Integration tests',
      },

      {
        icon: <FaCheckCircle className="text-emerald-500" />,
        name: 'Manual Testing',
        description: 'Thorough manual QA processes',
        use: 'User experience, Edge cases',
      },
    ],
  },
  {
    id: 'deploy',
    label: 'Deploy & DevOps',
    icon: <FaRocket />,
    color: 'slate',
    description: 'Modern deployment pipelines and infrastructure management',
    technologies: [
      {
        icon: <FaDocker className="text-[#2496ED]" />,
        name: 'Docker',
        description: 'Containerization platform for consistent deployments',
        use: 'Development environments, Microservices',
      },
      {
        icon: <SiKubernetes className="text-[#326CE5]" />,
        name: 'Kubernetes',
        description: 'Container orchestration for scalable applications',
        use: 'Auto-scaling, Load balancing',
      },
      {
        icon: <FaAws className="text-[#FF9900]" />,
        name: 'AWS',
        description: 'Comprehensive cloud computing platform',
        use: 'Cloud hosting, Serverless functions',
      },
      {
        icon: <SiVercel />,
        name: 'Vercel',
        description: 'Platform for frontend deployment',
        use: 'Next.js hosting, Edge functions',
      },
      {
        icon: <SiGitlab className="text-[#FC6D26]" />,
        name: 'CI/CD Pipelines',
        description: 'Automated deployment across multiple platforms',
        use: 'GitLab CI, Jenkins, CircleCI, Travis CI',
      },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = techCategories.find(cat => cat.id === activeTab);

  return (
    <Section variant="default" padding="xl" className="bg-background">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="overline"
            className="text-accent-yellow mb-4 tracking-widest text-center"
          >
            Technology Stack
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 text-center"
          >
            Cutting-Edge Technologies We Use
          </Typography>
          <Typography
            variant="body1"
            className="text-lg text-text-secondary max-w-3xl mx-auto text-center"
          >
            We leverage the latest tools and frameworks to build robust, scalable, and
            high-performance web applications
          </Typography>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-accent-yellow text-background shadow-lg shadow-accent-yellow/20'
                  : 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80 hover:text-text-primary border border-border-subtle'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Select ${category.label} Technology Category`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Description */}
              <div className="text-center mb-12">
                <Typography
                  variant="body1"
                  className="text-lg text-text-secondary max-w-2xl mx-auto text-center"
                >
                  {activeCategory.description}
                </Typography>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-background-secondary/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-background-secondary transition-all duration-300 border border-border-subtle hover:border-accent-yellow hover:shadow-lg hover:shadow-accent-yellow/10"
                  >
                    {/* Gradient glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-yellow via-accent-purple to-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl" />

                    {/* Icon & Name */}
                    <div className="relative flex-col flex items-start gap-4 mb-4">
                      <div className="flex items-between gap-4">
                        <div className="text-4xl flex-shrink-0">{tech.icon}</div>
                        <Typography
                          variant="h4"
                          className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-yellow transition-colors"
                        >
                          {tech.name}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        className="text-sm text-text-secondary group-hover:text-text-primary transition-colors"
                      >
                        {tech.description}
                      </Typography>
                    </div>

                    {/* Use Cases */}
                    <div className="relative pt-4 border-t border-border-subtle">
                      <div className="text-xs font-semibold text-text-muted mb-2">BEST FOR:</div>
                      <div className="text-sm text-text-secondary">{tech.use}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
