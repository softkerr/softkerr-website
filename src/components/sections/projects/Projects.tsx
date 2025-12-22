'use client';

import { m as motion } from '@/lib/motion';
import { Typography, Container, ScrollReveal, Section } from '@/components/ui';
import {
  FaUsers,
  FaBolt,
  FaLock,
  FaBox,
  FaUserTie,
  FaTruck,
  FaChartLine,
  FaCheckCircle,
  FaQuoteLeft,
  FaBullseye,
  FaLightbulb,
  FaTooth,
  FaGlobeAmericas,
  FaStar,
} from '@/components/icons';
import { HiSparkles } from '@/components/icons';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';

import { projects, Project as ProjectType } from '@/data/projects';

// Icon mapping for metrics - supports both string names and IconType components
const getMetricIcon = (icon: string) => {
  // If it's already a component (IconType), render it

  // Otherwise, map string to icon
  const iconMap: { [key: string]: React.ReactNode } = {
    FaUsers: <FaUsers className="text-4xl text-accent-blue" />,
    FaBolt: <FaBolt className="text-4xl text-accent-yellow" />,
    FaLock: <FaLock className="text-4xl text-accent-purple" />,
    FaBox: <FaBox className="text-4xl text-accent-blue" />,
    FaUserTie: <FaUserTie className="text-4xl text-accent-purple" />,
    FaTruck: <FaTruck className="text-4xl text-accent-yellow" />,
    FaChartLine: <FaChartLine className="text-4xl text-accent-blue" />,
    FaTooth: <FaTooth className="text-4xl text-accent-blue" />,
    FaGlobeAmericas: <FaGlobeAmericas className="text-4xl text-accent-yellow" />,
    FaStar: <FaStar className="text-4xl text-accent-yellow" />,
  };
  return iconMap[icon] || <HiSparkles className="text-4xl text-accent-yellow" />;
};

interface Props {
  project: ProjectType;
}

