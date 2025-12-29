'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { Section, Container, Typography } from '@/components/ui';
import { FaClipboardList, FaPalette, FaCode, FaSearch, FaRocket } from '@/components/icons';
import { BsCheckCircleFill } from '@/components/icons';
import { debounce } from '@/lib/performance';

interface SprintStep {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  icon: React.ReactNode;
  days: string;
  details: string[];
}

const sprintSteps: SprintStep[] = [
  {
    title: 'Sprint Planning',
    description: 'Setting goals and planning tasks for the next two weeks',
    colorClass: 'brand-gold',
    bgClass: 'bg-brand-gold/20',
    borderClass: 'border-brand-gold',
    textClass: 'text-brand-gold',
    icon: <FaClipboardList />,
    days: 'Day 1',
    details: [
      'Define sprint goals and objectives',
      'Break down features into user stories',
      'Estimate task complexity and time',
      'Assign responsibilities to team members',
    ],
  },
  {
    title: 'Design Phase',
    description: 'Creating wireframes and visual designs',
    colorClass: 'brand-blue',
    bgClass: 'bg-brand-blue/20',
    borderClass: 'border-brand-blue',
    textClass: 'text-brand-blue',
    icon: <FaPalette />,
    days: 'Day 2-5',
    details: [
      'Create wireframes and mockups',
      'Design user interface components',
      'Establish design system guidelines',
      'Review and iterate on feedback',
    ],
  },
  {
    title: 'Development',
    description: 'Building and implementing features',
    colorClass: 'brand-violet',
    bgClass: 'bg-brand-violet/20',
    borderClass: 'border-brand-violet',
    textClass: 'text-brand-violet',
    icon: <FaCode />,
    days: 'Day 5-12',
    details: [
      'Write clean, maintainable code',
      'Implement responsive layouts',
      'Integrate APIs and backend services',
      'Daily standup meetings and progress tracking',
    ],
  },
  {
    title: 'Testing',
    description: 'Quality assurance and bug fixing',
    colorClass: 'brand-pink',
    bgClass: 'bg-brand-pink/20',
    borderClass: 'border-brand-pink',
    textClass: 'text-brand-pink',
    icon: <FaSearch />,
    days: 'Day 12-14',
    details: [
      'Perform unit and integration testing',
      'Cross-browser compatibility checks',
      'Mobile responsiveness testing',
      'Fix bugs and optimize performance',
    ],
  },
  {
    title: 'Release',
    description: 'Deploying to production and gathering feedback',
    icon: <FaRocket />,
    colorClass: 'brand-green',
    bgClass: 'bg-brand-green/20',
    borderClass: 'border-brand-green',
    textClass: 'text-brand-green',
    days: 'Day 14',
    details: [
      'Deploy to production environment',
      'Monitor performance and errors',
      'Gather user feedback',
      'Plan next sprint improvements',
    ],
  },
];

