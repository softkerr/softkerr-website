import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | 'default'
    | 'gradient'
    | 'muted'
    | 'dark-orbs'
    | 'dark-mesh'
    | 'dark-glow'
    | 'dark-radial';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  component?: React.ElementType;
  noContainer?: boolean;
}

const variantStyles: Record<
  'default' | 'gradient' | 'muted' | 'dark-orbs' | 'dark-mesh' | 'dark-glow' | 'dark-radial',
  string
> = {
  default: 'bg-DEFAULT',
  gradient: "bg-[url('/gradient_bg.webp')] bg-no-repeat bg-cover bg-bottom",
  muted: 'bg-charcoal-50',
  'dark-orbs': 'bg-black relative',
  'dark-mesh': 'bg-gradient-to-b from-gray-900 via-black to-gray-900 relative',
  'dark-glow': 'bg-black relative',
  'dark-radial': 'bg-black relative',
};

const paddingStyles = {
  none: '',
  sm: 'py-4 lg:py-8',
  md: 'py-6 lg:py-12',
  lg: 'py-8 lg:py-18',
  xl: 'py-12 lg:py-24',
};

export default function Section({
  variant = 'default',
  padding = 'lg',
  containerSize = 'lg',
  children,
  component = 'section',
  noContainer = false,
  className,
  ...props
}: SectionProps) {
  const Component = component;

  const classes = cn(variantStyles[variant], paddingStyles[padding], className);

  const content = noContainer ? children : <Container size={containerSize}>{children}</Container>;

  // Render background effects based on variant
  const renderBackground = () => {
    switch (variant) {
      case 'dark-orbs':
        return (
          <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl" />
          </div>
        );

      case 'dark-mesh':
        return (
          <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-violet/30 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-pink/25 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-brand-gold/15 rounded-full blur-3xl" />
          </div>
        );

      case 'dark-glow':
        return (
          <div className="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-violet/40 via-brand-blue/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-40 left-0 w-[600px] h-[300px] bg-gradient-to-r from-brand-gold/30 to-transparent blur-3xl" />
            <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-brand-pink/25 to-transparent rounded-full blur-3xl" />
          </div>
        );

      case 'dark-radial':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(240, 185, 11, 0.2) 0%, transparent 40%),
                  radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 40%),
                  radial-gradient(circle at 40% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 40%),
                  radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 40%)
                `,
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return React.createElement(
    Component,
    { className: classes, ...props },
    <>
      {renderBackground()}
      <div className={variant.startsWith('dark-') ? 'relative z-10' : undefined}>{content}</div>
    </>
  );
}