const ProjectSection = ({ project }: Props) => {
  return (
    <section id={project.id} className="py-12 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-l from-accent-yellow/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent-blue/10 to-transparent rounded-full blur-3xl" />

      <Container>
        {/* Header - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-12 mb-12 lg:mb-24">
          <ScrollReveal className="lg:col-span-7">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-brand-gold text-background-secondary text-sm font-medium mb-4">
                {project.category}
              </div>
              <Typography
                variant="h2"
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              >
                {project.title}
              </Typography>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-5 flex items-end mt-4">
            <Typography variant="body1" className="text-xl text-text-secondary leading-relaxed">
              {project.description}
            </Typography>
          </ScrollReveal>
        </div>

        {/* Metrics - Horizontal Cards */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row gap-6 mb-12 lg:mb-24">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="flex-1 relative p-8 bg-gradient-to-br from-background-secondary to-background rounded-2xl border-2 border-brand-gold/40 hover:border-brand-gold transition-colors overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-baseline gap-6">
                  <div className="flex items-center justify-center">
                    {getMetricIcon(metric.icon)}
                  </div>
                  <div>
                    <div className="text-4xl xl:text-5xl font-black text-text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-text-secondary font-medium">{metric.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Video - Bold Frame */}
        {project.video && (
          <ScrollReveal delay={0.2}>
            <div className="relative mb-12 lg:mb-32">
              <div className="aspect-video rounded-2xl overflow-hidden bg-background-secondary border border-border-subtle group-hover:border-accent-yellow transition-colors duration-300 shadow-lg group-hover:shadow-accent-yellow/40">
                <VideoPlayer video={project.video} title={project.title} />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Challenge & Solution - Side by Side with Icons */}
        <div className="mb-12 lg:mb-32">
          <ScrollReveal>
            <Typography variant="h3" className="text-4xl lg:text-5xl font-black mb-16">
              Problem → Solution
            </Typography>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2}>
              <div className="relative p-10 bg-background-secondary rounded-2xl border-l-[16px] border-accent-yellow h-full">
                <div className="absolute top-8 right-8 text-4xl lg:text-6xl">
                  <FaBullseye className="text-accent-yellow" />
                </div>
                <Typography variant="h4" className="text-2xl font-bold mb-6 text-accent-yellow">
                  THE CHALLENGE
                </Typography>
                <Typography
                  variant="body1"
                  className="text-text-primary text-lg leading-relaxed relative z-10"
                >
                  {project.challenge}
                </Typography>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative p-10 bg-background-secondary rounded-2xl border-l-[16px] border-accent-blue h-full">
                <div className="absolute top-8 right-8 text-4xl lg:text-6xl">
                  <FaLightbulb className="text-accent-blue" />
                </div>
                <Typography variant="h4" className="text-2xl font-bold mb-6 text-accent-blue">
                  OUR APPROACH
                </Typography>
                <Typography
                  variant="body1"
                  className="text-text-primary text-lg leading-relaxed relative z-10"
                >
                  {project.solution}
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Technologies - Pills with Gradient */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12 lg:mb-32">
            <Typography variant="h4" className="text-3xl font-black mb-8 uppercase tracking-wider">
              Tech Stack
            </Typography>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map(({ name, icon }, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:bg-accent-yellow hover:shadow-lg hover:shadow-accent-yellow/20 bg-background-secondary text-text-secondary hover:bg-background-secondary/80 hover:text-text-primary border border-border-subtle"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{icon}</span>
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Features - Large Cards Grid */}
        {project.features && (
          <div className="mb-12 lg:mb-32">
            <ScrollReveal>
              <Typography variant="h3" className="text-4xl lg:text-5xl font-black mb-8 lg:mb-16">
                Core Features
              </Typography>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.features.map((feature, index) => (
                <>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-background-secondary lg:bg-background-secondary/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-background-secondary transition-all duration-300 border border-accent-yellow lg:border-border-subtle hover:border-accent-yellow hover:shadow-lg hover:shadow-accent-yellow/10"
                  >
                    {/* Gradient glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-yellow via-accent-purple to-accent-blue opacity-20 lg:opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl" />

                    <div className="relative flex items-center gap-4 ">
                      <div className="text-2xl lg:text-3xl flex-shrink-0 p-4 border-2 rounded-full border-brand-gold xl:border-brand-gold/60 group-hover:border-brand-gold w-14 h-14 flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <Typography
                          variant="h4"
                          className="font-bold text-text-primary mb-2 group-hover:text-accent-yellow transition-colors"
                        >
                          {feature.title}
                        </Typography>
                      </div>
                    </div>

                    <div className="relative pt-4 border-t border-border-subtle">
                      <Typography
                        variant="body1"
                        className="text-xl lg:text-xl text-text-primary lg:text-text-secondary group-hover:text-text-primary transition-colors"
                      >
                        {feature.description}
                      </Typography>
                    </div>
                  </motion.div>
                </>
              ))}
            </div>
          </div>
        )}

        {/* Results - Bold List */}
        {project.results && (
          <ScrollReveal delay={0.2}>
            <div className="mb-12 lg:mb-32">
              <Typography variant="h3" className="text-5xl font-black mb-16">
                The Results
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-6 p-6 bg-background-secondary rounded-xl border-l-[12px] border-brand-green"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-background text-xl" />
                    </div>
                    <Typography variant="body1" className="text-text-primary text-lg font-medium">
                      {result}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Testimonial - Bold Card */}
        {project.testimonial && (
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-yellow/20 via-accent-blue/20 to-accent-purple/20 rounded-3xl blur-2xl" />
              <div className="relative p-12 bg-background-secondary rounded-2xl border-4 border-accent-yellow/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      width={32}
                      height={32}
                      className="w-32 h-32 rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-10">
                    <Typography
                      variant="h4"
                      className="text-xl lg:text-3xl font-bold text-text-primary mb-6 leading-relaxed"
                    >
                      "{project.testimonial.quote}"
                    </Typography>
                    <div>
                      <Typography variant="body1" className="font-bold text-text-primary text-xl">
                        — {project.testimonial.author}
                      </Typography>
                      <Typography variant="body2" className="text-text-secondary text-lg">
                        {project.testimonial.role}, {project.testimonial.company}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
};

const Projects = () => {
  return (
    <Section component="section" className="bg-background py-12 lg:py-32">
      {projects.map(project => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </Section>
  );
};

export default Projects;
