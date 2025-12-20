/**
 * Performance optimization utilities
 * Utilities to reduce main-thread work and improve runtime performance
 */

/**
 * Throttle function using requestAnimationFrame
 * Ensures the callback is called at most once per animation frame
 */
export function throttleRAF<T extends (...args: any[]) => void>(callback: T): T {
  let rafId: number | null = null;
  let lastArgs: any[] | null = null;

  const throttled = (...args: any[]) => {
    lastArgs = args;

    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        if (lastArgs) {
          callback(...lastArgs);
        }
        rafId = null;
        lastArgs = null;
      });
    }
  };

  return throttled as T;
}

/**
 * Debounce function for resize and scroll events
 * Delays execution until after wait milliseconds have elapsed
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, wait);
  };
}

/**
 * Check if the user prefers reduced motion
 * Returns true if user has motion reduction enabled
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get optimized animation duration based on user preferences
 * Returns 0 if user prefers reduced motion, otherwise returns the default duration
 */
export function getAnimationDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration;
}

/**
 * Passive event listener options for better scroll performance
 */
export const passiveEventOptions = { passive: true } as const;

/**
 * Check if device is low-end (based on hardware concurrency)
 * Useful for reducing complex animations on slower devices
 */
export function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;

  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;

  // Check device memory if available
  const memory = (navigator as any).deviceMemory;

  // Consider device low-end if it has <= 2 cores or <= 4GB RAM
  return cores <= 2 || (memory !== undefined && memory <= 4);
}

/**
 * Get reduced animation config for low-end devices
 */
export function getOptimizedAnimationConfig() {
  const isLowEnd = isLowEndDevice();
  const reducedMotion = prefersReducedMotion();

  return {
    duration: reducedMotion ? 0 : isLowEnd ? 0.3 : 0.5,
    stiffness: isLowEnd ? 200 : 300,
    damping: isLowEnd ? 20 : 30,
    enabled: !reducedMotion,
  };
}
