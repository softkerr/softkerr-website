'use client';

import React, { useState } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { Section, Container, Typography } from '@/components/ui';
import { techCategories } from '@/data/techStack';

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
          {techCategories.map(category => {
            const CategoryIcon = category.icon;
            return (
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
                <span className="text-xl">
                  <CategoryIcon className={category.iconClassName} />
                </span>
                <span>{category.label}</span>
              </motion.button>
            );
          })}
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
                {activeCategory.technologies.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
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
                          <div className="text-4xl flex-shrink-0">
                            <TechIcon
                              className={`h-6 lg:h-9 w-6 lg:w-9 ${tech.iconClassName ?? ''}`}
                            />
                          </div>
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
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
