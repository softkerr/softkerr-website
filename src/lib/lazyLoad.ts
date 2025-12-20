import dynamic from 'next/dynamic';
import type { ComponentType, ReactElement } from 'react';

/**
 * Creates a lazy-loaded component with a loading placeholder
 * @param importFn - Function that returns the dynamic import
 * @param options - Configuration options
 * @returns Lazy-loaded component
 */
export function lazyLoad<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options?: {
    /** Loading placeholder component */
    loading?: () => ReactElement;
    /** Disable server-side rendering */
    ssr?: boolean;
    /** Height of loading placeholder (for layout stability) */
    loadingHeight?: string;
  }
) {
  const { loading, ssr = true, loadingHeight = 'py-20' } = options || {};

  const defaultLoading = () => {
    const React = require('react');
    return React.createElement('div', { className: loadingHeight });
  };

  return dynamic(importFn, {
    loading: loading || defaultLoading,
    ssr,
  });
}

/**
 * Preset for lazy loading FAQ sections
 */
export const lazyLoadFAQ = () => lazyLoad(() => import('@/components/sections/FAQ'));

/**
 * Preset for lazy loading modals (client-side only)
 */
export const lazyLoadModal = <P = {}>(importFn: () => Promise<{ default: ComponentType<P> }>) =>
  lazyLoad(importFn, { ssr: false });

/**
 * Preset for lazy loading below-fold sections
 */
export const lazyLoadBelowFold = <P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  loadingHeight?: string
) => lazyLoad(importFn, { loadingHeight });
