'use client';

import { FC } from 'react';
import { Container, Section } from '../ui';
import { Typography } from '../ui';
import { motion } from 'framer-motion';

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
  points: string[];
  isFree?: boolean;
}

export interface ProcessStepsProps {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
  variant?: 'default' | 'muted';
}

export const ProcessSteps: FC<ProcessStepsProps> = ({
  heading,
  subheading,
  steps,
  variant = 'default',
}) => {
  const bgClass = variant === 'muted' ? 'bg-background-secondary' : 'bg-background';

  return (
    <Section className={`py-12 lg:py-32 ${bgClass}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <Typography variant="h2" className="mb-4 text-text-primary text-center">
            {heading}
          </Typography>
          {subheading && (
            <Typography variant="h3" className="text-text-secondary text-center">
              {subheading}
            </Typography>
          )}
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Background line pattern - only visible on desktop */}
          <div className="absolute left-0 right-0 top-0 h-full hidden md:block">
            <div className="absolute left-[25%] top-0 h-full w-px bg-border-subtle opacity-50" />
            <div className="absolute left-[50%] top-0 h-full w-px bg-border-subtle" />
            <div className="absolute left-[75%] top-0 h-full w-px bg-border-subtle opacity-50" />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border-subtle md:hidden" />

          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={step.number}
                className={`
                  relative z-10 
                  md:w-[45%] w-full 
                  ${index === 0 ? '' : 'md:mt-[-120px] mt-8'} 
                  ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-[55%]'}
                `}
              >
                {/* Step number with gradient border */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-yellow via-accent-purple to-accent-blue opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-2xl" />

                  {/* Card background with frosted glass effect */}
                  <div className="relative bg-background-secondary/90 backdrop-blur-sm p-8 rounded-2xl border border-border-subtle hover:border-accent-yellow transition-all duration-300 shadow-lg hover:shadow-accent-yellow/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <span className="text-5xl font-bold bg-gradient-to-r from-accent-yellow to-accent-purple bg-clip-text text-transparent">
                          {step.number}
                        </span>
                        <div className="absolute -inset-2 bg-accent-yellow/20 blur-md rounded-full -z-10" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Typography
                            variant="h4"
                            className="text-text-primary group-hover:text-accent-yellow transition-colors"
                          >
                            {step.title}
                          </Typography>
                          {step.isFree && (
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-green/20 text-brand-green border border-brand-green/40">
                              FREE
                            </span>
                          )}
                        </div>
                        {step.description && (
                          <Typography
                            variant="body2"
                            className="text-text-secondary mb-4 leading-relaxed"
                          >
                            {step.description}
                          </Typography>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {step.points.map((point, pointIndex) => (
                        <motion.li
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                          key={pointIndex}
                          className="flex items-start group/item"
                        >
                          <span className="h-2 w-2 mt-2 rounded-full bg-accent-yellow mr-3 group-hover/item:bg-accent-purple transition-colors flex-shrink-0" />
                          <Typography
                            variant="body1"
                            className="text-text-secondary group-hover/item:text-text-primary transition-colors"
                          >
                            {point}
                          </Typography>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop connectors */}
                <div className="hidden md:block">
                  <div
                    className={`absolute top-1/2 h-px w-[50px] ${index % 2 != 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  from-accent-yellow to-transparent`}
                    style={{
                      left: index % 2 === 0 ? '100%' : 'auto',
                      right: index % 2 === 1 ? '100%' : 'auto',
                    }}
                  />
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2"
                    style={{
                      left: index % 2 === 0 ? 'calc(100% + 50px)' : 'auto',
                      right: index % 2 === 1 ? 'calc(100% + 50px)' : 'auto',
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-accent-yellow relative z-10">
                      <div className="absolute inset-0 bg-accent-yellow/30 animate-ping rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProcessSteps;
