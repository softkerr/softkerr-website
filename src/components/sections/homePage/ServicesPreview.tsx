'use client';

import { m as motion, useMotionValue, useTransform, useSpring } from '@/lib/motion';
import { useState, useRef, useMemo, useCallback, type ReactNode } from 'react';
import Link from 'next/link';
import { Typography, Section, Container, ScrollReveal, Button } from '@/components/ui';
import { FaRocket, FaPaintBrush, FaCogs, FaTools } from '@/components/icons';

// Constants
const SPRING_CONFIG = { stiffness: 300, damping: 30 } as const;
const PARALLAX_RANGE = [-0.5, 0.5];

// Types
interface ServiceConfig {
  title: string;
  description: string;
  icon: ReactNode;
  color: 'gold' | 'violet' | 'blue' | 'cyan';
  tab: 'development' | 'design' | 'support';
  glowColor: string; // RGB values for button glow effect
}

// Service configurations using Tailwind theme colors
const SERVICES: readonly ServiceConfig[] = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: <FaRocket />,
    color: 'gold',
    tab: 'development',
    glowColor: '240, 185, 11',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful and delightful experiences.',
    icon: <FaPaintBrush />,
    color: 'violet',
    tab: 'design',
    glowColor: '139, 92, 246',
  },
  {
    title: 'CMS Development',
    description: 'Custom CMS Built for Speed and Scale.',
    icon: <FaCogs />,
    color: 'cyan',
    tab: 'development',
    glowColor: '6, 182, 212',
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your digital products running smoothly.',
    icon: <FaTools />,
    color: 'blue',
    tab: 'support',
    glowColor: '37, 99, 235',
  },
] as const;

