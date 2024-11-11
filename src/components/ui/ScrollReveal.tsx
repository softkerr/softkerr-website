'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

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

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: 30 };
      case 'down': return { y: -30 };
      case 'left': return { x: 30 };
      case 'right': return { x: -30 };
      default: return { y: 30 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialTransform() }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialTransform() }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation
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

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * staggerDelay }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  );
}
