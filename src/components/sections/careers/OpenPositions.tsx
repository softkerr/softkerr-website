'use client';

import { useState } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { Container, Typography, Button, Section } from '@/components/ui';
import { jobPositions, JobPosition } from '@/data/careers';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaClock, FaDollarSign, FaMapMarkerAlt, HiSparkles } from '@/components/icons';

export default function OpenPositions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryColor = (department: string) => {
    switch (department) {
      case 'design':
        return 'brand-violet';
      case 'development':
        return 'brand-gold';
      default:
        return 'brand-violet';
    }
  };

  return (
    <Section id="open-positions" className="relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
            <HiSparkles className="text-brand-gold" />
            <Typography variant="body2" className="text-brand-gold font-medium">
              Open Positions
            </Typography>
          </div>

          <Typography variant="h2" className="mb-4 text-center">
            Find Your <span className="text-gradient">Perfect Role</span>
          </Typography>

          <Typography variant="body1" color="secondary" className="max-w-2xl mx-auto text-center">
            Explore our current openings and join a team that values creativity, innovation, and
            collaboration.
          </Typography>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {jobPositions.map((job, index) => {
              const isExpanded = expandedId === job.id;
              const colorClass = getCategoryColor(job.department);

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-background-secondary/50 border border-border-subtle hover:border-brand-violet/40 transition-all duration-300 overflow-hidden">
                    {/* Job Header - Always Visible */}
                    <div className="p-6 cursor-pointer" onClick={() => toggleExpand(job.id)}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Department Badge */}
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${colorClass} text-text-primary mb-3`}
                          >
                            {job.departmentTitle}
                          </span>

                          {/* Job Title */}
                          <Typography
                            variant="h4"
                            className="mb-3 group-hover:text-brand-violet transition-colors"
                          >
                            {job.title}
                          </Typography>

                          {/* Job Meta Info */}
                          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-brand-violet" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaClock className="text-brand-gold" />
                              <span>{job.type}</span>
                            </div>
                          </div>

                          {/* Short Description */}
                          <Typography
                            variant="body2"
                            color="secondary"
                            className="mt-3 line-clamp-2"
                          >
                            {job.description}
                          </Typography>
                        </div>

                        {/* Expand Button */}
                        <motion.button
                          className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center hover:bg-brand-violet/20 transition-colors"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          aria-label="Expand Job Details"
                        >
                          <FaChevronDown className="text-brand-violet" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-6 border-t border-border-subtle pt-6">
                            {/* Responsibilities */}
                            <div>
                              <Typography variant="h5" className="mb-3 text-brand-violet">
                                Responsibilities
                              </Typography>
                              <ul className="space-y-2">
                                {job.responsibilities.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-text-secondary"
                                  >
                                    <span className="text-brand-violet mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                              <Typography variant="h5" className="mb-3 text-brand-gold">
                                Requirements
                              </Typography>
                              <ul className="space-y-2">
                                {job.requirements.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-text-secondary"
                                  >
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Nice to Have */}
                            {job.niceToHave && job.niceToHave.length > 0 && (
                              <div>
                                <Typography variant="h5" className="mb-3 text-brand-cyan">
                                  Nice to Have
                                </Typography>
                                <ul className="space-y-2">
                                  {job.niceToHave.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-3 text-text-secondary"
                                    >
                                      <span className="text-brand-cyan mt-1">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Benefits */}
                            <div>
                              <Typography variant="h5" className="mb-3 text-brand-pink">
                                Benefits
                              </Typography>
                              <ul className="space-y-2">
                                {job.benefits.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-text-secondary"
                                  >
                                    <span className="text-brand-pink mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {jobPositions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Typography variant="h5" color="secondary">
              No positions found in this category
            </Typography>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
