'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { Container, Typography } from '@/components/ui';
import { debounce } from '@/lib/performance';

interface Step {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  glowClass: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  keyPoints: string[];
  metrics?: string[];
}

interface ExpandableCardListProps {
  heading?: string;
  subheading?: string;
  description?: string;
  steps: Step[];
  showMetrics?: boolean;
  showBottomCTA?: boolean;
  bottomCTAIcon?: React.ReactNode;
  bottomCTAText?: string;
}

export default function ExpandableCardList({
  heading,
  subheading,
  description,
  steps,
  showMetrics = true,
  showBottomCTA = true,
  bottomCTAIcon,
  bottomCTAText,
}: ExpandableCardListProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size with debounced resize handler
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    // Debounce resize events to reduce main-thread work
    const debouncedCheck = debounce(checkMobile, 150);
    window.addEventListener('resize', debouncedCheck, { passive: true });

    return () => window.removeEventListener('resize', debouncedCheck);
  }, []);

  const handleCardHover = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCardLeave = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  return (
    <>
      {/* Enhanced Background Effects */}
      <div className="absolute h-full overflow-hidden">
        <div className="absolute h-full bg-gradient-to-b from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />

        {/* Animated floating orbs */}
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-yellow/5 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              className="text-accent-yellow mb-4 tracking-widest text-center"
            >
              {heading}
            </Typography>

            <Typography variant="h2" className="mb-6 text-text-primary text-center">
              {subheading}
            </Typography>
            <Typography variant="body1" className="text-text-primary max-w-3xl mx-auto text-center">
              {description}
            </Typography>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const shouldShowContent = isMobile || isActive; // Always show on mobile
            const StepIcon = step.icon;

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl transition-opacity duration-500 blur-xl ${
                    isActive ? 'opacity-70' : 'opacity-0 group-hover:opacity-50'
                  } bg-gradient-to-br from-${step.colorClass}/25 to-${step.colorClass}/10`}
                />

                <motion.div
                  className={`relative rounded-3xl overflow-hidden bg-background-secondary/90 backdrop-blur-sm border-2 transition-all duration-400 ${
                    isActive
                      ? `border-${step.colorClass} ${step.glowClass} shadow-2xl`
                      : 'border-border-subtle'
                  }`}
                >
                  {/* Animated gradient border on top */}
                  <motion.div
                    className={`absolute top-0 left-0 h-1 w-full ${step.bgClass}`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                      {/* Number & Icon */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className={`relative w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-2 md:mb-3 border-2 ${step.bgClass} ${step.borderClass} ${step.textClass}`}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            rotate: isActive ? [0, 5, -5, 0] : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <StepIcon className="h-8 w-8" />

                          {/* Ping effect when active */}
                          {isActive && (
                            <motion.div
                              className={`absolute inset-0 rounded-xl md:rounded-2xl border-2 ${step.borderClass.replace('/40', '')}`}
                              initial={{ opacity: 1, scale: 1 }}
                              animate={{ opacity: 0, scale: 1.5 }}
                              transition={{ duration: 1 }}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 w-full">
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="text-xl md:text-2xl text-text-primary mb-2 group-hover:text-accent-yellow transition-colors"
                          >
                            {step.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            className="text-sm md:text-base text-text-secondary leading-relaxed"
                          >
                            {step.description}
                          </Typography>
                        </div>

                        {/* Metrics Pills */}
                        {showMetrics && step.metrics && (
                          <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            {step.metrics.map((metric, metricIndex) => (
                              <motion.span
                                key={metricIndex}
                                className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-semibold border ${step.bgClass} ${step.borderClass} ${step.textClass} transition-opacity`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: isActive ? 1 : 0.7, scale: 1 }}
                                transition={{ delay: metricIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {metric}
                              </motion.span>
                            ))}
                          </div>
                        )}

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {shouldShowContent && (
                            <motion.div
                              initial={
                                isMobile
                                  ? { height: 'auto', opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={
                                isMobile
                                  ? { height: 'auto', opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{ duration: isMobile ? 0 : 0.4, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 pt-6 border-t border-border-subtle">
                                <div className="text-xs md:text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">
                                  Key Activities
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                  {step.keyPoints.map((point, pointIndex) => (
                                    <motion.li
                                      key={pointIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: pointIndex * 0.08 }}
                                      className="flex items-center gap-2 md:gap-3 text-text-secondary"
                                    >
                                      <motion.span
                                        className={`flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${step.colorClass}`}
                                      />
                                      <Typography variant="body2">{point}</Typography>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        {showBottomCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-yellow/10 via-accent-purple/10 to-accent-blue/10 rounded-full border border-accent-yellow/30">
              {bottomCTAIcon}
              <span className="text-text-secondary text-sm">{bottomCTAText}</span>
            </div>
          </motion.div>
        )}
      </Container>
    </>
  );
}
