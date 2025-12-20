import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'glass' | 'shimmer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animated?: boolean;
  glowColor?: string; // RGB values for glass/shimmer variant (e.g., "240, 185, 11")
  colorClass?: string; // Tailwind color class for text (e.g., "text-brand-gold")
}

const variantStyles: Record<
  'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'glass' | 'shimmer',
  string
> = {
  primary:
    'bg-accent-BtnYellow text-background hover:bg-accent-yellow active:bg-accent-yellowHover shadow-sm hover:shadow-lg hover:shadow-accent-yellow/20 font-semibold',
  secondary:
    'bg-background-secondary text-text-primary hover:bg-border-subtle active:bg-border-subtle border border-border-subtle',
  outline:
    'border-2 border-border-subtle text-text-primary hover:bg-background-secondary active:bg-border-subtle hover:border-accent-blue',
  ghost:
    'text-text-secondary hover:bg-background-secondary active:bg-border-subtle hover:text-text-primary',
  link: 'text-accent-blue hover:text-accent-purple underline-offset-4 hover:underline',
  glass: 'backdrop-blur-md bg-white/10 border border-white/20 font-medium rounded-full',
  shimmer: 'relative overflow-hidden rounded-xl text-white font-medium',
};

const sizeStyles = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  animated = true,
  glowColor,
  colorClass,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

  const classes = cn(
    baseClasses,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    variant === 'glass' && colorClass,
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (animated && !disabled && !loading) {
    // Shimmer variant with glow and animated shimmer effect
    if (variant === 'shimmer' && glowColor) {
      return (
        <motion.button
          className={cn(
            classes,
            'bg-gradient-to-r from-white/10 to-white/5 border border-white/20'
          )}
          disabled={disabled || loading}
          whileHover={{
            scale: 1.03,
            boxShadow: `0 8px 30px rgba(${glowColor}, 0.4)`,
            borderColor: `rgba(${glowColor}, 0.6)`,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          type={props.type}
          onClick={props.onClick}
          aria-label={props['aria-label']}
        >
          <motion.div
            className="absolute inset-0 opacity-10 pointer-events-none"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse',
            }}
            style={{
              background: `linear-gradient(90deg, transparent, rgba(${glowColor}, 0.3), transparent)`,
            }}
          />
          <span className="relative">{children}</span>
          {leftIcon && <span className="relative mr-2">{leftIcon}</span>}
          {rightIcon && (
            <motion.span
              className="relative ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              {rightIcon}
            </motion.span>
          )}
        </motion.button>
      );
    }

    // Glass variant with special hover effects
    if (variant === 'glass' && glowColor) {
      return (
        <motion.button
          className={classes}
          disabled={disabled || loading}
          whileHover={{
            scale: 1.05,
            backgroundColor: `rgba(${glowColor}, 0.1)`,
            borderColor: `rgba(${glowColor}, 0.4)`,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          type={props.type}
          onClick={props.onClick}
          aria-label={props['aria-label']}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <motion.button
        className={classes}
        disabled={disabled || loading}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        type={props.type}
        onClick={props.onClick}
        aria-label={props['aria-label']}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