// Glass Morphism Card with Parallax Depth - Optimized
function ServiceCard({ service, index }: { service: ServiceConfig; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, SPRING_CONFIG);
  const mouseYSpring = useSpring(y, SPRING_CONFIG);

  // Simplified parallax - only 2 layers instead of 3 for better performance
  const layer1X = useTransform(mouseXSpring, PARALLAX_RANGE, [-15, 15]);
  const layer1Y = useTransform(mouseYSpring, PARALLAX_RANGE, [-15, 15]);

  const layer2X = useTransform(mouseXSpring, PARALLAX_RANGE, [-8, 8]);
  const layer2Y = useTransform(mouseYSpring, PARALLAX_RANGE, [-8, 8]);

  // Memoized color classes
  const colorClasses = useMemo(
    () => ({
      text: `text-brand-${service.color}` as const,
      bg: `bg-brand-${service.color}` as const,
    }),
    [service.color]
  );

  // Throttled mouse move handler using RAF
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      // Cancel previous RAF to throttle updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(mouseX);
        y.set(mouseY);
      });
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, [x, y]);

  return (
    <ScrollReveal delay={0.2}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative h-full"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            transformStyle: 'preserve-3d',
          }}
          className="relative h-full rounded-3xl overflow-hidden"
        >
          {/* Frosted Glass Effect */}
          <motion.div
            className={`absolute inset-0 backdrop-blur-3xl bg-white/5 border rounded-3xl pointer-events-none transition-colors duration-500 ${
              isHovered ? `border-brand-${service.color}/60` : 'border-white/10'
            }`}
          />

          {/* Gradient Glass Overlay */}
          <motion.div
            className={`absolute inset-0 rounded-3xl pointer-events-none from-brand-${service.color}/10 bg-gradient-to-br to-transparent`}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Parallax Background Layers */}
          <motion.div
            style={{
              x: layer1X,
              y: layer1Y,
              transform: 'translateZ(-50px)',
            }}
            className={`absolute -top-20 -right-20 w-64 h-64 ${colorClasses.bg} rounded-full pointer-events-none will-change-transform blur-[60px]`}
            animate={{
              opacity: isHovered ? 0.08 : 0,
            }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            style={{
              x: layer2X,
              y: layer2Y,
              transform: 'translateZ(-30px)',
            }}
            className={`absolute -bottom-20 -left-20 w-48 h-48 ${colorClasses.bg} rounded-full pointer-events-none will-change-transform blur-[50px]`}
            animate={{
              opacity: isHovered ? 0.06 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Refraction Light Effect */}
          <motion.div
            className={`absolute inset-0 pointer-events-none bg-gradient-radial from-brand-${service.color}/15 to-transparent`}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Card Content */}
          <div className="relative p-8 h-full flex flex-col pointer-events-auto">
            {/* Icon Container with Depth - Simplified parallax */}
            <motion.div
              style={{
                x: layer2X,
                y: layer2Y,
                transform: 'translateZ(40px)',
              }}
              className="relative mb-6 flex justify-center pointer-events-none will-change-transform"
            >
              {/* Layered Glass Circles */}
              <div className="relative w-28 h-28">
                {/* Back Layer */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${colorClasses.bg} opacity-20 blur-[25px]`}
                  animate={{
                    scale: isHovered ? [1, 1.3, 1.15] : 1,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    transform: 'translateZ(-20px)',
                  }}
                />

                {/* Middle Layer */}
                <motion.div
                  className="absolute inset-4 rounded-full backdrop-blur-md bg-white/1 border border-white/20"
                  animate={{
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{
                    transform: 'translateZ(-10px)',
                  }}
                >
                  {/* Gradient Shine */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-conic from-transparent via-brand-${service.color}/40 to-transparent`}
                    animate={{
                      rotate: isHovered ? 360 : 0,
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* Front Icon Layer */}
                <motion.div
                  className={`absolute inset-0 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    isHovered
                      ? `border-brand-${service.color}/60`
                      : `border-brand-${service.color}/30`
                  }`}
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`text-5xl ${colorClasses.text} relative z-10 drop-shadow-lg`}
                    animate={{
                      scale: isHovered ? [1, 1.15, 1.1] : 1,
                      rotateZ: isHovered ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{
                      scale: { duration: 0.5 },
                      rotateZ: { duration: 0.8, ease: 'easeInOut' },
                    }}
                    style={{
                      transform: 'translateZ(30px)',
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content with Parallax */}
            <motion.div
              style={{
                transform: 'translateZ(40px)',
              }}
              className="relative text-center space-y-4 grid flex-1 pointer-events-none"
            >
              {/* Title */}
              <motion.div
                animate={{
                  y: isHovered ? -5 : 0,
                }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
              >
                <Typography variant="h4" className={`${colorClasses.text} text-center`}>
                  {service.title}
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="body2" color="primary" className="leading-relaxed text-center">
                  {service.description}
                </Typography>
              </motion.div>
            </motion.div>

            {/* Glass Button */}
            <motion.div className="flex justify-center mt-4 pointer-events-auto">
              <Button
                variant="glass"
                size="sm"
                glowColor={service.glowColor}
                colorClass={colorClasses.text}
                href={`/services?tab=${service.tab}`}
                aria-label={`Discover ${service.title}`}
                rightIcon={
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                }
              >
                Discover
              </Button>
            </motion.div>

            {/* Bottom Shine Effect */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-brand-${service.color}/50 to-transparent`}
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scaleX: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ServicesPreview() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      {/* Animated Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-blue/5 animate-pulse" />
      </div>

      <Container>
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" className="text-brand-blue mb-4 tracking-wider">
                WHAT WE DO
              </Typography>
              <Typography variant="h2" align="center" className="mb-6">
                Our Services
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                align="center"
                className="text-xl max-w-3xl mx-auto"
              >
                We offer comprehensive digital solutions to help your business thrive in the digital
                landscape.
              </Typography>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-block px-8 py-3 rounded-full border border-white/20 hover:border-brand-gold/40 transition-colors duration-300 backdrop-blur-md bg-white/5"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
