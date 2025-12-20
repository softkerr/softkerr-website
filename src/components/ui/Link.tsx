import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'accent';
  underline?: 'none' | 'hover' | 'always';
  external?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  default: 'text-charcoal-950 hover:text-charcoal-700',
  primary: 'text-blue-600 hover:text-blue-700',
  secondary: 'text-charcoal-600 hover:text-charcoal-800',
  muted: 'text-charcoal-500 hover:text-charcoal-600',
  accent: 'text-blue-600 hover:text-blue-700',
};

const underlineStyles = {
  none: 'no-underline',
  hover: 'no-underline hover:underline',
  always: 'underline',
};

export default function Link({
  href,
  variant = 'default',
  underline = 'none',
  external = false,
  className,
  children,
  ...props
}: LinkProps) {
  const classes = cn(
    'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm py-3 min-h-[44px] inline-flex items-center',
    variantStyles[variant],
    underlineStyles[underline],
    className
  );

  // External links
  if (
    external ||
    href?.startsWith('http') ||
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:')
  ) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal Next.js links
  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
