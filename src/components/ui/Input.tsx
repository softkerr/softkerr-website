import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputClasses = cn(
    'w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 text-white placeholder-gray-500',
    error
      ? 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
      : 'border-white/10 focus:ring-brand-gold/20 focus:border-brand-gold/50',
    leftIcon && 'pl-12',
    rightIcon && 'pr-12',
    className
  );

  const containerClasses = cn('relative', fullWidth ? 'w-full' : 'w-auto');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{leftIcon}</span>
          </div>
        )}

        <input id={inputId} className={inputClasses} {...props} />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{rightIcon}</span>
          </div>
        )}
      </div>

      {(error || helperText) && (
        <div className="mt-2">
          {error && <p className="text-sm text-red-400">{error}</p>}
          {!error && helperText && <p className="text-sm text-gray-400">{helperText}</p>}
        </div>
      )}
    </div>
  );
}
