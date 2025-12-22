'use client';

import { m } from '@/lib/motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useMemo } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Memoize animation variants to prevent re-calculation on every render
  const variants = useMemo(() => {
    const initialTransform = (() => {
      switch (direction) {
        case 'up':
          return { y: 30 };
        case 'down':
          return { y: -30 };
        case 'left':
          return { x: 30 };
        case 'right':
          return { x: -30 };
        default:
          return { y: 30 };
      }
    })();

    return {
      hidden: { opacity: 0, ...initialTransform },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  }, [direction]);

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}

// Staggered children animation - optimized version
interface StaggeredRevealProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredReveal({
  children,
  staggerDelay = 0.1,
  className = '',
}: StaggeredRevealProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Use container variants for better performance
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }),
    [staggerDelay]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }),
    []
  );

  return (
    <m.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <m.div key={index} variants={itemVariants}>
              {child}
            </m.div>
          ))
        : children}
    </m.div>
  );
}
