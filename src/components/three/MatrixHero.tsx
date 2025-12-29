'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { m as motion } from '@/lib/motion';

// Character sets for the matrix effect
const MATRIX_CHARS = [
  // Binary
  '0',
  '1',
  // Code symbols
  '{',
  '}',
  '<',
  '>',
  '/',
  '\\',
  '(',
  ')',
  '[',
  ']',
  // Programming keywords (shortened)
  'fn',
  'if',
  'js',
  'ts',
  'go',
  'py',
  'rs',
  'cpp',
  // Modern code snippets
  '=>',
  '&&',
  '||',
  '!=',
  '==',
  '++',
  '--',
  '+=',
  // Letters and numbers
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  // Special characters
  '@',
  '#',
  '$',
  '%',
  '&',
  '*',
  '+',
  '-',
  '=',
  '?',
  '!',
];

// Pre-computed character pool for better performance
const CHAR_POOL_SIZE = 1000;
const precomputedChars = Array.from(
  { length: CHAR_POOL_SIZE },
  () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
);

// Column class for managing falling characters - optimized
class MatrixColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number[];
  flickerTimer: number;
  charPoolIndex: number;
  isVisible: boolean;

  constructor(x: number, canvasHeight: number) {
    this.x = x;
    this.y = Math.random() * -canvasHeight;
    this.speed = Math.random() * 2 + 1; // Reduced speed range for better performance
    this.chars = [];
    this.opacity = [];
    this.flickerTimer = 0;
    this.charPoolIndex = Math.floor(Math.random() * CHAR_POOL_SIZE);
    this.isVisible = true;

    // Shorter columns for better performance
    const columnHeight = Math.floor(Math.random() * 15) + 8;
    for (let i = 0; i < columnHeight; i++) {
      this.chars.push(precomputedChars[(this.charPoolIndex + i) % CHAR_POOL_SIZE]);
      this.opacity.push(Math.max(0.1, 1 - i * 0.08)); // Pre-computed opacity
    }
  }

  update(deltaTime: number, canvasHeight: number, fontSize: number) {
    // Use fixed timestep for smoother animation
    this.y += this.speed * 60 * deltaTime;

    // Reset column when it goes off screen
    if (this.y > canvasHeight + this.chars.length * fontSize) {
      this.y = Math.random() * -canvasHeight;
      this.speed = Math.random() * 2 + 1;
    }

    // Optimized character flickering - less frequent
    this.flickerTimer += deltaTime;
    if (this.flickerTimer > 0.2) {
      // Reduced frequency for performance
      if (Math.random() < 0.05) {
        // Reduced chance
        const randomIndex = Math.floor(Math.random() * this.chars.length);
        this.charPoolIndex = (this.charPoolIndex + 1) % CHAR_POOL_SIZE;
        this.chars[randomIndex] = precomputedChars[this.charPoolIndex];
      }
      this.flickerTimer = 0;
    }
  }

  // Optimized drawing with reduced calculations
  draw(
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    mouseX: number,
    mouseY: number,
    canvasHeight: number
  ) {
    // Early visibility check
    if (this.y > canvasHeight + fontSize || this.y + this.chars.length * fontSize < -fontSize) {
      return;
    }

    // Pre-set font once per column
    ctx.font = `${fontSize}px 'Courier New', monospace`;

    // Simplified mouse distance calculation (only for visible area)
    const mouseDistanceThreshold = 150;
    const mouseInRange = Math.abs(this.x - mouseX) < mouseDistanceThreshold;

    for (let i = 0; i < this.chars.length; i++) {
      const charY = this.y + i * fontSize;

      // Skip off-screen characters
      if (charY < -fontSize || charY > canvasHeight + fontSize) continue;

      let opacity = this.opacity[i];
      let glowIntensity = i === 0 ? 0.8 : 0.3; // Head character glow

      // Only calculate mouse interaction if mouse is nearby
      if (mouseInRange) {
        const distanceFromMouse = Math.sqrt(
          Math.pow(this.x - mouseX, 2) + Math.pow(charY - mouseY, 2)
        );
        if (distanceFromMouse < mouseDistanceThreshold) {
          const mouseInfluence = Math.max(0, 1 - distanceFromMouse / mouseDistanceThreshold);
          opacity = Math.min(1, opacity + mouseInfluence * 0.3);
          glowIntensity += mouseInfluence * 0.5;
        }
      }

      // Optimized rendering - reduce shadow blur calculations
      if (glowIntensity > 0.4) {
        ctx.shadowColor = '#FFD600';
        ctx.shadowBlur = 8 + glowIntensity * 12; // Reduced blur for performance
        ctx.fillStyle = `rgba(255, 214, 0, ${opacity * glowIntensity})`;
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 214, 0, ${opacity * 0.7})`;
      }

      ctx.fillText(this.chars[i], this.x, charY);
    }

    // Reset shadow once per column
    ctx.shadowBlur = 0;
  }
}

interface MatrixHeroProps {
  className?: string;
}

export default function MatrixHero({ className = '' }: MatrixHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const columnsRef = useRef<MatrixColumn[]>([]);
  const lastTimeRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const fpsRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const [isReduced, setIsReduced] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check if component is visible in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;
      setIsVisible(isInViewport);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Throttled mouse tracking for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) * window.devicePixelRatio,
      y: (e.clientY - rect.top) * window.devicePixelRatio,
    };
  }, []);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    frameCountRef.current++;
    if (frameCountRef.current % 60 === 0) {
      // Check every 60 frames
      const now = performance.now();
      const fps = 60000 / (now - fpsRef.current);
      fpsRef.current = now;

      // Reduce quality if FPS drops below 30
      if (fps < 30 && !isLowPerformance) {
        setIsLowPerformance(true);
      } else if (fps > 45 && isLowPerformance) {
        setIsLowPerformance(false);
      }
    }
  }, [isLowPerformance]);

  // Initialize canvas and columns
  const initializeMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Initialize columns with better spacing for visual appeal
    const fontSize = 16;
    const canvasWidth = canvas.width / window.devicePixelRatio;
    const canvasHeight = canvas.height / window.devicePixelRatio;

    // Use wider spacing for better visual appeal - like the original Matrix
    const columnWidth = fontSize * 1.5; // Increased spacing for less cluttered look
    const numColumns = Math.floor(canvasWidth / columnWidth);

    // Cap columns for performance and visual appeal
    const maxColumns = Math.min(80, numColumns); // Reduced from 150 to 80 for less clutter

    // Calculate final spacing to distribute across screen
    const finalColumnWidth = canvasWidth / maxColumns;

    columnsRef.current = [];
    for (let i = 0; i < maxColumns; i++) {
      columnsRef.current.push(
        new MatrixColumn(
          i * finalColumnWidth + finalColumnWidth / 2, // Center columns in their space
          canvasHeight
        )
      );
    }

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Optimized animation loop
  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Initialize lastTime on first frame
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
        fpsRef.current = currentTime;
      }

      // Calculate delta time with cap to prevent large jumps
      const deltaTime = Math.min((currentTime - lastTimeRef.current) / 1000, 1 / 30);
      lastTimeRef.current = currentTime;

      // Performance monitoring
      monitorPerformance();

      // Clear canvas efficiently
      ctx.fillStyle = '#02021e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw columns if visible
      if (isVisible) {
        const fontSize = 16;
        const canvasHeight = canvas.height / window.devicePixelRatio;
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;

        // Adaptive rendering based on performance
        const columnsToRender = isLowPerformance
          ? columnsRef.current.filter((_, index) => index % 2 === 0) // Render every other column
          : columnsRef.current;

        // Batch operations for better performance
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';

        columnsToRender.forEach(column => {
          column.update(deltaTime, canvasHeight, fontSize);
          column.draw(ctx, fontSize, mouseX, mouseY, canvasHeight);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isVisible, isLowPerformance, monitorPerformance]
  );

  // Start animation with optimizations
  useEffect(() => {
    if (isReduced) return;

    const cleanup = initializeMatrix();
    animationRef.current = requestAnimationFrame(animate);

    // Throttled mouse listener for better performance
    let mouseTimeout: NodeJS.Timeout | undefined;
    const throttledMouseMove = (e: MouseEvent) => {
      if (mouseTimeout) return;
      mouseTimeout = setTimeout(() => {
        handleMouseMove(e);
        mouseTimeout = undefined;
      }, 16); // ~60fps throttling
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', throttledMouseMove);
      if (mouseTimeout) clearTimeout(mouseTimeout);
      cleanup?.();
    };
  }, [initializeMatrix, animate, handleMouseMove, isReduced]);

  // Fallback for reduced motion or mobile
  if (isReduced) {
    return (
      <motion.div
        className={`w-full h-full bg-background ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-accent-yellow text-6xl font-mono opacity-20">{'{ }'}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`w-full h-full relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Mobile fallback - static pattern - only render after hydration to prevent mismatch */}
      {isMounted && (
        <div className="md:hidden absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-accent-yellow font-mono text-sm animate-pulse"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {MATRIX_CHARS[i % MATRIX_CHARS.length]}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