export default function SprintTimelineCircular() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => {
        setPrevIndex(prev);
        return (prev + 1) % sprintSteps.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Responsive radius and dimensions - memoized
  const getCircleDimensions = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 320px container
        return { radius: 120, centerX: 160, centerY: 160, size: 320 };
      } else if (width < 1024) {
        // Tablet: 400px container
        return { radius: 160, centerX: 200, centerY: 200, size: 400 };
      }
    }
    // Desktop: 500px container
    return { radius: 200, centerX: 250, centerY: 250, size: 500 };
  }, []);

  const [dimensions, setDimensions] = useState(getCircleDimensions());

  useEffect(() => {
    // Debounced resize handler to reduce main-thread work
    const handleResize = debounce(() => {
      setDimensions(getCircleDimensions());
    }, 150);

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [getCircleDimensions]);

  const { radius, centerX, centerY, size } = dimensions;

  return (
    <Section variant="default" padding="xl" className="bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(240,185,11,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(240,185,11,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
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
              SPRINT SYSTEM
            </Typography>
            <Typography variant="h2" className="mb-6 text-white text-center">
              Two Week Sprint Cycle
            </Typography>
            <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto text-center">
              Our agile development process with daily scrum meetings ensures efficient and
              transparent project delivery
            </Typography>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Circular Timeline */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#F0B90B]/20 to-[#2563EB]/20 backdrop-blur-xl border border-white/10 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {activeIndex + 1}
                </div>
                <div className="text-xs text-gray-400">of {sprintSteps.length}</div>
              </div>
            </div>

            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <motion.circle
                key={activeIndex === 0 && prevIndex === sprintSteps.length - 1 ? 'reset' : 'normal'}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className={`${sprintSteps[activeIndex].textClass} drop-shadow-[0_0_10px_currentColor]`}
                initial={{
                  pathLength:
                    activeIndex === 0 && prevIndex === sprintSteps.length - 1
                      ? 1
                      : activeIndex / sprintSteps.length,
                }}
                animate={{
                  pathLength: (activeIndex + 1) / sprintSteps.length,
                }}
                transition={{
                  duration: activeIndex === 0 && prevIndex === sprintSteps.length - 1 ? 0 : 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>

            {/* Step Nodes */}
            {sprintSteps.map((step, index) => {
              const angle = (index / sprintSteps.length) * 2 * Math.PI - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              // Node size based on screen size
              const nodeSize =
                size < 400 ? 'w-12 h-12 text-base' : 'w-14 h-14 text-lg sm:w-16 sm:h-16 sm:text-xl';

              return (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                >
                  <motion.button
                    className={`relative ${nodeSize} rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md
                      ${
                        isActive
                          ? `${step.bgClass} ${step.borderClass} ${step.textClass}`
                          : `bg-background/80 ${isPassed ? step.borderClass : 'border-white/20'} ${step.textClass}`
                      }
                      ${size < 400 ? 'border-2' : 'border-[3px]'}
                    `}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      boxShadow: isActive
                        ? `0 0 30px currentColor, 0 0 60px currentColor`
                        : '0 0 0 rgba(0, 0, 0, 0)',
                    }}
                    whileHover={{ scale: isActive ? 1.25 : 1.15 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      setPrevIndex(activeIndex);
                      setActiveIndex(index);
                      setIsHovered(true);
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                  >
                    {isPassed && !isActive ? (
                      <BsCheckCircleFill
                        className={`absolute -top-1 -right-1 bg-[#02021e] rounded-full ${
                          size < 400 ? 'text-sm' : 'text-base sm:text-lg'
                        }`}
                        style={{ color: '#10B981' }}
                      />
                    ) : null}
                    {step.icon}
                  </motion.button>

                  {/* Label - Hidden on very small screens */}
                  {size >= 400 && (
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center hidden sm:block pointer-events-none"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: isActive ? 1 : 0.5,
                        y: 0,
                      }}
                    >
                      <div
                        className={`text-xs font-semibold ${isActive ? step.textClass : 'text-text-secondary'}`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.days}</div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="flex-1 max-w-xl w-full px-4 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-4 sm:p-6 lg:p-8 border backdrop-blur-md bg-background/60 ${sprintSteps[activeIndex].borderClass} border-opacity-25`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl flex-shrink-0
                      ${sprintSteps[activeIndex].bgClass} bg-opacity-20 ${sprintSteps[activeIndex].borderClass} border-2 ${sprintSteps[activeIndex].textClass}`}
                  >
                    {sprintSteps[activeIndex].icon}
                  </div>
                  <div className="min-w-0">
                    <Typography
                      variant="h3"
                      className="text-white mb-1 text-lg sm:text-xl lg:text-2xl"
                    >
                      {sprintSteps[activeIndex].title}
                    </Typography>
                    <div
                      className={`text-xs sm:text-sm font-medium ${sprintSteps[activeIndex].textClass}`}
                    >
                      {sprintSteps[activeIndex].days}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <Typography
                  variant="body1"
                  className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base"
                >
                  {sprintSteps[activeIndex].description}
                </Typography>

                {/* Details List */}
                <div className="space-y-2 sm:space-y-3">
                  {sprintSteps[activeIndex].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5
                          ${sprintSteps[activeIndex].bgClass} bg-opacity-20 ${sprintSteps[activeIndex].borderClass} border-2`}
                      >
                        <div
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${sprintSteps[activeIndex].bgClass}`}
                        />
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm flex-1">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline Steps Below (Mobile Friendly) */}
        <div className="mt-12 lg:hidden flex justify-center gap-2">
          {sprintSteps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(index);
                setIsHovered(true);
              }}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? step.bgClass : 'bg-white/20'}`}
              animate={{
                scale: index === activeIndex ? 1.5 : 1,
              }}
              aria-label={`Step ${index + 1}: ${step.title}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
