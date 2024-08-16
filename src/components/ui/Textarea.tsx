import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export default function Textarea({
  label,
  error,
  helperText,
  fullWidth = false,
  resize = 'vertical',
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const textareaClasses = cn(
    'w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 text-white placeholder-gray-500',
    error
      ? 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500'
      : 'border-white/10 focus:ring-brand-gold/20 focus:border-brand-gold/50',
    resize === 'none' && 'resize-none',
    resize === 'vertical' && 'resize-y',
    resize === 'horizontal' && 'resize-x',
    resize === 'both' && 'resize',
    className
  );

  const containerClasses = cn('relative', fullWidth ? 'w-full' : 'w-auto');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <textarea id={textareaId} className={textareaClasses} {...props} />

      {(error || helperText) && (
        <div className="mt-2">
          {error && <p className="text-sm text-red-400">{error}</p>}
          {!error && helperText && <p className="text-sm text-gray-400">{helperText}</p>}
        </div>
      )}
    </div>
  );
}
