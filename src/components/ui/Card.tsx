import React from 'react';
import { m } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  hover?: boolean;
  animated?: boolean;
}

const variantStyles = {
  default: 'bg-background-secondary border border-border-subtle shadow-sm',
  outlined: 'bg-background-secondary border-2 border-border-subtle',
  elevated:
    'bg-background-secondary shadow-lg border border-border-subtle hover:shadow-accent-blue/10',
  ghost: 'bg-transparent',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12',
};

export default function Card({
  variant = 'default',
  padding = 'md',
  children,
  hover = false,
  animated = false,
  className,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-200 h-full';

  const classes = cn(
    baseClasses,
    variantStyles[variant],
    paddingStyles[padding],
    hover && 'hover:shadow-xl hover:shadow-accent-blue/40 hover:-translate-y-1',
    className
  );

  if (animated) {
    const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...motionProps } =
      props;
    return (
      <m.div
        className={classes}
        whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
        transition={{ duration: 0.2 }}
        {...motionProps}
      >
        {children}
      </m.div>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
