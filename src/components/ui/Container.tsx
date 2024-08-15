import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-none',
};

export default function Container({
  size = 'lg',
  className,
  children,
  ...props
}: ContainerProps) {
  const classes = cn(
    'mx-auto px-4 sm:px-6 lg:px-8',
    sizeStyles[size],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
